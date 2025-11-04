import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Play, Sparkles } from "lucide-react";
import { DemoCTAButton } from "./FinalCTA"

export function VideoPitch() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="sobre" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Conheça o Skillify em 2 minutos</span>
          </div>
          <h2 className="text-4xl sm:text-5xl">Veja Como Funciona</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra como o Skillify transforma treinamento corporativo em uma experiência envolvente e gamificada que seus colaboradores vão adorar.
          </p>
        </div>

        <Card className="relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur">
          <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center relative group">
            {}
            {!isPlaying ? (
              <>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-primary rounded-full" />
                  <div className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-accent rounded-full" />
                  <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border-2 border-primary rounded-full" />
                </div>
                
                {/* Play button */}
                <Button
                  size="lg"
                  onClick={() => setIsPlaying(true)}
                  className="relative z-10 w-20 h-20 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl group-hover:scale-110 transition-transform duration-300"
                >
                  <Play className="w-8 h-8 ml-1" fill="currentColor" />
                </Button>

                {/* Decorative elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border-2 border-primary/30 animate-pulse" />
                  <div className="absolute w-40 h-40 rounded-full border-2 border-primary/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
              </>
            ) : (
              <div className="w-full h-full relative bg-black/90">
                <div className="absolute inset-0">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/gyqqGZi3P_0?si=_j_aQzi5O6iOPnq8&rel=0&modestbranding=1&playsinline=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>

          {/* Video info */}
          <div className="p-6 bg-card/80 backdrop-blur border-t border-primary/10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl mb-1">Transforme o Aprendizado da Sua Equipe</h3>
                <p className="text-sm text-muted-foreground">
                  Veja como empresas líderes planejam usar o Skillify para aumentar o engajamento e a retenção de conhecimento.
                </p>
              </div>
              <DemoCTAButton 
                onClick={() => document.getElementById("contato")?.scrollIntoView({behavior:"smooth"})}
              >
                Começar agora
              </DemoCTAButton>
            </div>
          </div>
        </Card>

        {/* Key points */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-2xl">🎮</span>
            </div>
            <h4>Gamificação Real</h4>
            <p className="text-sm text-muted-foreground">Inspirado no Duolingo, com níveis, conquistas e desafios</p>
          </div>
          <div className="text-center space-y-2">
            <div className="w-12 h-12 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-2xl">📱</span>
            </div>
            <h4>Mobile-First</h4>
            <p className="text-sm text-muted-foreground">Aprenda em qualquer lugar, no seu ritmo</p>
          </div>
          <div className="text-center space-y-2">
            <div className="w-12 h-12 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
            <h4>Analytics Poderoso</h4>
            <p className="text-sm text-muted-foreground">Acompanhe o progresso e resultados em tempo real</p>
          </div>
        </div>
      </div>
    </section>
  );
}
