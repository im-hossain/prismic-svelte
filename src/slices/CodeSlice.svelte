<script>
    export let slice
    const codeList = slice.primary.code[0].text.split("\n")
    const length = codeList.length
  </script>
  <div class="mockup-code">
    {#each codeList as line, i}
    <pre data-prefix={`${i===0? "$":">"}`} class={`${i=== length-1 ? "text-success":  `${i===0 ? "":"text-warning"}`}`}><code>{line}</code></pre> 
    {/each}
  </div>