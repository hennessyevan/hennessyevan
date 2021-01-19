<script>
  export let segment;
</script>

<style>
  nav {
    padding: 32px;
    display: inline-block;
  }

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 8px;
    background: var(--background);
    box-shadow: 8px 8px 16px var(--dark-shadow),
      -8px -8px 16px var(--light-shadow);
    border-radius: 999px;
  }

  li:not(:first-child) {
    padding-inline-start: 12px;
  }

  a {
    display: inline-block;
    color: var(--gray1);
    padding: 10px 20px;
    border-radius: 999px;
    transition: 225ms;
    font-weight: 500;
    --focus-shadow: 0 0 0 transparent;
    box-shadow: var(--focus-shadow);
  }

  li:hover a {
    box-shadow: 2px 2px 3px var(--dark-shadow) inset,
      -2px -2px 4px var(--light-shadow) inset, var(--focus-shadow);
  }

  li.active a,
  li:active a {
    box-shadow: 4px 4px 6px var(--dark-shadow) inset,
      -4px -4px 8px var(--light-shadow) inset, var(--focus-shadow);
  }

  a:focus {
    outline: none;
    --focus-shadow: 0 0 0 2px var(--blue);
  }
</style>

<nav>
  <ul>
    <li class:active={segment === undefined}>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        Home
      </a>
    </li>
    <li class:active={segment === 'about'}>
      <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
        About
      </a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li class:active={segment === 'blog'}>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog">
        Blog
      </a>
    </li>
  </ul>
</nav>
