<script>
  import LottiePlayer from './LottiePlayer.svelte';
  import { language, translations } from './stores.js';

  let currentLang = 'en';
  
  language.subscribe(value => {
    currentLang = value;
  });

  $: t = translations[currentLang];
  $: workExperience = t.work.experience;
</script>

<section id="work" class="section-padding">
  <div class="max-w-4xl mx-auto px-6">
    <div class="fade-in mb-16">
      <h2 class="text-4xl md:text-5xl font-light text-center mb-4">
        <span class="gradient-text">{t.work.title}</span>
      </h2>
      <p class="text-center text-white/60">{t.work.subtitle}</p>
    </div>
    
    <div class="timeline-minimal">
      {#each workExperience as job}
        <div class="timeline-item-minimal fade-in">
          <div class="flex items-start space-x-4">
            <div class="w-16 h-16 flex-shrink-0">
              <LottiePlayer src={job.animationSrc} />
            </div>
            <div>
              <h3 class="text-2xl font-medium mb-2">{job.title}</h3>
              <p class="text-purple-400 mb-2">{job.company} • {job.period}</p>
              <p class="text-white/60 leading-relaxed">
                {job.description}
              </p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
