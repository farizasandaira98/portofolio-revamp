<script>
  import { language, translations } from './stores.js';

  export let currentSection = 'home';

  let currentLang = 'en';
  let menuOpen = false;
  
  language.subscribe(value => {
    currentLang = value;
  });

  $: t = translations[currentLang];
  $: isOnHome = currentSection === 'home';
  $: navOpacity = isOnHome ? 'bg-white/5' : 'bg-white/15';
  $: borderOpacity = isOnHome ? 'border-white/10' : 'border-white/25';
  $: textOpacity = isOnHome ? 'text-white/70' : 'text-white/90';
  $: hoverTextOpacity = isOnHome ? 'hover:text-white' : 'hover:text-white';

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }

  function handleNavClick(event, sectionId) {
    if (event) {
      event.preventDefault();
    }
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    closeMenu();
  }
</script>

<nav class="fixed inset-x-0 top-0 z-[99999] pointer-events-none">
  <!-- Desktop Nav: centered at top -->
  <div class="hidden md:flex fixed top-8 left-1/2 transform -translate-x-1/2 glass-effect {navOpacity} {borderOpacity} rounded-full px-8 py-4 items-center space-x-8 backdrop-blur-md z-[99999] pointer-events-auto">
    <button on:click={() => handleNavClick(null, 'home')} class="nav-link text-sm font-medium {textOpacity} {hoverTextOpacity} transition-all duration-300 cursor-pointer bg-transparent border-none">{t.navigation.home}</button>
    <button on:click={() => handleNavClick(null, 'work')} class="nav-link text-sm font-medium {textOpacity} {hoverTextOpacity} transition-all duration-300 cursor-pointer bg-transparent border-none">{t.navigation.work}</button>
    <button on:click={() => handleNavClick(null, 'education')} class="nav-link text-sm font-medium {textOpacity} {hoverTextOpacity} transition-all duration-300 cursor-pointer bg-transparent border-none">{t.navigation.education}</button>
    <button on:click={() => handleNavClick(null, 'companies')} class="nav-link text-sm font-medium {textOpacity} {hoverTextOpacity} transition-all duration-300 cursor-pointer bg-transparent border-none">{t.navigation.companies}</button>
    <button on:click={() => handleNavClick(null, 'products')} class="nav-link text-sm font-medium {textOpacity} {hoverTextOpacity} transition-all duration-300 cursor-pointer bg-transparent border-none">{t.navigation.products}</button>
    <button on:click={() => handleNavClick(null, 'projects')} class="nav-link text-sm font-medium {textOpacity} {hoverTextOpacity} transition-all duration-300 cursor-pointer bg-transparent border-none">{t.navigation.projects}</button>
    <button on:click={() => handleNavClick(null, 'contact')} class="nav-link text-sm font-medium {textOpacity} {hoverTextOpacity} transition-all duration-300 cursor-pointer bg-transparent border-none">{t.navigation.contact}</button>
  </div>
  <!-- Burger Icon for Mobile: top-left -->
  <button class="md:hidden fixed top-8 left-8 w-12 h-12 {navOpacity} backdrop-blur-md border {borderOpacity} rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 focus:outline-none z-[99999] pointer-events-auto" on:click={toggleMenu} aria-label="Open navigation menu">
    <div class="flex flex-col items-center justify-center w-6 h-6">
      <span class="block w-6 h-0.5 bg-white rounded transition-all duration-300 {menuOpen ? 'rotate-45 translate-y-1.5 mb-0' : 'mb-1'}"></span>
      <span class="block w-6 h-0.5 bg-white rounded transition-all duration-300 {menuOpen ? 'opacity-0 mb-0' : 'mb-1'}"></span>
      <span class="block w-6 h-0.5 bg-white rounded transition-all duration-300 {menuOpen ? '-rotate-45 -translate-y-1.5' : ''}"></span>
    </div>
  </button>
  <!-- Mobile Menu: expands from left -->
  {#if menuOpen}
    <div class="fixed top-20 left-4 w-56 glass-effect {navOpacity} {borderOpacity} backdrop-blur-md rounded-2xl shadow-xl py-4 z-[99998] flex flex-col md:hidden animate-fade-in pointer-events-auto">
      <button on:click={() => handleNavClick(null, 'home')} class="block px-6 py-3 {textOpacity} hover:text-white transition-colors cursor-pointer bg-transparent border-none text-left w-full">{t.navigation.home}</button>
      <button on:click={() => handleNavClick(null, 'work')} class="block px-6 py-3 {textOpacity} hover:text-white transition-colors cursor-pointer bg-transparent border-none text-left w-full">{t.navigation.work}</button>
      <button on:click={() => handleNavClick(null, 'education')} class="block px-6 py-3 {textOpacity} hover:text-white transition-colors cursor-pointer bg-transparent border-none text-left w-full">{t.navigation.education}</button>
      <button on:click={() => handleNavClick(null, 'companies')} class="block px-6 py-3 {textOpacity} hover:text-white transition-colors cursor-pointer bg-transparent border-none text-left w-full">{t.navigation.companies}</button>
      <button on:click={() => handleNavClick(null, 'products')} class="block px-6 py-3 {textOpacity} hover:text-white transition-colors cursor-pointer bg-transparent border-none text-left w-full">{t.navigation.products}</button>
      <button on:click={() => handleNavClick(null, 'projects')} class="block px-6 py-3 {textOpacity} hover:text-white transition-colors cursor-pointer bg-transparent border-none text-left w-full">{t.navigation.projects}</button>
      <button on:click={() => handleNavClick(null, 'contact')} class="block px-6 py-3 {textOpacity} hover:text-white transition-colors cursor-pointer bg-transparent border-none text-left w-full">{t.navigation.contact}</button>
    </div>
    <!-- Overlay -->
    <div 
      class="fixed inset-0 z-[99997] md:hidden pointer-events-auto" 
      on:click={closeMenu}
      on:keydown={(e) => e.key === 'Escape' && closeMenu()}
      role="button"
      tabindex="0"
      aria-label="Close navigation menu"
    ></div>
  {/if}
</nav>

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
