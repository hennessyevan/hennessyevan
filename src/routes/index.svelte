<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => ({ posts }));
  }
</script>

<script>
  import Postcard from "../components/Postcard.svelte";
  export let posts;
</script>

<style>
  h1 {
    font-size: 5rem;
    margin: 0;
  }

  section {
    padding: 128px 0;
  }

  #posts {
    padding-block-start: 128px;
  }

  #recent-post-title {
    text-transform: uppercase;
    font-weight: 600;
    color: var(--gray2);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    padding-block-start: 32px;
    display: grid;
    grid-template-columns: repeat(2, 275px);
    gap: 56px 48px;
  }

  .supertext {
    font-weight: 500;
    font-size: 1.35rem;
    text-transform: uppercase;
    color: var(--gray2);
  }
</style>

<svelte:head>
  <title>Evan Hennessy's Site</title>
</svelte:head>

<section>
  <span class="supertext">Hi 👋 I'm</span>
  <h1>Evan Hennessy</h1>

  <div id="posts" role="feed" aria-labelledby="recent-post-title">
    <h4 id="recent-post-title">Recent Posts</h4>
    <ul>
      {#each posts as post}
        <Postcard {post} />
      {/each}
    </ul>
  </div>
</section>
