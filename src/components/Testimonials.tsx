import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Quote, Star } from "lucide-react";
import { FeedbackCTAButton } from "./FinalCTA";

const testimonials = [
  {
    name: "Ana Silva",
    role: "Diretora de RH",
    company: "TechCorp Brasil",
    content: "O Skillify revolucionou nosso programa de treinamento. A taxa de conclusão saltou de 35% para 92% em apenas 3 meses. Os colaboradores finalmente estão engajados!",
    rating: 5,
    initials: "AS"
  },
  {
    name: "Carlos Mendes",
    role: "Gerente de Vendas",
    company: "Vendas Plus",
    content: "Usar o Skillify para treinar minha equipe foi a melhor decisão. O sistema de ranking motivou até os vendedores mais experientes a aprender novas técnicas.",
    rating: 5,
    initials: "CM"
  },
  {
    name: "Juliana Costa",
    role: "Analista de Desenvolvimento",
    company: "Inovação S.A.",
    content: "Finalmente uma plataforma de treinamento que não é chata! Adoro o sistema de conquistas e a possibilidade de aprender no meu próprio ritmo.",
    rating: 5,
    initials: "JC"
  },
  {
    name: "Roberto Alves",
    role: "CEO",
    company: "StartupXYZ",
    content: "O Skillify nos permitiu escalar o onboarding de forma incrível. Novos funcionários chegam prontos para contribuir 60% mais rápido que antes.",
    rating: 5,
    initials: "RA"
  },
  {
    name: "Mariana Souza",
    role: "Coordenadora de T&D",
    company: "Grupo Educação",
    content: "A gamificação funciona de verdade! Nossos colaboradores competem de forma saudável e o clima organizacional melhorou significativamente.",
    rating: 5,
    initials: "MS"
  },
  {
    name: "Felipe Santos",
    role: "Desenvolvedor",
    company: "Code Masters",
    content: "Como alguém que sempre achou treinamentos corporativos entediantes, o Skillify mudou completamente minha perspectiva. É viciante de um jeito bom!",
    rating: 5,
    initials: "FS"
  }
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl">O Que As Pessoas Dizem</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empresas de todos os tamanhos que planejam transformar seus programas de treinamento com o Skillify
          </p>           
          <FeedbackCTAButton 
            onClick={() => document.getElementById("contato")?.scrollIntoView({behavior:"smooth"})}     
            className="bg-yellow-500 text-black px-8 py-4"
          >
            Quero avaliar
          </FeedbackCTAButton>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
                  <Avatar className="w-12 h-12 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary/20 text-primary">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid sm:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-4xl text-primary">4.5/5</p>
            <p className="text-sm text-muted-foreground">Avaliação média dos usuários</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl text-primary">80%</p>
            <p className="text-sm text-muted-foreground">Recomendariam o Skillify</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl text-primary">10+</p>
            <p className="text-sm text-muted-foreground">Empresas parceiras</p>
          </div>
        </div>
      </div>
    </section>
  );
}
