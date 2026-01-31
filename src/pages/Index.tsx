import Layout from "@/components/Layout";
import HeroCarousel from "@/components/HeroCarousel";
import { Card } from "@/components/ui/card";
import { Building, Users, Award, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { icon: Building, value: "100+", label: "Projetos Realizados" },
  { icon: Users, value: "50+", label: "Clientes Satisfeitos" },
  { icon: Award, value: "20+", label: "Anos de Experiência" },
  // { icon: Target, value: "98%", label: "Taxa de Sucesso" },
];

const services = [
  {
    title: "Engenharia Civil",
    description: "Projetos para rodovias e infraestrutura, com qualidade técnica, segurança e eficiência.",
    icon: "🏗️",
  },
  {
    title: "Gestão de Projetos",
    description: "Planejamento e controle de obras com metodologias ágeis e eficientes.",
    icon: "📊",
  },
  {
    title: "Consultoria Técnica",
    description: "Assessoria especializada para tomada de decisões estratégicas.",
    icon: "💡",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <stat.icon className="h-10 w-10 mx-auto mb-4 text-accent" />
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full text-sm mb-6">
                Sobre Nós
              </span>
              <h2 className="section-title mb-6">
                Transformando Projetos em <span className="text-accent">Realidade</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A Ero Engenharia & Administração é uma empresa consolidada no mercado de engenharia e administração, 
                oferecendo soluções completas e integradas para projetos de todos os portes. 
                Nossa equipe de profissionais altamente qualificados está comprometida com a 
                excelência e a satisfação de n  ossos clientes.
              </p>
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-4 transition-all duration-300"
              >
                Conheça Nossa História <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="/img/rodovia2.jpg"
                  alt="Projeto Rodovia"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-heading font-bold">10+</div>
                <div className="text-sm">Anos de Mercado</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full text-sm mb-6">
              Serviços
            </span>
            <h2 className="section-title">Nossas Especialidades</h2>
            <p className="section-subtitle mx-auto mt-4">
              Oferecemos uma gama completa de serviços em engenharia e administração
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 card-hover bg-card border-0 shadow-card opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-navy-light transition-colors duration-300"
            >
              Ver Todos os Serviços <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Pronto para Iniciar Seu Projeto?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Entre em contato conosco e descubra como podemos transformar sua visão em realidade
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-gold-dark transition-colors duration-300"
          >
            Fale Conosco <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
