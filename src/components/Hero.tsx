import { Badge } from "./ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { DemoCTAButton, FeedbackCTAButton } from "./FinalCTA";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      
      {/* Animated background circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            <Badge className="bg-primary/20 text-primary border-primary/30">
              <Sparkles className="w-3 h-3 mr-1" />
              Desenvolvido pela Integrax
            </Badge>
            
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight">
                Aprendizado Que <span className="text-primary">Parece</span> Diversão
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Transforme o treinamento corporativo com o Skillify. A plataforma gamificada que visa tornar o desenvolvimento de colaboradores uma experiência envolvente e recompensadora. Diga adeus aos cursos entediantes.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <DemoCTAButton 
                onClick={() => document.getElementById("contato")?.scrollIntoView({behavior:"smooth"})}
              >
                Solicite uma demo
              </DemoCTAButton>

              <FeedbackCTAButton 
                onClick={() => document.getElementById("contato")?.scrollIntoView({behavior:"smooth"})}     
                className="bg-yellow-500 text-black px-8 py-4"
              >
                Avalie nossa ideia
              </FeedbackCTAButton>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="space-y-1">
                <p className="text-3xl">10K+</p>
                <p className="text-sm text-muted-foreground">Meta Anual de Colaboradores Impactados</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="space-y-1">
                <p className="text-3xl">95%</p>
                <p className="text-sm text-muted-foreground">de Clientes Promotores</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="space-y-1">
                <p className="text-3xl">4.9/5</p>
                <p className="text-sm text-muted-foreground">Avaliação Média de Curso Baseada em Pilotos</p>
              </div>
            </div>
          </div>
          
          {/* Right column - Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://media.discordapp.net/attachments/1437571358623137823/1437571605676032061/principal.png?ex=6913ba63&is=691268e3&hm=fc6057c9ed5b14ba50f1a72d767461ebfa5ea4c27cddf70c3e06089190a70235&=&format=webp&quality=lossless&width=1200&height=800"
                alt="Equipe de treinamento corporativo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
