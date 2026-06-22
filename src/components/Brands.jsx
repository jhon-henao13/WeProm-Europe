import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

// Rutas corregidas saliendo de src/components hacia src/assets/brands
import Cinepolis from '../assets/brands/Cinepolis.png';
import GrupoCaliente from '../assets/brands/Grupo_Caliente_Logo.png';
import Heineken from '../assets/brands/Heineken-Logo.png';
import Ford from '../assets/brands/LogoFord.png';
import KIA from '../assets/brands/LogoKIA.webp';
import Macdonalds from '../assets/brands/MACDONALDS-min.png';
import MercedesBenz from '../assets/brands/mercedes.png';
import Nissan from '../assets/brands/Nissan.png';
import Pepsico from '../assets/brands/PEPSICO-min.png';
import Televisa from '../assets/brands/TELEVISA-min.png';
import Volkswagen from '../assets/brands/Volkswagen_logopng.png';

const brands = [
    { name: 'Cinepolis', src: Cinepolis, alt: 'Cinepolis Logo' },
    { name: 'Grupo Caliente', src: GrupoCaliente, alt: 'Grupo Caliente Logo' },
    { name: 'Heineken', src: Heineken, alt: 'Heineken Logo', sizeClass: 'h-16 sm:h-20 md:h-24' },
    { name: 'Ford', src: Ford, alt: 'Ford Logo', sizeClass: 'h-8 sm:h-10 md:h-14' },
    { name: 'KIA', src: KIA, alt: 'KIA Logo', sizeClass: 'h-20 sm:h-24 md:h-28' },
    { name: "McDonald's", src: Macdonalds, alt: "McDonald's Logo", sizeClass: 'h-16 sm:h-18 md:h-20' },
    { name: 'Mercedes-Benz', src: MercedesBenz, alt: 'Mercedes-Benz Logo', sizeClass: 'h-16 sm:h-18 md:h-20' },
    { name: 'Nissan', src: Nissan, alt: 'Nissan Logo', sizeClass: 'h-16 sm:h-18 md:h-20' },
    { name: 'Pepsico', src: Pepsico, alt: 'Pepsico Logo' },
    { name: 'Televisa', src: Televisa, alt: 'Televisa Logo', sizeClass: 'h-16 sm:h-18 md:h-20' },
    { name: 'Volkswagen', src: Volkswagen, alt: 'Volkswagen Logo', sizeClass: 'h-16 sm:h-18 md:h-20' },
];

const allBrands = [...brands, ...brands];

export default function TwoSectionBrands() {
    return (
        <section className="relative w-full pt-2 md:pt-6 pb-32 flex flex-col items-center justify-center overflow-hidden bg-transparent group font-montserrat select-none">
            
            {/* Texto superior */}
            <div className="text-center mb-16">
                <h1 className="font-aston text-5xl sm:text-4xl max-[666px]:!text-2xl font-medium text-white mt-2">
                    Han confiado en nosotros
                </h1>
            </div>

            {/* Contenedor Carrusel de Marcas */}
            <div className="relative w-full max-w-[1519px] mx-auto px-4 sm:px-8 z-10">
                <div className="absolute top-0 left-0 w-16 sm:w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-r from-black via-black/15 to-transparent opacity-50" />
                <div className="absolute top-0 right-0 w-16 sm:w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-l from-black via-black/15 to-transparent opacity-50" />

                <div className="relative flex items-center">
                    <button className="prev-brands absolute left-0 z-30 p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block">
                        <ChevronLeft size={40} strokeWidth={1} />
                    </button>
                    <button className="next-brands absolute right-0 z-30 p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block">
                        <ChevronRight size={40} strokeWidth={1} />
                    </button>

                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={30}
                        slidesPerView={2}
                        loop={true}
                        speed={4000}
                        autoplay={{ delay: 0, disableOnInteraction: false }}
                        navigation={{ prevEl: '.prev-brands', nextEl: '.next-brands' }}
                        breakpoints={{
                            480: { slidesPerView: 3, spaceBetween: 40 },
                            640: { slidesPerView: 3, spaceBetween: 50 },
                            1024: { slidesPerView: 5, spaceBetween: 50 },
                        }}
                        className="flex items-center"
                    >
                        {allBrands.map((brand, index) => (
                            <SwiperSlide key={index} className="flex items-center justify-center py-4">
                                <div className="flex items-center justify-center h-20 sm:h-24 w-full px-4 py-4 rounded-2xl bg-transparent shadow-lg transition-transform duration-500 hover:scale-105">
                                    <img
                                        src={brand.src}
                                        alt={brand.alt}
                                        className={`w-auto object-contain grayscale transition-all ${
                                            brand.sizeClass ? brand.sizeClass : 'h-7 sm:h-9 md:h-11'
                                        }`}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Botón CTA Gris Inferior */}
            <div className="mt-16 z-20">
                <button className="group relative px-8 py-3.5 bg-[#22252a] hover:bg-[#2d3138] text-white/90 hover:text-white border border-white/10 rounded-xl font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]">
                    Casos de éxito
                </button>
            </div>
            
        </section>
    );
}