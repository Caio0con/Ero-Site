import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
    title: "Construindo o Futuro",
    subtitle: "Soluções inovadoras em engenharia e administração para grandes projetos",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
    title: "Excelência em Cada Detalhe",
    subtitle: "Compromisso com qualidade e prazos em todas as etapas do projeto",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80",
    title: "Experiência e Inovação",
    subtitle: "Mais de uma década transformando ideias em realidade",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80",
    title: "Gestão Profissional",
    subtitle: "Administração eficiente para resultados extraordinários",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/70 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-2xl">
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight ${
                  index === currentSlide ? "animate-slide-in-left" : ""
                }`}
                style={{ animationDelay: "0.2s" }}
              >
                {slide.title}
              </h1>
              <p
                className={`text-lg md:text-xl text-primary-foreground/80 mb-8 ${
                  index === currentSlide ? "animate-slide-in-left" : ""
                }`}
                style={{ animationDelay: "0.4s" }}
              >
                {slide.subtitle}
              </p>
              <div
                className={`flex gap-4 ${
                  index === currentSlide ? "animate-fade-in" : ""
                }`}
                style={{ animationDelay: "0.6s" }}
              >
                    <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-gold-dark font-semibold px-8"
                >
                  <Link to="/servicos">Nossos Serviços</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8"
                >
                  <Link to="/contato">Fale Conosco</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={() => {
          prevSlide();
          setIsAutoPlaying(false);
          setTimeout(() => setIsAutoPlaying(true), 5000);
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
      >
        <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={() => {
          nextSlide();
          setIsAutoPlaying(false);
          setTimeout(() => setIsAutoPlaying(true), 5000);
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
      >
        <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-10 bg-accent"
                : "w-3 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
export default HeroCarousel;