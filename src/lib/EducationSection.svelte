<script>
  import LottiePlayer from './LottiePlayer.svelte';
  import { language, translations } from './stores.js';

  let currentLang = 'en';
  
  language.subscribe(value => {
    currentLang = value;
  });

  $: t = translations[currentLang];
  $: education = t.education.items;
</script>

<section id="education" class="section-padding">
  <div class="max-w-4xl mx-auto px-6">
    <div class="fade-in mb-16">
      <h2 class="text-4xl md:text-5xl font-light text-center mb-4">
        <span class="gradient-text">{t.education.title}</span>
      </h2>
      <p class="text-center text-white/60">{t.education.subtitle}</p>
    </div>
    
    <div class="timeline-minimal">
      {#each education as edu}
        <div class="timeline-item-minimal fade-in">
          <div class="flex items-start space-x-4">
            <div class="w-16 h-16 flex-shrink-0">
              <LottiePlayer src={edu.animationSrc} />
            </div>
            <div>
              <h3 class="text-2xl font-medium mb-2">{edu.title}</h3>
              <p class="text-purple-400 mb-2">{edu.institution} • {edu.period}</p>
              <p class="text-white/60 leading-relaxed">
                {edu.description}
              </p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
