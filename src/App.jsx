import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { WhoWeAre } from './components/WhoWeAre';
import { InternationalGroup } from './components/InternationalGroup';
import { Capabilities } from './components/Capabilities';
import { StrategicArchitecture } from './components/StrategicArchitecture';
import { MultisectoralExpertise } from './components/MultisectoralExpertise';
import { WhyUs } from './components/WhyUs';
import { Team } from './components/Team';
import { IntPresence } from './components/IntPresence';
import { Path } from './components/Path';
import { OurApproach } from './components/OurApproach';
import { Insights } from './components/Insights';
import { NewInsights } from './components/NewInsights';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton'
import { Routes, Route, useLocation } from 'react-router-dom';
import { BlogIndex } from './components/BlogIndex';
import { BlogPost } from './components/BlogPost';
import { MarketOpportunity } from './components/MarketOpportunity';
import { InteractiveBackground } from './components/InteractiveBackground';
import { HowWeWork } from './components/HowWeWork';
import { InteractiveLightBackground } from './components/InteractiveLightBackground';
import Brands from './components/Brands';
import { SplashLoader } from './components/SplashLoader';
import { useLanguage } from './context/LanguageContext';
import translations from './locales';
import { ConsentBanner } from './components/ConsentBanner';
import { ConsentSettingsModal } from './components/ConsentSettingsModal';


