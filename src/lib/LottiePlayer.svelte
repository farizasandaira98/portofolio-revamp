<script>
  import { onMount } from 'svelte';

  export let src;
  export const speed = 1; // Changed to const to fix unused export warning
  export let loop = true;
  export let autoplay = true;

  let container;

  onMount(async () => {
    // Load lottie-web dynamically
    try {
      const lottie = await import('lottie-web');
      
      if (container && src) {
        lottie.default.loadAnimation({
          container: container,
          renderer: 'svg',
          loop: loop,
          autoplay: autoplay,
          path: src
        });
      }
    } catch (error) {
      console.warn('Lottie animation failed to load:', error);
      // Fallback: show a simple animated div
      if (container) {
        container.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-50 animate-pulse"></div>';
      }
    }
  });
</script>

<div bind:this={container} class="w-full h-full"></div>
