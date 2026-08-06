import React, { useState } from 'react';
import { Mail, Phone, MapPin, Building2, User, Globe, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import translations from '../locales';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    market: '',
    sector: '',
    message: '',
    newsletter: false,
    privacy: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí van tus credenciales de EmailJS (obtenidas en el paso 3 y 4)
    const SERVICE_ID = 'service_godvb4f'; // Reemplaza con tu Service ID
    const TEMPLATE_ID = 'template_igkalfh'; // Reemplaza con tu Template ID
    const PUBLIC_KEY = '9EKJ9Kh_CV3PaDuDL'; // Reemplaza con tu Public Key (User ID)

    const templateParams = {
      fullName: formData.fullName,
      company: formData.company,
      email: formData.email,
      market: formData.market,
      sector: formData.sector,
      message: formData.message,
      newsletter: formData.newsletter ? 'Sí' : 'No',
      privacy: formData.privacy ? 'Aceptada' : 'No aceptada',
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('Correo enviado exitosamente:', response);
        alert('Mensaje enviado correctamente. Nos pondremos en contacto pronto.');
        // Resetear el formulario
        setFormData({
          fullName: '',
          company: '',
          email: '',
          market: '',
          sector: '',
          message: '',
          newsletter: false,
          privacy: false,
        });
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        alert('Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
      });
  };

  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative bg-white py-24 md:py-32 px-6 md:px-16 overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* ENCABEZADO DE SECCIÓN DE ALTA FIDELIDAD */}
        <div className="mb-8 md:mb-14">
          <p className="text-[#2d61e0] font-montserrat font-bold tracking-[0.4em] uppercase text-[11px] mb-4 block">
            {t.contact.kicker}
          </p>
          <h2 className="text-slate-900 font-montserrat text-2xl md:text-4xl lg:text-[40px] font-semibold leading-tight tracking-wide mb-6">
            {t.contact.title}
          </h2>
          <div className="w-16 h-[2px] bg-[#2d61e0] mb-6" />
          <p className="text-black font-montserrat text-sm md:text-base font-light leading-relaxed tracking-wide max-w-4xl">
            {t.contact.paragraph}
          </p>
        </div>

        {/* ESTRUCTURA RETICULAR ASIMÉTRICA: DOS COLUMNAS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* COLUMNA IZQUIERDA: DATOS INSTITUCIONALES E IMAGEN CORPORATIVA */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Corporativo / Sede Central */}
            <div className="space-y-4 mb-4">
              <h4 className="text-slate-900 font-montserrat text-xs font-bold uppercase tracking-[0.3em] text-[#2d61e0]">
                {t.contact.addressLabel}
              </h4>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-slate-50 border border-slate-200 text-slate-700 transition-colors duration-300 group-hover:bg-[#2d61e0] group-hover:text-white">
                  <MapPin className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <h5 className="font-montserrat font-semibold text-slate-900 text-base">WeProm Europe</h5>
                  <p className="text-black font-montserrat text-base font-light mt-1">
                    {/* 142 Rue de Rivoli, 75001 Paris, France */}
                     {t.contact.address}
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* Canales Confidenciales y Direcciones */}
            <div className="space-y-6">
              <h4 className="text-slate-900 font-montserrat text-xs font-bold uppercase tracking-[0.3em] text-[#2d61e0]">
                {t.contact.channels}
              </h4>

              {/* Información General */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-slate-50 border border-slate-200 text-slate-700 transition-colors duration-300 group-hover:bg-[#2d61e0] group-hover:text-white">
                  <Mail className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-600">{t.contact.emails.info}</span>
                  <a href="mailto:info@wepromeurope.com" className="text-slate-900 font-montserrat text-base hover:text-[#2d61e0] transition-colors duration-300">
                    contact@wepromeurope.com
                  </a>
                </div>
              </div>

              {/* <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-slate-50 border border-slate-200 text-slate-700 transition-colors duration-300 group-hover:bg-[#2d61e0] group-hover:text-white">
                  <Mail className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-700">{t.contact.emails.commercial}</span>
                  <a href="mailto:lisa.lenselle@wepromeurope.com" className="text-slate-900 font-montserrat text-base hover:text-[#2d61e0] transition-colors duration-300">
                    lisa.lenselle@wepromeurope.com
                  </a>
                </div>
              </div>


              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-slate-50 border border-slate-200 text-slate-700 transition-colors duration-300 group-hover:bg-[#2d61e0] group-hover:text-white">
                  <Mail className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-700">{t.contact.emails.communication}</span>
                  <a href="mailto:emilia.lopez@wepromeurope.com" className="text-slate-900 font-montserrat text-base hover:text-[#2d61e0] transition-colors duration-300">
                    emilia.lopez@wepromeurope.com  
                  </a>
                </div>
              </div> */}

              {/* Dirección General */}
              {/* <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-slate-50 border border-slate-200 text-slate-700 transition-colors duration-300 group-hover:bg-[#2d61e0] group-hover:text-white">
                  <Mail className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Dirección General</span>
                  <a href="mailto:jose.ventura@wepromeurope.com" className="text-slate-900 font-montserrat text-base hover:text-[#2d61e0] transition-colors duration-300">
                    jose.ventura@wepromeurope.com
                  </a>
                </div>
              </div> */}

              {/* Teléfono / WhatsApp */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-slate-50 border border-slate-200 text-slate-700 transition-colors duration-300 group-hover:bg-[#2d61e0] group-hover:text-white">
                  <Phone className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">{t.contact.emails.phone}</span>
                  <a href="https://wa.me/33759937277" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-montserrat text-base hover:text-[#2d61e0] transition-colors duration-300">
                    +33 7 59 93 72 77
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA: FORMULARIO CORPORATIVO DE ALTA GAMA */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/60 p-8 md:p-12 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nombre completo */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-700 block">
                    {t.contact.form.name}
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 stroke-[1.5]" />
                    <input 
                      type="text" 
                      required
                      placeholder="Ej. Alexander von Humboldt" 
                      className="w-full bg-white border border-slate-200 pl-11 pr-4 py-3.5 text-sm text-slate-900 font-montserrat focus:border-[#2d61e0] outline-none transition-all shadow-inner"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>
                </div>

                {/* Empresa o institución */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-700 block">
                    {t.contact.form.company}
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 stroke-[1.5]" />
                    <input 
                      type="text" 
                      placeholder="Nombre de la organización" 
                      className="w-full bg-white border border-slate-200 pl-11 pr-4 py-3.5 text-sm text-slate-900 font-montserrat focus:border-[#2d61e0] outline-none transition-all shadow-inner"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-700 block">
                    {t.contact.form.email}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 stroke-[1.5]" />
                    <input 
                      type="email" 
                      required
                      placeholder="ejemplo@organizacion.com" 
                      className="w-full bg-white border border-slate-200 pl-11 pr-4 py-3.5 text-sm text-slate-900 font-montserrat focus:border-[#2d61e0] outline-none transition-all shadow-inner"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                {/* Mercado de interés */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-700 block">
                    {t.contact.form.market}
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 stroke-[1.5] pointer-events-none" />
                    <select 
                      className="w-full bg-white border border-slate-200 pl-11 pr-4 py-3.5 text-sm text-slate-900 font-montserrat focus:border-[#2d61e0] outline-none transition-all appearance-none cursor-pointer shadow-inner"
                      value={formData.market}
                      onChange={(e) => setFormData({...formData, market: e.target.value})}
                    >
                      <option value="" disabled>{t.contact.form.market}</option>
                      <option value="Europa">{t.contact.form.marketOptions.europe}</option>
                      <option value="América Latina">{t.contact.form.marketOptions.latam}</option>
                      <option value="Ambos">{t.contact.form.marketOptions.both}</option>
                      <option value="Otro">{t.contact.form.marketOptions.other}</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Sector */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-700 block">
                  {t.contact.form.sector}
                </label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 stroke-[1.5]" />
                  <input 
                    type="text" 
                    placeholder="Ej. Logística, Fintech, Agroalimentario" 
                    className="w-full bg-white border border-slate-200 pl-11 pr-4 py-3.5 text-sm text-slate-900 font-montserrat focus:border-[#2d61e0] outline-none transition-all shadow-inner"
                    value={formData.sector}
                    onChange={(e) => setFormData({...formData, sector: e.target.value})}
                  />
                </div>
              </div>

              {/* Mensaje */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-700 block">
                  {t.contact.form.message}
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-slate-400 stroke-[1.5]" />
                  <textarea 
                    rows="4" 
                    required
                    placeholder="Describe detalladamente los alcances o requerimientos estratégicos de tu consulta corporativa..." 
                    className="w-full bg-white border border-slate-200 pl-11 pr-4 py-4 text-sm text-slate-900 font-montserrat focus:border-[#2d61e0] outline-none transition-all resize-none shadow-inner leading-relaxed"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
              </div>

              {/* Casillas de Verificación y Consentimiento */}
              <div className="space-y-3 pt-2">
                {/* Suscribirme al Newsletter */}
                <label className="flex items-start gap-3 cursor-pointer select-none group">
                  <input 
                    type="checkbox" 
                    className="mt-0.5 w-4 h-4 border-slate-300 rounded text-[#2d61e0] focus:ring-[#2d61e0]"
                    checked={formData.newsletter}
                    onChange={(e) => setFormData({...formData, newsletter: e.target.checked})}
                  />
                  <span className="text-xs text-slate-600 font-montserrat font-light leading-snug group-hover:text-slate-900 transition-colors">
                    {t.contact.form.newsletter}
                  </span>
                </label>

                {/* Política de privacidad */}
                <label className="flex items-start gap-3 cursor-pointer select-none group">
                  <input 
                    type="checkbox" 
                    required
                    className="mt-0.5 w-4 h-4 border-slate-300 rounded text-[#2d61e0] focus:ring-[#2d61e0]"
                    checked={formData.privacy}
                    onChange={(e) => setFormData({...formData, privacy: e.target.checked})}
                  />
                  <span className="text-xs text-slate-600 font-montserrat font-light leading-snug group-hover:text-slate-900 transition-colors">
                    {t.contact.form.privacy}
                  </span>
                </label>
              </div>

              {/* Botón de Envío Premium */}
              <div className="pt-4">
                <button 
                  type="submit" 
                  className="group relative w-full overflow-hidden bg-slate-900 border border-slate-900 text-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-500 hover:bg-[#2d61e0] hover:border-[#2d61e0] flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>{t.contact.form.submit}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};