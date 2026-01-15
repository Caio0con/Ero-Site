import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Building2 } from "lucide-react";

const navigation = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Serviços", href: "/servicos" },
  { name: "Projetos", href: "/projetos" },
  { name: "Contato", href: "/contato" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-hero">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-3 group"
            aria-label="Ero — Início. Ero Engenharia e Administração LTDA"
          >
            <div className="p-2 bg-accent rounded-lg group-hover:scale-105 transition-transform duration-300">
              <Building2
                className="h-6 w-6 text-accent-foreground"
                aria-hidden="true"
              />
            </div>
            <div>
              <span className="text-xl font-heading font-bold text-primary-foreground">
                Ero
              </span>
              <span className="hidden sm:block text-xs text-primary-foreground/70">
                ENGENHARIA E ADMINISTRAÇÃO LTDA
              </span>
            </div>
            <span className="sr-only">Ir para a página inicial</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary-foreground hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-primary-foreground/20 animate-fade-in">
            <div className="flex flex-col gap-2 pt-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-primary-foreground/90 hover:bg-primary-foreground/10"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
