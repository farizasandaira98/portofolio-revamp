<script>
  import { language, translations } from './stores.js';
  
  // Import product images
  import tmsImg from '../assets/products/tms.png';
  import sigImg from '../assets/products/SIG_Logo.svg';
  import hijaImg from '../assets/products/hija.svg';
  import aksesbayarImg from '../assets/products/ngalir.svg';
  import ngisiImg from '../assets/products/ngisi.svg';
  import rpaykuImg from '../assets/products/rpayku.svg';
  import vinilonImg from '../assets/products/vinilon.svg';

  let currentLang = 'en';
  
  language.subscribe(value => {
    currentLang = value;
  });

  $: t = translations[currentLang];

  const products = [
    {
      id: 'tms',
      name: 'Terminal Management System',
      description: 'Management system for payment terminal devices used for money transfer operations and financial transactions.',
      image: tmsImg,
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      category: 'Fintech Infrastructure'
    },
    {
      id: 'sig',
      name: 'SIG',
      description: 'Comprehensive business solution platform providing integrated services and digital transformation tools.',
      image: sigImg,
      tech: ['React', 'Next.js', 'AWS', 'PostgreSQL'],
      category: 'Enterprise Platform'
    },
    {
      id: 'hija',
      name: 'Hija Tracking',
      description: 'IoT device tracking platform for monitoring Jamaah pilgrims in Saudi Arabia with real-time location services.',
      image: hijaImg,
      tech: ['React', 'IoT', 'GPS', 'Real-time API'],
      category: 'IoT Tracking'
    },
    {
      id: 'aksesbayar',
      name: 'Akses Bayar',
      description: 'Fintech merchant aggregator platform with open API for payment gateway integration and financial services.',
      image: aksesbayarImg,
      tech: ['React', 'API Gateway', 'Payment APIs', 'PostgreSQL'],
      category: 'Payment Gateway'
    },
    {
      id: 'ngisi',
      name: 'Ngisi PPOB',
      description: 'Payment Point Online Bank (PPOB) platform for handling various bill payments and digital transactions.',
      image: ngisiImg,
      tech: ['Vue.js', 'Payment API', 'MySQL', 'Redis'],
      category: 'Payment Services'
    },
    {
      id: 'rpayku',
      name: 'RPay-KU',
      description: 'Merchant aggregator fintech platform similar to Akses Bayar, providing comprehensive payment solutions.',
      image: rpaykuImg,
      tech: ['React', 'Express.js', 'Payment APIs', 'MongoDB'],
      category: 'Merchant Aggregator'
    },
    {
      id: 'vinilon',
      name: 'Vinilon IoT',
      description: 'IoT-enabled platform for smart device management and monitoring with real-time data analytics.',
      image: vinilonImg,
      tech: ['Next.js', 'IoT', 'WebSocket', 'InfluxDB'],
      category: 'IoT Platform'
    }
  ];

  function handleProductClick(product) {
    // You can add navigation to product details or external links here
    console.log('Product clicked:', product.name);
  }
</script>

<section id="products" class="section-padding">
  <div class="max-w-6xl mx-auto px-6">
    <div class="fade-in mb-20">
      <h2 class="text-4xl md:text-5xl font-light text-center mb-4">
        <span class="gradient-text">{t?.products?.title || 'Products'}</span>
      </h2>
      <p class="text-center text-white/60 max-w-2xl mx-auto">
        {t?.products?.subtitle || 'Innovative solutions and applications I\'ve developed across various domains'}
      </p>
    </div>
    
    <div class="space-y-8">
      {#each products as product, index}
        <div 
          class="product-item fade-in group cursor-pointer"
          style="animation-delay: {index * 100}ms"
          on:click={() => handleProductClick(product)}
          on:keydown={(e) => e.key === 'Enter' && handleProductClick(product)}
          tabindex="0"
          role="button"
        >
          <div class="flex flex-col md:flex-row items-center md:items-center gap-6 py-8 border-b border-white/10 group-hover:border-purple-400/30 transition-all duration-500">
            
            <!-- Product Image -->
            <div class="flex-shrink-0">
              <div class="w-20 h-20 bg-gradient-to-br from-purple-500/40 to-blue-500/40 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <img 
                  src={product.image} 
                  alt={product.name}
                  class="w-12 h-12 object-contain filter group-hover:brightness-110"
                  loading="lazy"
                />
              </div>
            </div>
            
            <!-- Product Info -->
            <div class="flex-1 min-w-0 text-center md:text-left">
              <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div class="flex-1">
                  <div class="flex flex-col items-center md:items-start sm:flex-row sm:items-center md:justify-start justify-center gap-2 mb-3">
                    <h3 class="text-xl md:text-2xl font-medium text-white group-hover:text-purple-400 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <span class="text-xs font-medium px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full w-fit">
                      {product.category}
                    </span>
                  </div>
                  
                  <p class="text-white/60 leading-relaxed mb-4 group-hover:text-white/80 transition-colors duration-300">
                    {product.description}
                  </p>
                  
                  <div class="flex flex-wrap gap-2 justify-center md:justify-start">
                    {#each product.tech as tech}
                      <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-white/70 group-hover:bg-purple-500/10 group-hover:border-purple-400/30 group-hover:text-purple-300 transition-all duration-300">
                        {tech}
                      </span>
                    {/each}
                  </div>
                </div>
                
                <!-- Arrow indicator -->
                <div class="flex-shrink-0 self-center md:self-center mx-auto md:mx-0">
                  <div class="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-purple-400 group-hover:bg-purple-400/10 transition-all duration-300">
                    <svg class="w-4 h-4 text-white/60 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-5px) rotate(1deg);
    }
  }
</style>
