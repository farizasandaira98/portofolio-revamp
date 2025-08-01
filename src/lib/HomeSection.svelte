<script>
  import LottiePlayer from './LottiePlayer.svelte';
  import { language, translations } from './stores.js';

  let currentLang = 'en';
  
  language.subscribe(value => {
    currentLang = value;
  });

  $: t = translations[currentLang];
</script>

<section id="home" class="min-h-screen flex items-center justify-center relative">
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl floating"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl floating" style="animation-delay: -3s;"></div>
  </div>
  
  <div class="max-w-4xl mx-auto px-6 text-center relative z-10">
    <div class="fade-in mb-8">
      <div class="w-32 h-32 mx-auto mb-8">
        <LottiePlayer src="https://assets2.lottiefiles.com/packages/lf20_V9t630.json" />
      </div>
      <h1 class="text-6xl md:text-8xl font-light mb-6">
        <span class="gradient-text">{t.home.name}</span>
      </h1>
      <p class="text-xl md:text-2xl text-white/60 mb-12 font-light">
        {t.home.title}
      </p>
      <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <button class="group relative px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300">
          <span class="relative z-10">{t.home.viewWork}</span>
          <div class="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
        </button>
        <button class="text-white/60 hover:text-white transition-colors font-medium">
          {t.home.getInTouch} →
        </button>
      </div>
    </div>
  </div>
</section>
