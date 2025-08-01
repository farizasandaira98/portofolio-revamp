<script>
  export let currentSection = 'home';
  export let scrollToSection;
  export let showUI = true;

  const sections = ['home', 'work', 'education', 'projects', 'contact'];
</script>

{#if showUI}
  <div class="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
    {#each sections as section}
      <div 
        class="nav-dot {currentSection === section ? 'active' : ''}"
        on:click={() => scrollToSection(section)}
        on:keydown={(e) => e.key === 'Enter' && scrollToSection(section)}
        role="button"
        tabindex="0"
        aria-label={`Navigate to ${section} section`}
      ></div>
    {/each}
  </div>
{/if}
