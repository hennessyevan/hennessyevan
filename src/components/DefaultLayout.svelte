<script>
  import Time from "./Time.svelte";

  export let title;
  export let image;
  export let date = new Date().toString();
  export let imageAlt = "";
</script>

<style>
  article {
    --width: 768px;
    padding: 32px 0;
    padding-block-end: 128px;
    margin: 0 auto;
    max-width: var(--width);
  }

  .image-border {
    --border-radius: 16px;
    padding: 12px;
    margin-bottom: 32px;
    box-shadow: 16px 16px 18px var(--dark-shadow),
      -16px -16px 18px var(--light-shadow);
    border-radius: calc(var(--border-radius) * 1.5);
  }

  .image-sizer {
    width: 100%;
    height: 0;
    padding-block-end: 42.32%;
    position: relative;
    border-radius: var(--border-radius);
  }

  .image-presentation {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
  }

  .image-sizer::after {
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 8;
    position: absolute;
    border-radius: var(--border-radius);
    box-shadow: 1px 1px 6px black inset, -1px -1px 5px white inset;
    mix-blend-mode: color-dodge;
  }

  .title {
    padding-block: 32px;
  }

  .title.big {
    font-size: 3rem;
  }

  .content :global(img) {
    border-radius: 8px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 80%;
    margin-block: 64px;

    /* filter: drop-shadow(12px 12px 24px var(--dark-shadow))
      drop-shadow(-12px -12px 24px var(--light-shadow))
      drop-shadow(12px 12px 24px var(--dark-shadow))
      drop-shadow(-12px -12px 24px var(--light-shadow)); */
  }

  .content :global(a):hover {
    text-decoration: underline;
  }
</style>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<article>

  {#if image}
    <div class="image-border">
      <div class="image-sizer">
        <img class="image-presentation" src={image} alt={imageAlt} />
        <Time time={date} />
      </div>
    </div>
  {:else}
    <Time platform={!image} time={date} />
  {/if}

  <h1 class="title" class:big={!image}>{title}</h1>

  <div class="content">
    <slot />
  </div>

</article>
