/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  ChevronRight, 
  Star,
  CheckCircle2,
  Menu,
  X,
  MessageCircle,
  ExternalLink,
  Calendar
} from 'lucide-react';

const SERVICES = [
  {
    title: "Carillas de Porcelana",
    tag: "ALTA GAMA ESTÉTICA",
    description: "Restauraciones estéticas de alta gama que transforman tu sonrisa de forma personalizada, con un brillo idéntico al esmalte natural y una durabilidad excepcional.",
    priceOriginal: "$6,200",
    pricePromo: "$5,000",
    priceNote: "Válido hasta el 31 de mayo"
  },
  {
    title: "Cerámica Híbrida",
    tag: "ÚLTIMA TECNOLOGÍA",
    description: "Lo último en tecnología dental digital, combinando la asombrosa resistencia de la cerámica con la adaptabilidad elástica de los polímeros.",
  }
];

const STRENGTHS = [
  {
    icon: ShieldCheck,
    title: "Ética y Honestidad",
    number: "01",
    description: "Tu salud dental y periodontal es nuestra prioridad absoluta. Realizamos cambios estéticos sin comprometer tu bienestar biológico."
  },
  {
    icon: Sparkles,
    title: "Alta Estética",
    number: "02",
    description: "Resultados naturales diseñados meticulosamente de forma artesanal para elevar tu imagen personal y estatus."
  },
  {
    icon: Star,
    title: "Tecnología de Punta",
    number: "03",
    description: "Implementamos los últimos avances de escaneo digital para que tus procedimientos sean exactos, cómodos y rápidos."
  }
];

const REAL_TRANSFORMATIONS = [
  {
    image: "https://i.postimg.cc/7h3Qfgb2/1.jpg",
    technique: "Carillas de Porcelana"
  },
  {
    image: "https://i.postimg.cc/mkY6tQh9/2.jpg",
    technique: "Carillas de Porcelana"
  },
  {
    image: "https://i.postimg.cc/cCR5rQ6g/3.jpg",
    technique: "Carillas de Porcelana"
  }
];