function App() {

  const location = useLocation();
  // const [language, setLanguage] = React.useState('ES'); // Estado global de idioma para SEO dinámico

  const [isLoading, setIsLoading] = React.useState(true);
  const { language, setLanguage } = useLanguage();

  // Efecto complementario para congelar el scroll del Body mientras carga
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isLoading]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      
      // Intentos repetidos en milisegundos cortos por si la página externa tarda en renderizar
      const scrollToElement = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      // Primer intento inmediato
      if (!scrollToElement()) {
        // Intentos de respaldo (Fallback) si el DOM no estaba listo
        const timer = setTimeout(scrollToElement, 100);
        const longTimer = setTimeout(scrollToElement, 350);
        return () => {
          clearTimeout(timer);
          clearTimeout(longTimer);
        };
      }
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);


  // Control dinámico de SEO Premium según el idioma seleccionado
  // useEffect(() => {
  //   const seoData = {
  //     ES: {
  //       title: "WeProm Europe — Promoción y desarrollo de negocios entre Europa y América Latina | París",
  //       description: "Sede europea de Grupo WeProm. +35 años, 3 generaciones, +1,000 proyectos. Inteligencia, estrategia y desarrollo de negocios en el corredor Europa-América Latina."
  //     },
  //     FR: {
  //       title: "WeProm Europe — Promotion et développement des affaires entre l’Europe et l’Amérique latine | Paris",
  //       description: "Siège européen du Groupe WeProm. +35 ans, 3 générations, +1 000 projets. Intelligence, stratégie et développement d’affaires dans le corridor Europe Amérique latine."
  //     },
  //     EN: {
  //       title: "WeProm Europe — Business Promotion & Development between Europe and Latin America | Paris",
  //       description: "European headquarters of WeProm Group. 35+ years, 3 generations, 1,000+ projects. Intelligence, strategy and business development in the Europe-Latin America corridor."
  //     }
  //   };

  //   // 1. Actualizar el Title de la pestaña
  //   document.title = seoData[language].title;

  //   // 2. Actualizar la Meta Description
  //   let metaDescription = document.querySelector('meta[name="description"]');
  //   if (metaDescription) {
  //     metaDescription.setAttribute('content', seoData[language].description);
  //   } else {
  //     metaDescription = document.createElement('meta');
  //     metaDescription.name = "description";
  //     metaDescription.content = seoData[language].description;
  //     document.head.appendChild(metaDescription);
  //   }
    
  //   // 3. Actualizar el atributo lang de la etiqueta HTML para accesibilidad y SEO técnico
  //   document.documentElement.lang = language.toLowerCase();

  // }, [language]);


  useEffect(() => {
    const t = translations[language];
    if (t && t.meta) {
      document.title = t.meta.title;
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', t.meta.description);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.name = "description";
        metaDescription.content = t.meta.description;
        document.head.appendChild(metaDescription);
      }
      document.documentElement.lang = language.toLowerCase();
    }
  }, [language]);




  useEffect(() => {
    // 1. Lógica de Intersection Observer (Reveal)
    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);



    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    const handleParallax = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // 0. HERO PARALLAX (Visible y fluido)
      const hero = document.getElementById('parallax-hero');
      if (hero && scrollY < viewportHeight) {
        // Nota: Accedemos al parentElement porque es el que tiene el ID o el estilo de translateY
        // Si aplicaste el estilo al div contenedor en el paso 1:
        const container = hero.parentElement;
        container.style.setProperty('--parallax-hero-y', `${scrollY * 0.4}px`);
      }

      // 3. Logo (Strategic Architecture)
      const archLogo = document.getElementById('parallax-logo-architecture');
      if (archLogo) {
        const rect = archLogo.getBoundingClientRect();
        if (rect.top < viewportHeight && rect.bottom > 0) {
          const distanceFromCenter = (rect.top + rect.height / 2) - (viewportHeight / 2);
          // Cambiamos a --parallax-logo-y para consistencia
          archLogo.style.setProperty('--parallax-logo-y', `${distanceFromCenter * -0.12}px`);
        }
      }

      // 4. Cubo Multisectoral (Efecto elegante)
      const multiCube = document.getElementById('parallax-multisectoral');
      if (multiCube) {
        const rect = multiCube.getBoundingClientRect();
        if (rect.top < viewportHeight && rect.bottom > 0) {
          const distanceFromCenter = (rect.top + rect.height / 2) - (viewportHeight / 2);
          // Multiplicador -0.08 para un movimiento muy suave y profesional
          multiCube.style.setProperty('--parallax-multisectoral-y', `${distanceFromCenter * -0.08}px`);
        }
      }

    
      // 1. Edificio (WhoWeAre)
      const building = document.getElementById('parallax-building');
      if (building) {
        const rect = building.parentElement.getBoundingClientRect();
        // Solo calcular si está cerca de la pantalla para ahorrar recursos
        if (rect.top < viewportHeight && rect.bottom > 0) {
          const distanceFromCenter = (rect.top + rect.height / 2) - (viewportHeight / 2);
          building.style.setProperty('--parallax-y', `${distanceFromCenter * 0.07}px`);
        }
      }
    
      // 2. Logo (Capabilities) - CORREGIDO
      const logoContainer = document.getElementById('parallax-logo-container');
      if (logoContainer) {
        const rect = logoContainer.getBoundingClientRect();
        if (rect.top < viewportHeight && rect.bottom > 0) {
          const distanceFromCenter = (rect.top + rect.height / 2) - (viewportHeight / 2);
          // Multiplicador negativo para que suba mientras bajas (efecto profundidad)
          logoContainer.style.setProperty('--parallax-logo-y', `${distanceFromCenter * -0.15}px`);
        }
      }
    };

    window.addEventListener('scroll', handleParallax);

    // Limpieza de eventos
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleParallax);
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white selection:bg-weprom-dark selection:text-white">

      {/* 🚀 Renderizado condicional del Splash Loader */}
      {isLoading && <SplashLoader onComplete={() => setIsLoading(false)} />}

      <Navbar />
      <Routes>
        <Route path="/" element={
          <main className="relative">
            <Hero />

            <div id="opportunity" className="reveal scroll-mt-20">
              <InteractiveLightBackground>
                <MarketOpportunity />
              </InteractiveLightBackground>
              
            </div>

            {/* Envolvemos las secciones en contenedores reveal para la transición */}
            <div id="el-momento" className="reveal scroll-mt-20">
              <InteractiveBackground>
                <AboutSection />
              </InteractiveBackground>
            </div>

            <div id="equipo" className="reveal scroll-mt-20">
              <InteractiveLightBackground>
                <WhoWeAre />
              </InteractiveLightBackground>
            </div>

            <div className="reveal">
              <InteractiveLightBackground>
                <HowWeWork />
              </InteractiveLightBackground>
            </div>
    

              {/* <InternationalGroup /> */}
    
              {/* Sección Unificada de Capacidades */}
              {/* Sección Unificada de Capacidades - Reemplazo en App.jsx */}
              <div id="capabilities" className="relative overflow-visible bg-white pt-24 md:pt-32">
                {/* BLOQUE INMÓVIL (Sticky) - sin cambios */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                  <div className="sticky top-24 w-full">
                    <div className="bg-white w-full py-6 px-6 md:px-16">
                      <div className="max-w-7xl mx-auto relative pt-8">
                        <p className="text-[#2d61e0] font-montserrat font-bold tracking-[0.4em] uppercase text-[11px] mb-2">
                          {translations[language].capabilities.kicker}
                        </p>
                        <h2 className="reveal text-slate-900 font-montserrat text-3xl md:text-[40px] font-semibold uppercase leading-tight pointer-events-auto bg-white inline-block tracking-wide">
                          {translations[language].capabilities.title}
                        </h2>
                        {/* <div className="absolute top-0 right-0 w-[25%] translate-x-[10%] opacity-10 select-none pointer-events-none hidden md:block">
                          <img src="/isotipo.png" alt="" className="w-full h-auto object-contain grayscale" />
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CONTENIDO QUE HACE SCROLL con fondo interactivo */}
                <InteractiveLightBackground className="relative z-10">
                  <div className="space-y-0"> {/* Para asegurar que los hijos se apilen sin espacio extra */}
                    <Capabilities />
                    <StrategicArchitecture />
                  </div>
                </InteractiveLightBackground>
              </div>
    
            
              <div id="sectores" className="reveal scroll-mt-20">

                <InteractiveBackground>
                  <MultisectoralExpertise />
                </InteractiveBackground>
                
              </div>

              <div id="por-que-nosotros" className="reveal scroll-mt-20">
                <InteractiveLightBackground>
                  <WhyUs />
                </InteractiveLightBackground>
              </div>

              <div id="team" className="reveal scroll-mt-13">
                <InteractiveLightBackground>
                  <Team />
                </InteractiveLightBackground>
              </div>

              {/* <div id="presencia-internacional" className="reveal scroll-mt-20">
                <IntPresence />
              </div> */}

              <div id="trayectoria" className="reveal scroll-mt-20">
                <InteractiveBackground>
                  <Path />
                  <Brands />
                </InteractiveBackground>
              </div>
    
              {/* <OurApproach /> */}

              <div id="insights" className="reveal scroll-mt-32">
                <NewInsights />
              </div>
    
              <div id="contact" className="reveal scroll-mt-15">
                <Contact />
              </div>
    
          </main>
        } />

        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

      </Routes>
      <Footer />
      <WhatsAppButton />
      <ConsentBanner />
      <ConsentSettingsModal />
    </div>
  );
}

export default App;