<script>
  import { language, translations } from './stores.js';

  export let showUI = true;

  let currentLang = 'en';
  let menuOpen = false;
  
  language.subscribe(value => {
    currentLang = value;
  });

  $: t = translations[currentLang];

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }
</script>

{#if showUI}
<nav class="z-50">
  <!-- Desktop Nav: centered at top -->
  <div class="hidden md:flex fixed top-8 left-1/2 transform -translate-x-1/2 glass-effect rounded-full px-8 py-4 items-center space-x-8">
    <a href="#home" class="nav-link text-sm font-medium text-white/70 hover:text-white transition-colors">{t.navigation.home}</a>
    <a href="#work" class="nav-link text-sm font-medium text-white/70 hover:text-white transition-colors">{t.navigation.work}</a>
    <a href="#education" class="nav-link text-sm font-medium text-white/70 hover:text-white transition-colors">{t.navigation.education}</a>
    <a href="#projects" class="nav-link text-sm font-medium text-white/70 hover:text-white transition-colors">{t.navigation.projects}</a>
    <a href="#contact" class="nav-link text-sm font-medium text-white/70 hover:text-white transition-colors">{t.navigation.contact}</a>
  </div>
  <!-- Burger Icon for Mobile: top-left -->
  <button class="md:hidden fixed top-8 left-8 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 focus:outline-none z-50" on:click={toggleMenu} aria-label="Open navigation menu">
    <span class="block w-8 h-0.5 bg-white rounded"></span>
  </button>
  <!-- Mobile Menu: expands from left -->
  {#if menuOpen}
    <div class="fixed top-20 left-4 w-56 glass-effect rounded-2xl shadow-xl py-4 z-50 flex flex-col md:hidden animate-fade-in">
      <a href="#home" class="block px-6 py-3 text-white/80 hover:text-white transition-colors" on:click={closeMenu}>{t.navigation.home}</a>
      <a href="#work" class="block px-6 py-3 text-white/80 hover:text-white transition-colors" on:click={closeMenu}>{t.navigation.work}</a>
      <a href="#education" class="block px-6 py-3 text-white/80 hover:text-white transition-colors" on:click={closeMenu}>{t.navigation.education}</a>
      <a href="#projects" class="block px-6 py-3 text-white/80 hover:text-white transition-colors" on:click={closeMenu}>{t.navigation.projects}</a>
      <a href="#contact" class="block px-6 py-3 text-white/80 hover:text-white transition-colors" on:click={closeMenu}>{t.navigation.contact}</a>
    </div>
    <!-- Overlay -->
    <div class="fixed inset-0 z-40 md:hidden" on:click={closeMenu}></div>
  {/if}
</nav>
{/if}

<style>
  @media (max-width: 768px) {
    .animate-fade-in {
      animation: fadeInMenu 0.2s ease;
    }
    @keyframes fadeInMenu {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  }
</style>
