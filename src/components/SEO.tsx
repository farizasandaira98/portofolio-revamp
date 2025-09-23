import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({ title, description, image, url, type = 'website' }: SEOProps) {
  const { data } = useLanguage();

  const siteInfo = data.seo.siteInfo;

  // Use provided props or fall back to site defaults
  const pageTitle = title || siteInfo.title;
  const pageDescription = description || siteInfo.description;
  const pageImage = image || siteInfo.image;
  const pageUrl = url || siteInfo.url;

  useEffect(() => {
    // Update document title
    document.title = pageTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;

      if (element) {
        element.content = content;
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        element.content = content;
        document.head.appendChild(element);
      }
    };

    // Basic meta tags
    updateMetaTag('description', pageDescription);
    updateMetaTag('keywords', siteInfo.keywords.join(', '));
    updateMetaTag('author', siteInfo.author.name);

    // Open Graph tags
    updateMetaTag('og:title', pageTitle, true);
    updateMetaTag('og:description', pageDescription, true);
    updateMetaTag('og:image', pageImage, true);
    updateMetaTag('og:url', pageUrl, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', siteInfo.name, true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', pageTitle);
    updateMetaTag('twitter:description', pageDescription);
    updateMetaTag('twitter:image', pageImage);
    updateMetaTag('twitter:creator', '@farizasandaira');

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalLink) {
      canonicalLink.href = pageUrl;
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = pageUrl;
      document.head.appendChild(canonicalLink);
    }

    // Structured Data (JSON-LD)
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (structuredDataScript) {
      structuredDataScript.textContent = JSON.stringify(siteInfo.structuredData);
    } else {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      structuredDataScript.textContent = JSON.stringify(siteInfo.structuredData);
      document.head.appendChild(structuredDataScript);
    }

    // Additional meta tags for better SEO
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('googlebot', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

  }, [pageTitle, pageDescription, pageImage, pageUrl, type, siteInfo]);

  return null; // This component doesn't render anything
}