<script>
  import { language, translations } from './stores.js';
  
  // Import company logos
  import tsmImg from '../assets/products/tsm.png';
  import sigImg from '../assets/products/SIG_Logo.svg';

  let currentLang = 'en';
  
  language.subscribe(value => {
    currentLang = value;
  });

  $: t = translations[currentLang];

  const companies = [
    {
      id: 'tsm',
      name: 'TSM Technology',
      description: 'Leading technology company specializing in software development, digital transformation, and innovative business solutions.',
      image: tsmImg,
      role: 'Software Engineer',
      period: '2022 - Present',
      location: 'Jakarta Barat',
      tech: ['React', 'TypeScript', 'Next.js', 'Svelte', 'Golang', 'AWS'],
      category: 'Technology Company'
    },
    {
      id: 'sig',
      name: 'SIG',
      description: 'Comprehensive business solution provider offering integrated digital services and enterprise platform solutions.',
      image: sigImg,
      role: 'Fullstack Developer',
      period: '2023 - Present',
      location: 'Remote',
      tech: ['React', 'Next.js', 'PostgreSQL', 'AWS', 'Node.js'],
      category: 'Enterprise Solutions'
    }
  ];

  function handleCompanyClick(company) {
    console.log('Company clicked:', company.name);
    // You can add navigation to company details here
  }
</script>

<section id="companies" class="section-padding bg-gradient-to-b from-transparent to-white/[0.02]">
  <div class="max-w-6xl mx-auto px-6">
    <div class="fade-in mb-20">
      <h2 class="text-4xl md:text-5xl font-light text-center mb-4">
        <span class="gradient-text">{t?.companies?.title || 'Companies'}</span>
      </h2>
      <p class="text-center text-white/60 max-w-2xl mx-auto">
        {t?.companies?.subtitle || 'Organizations where I\'ve contributed my expertise and grown professionally'}
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8">
      {#each companies as company, index}
        <div 
          class="company-card fade-in group cursor-pointer"
          style="animation-delay: {index * 200}ms"
          on:click={() => handleCompanyClick(company)}
          on:keydown={(e) => e.key === 'Enter' && handleCompanyClick(company)}
          tabindex="0"
          role="button"
        >
          <div class="glass-effect rounded-3xl p-8 h-full border border-white/10 group-hover:border-purple-400/30 transition-all duration-500 group-hover:scale-[1.02]">
            
            <!-- Company Logo -->
            <div class="flex items-center justify-center mb-6">
              <div class="w-24 h-24 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                <img 
                  src={company.image} 
                  alt={company.name}
                  class="w-16 h-16 object-contain filter group-hover:brightness-110"
                  loading="lazy"
                />
              </div>
            </div>
            
            <!-- Company Info -->
            <div class="text-center mb-6">
              <h3 class="text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300 mb-2">
                {company.name}
              </h3>
              
              <div class="flex flex-wrap justify-center gap-2 mb-4">
                <span class="text-sm font-medium px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                  {company.category}
                </span>
                <span class="text-sm font-medium px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                  {company.role}
                </span>
              </div>
              
              <div class="flex justify-center items-center gap-4 text-sm text-white/60 mb-4">
                <span>{company.period}</span>
                <span>•</span>
                <span>{company.location}</span>
              </div>
            </div>
            
            <p class="text-white/70 leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300">
              {company.description}
            </p>
            
            <div class="flex flex-wrap justify-center gap-2">
              {#each company.tech as tech}
                <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-white/70 group-hover:bg-purple-500/10 group-hover:border-purple-400/30 group-hover:text-purple-300 transition-all duration-300">
                  {tech}
                </span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  /* Removed unused CSS since we're using the global fade-in class */
</style>
