<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => ({ posts }));
  }
</script>

<script>
  import Postcard from "../../components/Postcard.svelte";

  export let posts;
</script>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    padding-block-start: 32px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
    max-width: 768px;
    gap: 56px 48px;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <Postcard {post} />
  {/each}
</ul>
