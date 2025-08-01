<script>
  import { language, theme } from './stores.js';
  
  export let showUI = true;

  let currentLang = 'en';
  let currentTheme = 'dark';
  let showSettings = false;

  // Subscribe to stores
  language.subscribe(value => {
    currentLang = value;
  });

  theme.subscribe(value => {
    currentTheme = value;
    // Apply theme to document
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('light', value === 'light');
      document.documentElement.classList.toggle('dark', value === 'dark');
    }
  });

  function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'id' : 'en';
    language.set(newLang);
  }

  function toggleTheme() {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    theme.set(newTheme);
  }

  function toggleSettings() {
    showSettings = !showSettings;
  }
</script>

{#if showUI}
<!-- Settings Toggle Button -->
<div class="fixed top-8 right-8 z-50">
  <button 
    on:click={toggleSettings}
    class="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
    aria-label="Settings"
  >
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
  </button>

  <!-- Settings Panel -->
  {#if showSettings}
    <div class="absolute top-16 right-0 w-64 glass-effect rounded-2xl p-6 shadow-xl">
      <h3 class="text-lg font-medium text-white mb-4">Settings</h3>
      
      <!-- Language Toggle -->
      <div class="mb-6">
        <span class="block text-sm font-medium text-white/80 mb-2">Language</span>
        <button 
          on:click={toggleLanguage}
          class="w-full flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300"
          aria-label="Toggle language between English and Indonesian"
        >
          <span class="text-white">
            {currentLang === 'en' ? 'English' : 'Bahasa Indonesia'}
          </span>
          <div class="flex items-center space-x-2">
            <span class="text-xs text-white/60">
              {currentLang === 'en' ? 'EN' : 'ID'}
            </span>
            <div class="w-10 h-5 bg-white/20 rounded-full relative transition-all duration-300 {currentLang === 'id' ? 'bg-purple-500' : ''}">
              <div class="w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform duration-300 {currentLang === 'id' ? 'translate-x-5' : 'translate-x-0.5'}"></div>
            </div>
          </div>
        </button>
      </div>

      <!-- Theme Toggle -->
      <div class="mb-4">
        <span class="block text-sm font-medium text-white/80 mb-2">Theme</span>
        <button 
          on:click={toggleTheme}
          class="w-full flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300"
          aria-label="Toggle between dark and light theme"
        >
          <span class="text-white">
            {currentTheme === 'dark' ? 'Dark Mode' : 'Light Mode'}
          </span>
          <div class="flex items-center space-x-2">
            <span class="text-lg">
              {currentTheme === 'dark' ? '🌙' : '☀️'}
            </span>
            <div class="w-10 h-5 bg-white/20 rounded-full relative transition-all duration-300 {currentTheme === 'light' ? 'bg-yellow-500' : ''}">
              <div class="w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform duration-300 {currentTheme === 'light' ? 'translate-x-5' : 'translate-x-0.5'}"></div>
            </div>
          </div>
        </button>
      </div>
    </div>
  {/if}
</div>

<!-- Overlay to close settings when clicking outside -->
{#if showSettings}
  <div 
    class="fixed inset-0 z-40" 
    on:click={toggleSettings}
    role="button"
    tabindex="0"
    on:keydown={(e) => e.key === 'Escape' && toggleSettings()}
  ></div>
{/if}
{/if}
