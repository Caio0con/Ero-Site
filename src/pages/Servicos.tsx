import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Building, FileText, Users, Settings, ClipboardList, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Building,
    title: "Engenharia Civil",
    description: "Projetos para rodovias e infraestrutura, com qualidade técnica, segurança e eficiência."  ,
    features: ["Projetos estruturais", "Pintura e Instalação de Sinalização", "Construção e Manutenção", "Laudos técnicos"],
  },
  {
    icon: ClipboardList,
    title: "Gestão de Projetos",
    description: "Planejamento, execução e controle de obras utilizando metodologias ágeis e ferramentas modernas.",
    features: ["Cronogramas detalhados", "Controle de custos", "Gestão de equipes", "Relatórios executivos"],
  },
  {
    icon: FileText,
    title: "Consultoria Técnica",
    description: "Assessoria especializada para tomada de decisões estratégicas em seus empreendimentos.",
    features: ["Análise de viabilidade", "Due diligence", "Pareceres técnicos", "Auditorias"],
  },
  {
    icon: Settings,
    title: "Administração de Obras",
    description: "Gerenciamento completo de obras, desde a fundação até a entrega das chaves.",
    features: ["Fiscalização", "Controle de qualidade", "Gestão de contratos", "Medições"],
  },
  {
    icon: Shield,
    title: "Regularização",
    description: "Legalização e regularização de imóveis junto aos órgãos competentes.",
    features: ["Habite-se", "AVCB", "Alvarás", "Regularização fundiária"],
  },
  {
    icon: Users,
    title: "Treinamentos",
    description: "Capacitação de equipes em segurança do trabalho e boas práticas de construção.",
    features: ["NR's", "Segurança do trabalho", "Gestão de obras", "Sustentabilidade"],
  },
];

const Servicos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent font-semibold rounded-full text-sm mb-6">
              Serviços
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Soluções Completas em <span className="text-accent">Engenharia</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Oferecemos uma gama completa de serviços para atender todas as suas necessidades
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 card-hover bg-card border-0 shadow-card group"
              >
                <div className="inline-flex p-4 bg-accent/10 rounded-xl mb-6 group-hover:bg-accent transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Como Trabalhamos</h2>
            <p className="section-subtitle mx-auto mt-4">
              Nosso processo garante resultados excepcionais em cada etapa
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consulta", desc: "Entendemos suas necessidades" },
              { step: "02", title: "Planejamento", desc: "Desenvolvemos a estratégia" },
              { step: "03", title: "Execução", desc: "Implementamos com excelência" },
              { step: "04", title: "Entrega", desc: "Resultados que superam" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-heading font-bold text-accent/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Precisa de um Orçamento?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Entre em contato conosco e receba uma proposta personalizada para o seu projeto
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-gold-dark transition-colors duration-300"
          >
            Solicitar Orçamento <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Servicos;
