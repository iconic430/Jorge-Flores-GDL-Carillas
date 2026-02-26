/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
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
  X
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const SERVICES = [
  {
    title: "Carillas de Porcelana",
    description: "Restauraciones estéticas de alta gama que transforman tu sonrisa con naturalidad y durabilidad excepcional.",
  },
  {
    title: "Cerámica Híbrida",
    description: "Lo último en tecnología dental combinando la resistencia de la cerámica con la elasticidad de los polímeros.",
  }
];

const STRENGTHS = [
  {
    icon: ShieldCheck,
    title: "Ética y Honestidad",
    description: "Tu salud dental y periodontal es nuestra prioridad. Cambios estéticos sin comprometer tu bienestar."
  },
  {
    icon: Sparkles,
    title: "Alta Estética",
    description: "Resultados naturales diseñados meticulosamente para elevar tu imagen y estatus."
  },
  {
    icon: Star,
    title: "Tecnología de Punta",
    description: "Implementamos los últimos avances tecnológicos para procedimientos precisos y cómodos."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-paper selection:bg-gold/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-ink/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-serif font-semibold tracking-tight text-ink">DR. JORGE FLORES</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold -mt-1">Estética Dental Avanzada</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium uppercase tracking-widest text-ink/70">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#formulario" 
              className="bg-ink text-white px-6 py-3 rounded-full hover:bg-gold transition-all duration-300 shadow-lg shadow-ink/10"
            >
              Agendar Cita
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-ink" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-paper border-b border-ink/5 p-6 flex flex-col gap-6 text-center shadow-xl"
          >
            <motion.a 
              whileTap={{ scale: 0.95 }}
              href="#formulario" 
              onClick={() => setIsMenuOpen(false)} 
              className="bg-ink text-white px-8 py-4 rounded-full font-medium"
            >
              Agendar Cita
            </motion.a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles size={14} />
              <span>Sonrisas que proyectan éxito</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif leading-[1.1] md:leading-[0.9] mb-8 text-balance">
              Redefine tu <span className="italic text-gold">Imagen</span> a través de tu Sonrisa
            </h1>
            <p className="text-base md:text-lg text-ink/60 mb-10 max-w-2xl leading-relaxed">
              Especialista en carillas de porcelana y estética dental en Guadalajara. 
              Transformamos vidas con honestidad, tecnología y un compromiso inquebrantable con tu salud.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#formulario" 
                className="w-full sm:w-auto bg-ink text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-gold transition-all duration-300 shadow-xl shadow-ink/20 flex items-center justify-center gap-2 group"
              >
                Agendar Consulta
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/patient${i}/100/100`} 
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-paper object-cover"
                      referrerPolicy="no-referrer"
                      alt="Paciente"
                    />
                  ))}
                </div>
                <div className="text-left text-xs md:text-sm">
                  <div className="flex text-gold">
                    {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
                  </div>
                  <p className="text-ink/60 font-medium">+500 Sonrisas</p>
                </div>
              </div>
            </div>

            {/* New Integrated About Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid md:grid-cols-[1fr_180px] gap-8 items-center bg-gold/5 p-6 md:p-8 rounded-[2rem] border border-gold/10 text-left w-full"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-serif mb-4">Pasión por la <span className="italic text-gold">Excelencia</span></h2>
                <p className="text-xs md:text-sm text-ink/70 leading-relaxed mb-6">
                  Me considero un profesional con ambición, enfocado en cumplir metas y propósitos que eleven el estándar de la odontología estética. Mi enfoque es proactivo y me mantengo en constante actualización para ofrecerte lo mejor.
                </p>
                <div className="flex gap-8">
                  <div>
                    <p className="text-xl md:text-2xl font-serif text-gold font-bold">100%</p>
                    <p className="text-[8px] uppercase tracking-widest font-bold text-ink/40">Ética</p>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-serif text-gold font-bold">2024</p>
                    <p className="text-[8px] uppercase tracking-widest font-bold text-ink/40">Tecnología</p>
                  </div>
                </div>
              </div>
              <div className="relative group mx-auto md:mx-0">
                <div className="w-40 h-40 md:w-44 md:h-44 rounded-2xl overflow-hidden shadow-lg border-2 border-white aspect-square">
                  <img 
                    src="https://i.postimg.cc/wxfrHkq2/IMG-3316.jpg" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    alt="Dr. Jorge Flores"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-gold text-white p-1.5 rounded-lg shadow-lg">
                  <CheckCircle2 size={14} />
                </div>
              </div>
            </motion.div>

            {/* Moved Form Section */}
            <div id="formulario" className="flex flex-col gap-8 mt-12 w-full">
              <h3 className="text-2xl md:text-3xl font-serif text-center text-gold">Agenda una sesión de valoración gratuita</h3>
              <div className="bg-gold/5 p-10 rounded-[3rem] border border-gold/10 flex items-center justify-center min-h-[300px]">
                <div className="border-2 border-dashed border-gold/20 rounded-2xl p-12 text-center">
                  <span className="text-2xl font-serif text-gold/40 uppercase tracking-widest">Formulario</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-24 bg-ink text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {STRENGTHS.map((strength, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors border border-white/10">
                  <strength.icon className="text-gold" size={32} />
                </div>
                <h3 className="text-2xl font-serif mb-4">{strength.title}</h3>
                <p className="text-white/60 leading-relaxed">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6 text-balance">Nuestros Servicios <span className="italic text-gold">Premium</span></h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-ink/5 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-3xl font-serif">{service.title}</h3>
                </div>
                <p className="text-ink/60 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-10">
                  {["Materiales de importación", "Diseño personalizado", "Mínima invasión"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-ink/80">
                      <CheckCircle2 size={18} className="text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#formulario" 
                  className="w-full py-4 rounded-full border border-ink/10 font-bold uppercase tracking-widest text-xs hover:bg-ink hover:text-white transition-all duration-300 text-center block"
                >
                  Solicita más información
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Contact & Location Section */}
      <section id="contacto" className="py-32 bg-ink text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif mb-12">Visítanos en <span className="italic text-gold">Guadalajara</span></h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <Phone className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">Contacto Directo</h4>
                    <p className="text-white/60 mb-2">¿Tienes alguna duda? Rellena el formulario y te contactaremos en breve</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <Clock className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">Horarios de Atención</h4>
                    <div className="text-white/60 space-y-1">
                      <p>Lunes a Viernes: 10:00 AM – 7:00 PM</p>
                      <p>Sábado: 10:00 AM – 3:00 PM</p>
                      <p className="text-white/30 italic">Domingo: Cerrado</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <MapPin className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">Ubicación</h4>
                    <p className="text-white/60">Sierra Morena 326, Independencia Oriente</p>
                    <p className="text-gold text-sm mt-1 font-medium">44340 Guadalajara, Jal.</p>
                    <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 h-48 md:h-64">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.766158765432!2d-103.3304567!3d20.6902345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1e3db93fb23%3A0xf459e1fffcdc6bd8!2sDr%20Jorge%20Flores%20Dentista%20-%20Carillas%20GDL!5e0!3m2!1ses-419!2smx!4v1708900000000!5m2!1ses-419!2smx" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-ink/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-serif font-semibold tracking-tight text-ink">DR. JORGE FLORES</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-gold font-bold">Estética Dental • Guadalajara</span>
          </div>
          


          <p className="text-[10px] uppercase tracking-widest font-bold text-ink/40">
            © 2024 Dr. Jorge Flores. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
