<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style global>
  @import-normalize;

  * {
    box-sizing: border-box;
  }
  /* THEME */
  :root {
    --body-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";

    --text: hsl(226, 10%, 18%);
    --gray1: hsl(226, 20%, 47%);
    --gray2: hsl(216, 35%, 70%);
    --gray3: hsl(216, 53%, 80%);
    --gray4: hsl(216, 50%, 84%);
    --gray5: hsl(206, 57%, 90%);
    --gray6: hsl(206, 23%, 94%);

    --background: var(--gray6);
    --background-end: hsl(206, 23%, 90%);

    --dark-shadow: var(--gray5);
    --light-shadow: white;

    --blue: rgb(0, 122, 255);
    --green: rgb(52, 199, 89);
    --indigo: rgb(88, 86, 214);
    --orange: rgb(255, 149, 0);
    --pink: rgb(255, 45, 85);
    --purple: rgb(175, 82, 222);
    --red: rgb(255, 59, 48);
    --teal: rgb(90, 200, 250);
    --yellow: rgb(255, 204, 0);

    --med-shadow: rgba(255, 255, 255, 0.24);
    --strong-shadow: rgba(0, 0, 0, 0.24);

    --blur-filter: blur(20px) saturate(180%);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --text: white;
      --gray1: hsl(226, 10%, 67%);
      --gray2: rgb(99, 99, 102);
      --gray3: rgb(72, 72, 74);
      --gray4: rgb(58, 58, 60);
      --gray5: rgb(44, 44, 46);
      --gray6: hsl(240, 3%, 11%);

      --background-end: hsl(240, 3%, 8%);

      --dark-shadow: rgba(0, 0, 0, 0.4);
      --light-shadow: rgba(255, 255, 255, 0.05);

      --blue: rgb(10, 132, 255);
      --green: rgb(48, 209, 88);
      --indigo: rgb(94, 92, 230);
      --orange: rgb(255, 159, 10);
      --pink: rgb(255, 55, 95);
      --purple: rgb(191, 90, 242);
      --red: rgb(255, 69, 58);
      --teal: rgb(100, 210, 255);
      --yellow: rgb(255, 214, 10);
    }
  }

  main {
    padding: 0 128px;
  }

  code {
    font-family: menlo, inconsolata, monospace;
    font-size: calc(1rem - 2px);
    color: var(--orange);
    background-color: var(--gray5);
    padding: 0.25em 0.5em;
    border-radius: 3px;
  }

  blockquote {
    margin: 0;
    margin-inline: 4rem;
    margin-block: 1rem;
    display: inline-flex;
    --color: var(--gray1);
    color: var(--color);
  }

  blockquote > p {
    margin: 0;
  }

  blockquote::before {
    content: "";
    width: 2px;
    margin-inline-end: 1rem;
    border-radius: 999px;
    background: var(--color);
    display: inline-block;
    position: relative;
  }

  @media (max-width: 1200px) {
    main {
      padding: 0 32px;
    }
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
