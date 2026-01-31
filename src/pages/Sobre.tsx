import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { CheckCircle, Users, Target, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Missão",
    description: "Entregar soluções  com excelência, superando as expectativas de nossos clientes.",
  },
  {
    icon: Users,
    title: "Visão",
    description: "Ser referência nacional em engenharia e gestão de projetos, reconhecidos pela qualidade e inovação.",
  },
  {
    icon: Award,
    title: "Valores",
    description: "Ética, comprometimento, qualidade, inovação e respeito ao meio ambiente em tudo que fazemos.",
  },
];

const differentials = [
  "Equipe técnica altamente qualificada",
  "Tecnologia de ponta em gestão de projetos",
  "Compromisso com prazos e orçamentos",
  "Atendimento personalizado",
  "Soluções sustentáveis",
  "Suporte pós-entrega",
];

const team = [
  {
    name: "Carlos Silva",
    role: "Diretor de Engenharia",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Ana Rodrigues",
    role: "Diretora Administrativa",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Roberto Santos",
    role: "Gerente de Projetos",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Felipe Almeida",
    role: "Engenheiro Civil",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&q=80",
  },
  {
    name: "Juliana Ferreira",
    role: "Analista de Projetos",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80",
  },
  {
    name: "Lucas Oliveira",
    role: "CEO e Fundador",
      image: "https://forbes.com.br/wp-content/uploads/2022/03/Rony-Meisler-768x512.jpg",
    },
];  

const Sobre = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent font-semibold rounded-full text-sm mb-6">
              Sobre Nós
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Nossa História de <span className="text-accent">Excelência</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Há mais de 10 anos transformando sonhos em projetos e projetos em realidade
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="section-title mb-6">Quem Somos?</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A Éro Engenharia e Administração está sediada na região central do Estado de São Paulo, na cidade de São Carlos-SP, reconhecida nacionalmente como Capital da Tecnologia e polo de pesquisa, inovação e excelência graças à forte presença de suas universidades e centros de desenvolvimento científico.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
               Desde 2012, atuamos no setor de infraestrutura de transportes, com foco principal em rodovias. Nosso time é formado por profissionais altamente qualificados nas áreas de engenharia civil, com ênfase em projetos, obras e soluções rodoviárias, reunindo mais de 20 anos de experiência técnica e prática no mercado.
              </p>
               <p className="text-muted-foreground mb-6 leading-relaxed"> Nosso compromisso é entregar serviços de alta qualidade, oferecendo orientação técnica especializada e apresentando soluções modernas, eficientes e de fácil implementação, sempre alinhadas às melhores práticas do setor e às necessidades específicas de cada cliente. </p>

              <div className="grid grid-cols-2 gap-4">
                {differentials.slice(0, 4).map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="/img/equipe.jpg"
                  alt="Equipe"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Nossos Pilares</h2>
            <p className="section-subtitle mx-auto mt-4">
              Os valores que guiam nossas ações e decisões
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 text-center card-hover bg-card border-0 shadow-card"
              >
                <div className="inline-flex p-4 bg-accent/10 rounded-full mb-6">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Time - Equipe
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Nossa Equipe</h2>
            <p className="section-subtitle mx-auto mt-4">
              Profissionais dedicados ao seu sucesso
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 shadow-card group-hover:shadow-elevated transition-shadow duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-heading font-bold">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default Sobre;
