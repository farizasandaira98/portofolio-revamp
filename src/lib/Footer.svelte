<script>
  import { language, translations } from './stores.js';

  let currentLang = 'en';
  
  language.subscribe(value => {
    currentLang = value;
  });

  $: t = translations[currentLang];
</script>

<footer class="py-12 border-t border-white/10">
  <div class="max-w-6xl mx-auto px-6 text-center">
    <p class="text-white/40 text-sm">{t.footer.copyright}</p>
  </div>
</footer>
