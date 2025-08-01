<script>
  import LottiePlayer from './LottiePlayer.svelte';
  import { language, translations } from './stores.js';

  let currentLang = 'en';
  
  language.subscribe(value => {
    currentLang = value;
  });

  $: t = translations[currentLang];
  $: projects = t.projects.items.map((item, i) => ({
    ...item,
    technologies: [
      ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      ["PHP", "MySQL", "Bootstrap", "jQuery"],
      ["PHP", "MySQL", "HTML", "CSS"],
      ["PHP", "MySQL", "Algorithm", "Data Analysis"],
      ["Deno", "React", "TypeScript", "Vite"],
      ["HTML", "CSS", "JavaScript", "PHP"]
    ][i],
    animationSrc: [
      "https://assets10.lottiefiles.com/packages/lf20_1a8dx7zj.json",
      "https://assets4.lottiefiles.com/packages/lf20_tutvdkg0.json",
      "https://assets1.lottiefiles.com/packages/lf20_1pxqjqps.json",
      "https://assets5.lottiefiles.com/packages/lf20_qmfs6c3i.json",
      "https://assets9.lottiefiles.com/packages/lf20_qp1q7mct.json",
      "https://assets8.lottiefiles.com/packages/lf20_jcikwtux.json"
    ][i],
    repo: [
      "https://github.com/farizasandaira98/jualikan",
      "https://github.com/farizasandaira98/peminjaman_ruangan",
      "https://github.com/farizasandaira98/perpus",
      "https://github.com/farizasandaira98/saw-raskin",
      "https://github.com/farizasandaira98/test_deno_vite_react",
      "https://github.com/farizasandaira98/webhmjti"
    ][i]
  }));

  function handleProjectClick(project) {
    if (project.repo) {
      window.open(project.repo, '_blank');
    }
  }
</script>

<section id="projects" class="section-padding">
  <div class="max-w-6xl mx-auto px-6">
    <div class="fade-in mb-16">
      <h2 class="text-4xl md:text-5xl font-light text-center mb-4">
        <span class="gradient-text">{t.projects.title}</span>
      </h2>
      <p class="text-center text-white/60">{t.projects.subtitle}</p>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each projects as project, i}
        <div class="card-minimal rounded-2xl p-8 fade-in">
          <div class="w-16 h-16 mb-6">
            <LottiePlayer src={project.animationSrc} />
          </div>
          <h3 class="text-xl font-medium mb-3">{project.title}</h3>
          <p class="text-white/60 mb-6 leading-relaxed">
            {project.description}
          </p>
          <div class="flex flex-wrap gap-2 mb-6">
            {#each project.technologies as tech}
              <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs">{tech}</span>
            {/each}
          </div>
          <button 
            class="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
            on:click={() => handleProjectClick(project)}
          >
            {t.projects.viewProject}
          </button>
        </div>
      {/each}
    </div>
  </div>
</section>
