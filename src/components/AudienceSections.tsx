import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Briefcase, Heart, TrendingUp, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { DemoCTAButton } from "./FinalCTA";

export function AudienceSections() {
  return (
    <div className="py-24 space-y-32">
      {/* Para RH e T&D */}
      <section id="para-empresas" className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center"> 
            <div className="space-y-6 order-2 lg:order-1">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                <Briefcase className="w-3 h-3 mr-1" />
                Para Equipes de RH e T&D
              </Badge>
              <h2 className="text-4xl sm:text-5xl">Potencialize o Desenvolvimento da Sua Força de Trabalho</h2>
              <p className="text-lg text-muted-foreground">
                Pare de lutar com taxas de conclusão baixas. O Skillify foca em oferecer as ferramentas para criar experiências de aprendizado envolventes que os colaboradores realmente querem completar.
              </p>
              
              <div className="space-y-3">
                {[
                  "Implante treinamentos em toda a empresa em minutos",
                  "Identifique lacunas de competências com analytics inteligentes",
                  "Meça o ROI com relatórios abrangentes",
                  "Personalize trilhas de aprendizado para diferentes funções"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <DemoCTAButton 
                onClick={() => document.getElementById("contato")?.scrollIntoView({behavior:"smooth"})}
              >
                Agende uma conversa estratégica
              </DemoCTAButton>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <Card className="relative overflow-hidden border-primary/20 p-8 bg-card/80 backdrop-blur">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Taxa Média de Conclusão</p>
                      <p className="text-4xl text-primary">+18%</p>
                    </div>
                    <TrendingUp className="w-12 h-12 text-primary/40" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>LMS Tradicional</span>
                      <span className="text-muted-foreground">26%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-muted-foreground/50" style={{ width: '26%' }} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Skillify Baseado no Piloto</span>
                      <span className="text-primary">44%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '44%' }} />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Para Colaboradores */}
      <section id="para-colaboradores" className="px-4 sm:px-6 lg:px-8 bg-card/30 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="../src/assets/mobile.png"
                  alt="Gamificação em aplicativo mobile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <Badge className="bg-accent/30 text-accent border-accent/40">
                <Heart className="w-3 h-3 mr-1" />
                Para Colaboradores
              </Badge>
              <h2 className="text-4xl sm:text-5xl">Aprendizado Que Não Parece Trabalho</h2>
              <p className="text-lg text-muted-foreground">
                Chega de PowerPoints monótonos ou aulas em vídeo intermináveis. O Skillify torna o desenvolvimento profissional como evoluir no seu jogo favorito.
              </p>
              
              <div className="space-y-4">
                <Card className="p-4 bg-card border-accent/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-xl">🎯</span>
                    </div>
                    <div>
                      <p className="font-medium">Defina Seu Próprio Ritmo</p>
                      <p className="text-sm text-muted-foreground">Aprenda quando funcionar para você</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-4 bg-card border-accent/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-xl">🏆</span>
                    </div>
                    <div>
                      <p className="font-medium">Ganhe Reconhecimento</p>
                      <p className="text-sm text-muted-foreground">Desbloqueie badges e recompensas</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-4 bg-card border-accent/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-xl">📱</span>
                    </div>
                    <div>
                      <p className="font-medium">Aprenda em Qualquer Lugar</p>
                      <p className="text-sm text-muted-foreground">Experiência mobile-first</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para Gestores */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                <TrendingUp className="w-3 h-3 mr-1" />
                Para Gestores
              </Badge>
              <h2 className="text-4xl sm:text-5xl">Lidere, Motive e Recompense</h2>
              <p className="text-lg text-muted-foreground">
                Transforme como você desenvolve sua equipe. O Skillify oferece visibilidade e ferramentas para se tornar um coach e mentor melhor.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="p-6 bg-card border-primary/20">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <span>📊</span>
                    </div>
                    <h4>Insights da Equipe</h4>
                    <p className="text-sm text-muted-foreground">Monitore o progresso e identifique oportunidades de desenvolvimento</p>
                  </div>
                </Card>
                
                <Card className="p-6 bg-card border-primary/20">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <span>🎁</span>
                    </div>
                    <h4>Recompensas Customizadas</h4>
                    <p className="text-sm text-muted-foreground">Reconheça os melhores performers com incentivos personalizados</p>
                  </div>
                </Card>
                
                <Card className="p-6 bg-card border-primary/20">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <span>🎯</span>
                    </div>
                    <h4>Definição de Metas</h4>
                    <p className="text-sm text-muted-foreground">Alinhe o aprendizado com objetivos e KPIs da equipe</p>
                  </div>
                </Card>
                
                <Card className="p-6 bg-card border-primary/20">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <span>💬</span>
                    </div>
                    <h4>Suporte 1 por 1</h4>
                    <p className="text-sm text-muted-foreground">Use dados de aprendizado para melhores conversas de coaching</p>
                  </div>
                </Card>
              </div>
              <DemoCTAButton 
                onClick={() => document.getElementById("contato")?.scrollIntoView({behavior:"smooth"})}
              >
                Conheça as ferramentas para gestores
              </DemoCTAButton>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="../src/assets/notebook.png"
                  alt="Sucesso empresarial e celebração em equipe"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
