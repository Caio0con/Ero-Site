import Layout from "@/components/Layout";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { sub } from "date-fns";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    value: "(16) 99722-8054",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "contato@eroea.com.br",
  },
  {
    icon: MapPin,
    title: "Endereço",
    value: "Rua Santa Cruz, n.º 94",
    subtitle: (
      <>
        Bairro Centreville - CEP: 13560-680
        <br />
        São Carlos / SP
      </>
    ),
  },
  { 
    icon: Clock,
    title: "Horário",
    value: "Segunda a Sexta: 8h às 18h",
    subtitle: "Sábado: 8h às 12h",
  },
];

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Número do WhatsApp da empresa (formato: 5516997228054)
  const whatsappNumber = "+5516997228054";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Monta a mensagem para o WhatsApp
    const whatsappMessage = `*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*Telefone:* ${formData.phone || "Não informado"}
*Assunto:* ${formData.subject}

*Mensagem:*
${formData.message}`;

    // Abre o WhatsApp com a mensagem preenchida
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecionando para o WhatsApp!",
      description: "Complete o envio da mensagem no WhatsApp.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent font-semibold rounded-full text-sm mb-6">
              Contato
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Fale <span className="text-accent">Conosco</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Estamos prontos para atender você e transformar seu projeto em realidade
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 text-center card-hover bg-card border-0 shadow-card"
              >
                <div className="inline-flex p-4 bg-accent/10 rounded-full mb-4">
                  <info.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading font-bold mb-2">{info.title}</h3>
                <p className="text-foreground text-sm">{info.value}</p>
                <p className="text-muted-foreground text-sm">{info.subtitle}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="p-8 bg-card border-0 shadow-elevated">
              <h2 className="text-2xl font-heading font-bold mb-6">
                Envie sua Mensagem
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">E-mail *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Assunto *</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Qual o assunto?"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva seu projeto ou dúvida..."
                    rows={5}
                    required
                    className="bg-background resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-gold-dark font-semibold"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </Card>

            {/* Map */}
            <div className="space-y-6">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-elevated">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d324.3454153722012!2d-47.89392917528803!3d-22.023439295667814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8773d1dc85193%3A0x313a42d5ed1d29ee!2sR.%20Santa%20Cruz%2C%2094%20-%202%20-%20Centreville%2C%20S%C3%A3o%20Carlos%20-%20SP%2C%2013560-680!5e1!3m2!1spt-BR!2sbr!4v1768527639917!5m2!1spt-BR!2sbr"

                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização"
                />
              </div>
              <Card className="p-6 bg-gradient-hero text-primary-foreground border-0">
                <h3 className="font-heading font-bold text-lg mb-3">
                  Precisa de Atendimento Urgente?
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Nossa equipe está disponível para atendimentos emergenciais
                </p>
                <a
                  href="tel:+5516997228054"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-gold-dark transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  (16) 99722-8054
                </a>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