export default function App() {
  const [activeTransformation, setActiveTransformation] = React.useState(0);

  // Auto-slide that triggers every 5 seconds and resets whenever activeTransformation changes
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveTransformation((prev) => (prev + 1) % REAL_TRANSFORMATIONS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeTransformation]);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="inicio" className="min-h-screen bg-paper text-ink font-sans selection:bg-gold/20 overflow-x-hidden">
      
      {/* Navigation Bar - Ultra Polished Floating Bar on Mobile */}
      <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-ink/5">
        <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 h-18 flex items-center justify-between">
          
          {/* Brand Logo & Tagline - Adaptive size */}
          <div className="flex flex-col cursor-pointer" onClick={() => scrollToSection('inicio')}>
            <span className="text-lg xs:text-xl font-serif font-bold tracking-tight text-ink leading-tight">
              DR. JORGE FLORES
            </span>
            <span className="text-[9px] uppercase tracking-[0.18em] text-gold font-bold -mt-0.5">
              Estética Dental Avanzada
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-ink/70">
            <a href="#servicios" className="hover:text-gold transition-colors">Servicios</a>
            <a href="#sobre-mi" className="hover:text-gold transition-colors">Sobre Mí</a>
            <a href="#contacto" className="hover:text-gold transition-colors">Ubicación</a>
            <motion.a 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#formulario" 
              className="bg-ink text-white px-5 py-2.5 rounded-full hover:bg-gold transition-all duration-300 shadow-md shadow-ink/10"
            >
              Agendar Cita
            </motion.a>
          </div>

          {/* Mobile Menu Direct Action - Sole booking option as requested */}
          <div className="md:hidden">
            <motion.button 
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollToSection('formulario')}
              className="bg-gold text-white px-4 py-2 rounded-full text-[10px] xs:text-xs font-bold uppercase tracking-widest shadow-sm shadow-gold/25"
              aria-label="Agendar Cita"
            >
              Agendar Cita
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Super Optimized for Mobile Screens */}
      <section className="relative pt-24 pb-12 xs:pt-28 sm:pt-32 md:pt-40 md:pb-24 overflow-hidden">
        
        {/* Artistic blurred premium lights in the background */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gold/5 rounded-full filter blur-[80px] -z-10" />

        <div className="w-full max-w-4xl mx-auto px-4 xs:px-6">
          <div className="flex flex-col items-center text-center">
            
            {/* Sparkles Ribbon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/25 text-gold text-[10px] xs:text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Sparkles size={12} className="animate-pulse" />
              <span>Sonrisas que proyectan éxito</span>
            </motion.div>

            {/* Main Typographical Hook - Dynamic scales for flawless text-wrapping */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-[2.1rem] xs:text-[2.5rem] sm:text-5xl md:text-6xl font-serif leading-[1.12] mb-6 text-ink tracking-tight"
            >
              Redefine tu <span className="italic text-gold font-medium">Imagen</span> <br /> a través de tu Sonrisa
            </motion.h1>

            {/* Micro-Introductive Copy */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-sm xs:text-base text-ink/70 mb-8 max-w-xl leading-relaxed px-1 sm:px-0"
            >
              Especialista en carillas de porcelana y estética dental en Guadalajara. 
              Transformamos vidas con honestidad, tecnología y un compromiso inquebrantable con tu salud periodontal.
            </motion.p>

            {/* Instant Call-to-Actions for Mobile View */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <button 
                onClick={() => scrollToSection('formulario')} 
                className="w-full sm:w-auto bg-ink text-white px-8 py-4.5 rounded-full text-base font-semibold hover:bg-gold transition-all duration-300 shadow-xl shadow-ink/20 flex items-center justify-center gap-3 active:scale-98"
              >
                <span>Agendar Consulta</span>
                <ChevronRight size={18} className="text-gold" />
              </button>

              <div className="flex items-center gap-3 justify-center">
                <div className="flex -space-x-2.5">
                  {[1,2,3].map(i => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/patient${i}/100/100`} 
                      className="w-9 h-9 rounded-full border-2 border-paper object-cover shadow-sm"
                      referrerPolicy="no-referrer"
                      alt="Paciente del Dr. Jorge Flores"
                    />
                  ))}
                </div>
                <div className="text-left leading-tight">
                  <div className="flex text-gold gap-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} size={11} fill="currentColor" className="text-gold" />)}
                  </div>
                  <p className="text-[11px] text-ink/50 font-semibold tracking-wide uppercase mt-0.5">+500 Casos Reales</p>
                </div>
              </div>
            </motion.div>

            {/* "Sobre Mí" Card - Clean & Stunningly formatted for Mobile Stack */}
            <motion.div 
              id="sobre-mi"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              className="w-full bg-gold/5 p-4.5 xs:p-6 rounded-[2rem] border border-gold/15 text-left flex flex-col-reverse md:flex-row gap-6 md:gap-8 items-center"
            >
              <div className="w-full">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gold">Sobre Jorge Flores</span>
                </div>
                
                <h2 className="text-xl xs:text-2xl font-serif mb-3 leading-snug">
                  Pasión por la <span className="italic text-gold">Excelencia</span>
                </h2>
                
                <p className="text-xs xs:text-sm text-ink/70 leading-relaxed mb-6">
                  Especialista dedicado a la excelencia en cada carilla. Mi compromiso es con la calidad estética y tu bienestar bucal a largo plazo. Diseño sonrisas que transforman tu apariencia mientras cuidan tu salud dental durante años.
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gold/10">
                  <div className="flex items-center gap-2.5">
                    <p className="text-2xl font-serif text-gold font-bold">100%</p>
                    <div className="leading-tight">
                      <p className="text-[9px] uppercase tracking-widest font-extrabold text-ink/80">Ética</p>
                      <p className="text-[8px] text-ink/40">Sin sobre-tratamiento</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <p className="text-2xl font-serif text-gold font-bold">2026</p>
                    <div className="leading-tight">
                      <p className="text-[9px] uppercase tracking-widest font-extrabold text-ink/80">Vanguardia</p>
                      <p className="text-[8px] text-ink/40">Guadalajara Premier</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Portrait container with outstanding overlapping look */}
              <div className="relative flex justify-center w-full md:w-auto shrink-0 mt-2">
                <div className="absolute inset-0 bg-gold/10 rounded-2xl rotate-3 scale-102" />
                <div className="relative w-36 h-36 xs:w-40 xs:h-40 rounded-2xl overflow-hidden shadow-lg border-2 border-white aspect-square">
                  <img 
                    src="https://i.postimg.cc/wxfrHkq2/IMG-3316.jpg" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    alt="Dr. Jorge Flores Especialista Carillas"
                  />
                </div>
                <div className="absolute bottom-1 -right-1 bg-gold text-white p-1.5 rounded-lg shadow-lg">
                  <CheckCircle2 size={16} fill="white" className="text-gold" />
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* "¿Te identificas?" Empathy Section */}
      <section className="py-16 bg-white border-t border-b border-ink/5">
        <div className="w-full max-w-3xl mx-auto px-4 xs:px-6 text-center">
          <div className="flex justify-center mb-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold bg-gold/10 px-3 py-1 rounded-full">Pregunta honesta</span>
          </div>
          <h2 className="text-2xl xs:text-3xl font-serif text-ink mb-8">
            ¿Te <span className="italic text-gold">identificas</span> con algo de esto?
          </h2>
          
          <div className="flex flex-col gap-4 text-left">
            {[
              "Sientes que tu sonrisa no refleja quién realmente eres.",
              "Has consultado antes, pero no te dieron un plan claro ni personalizado.",
              "Te preocupa que un tratamiento dental se vea artificial o fuera de lugar.",
              "Quieres un cambio real, pero no sabes por dónde empezar."
            ].map((text, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-paper p-4 xs:p-5 rounded-2xl border border-gold/10 flex gap-4 items-start hover:border-gold/30 hover:shadow-sm transition-all"
              >
                <div className="w-6 h-6 rounded-full bg-gold/10 text-gold flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-xs xs:text-sm text-ink/85 leading-relaxed font-medium">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths Section - Converted to Sleek Stack Cards with numbers for Phone */}
      <section className="py-16 bg-ink text-white relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full filter blur-[50px]" />
        
        <div className="w-full max-w-7xl mx-auto px-4 xs:px-6">
          <div className="text-center md:text-left mb-10">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold block mb-2">¿Por qué elegirnos?</span>
            <h2 className="text-2xl xs:text-3xl font-serif text-white">Nuestro Compromiso <br className="xs:hidden" /> <span className="italic text-gold">Inquebrantable</span></h2>
          </div>

          <div className="flex flex-col gap-5 md:grid md:grid-cols-3 md:gap-8">
            {STRENGTHS.map((strength, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true, margin: "-20px" }}
                className="bg-white/5 p-5 rounded-2xl border border-white/10 flex gap-4 items-start active:bg-white/10 transition-colors"
                id={`strength-card-${idx}`}
              >
                {/* Gold numeric index for systematic lookup */}
                <div className="text-gold font-serif text-sm tracking-wide font-bold mt-1.5 selection:bg-gold/40">
                  {strength.number}
                </div>
                
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1.5">
                    <strength.icon className="text-gold shrink-0" size={18} />
                    <h3 className="text-base font-serif font-semibold text-white">{strength.title}</h3>
                  </div>
                  <p className="text-xs xs:text-sm text-white/70 leading-relaxed font-light">{strength.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Beautiful Editorial Cards for Mobile Screen sizes */}
      <section id="servicios" className="py-16 bg-paper">
        <div className="w-full max-w-7xl mx-auto px-4 xs:px-6">
          
          <div className="text-center mb-10">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold block mb-2">Tratamientos Especializados</span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif text-balance">
              Nuestros Servicios <span className="italic text-gold">Premium</span>
            </h2>
            <div className="w-12 h-0.5 bg-gold mx-auto rounded-full mt-3" />
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                className="bg-white p-5 xs:p-7 rounded-[2rem] shadow-sm border border-gold/10 flex flex-col justify-between active:border-gold/30 transition-all duration-300"
                id={`service-card-${idx}`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[9px] uppercase tracking-widest font-extrabold text-gold px-2.5 py-1 rounded bg-gold/10">
                      {service.tag}
                    </span>
                    <span className="text-xs font-serif text-ink/30 uppercase">0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl xs:text-2xl font-serif mb-3 leading-tight text-ink">{service.title}</h3>
                  <p className="text-xs xs:text-sm text-ink/60 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {service.pricePromo && (
                    <div className="mb-6 bg-gold/5 border border-gold/15 p-4 rounded-2xl flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[8px] uppercase tracking-widest text-ink/40 font-bold block mb-0.5">Precio Especial</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm line-through text-ink/30 font-medium">{service.priceOriginal}</span>
                          <span className="text-lg xs:text-xl font-bold text-gold font-serif">{service.pricePromo}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block bg-gold text-white text-[8px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full mb-0.5">
                          Descuento
                        </span>
                        <p className="text-[9px] text-ink/70 font-semibold">{service.priceNote}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="h-px bg-ink/5 w-full my-5" />
                  
                  <ul className="grid grid-cols-1 xs:grid-cols-2 gap-3 mb-8">
                    {["Materiales de importación", "Diseño personalizado", "Mínima invasión", "Garantía de satisfacción"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-ink/80 font-medium">
                        <CheckCircle2 size={14} className="text-gold shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button 
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('formulario')} 
                  className="w-full py-3.5 rounded-xl border border-ink/10 font-bold uppercase tracking-widest text-[10px] text-ink hover:bg-ink hover:text-white transition-all duration-300 text-center block"
                >
                  Solicita más información
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformaciones Reales Section - Horizontal 16:9 Slideshow */}
      <section className="py-16 bg-paper border-t border-ink/5 overflow-hidden">
        <div className="w-full max-w-xl mx-auto px-4 xs:px-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl xs:text-3xl font-serif text-ink">Transformaciones <span className="italic text-gold">Reales</span></h2>
          </div>

          <div className="relative">
            {/* Horizontal aspect-[16/9] frame with sliding animation */}
            <div className="w-full aspect-[16/9] bg-stone-900 rounded-[2rem] border border-gold/15 overflow-hidden shadow-md relative group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTransformation}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img 
                    src={REAL_TRANSFORMATIONS[activeTransformation].image} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    alt={`Caso ${activeTransformation + 1} - Carillas de Porcelana`}
                  />
                  
                  {/* Left-top Indicator Badge */}
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] font-bold text-white tracking-widest uppercase border border-white/10">
                    Caso {activeTransformation + 1} de {REAL_TRANSFORMATIONS.length}
                  </div>

                  {/* Right-top technique badge */}
                  <div className="absolute top-4 right-4 bg-gold/90 text-white px-2.5 py-1 rounded-full text-[8px] font-extrabold uppercase tracking-widest">
                    {REAL_TRANSFORMATIONS[activeTransformation].technique}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Left/Right Click Navigative overlay buttons for immediate touch-friendliness */}
              <button 
                onClick={() => {
                  setActiveTransformation((prev) => (prev - 1 + REAL_TRANSFORMATIONS.length) % REAL_TRANSFORMATIONS.length);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/5 active:bg-black/75 z-25 text-white"
                aria-label="Anterior"
              >
                <ChevronRight size={16} className="rotate-180 text-white" />
              </button>

              <button 
                onClick={() => {
                  setActiveTransformation((prev) => (prev + 1) % REAL_TRANSFORMATIONS.length);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/5 active:bg-black/75 z-25 text-white"
                aria-label="Siguiente"
              >
                <ChevronRight size={16} className="text-white" />
              </button>
            </div>

            {/* Pagination Bullet Indicators - Tap to directly go to slide and restart the timer */}
            <div className="flex justify-center items-center gap-3 mt-4">
              {REAL_TRANSFORMATIONS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTransformation(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeTransformation ? "w-6 bg-gold" : "w-2 bg-gold/30 hover:bg-gold/50"
                  }`}
                  aria-label={`Ir al caso de éxito ${idx + 1}`}
                />
              ))}
            </div>
            
            <p className="text-[10px] text-center tracking-wider text-ink/50 font-bold mt-3.5">
              Los resultados varían por cada paciente
            </p>
          </div>
        </div>
      </section>

      {/* Form / Conversion Section - Maximum width layout so text inputting holds nicely */}
      <section id="formulario" className="py-16 bg-paper/50 border-t border-b border-ink/5">
        <div className="w-full max-w-4xl mx-auto px-4 xs:px-6">
          <div className="flex flex-col items-center">
            
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold block mb-2">Sesión de cortesía</span>
            <h3 className="text-xl xs:text-2xl sm:text-3xl font-serif text-center text-ink mb-6 text-balance">
              Agenda una sesión de <span className="italic text-gold">valoración gratuita</span>
            </h3>

            {/* Subtext highlighting response time */}
            <p className="text-xs text-ink/50 text-center max-w-md -mt-3 mb-6">
              Recibe orientación estética personalizada directamente con el Dr. Jorge Flores.
            </p>

            {/* Dynamic Iframe Shell with thin golden outline and absolute margins safety */}
            <div className="w-full bg-gold/5 p-1.5 xs:p-3 sm:p-6 rounded-2xl border border-gold/15 overflow-hidden min-h-[758px]">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/CsKJR0HLUcXRbyRYfdrL"
                style={{ width: '100%', height: '758px', border: 'none', borderRadius: '12px' }}
                id="inline-CsKJR0HLUcXRbyRYfdrL" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Form 0"
                data-height="758"
                data-layout-iframe-id="inline-CsKJR0HLUcXRbyRYfdrL"
                data-form-id="CsKJR0HLUcXRbyRYfdrL"
                title="Agenda Dental"
              ></iframe>
            </div>

            <p className="text-[10px] text-ink/40 uppercase tracking-widest text-center mt-4">
              🛡️ Tus datos personales están protegidos con confidencialidad médica
            </p>

          </div>
        </div>
      </section>

      {/* Contact, Location & Hours Section */}
      <section id="contacto" className="py-16 bg-ink text-white relative">
        <div className="absolute top-10 left-0 w-32 h-32 bg-gold/5 rounded-full filter blur-[50px]" />

        <div className="w-full max-w-7xl mx-auto px-4 xs:px-6">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
            
            {/* Contact left info column */}
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold block mb-2">Canales de Atención</span>
              <h2 className="text-2xl xs:text-3xl font-serif text-white mb-8">
                Visítanos en <span className="italic text-gold">Guadalajara</span>
              </h2>

              <div className="flex flex-col gap-6">
                
                {/* Contact section */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 mt-1">
                    <Phone className="text-gold" size={18} />
                  </div>
                  <div>
                    <h4 className="text-base font-serif font-semibold text-white mb-1">Agenda tu Sesión</h4>
                    <p className="text-xs text-white/70 leading-relaxed">
                      Contáctanos de inmediato usando nuestro formulario y agenda tu sesión de valoración.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-white/5 w-full my-1" />

                {/* Hours table */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 mt-1">
                    <Clock className="text-gold" size={18} />
                  </div>
                  <div className="w-full">
                    <h4 className="text-base font-serif font-semibold text-white mb-2">Horarios de Atención</h4>
                    <div className="text-xs text-white/60 space-y-1.5 bg-white/5 p-3.5 rounded-xl border border-white/5">
                      <div className="flex justify-between">
                        <span>Lunes, Martes y Jueves</span>
                        <span className="text-white font-medium">10:00 AM – 7:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Miércoles</span>
                        <span className="text-white font-medium">10:00 AM – 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Viernes</span>
                        <span className="text-white font-medium">10:00 AM – 7:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sábado</span>
                        <span className="text-white font-medium">9:00 AM – 2:00 PM</span>
                      </div>
                      <div className="flex justify-between text-white/30 italic">
                        <span>Domingos</span>
                        <span>Cerrado</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-white/5 w-full my-1" />

                {/* Location item */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 mt-1">
                    <MapPin className="text-gold" size={18} />
                  </div>
                  <div>
                    <h4 className="text-base font-serif font-semibold text-white mb-1">Ubicación</h4>
                    <p className="text-xs text-white/60 leading-relaxed">Sierra Morena 326, Independencia Oriente</p>
                    <p className="text-gold text-xs font-semibold tracking-wide">44340 Guadalajara, Jal.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Map column - Centered map viewer */}
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold block mb-1">Mapa Interactivo</span>
              <div className="rounded-2xl overflow-hidden border border-white/10 h-64 md:h-full min-h-[250px] relative shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.766158765432!2d-103.3304567!3d20.6902345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1e3db93fb23%3A0xf459e1fffcdc6bd8!2sDr%20Jorge%20Flores%20Dentista%20-%20Carillas%20GDL!5e0!3m2!1ses-419!2smx!4v1708900000000!5m2!1ses-419!2smx" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dr. Jorge Flores Guadalajara Map"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Details */}
      <footer className="py-12 bg-paper border-t border-ink/5 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 flex flex-col items-center justify-center text-center gap-6">
          <div className="flex flex-col items-center">
            <span className="text-xl font-serif font-bold tracking-tight text-ink">DR. JORGE FLORES</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-gold font-extrabold mt-0.5">Estética Dental • Guadalajara</span>
          </div>
          
          <div className="h-px bg-ink/5 w-24" />

          <p className="text-[9px] uppercase tracking-widest font-semibold text-ink/40 max-w-xs leading-relaxed">
            © 2026 Dr. Jorge Flores. Todos los derechos reservados. <br className="xs:inline" />
            Especialista en Carillas y Estética Dental.
          </p>
        </div>
      </footer>



    </div>
  );
}
