<script>
  import { arc } from "d3";
  import { scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  export let segments;

  const fn = arc();
  const angle = Math.PI * 2;

  $: total = segments.reduce((total, s) => total + s.size, 0);

  let arcs;
  $: {
    let acc = 0;

    arcs = segments.map(segment => {
      const options = {
        innerRadius: 0,
        outerRadius: 40,
        startAngle: acc,
        endAngle: acc += (angle * segment.size) / total
      };
      return {
        color: segment.color,
        label: segment.label,
        legend: segment.legend,
        d: fn(options),
        centroid: fn.centroid(options)
      };
    });
  }
</script>

<style>
  text {
    font-size: 3.5px;
    font-weight: 600;
    fill: var(--text);
  }

  .wrapper {
    display: flex;
    width: 100%;
    height: 400px;
    align-items: center;
    padding-block: 16px;
  }

  @media (max-width: 600px) {
    .wrapper {
      flex-direction: column;
    }

    text {
      font-size: 5px;
    }
  }

  svg {
    /* width: 100%; */
    height: 100%;
  }

  path {
    opacity: 0.85;
  }

  li {
    display: flex;
    align-items: center;
  }

  li > div {
    --size: 20px;
    border-radius: 99999px;
    width: var(--size);
    height: var(--size);
    margin-inline-end: 6px;
  }

  ul {
    list-style: none;
    display: block;
  }
</style>

<div class="wrapper">
  <svg viewBox="0 0 100 100">
    <g transform="translate(50,50)">
      {#each arcs as arc, i}
        <!-- arc -->
        <path
          d={arc.d}
          fill={arc.color}
          in:scale={{ duration: 750, delay: i * 75 + 150, opacity: 0, start: 0.5, easing: quintOut }} />

        <!-- label -->
        <text x={arc.centroid[0] - 3} y={arc.centroid[1]}>{arc.label}</text>
      {/each}
    </g>
  </svg>

  <ul>
    {#each arcs as arc}
      {#if arc.legend}
        <li>
          <div class="disc" style="background-color:{arc.color}" />
          {arc.legend}
        </li>
      {/if}
    {/each}
  </ul>
</div>
