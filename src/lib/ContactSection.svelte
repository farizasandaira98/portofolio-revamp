<script>
  import LottiePlayer from './LottiePlayer.svelte';
  import { language, translations } from './stores.js';

  let currentLang = 'en';
  
  language.subscribe(value => {
    currentLang = value;
  });

  $: t = translations[currentLang];

  let name = '';
  let email = '';
  let subject = '';
  let message = '';
  let showMessage = false;
  let messageText = '';
  let messageType = '';

  function handleSubmit(event) {
    event.preventDefault();
    
    messageType = 'success';
    messageText = t.contact.form.successMessage.replace('{name}', name);
    showMessage = true;

    // Reset form
    name = '';
    email = '';
    subject = '';
    message = '';

    // Hide message after 5 seconds
    setTimeout(() => {
      showMessage = false;
    }, 5000);
  }
</script>

<section id="contact" class="section-padding">
  <div class="max-w-4xl mx-auto px-6">
    <div class="fade-in mb-16">
      <h2 class="text-4xl md:text-5xl font-light text-center mb-4">
        <span class="gradient-text">{t.contact.title}</span>
      </h2>
      <p class="text-center text-white/60">{t.contact.subtitle}</p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-16">
      <div class="fade-in">
        <div class="w-24 h-24 mb-8">
          <LottiePlayer src="https://assets9.lottiefiles.com/packages/lf20_u25cckyh.json" />
        </div>
        <h3 class="text-2xl font-medium mb-6">{t.contact.getInTouch}</h3>
        <p class="text-white/60 mb-8 leading-relaxed">
          {t.contact.description}
        </p>
        <div class="space-y-6">
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
              <span class="text-lg">✉️</span>
            </div>
            <div>
              <p class="text-white/60 text-sm">{t.contact.email}</p>
              <p class="font-medium">muhfariza98@gmail.com</p>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
              <span class="text-lg">�</span>
            </div>
            <div>
              <p class="text-white/60 text-sm">LinkedIn</p>
              <p class="font-medium">linkedin.com/in/muh-fariza</p>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
              <span class="text-lg">📍</span>
            </div>
            <div>
              <p class="text-white/60 text-sm">{t.contact.location}</p>
              <p class="font-medium">Indonesia</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="fade-in">
        <form on:submit={handleSubmit} class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <input 
                type="text" 
                bind:value={name}
                placeholder={t.contact.form.name} 
                class="w-full px-0 py-4 bg-transparent border-0 border-b border-white/20 text-white placeholder-white/40 focus:border-purple-400 focus:outline-none transition-colors" 
                required
              >
            </div>
            <div>
              <input 
                type="email" 
                bind:value={email}
                placeholder={t.contact.form.email} 
                class="w-full px-0 py-4 bg-transparent border-0 border-b border-white/20 text-white placeholder-white/40 focus:border-purple-400 focus:outline-none transition-colors" 
                required
              >
            </div>
          </div>
          <div>
            <input 
              type="text" 
              bind:value={subject}
              placeholder={t.contact.form.subject} 
              class="w-full px-0 py-4 bg-transparent border-0 border-b border-white/20 text-white placeholder-white/40 focus:border-purple-400 focus:outline-none transition-colors" 
              required
            >
          </div>
          <div>
            <textarea 
              bind:value={message}
              rows="4" 
              placeholder={t.contact.form.message} 
              class="w-full px-0 py-4 bg-transparent border-0 border-b border-white/20 text-white placeholder-white/40 focus:border-purple-400 focus:outline-none transition-colors resize-none" 
              required
            ></textarea>
          </div>
          <button type="submit" class="group relative px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300">
            <span class="relative z-10">{t.contact.form.send}</span>
            <div class="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>
        </form>
        
        {#if showMessage}
          <div class="mt-6 p-4 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400">
            {messageText}
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>
