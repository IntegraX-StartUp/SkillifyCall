import { Separator } from "./ui/separator";
import { Github, Mail, Youtube, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <img
                src="https://media.discordapp.net/attachments/1437571358623137823/1437571601733521551/max.png?ex=6913ba62&is=691268e2&hm=b0868f57daeb8131836bb57548faf44b924e2c44df1a40897786bcd37160e3c3&=&format=webp&quality=lossless&width=800&height=800"
                alt="Skillify Logo"
                className="w-10 h-10 object-contain"
              />
              <span
                className="text-2xl"
                style={{ color: "#0074bd", fontWeight: 700 }}
              >
                SKILLIFY
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Aprendizado corporativo gamificado pela Integrax. Focando em tornar o treinamento de colaboradores envolvente e eficaz.
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Informações de Contato</h4>

            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-sm">integraxstartup@gmail.com</p>
              </div>
            </div>

            {/* Localização */}
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Localização</p>
                <p className="text-sm">Sorocaba - São Paulo, Brasil</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary/10" />

        {/* Rodapé inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Integrax. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.youtube.com/@intregaX"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@intregaX"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
