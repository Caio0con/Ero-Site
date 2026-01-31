import { useState } from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";

const categories = ["Todos", "Residencial", "Comercial", "Industrial", "Infraestrutura"];

const projects = [
  {
    id: 1,
    title: "Edifício Aurora",
    category: "Residencial",
    location: "São Paulo, SP",
    year: "2024",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    description: "Complexo residencial de alto padrão com 120 unidades",
  },
  {
    id: 2,
    title: "Centro Empresarial Prime",
    category: "Comercial",
    location: "Campinas, SP",
    year: "2023",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    description: "Centro de negócios com 25.000m² de área construída",
  },
  {
    id: 3,
    title: "Galpão Logístico ABC",
    category: "Industrial",
    location: "Santo André, SP",
    year: "2023",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    description: "Centro de distribuição com tecnologia de ponta",
  },
  {
    id: 4,
    title: "Ponte Rio Verde",
    category: "Infraestrutura",
    location: "Ribeirão Preto, SP",
    year: "2022",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    description: "Ponte estaiada com 450m de extensão",
  },
  {
    id: 5,
    title: "Condomínio Parque das Flores",
    category: "Residencial",
    location: "Sorocaba, SP",
    year: "2022",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    description: "Condomínio horizontal com 80 casas",
  },
  {
    id: 6,
    title: "Shopping Center Norte",
    category: "Comercial",
    location: "São Paulo, SP",
    year: "2021",
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&q=80",
    description: "Reforma e ampliação de centro comercial",
  },
];

const Projetos = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent font-semibold rounded-full text-sm mb-6">
              Portfólio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Nossos <span className="text-accent">Projetos</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Conheça alguns dos projetos que já realizamos com excelência
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden card-hover bg-card border-0 shadow-card group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 p-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.year}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {[
              { value: "100+", label: "Projetos Entregues" },
              { value: "1M+", label: "M² Construídos" },
              { value: "10+", label: "Estados Atendidos" },
              // { value: "98%", label: "Clientes Satisfeitos" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projetos;
