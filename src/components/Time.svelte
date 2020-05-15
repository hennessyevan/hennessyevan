<script>
  export let time = new Date().toString();
  export let platform = false;

  const pad = n => (n < 10 ? "0" + n : n);

  let date = new Date(time);
  let dateTimeString = `${date.getFullYear()}-${date.getMonth() +
    1}-${date.getDate()}`;
  let lcdDate = `${date.getFullYear()} ${pad(date.getMonth() + 1)} ${pad(
    date.getDate()
  )}`;
</script>

<style>
  @font-face {
    font-family: lcd;
    src: url("/lcd.otf");
  }

  time {
    --lcd-color: #2d2d2d;
    font-family: lcd;
    color: var(--lcd-color);
    white-space: nowrap;
    line-height: 16px;
    height: 16px;
    position: relative;
    font-size: 1.25rem;
    top: 2px;
  }

  .platform {
    --border-radius: 8px;
    padding: 12px;
    display: inline-block;
    position: relative;
    box-shadow: 8px 8px 16px var(--dark-shadow),
      -8px -8px 16px var(--light-shadow);
    border-radius: calc(var(--border-radius) * 1.5);
    margin-block-start: auto;
  }

  @supports (-moz-appearance: none) {
    time {
      top: -3px;
    }
  }

  .display-positioner {
    position: absolute;
    bottom: 16px;
    right: 16px;
    z-index: 2;
  }

  .platform .display-positioner {
    position: static;
  }

  .display {
    --light: rgb(251, 251, 251);
    --dark: rgb(134, 145, 147);
    --start: hsl(98, 16%, 80%);
    --end: hsl(92, 17%, 63%);
    position: relative;
    letter-spacing: 0.15ch;
    border-radius: 6px;
    padding: 8px 10px;
    display: flex;

    box-shadow: 1px 1px 5px var(--strong-shadow) inset,
      -1px -1px 4px var(--med-shadow) inset;
    filter: drop-shadow(10px 10px 18px var(--strong-shadow)),
      drop-shadow(-10px -10px 18px var(--med-shadow));
    background: linear-gradient(to right, var(--start), var(--end));

    --border-width: 1px;
    border: var(--border-width) solid transparent;
    background-clip: padding-box;
  }

  @media (prefers-color-scheme: dark) {
    .display {
      --start: hsl(98, 18%, 50%);
      --end: hsl(92, 20%, 35%);
    }
  }

  .display::after {
    --negative-border-width: calc(var(--border-width) * -1);
    content: "";
    z-index: -1;
    border-radius: inherit;
    top: var(--negative-border-width);
    right: var(--negative-border-width);
    bottom: var(--negative-border-width);
    left: var(--negative-border-width);
    position: absolute;

    background: linear-gradient(to right bottom, var(--light), var(--dark));
  }

  @media (prefers-color-scheme: dark) {
    .display {
      --light: hsl(0, 0%, 78%);
      --dark: hsl(189, 6%, 35%);
    }
  }

  time::before {
    opacity: 0.3;
    font-family: lcd;
    content: "8888 88 88";
    position: absolute;
    z-index: 1;
  }
</style>

<div class:platform>
  <div class="display-positioner">
    <div class="display">
      <time datetime={dateTimeString}>{lcdDate}</time>
    </div>
  </div>
</div>
