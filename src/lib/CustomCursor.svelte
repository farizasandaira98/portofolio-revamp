<script>
  import { onMount } from 'svelte';

  let cursorDot;
  let cursorOutline;

  onMount(() => {
    const handleMouseMove = (e) => {
      if (cursorDot && cursorOutline) {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
        
        cursorOutline.style.left = e.clientX - 16 + 'px';
        cursorOutline.style.top = e.clientY - 16 + 'px';
      }
    };

    const handleButtonHover = (e) => {
      if (cursorOutline) {
        cursorOutline.style.transform = 'scale(1.5)';
      }
    };

    const handleButtonLeave = (e) => {
      if (cursorOutline) {
        cursorOutline.style.transform = 'scale(1)';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    // Add hover effects for buttons
    document.querySelectorAll('button').forEach(button => {
      button.addEventListener('mouseenter', handleButtonHover);
      button.addEventListener('mouseleave', handleButtonLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('button').forEach(button => {
        button.removeEventListener('mouseenter', handleButtonHover);
        button.removeEventListener('mouseleave', handleButtonLeave);
      });
    };
  });
</script>

<div class="cursor-dot" bind:this={cursorDot}></div>
<div class="cursor-outline" bind:this={cursorOutline}></div>
