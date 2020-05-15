<script type="typescript">
  import { formatDistanceToNow } from "date-fns";

  export let post;

  let parsedDate = new Date(post.date || new Date().toString());
  let date = formatDistanceToNow(parsedDate, { addSuffix: true });
</script>

<style>
  a {
    padding: 12px;
    background: var(--background);
    border-radius: 12px;
    box-shadow: 10px 10px 18px var(--dark-shadow),
      -10px -10px 18px var(--light-shadow);
    transition: 225ms;
    display: flex;
    flex-direction: column;
  }

  a:focus {
    outline: none;
    box-shadow: 10px 10px 18px var(--dark-shadow),
      -10px -10px 18px var(--light-shadow), 0 0 0 2px var(--blue);
  }

  a:hover {
    box-shadow: 6px 6px 10px var(--dark-shadow),
      -6px -6px 10px var(--light-shadow);
    transform: scale(0.995);
  }

  a:active {
    box-shadow: 4px 4px 8px var(--dark-shadow),
      -4px -4px 8px var(--light-shadow);
    transform: scale(0.99);
  }

  .image-container {
    width: 100%;
    height: 0;
    padding-block-end: 56.25%;
    position: relative;
    --border-radius: 8px;
    border-radius: var(--border-radius);
    z-index: 2;

    --border-width: 0.5px;
    border: var(--border-width) solid transparent;
    background-clip: padding-box;
  }

  .image-container::after {
    --negative-border-width: calc(var(--border-width) * -1);
    content: "";
    z-index: -1;
    border-radius: inherit;
    top: var(--negative-border-width);
    right: var(--negative-border-width);
    bottom: var(--negative-border-width);
    left: var(--negative-border-width);
    position: absolute;

    background: linear-gradient(
      to right bottom,
      var(--med-shadow),
      var(--strong-shadow)
    );
  }

  img {
    border-radius: 8px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 2px 2px 3px var(--strong-shadow) inset,
      -2px -2px 4px var(--med-shadow) inset;

    --border-width: 2px;
    border: var(--border-width) solid transparent;
    background-clip: padding-box;
  }

  .inner {
    padding: 24px 8px 16px;
  }

  .title {
    color: var(--text);
    font-size: 1.1rem;
    line-height: 1.2;
    font-weight: 600;
  }

  time {
    color: var(--blue);
    padding-block-start: 8px;
    display: inline-block;
    font-size: 0.85rem;
  }
</style>

<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
<article aria-labelledby={post.slug}>
  <a rel="prefetch" href="blog/{post.slug}">
    {#if post.image}
      <div class="image-container">
        <img src={post.image} alt={post.imageAlt} />
      </div>
    {/if}
    <div class="inner">
      <h4 class="title" id={post.slug} aria-label="post title">{post.title}</h4>
      {#if post.date}
        <time datetime={date}>{date}</time>
      {/if}
    </div>
  </a>
</article>
