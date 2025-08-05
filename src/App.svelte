<script>
  import { onMount } from 'svelte';
  import { theme } from './lib/stores.js';
  import CustomCursor from './lib/CustomCursor.svelte';
  import Navigation from './lib/Navigation.svelte';
  import SideNavDots from './lib/SideNavDots.svelte';
  import Settings from './lib/Settings.svelte';
  import HomeSection from './lib/HomeSection.svelte';
  import WorkSection from './lib/WorkSection.svelte';
  import EducationSection from './lib/EducationSection.svelte';
  import CompaniesSection from './lib/CompaniesSection.svelte';
  import ProductsSection from './lib/ProductsSection.svelte';
  import ProjectsSection from './lib/ProjectsSection.svelte';
  import ContactSection from './lib/ContactSection.svelte';
  import Footer from './lib/Footer.svelte';
  import { fade } from 'svelte/transition';

  let sections = [];
  let navDots = [];
  let currentSection = 'home';
  let currentTheme = 'dark';
  let showUI = true;
  let scrollTimeout;

  // Subscribe to theme changes
  theme.subscribe(value => {
    currentTheme = value;
    if (typeof document !== 'undefined') {
      document.documentElement.className = value === 'light' ? 'light' : '';
    }
  });

  function handleScroll() {
    showUI = false;
    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      showUI = true;
    }, 5000);
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    // Navigation dots observer
    const sectionsNodeList = document.querySelectorAll('section');
    sections = Array.from(sectionsNodeList);
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          currentSection = entry.target.id;
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => {
      sectionObserver.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  });

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  $: alwaysShowUI = currentSection === 'home';
  $: shouldShowUI = alwaysShowUI || showUI;
  $: uiOpacityClass = currentSection === 'home' ? '' : 'opacity-80';
</script>

<CustomCursor />

<!-- Navigation is always visible -->
<div class="fixed inset-0 z-[99999] pointer-events-none">
  <div class="pointer-events-auto">
    <Navigation {currentSection} />
  </div>
</div>

<!-- Other UI elements that can fade -->
{#if shouldShowUI}
  <div in:fade={{ duration: 400 }} out:fade={{ duration: 400 }} class="z-[99998] {uiOpacityClass} pointer-events-auto"><SideNavDots {currentSection} {scrollToSection} /></div>
  <div in:fade={{ duration: 400 }} out:fade={{ duration: 400 }} class="z-[99997] {uiOpacityClass} pointer-events-auto"><Settings /></div>
{/if}

<main>
  <HomeSection />
  <WorkSection />
  <EducationSection />
  <CompaniesSection />
  <ProductsSection />
  <ProjectsSection />
  <ContactSection />
</main>

<Footer />

<style>
  main {
    width: 100%;
  }
</style>
