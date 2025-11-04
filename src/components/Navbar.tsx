import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { DemoCTAButton } from "./FinalCTA";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre o App", href: "#sobre" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Para Empresas", href: "#para-empresas" },
  { label: "Para Colaboradores", href: "#para-colaboradores" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg border-b border-primary/10 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" onClick={(e) => handleNavClick(e, "#inicio")} className="flex items-center space-x-2">
            <div className="flex items-center gap-3">
              <img 
                src="/src/assets/max.png" 
                alt="Skillify Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl" style={{ color: "#0074bd", fontWeight: 700 }}>
                SKILLIFY
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/10"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <DemoCTAButton 
              onClick={() => document.getElementById("contato")?.scrollIntoView({behavior:"smooth"})}
            >
              Solicite uma demo
            </DemoCTAButton>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary/10">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <DemoCTAButton 
                  onClick={() => document.getElementById("contato")?.scrollIntoView({behavior:"smooth"})}
                >
                  Solicite uma demo
                </DemoCTAButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
