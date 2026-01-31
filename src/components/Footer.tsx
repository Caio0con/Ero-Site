import { NavLink } from "react-router-dom";
import { Building2, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/logo.png"
                  alt="Ero — Logo"
                  className="h-6 w-6 sm:h-8 sm:w-8 object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-heading font-bold">Ero</span>
              <span className="hidden sm:block text-xs text-primary-foreground/70">
                ENGENHARIA E ADMINISTRAÇÃO LTDA
              </span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Excelência em engenharia e administração desde 2012. Transformando projetos em realidade com qualidade e inovação.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {["Início", "Sobre", "Serviços", "Projetos", "Contato"].map((item) => (
                <li key={item}>
                  <NavLink
                    to={item === "Início" ? "/" : `/${item.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Engenharia Civil</li>
              <li>Gestão de Projetos</li>
              <li>Consultoria Técnica</li>
              <li>Administração de Obras</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="h-4 w-4 text-accent" />
                (16) 99722-8054
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="h-4 w-4 text-accent" />
                contato@eroea.com.br
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span>São Carlos, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} ERO Eng. & Admin. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
