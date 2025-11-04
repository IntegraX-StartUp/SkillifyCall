import { Card } from "./ui/card";
import { Trophy, Zap, Target, BarChart3, Award, Users } from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Trilhas de Aprendizado Gamificadas",
    description: "Sistema de progressão inspirado no Duolingo com níveis, sequências e conquistas que mantêm os colaboradores motivados."
  },
  {
    icon: Zap,
    title: "Módulos de Microlearning",
    description: "Lições em pequenas doses que cabem em agendas ocupadas. Aprenda em sessões de 5-10 minutos, em qualquer lugar."
  },
  {
    icon: Target,
    title: "Jornada Personalizada",
    description: "Estruture planos de aprendizado alinhados ao cargo, às competências e aos objetivos individuais da equipe."
  },
  {
    icon: BarChart3,
    title: "Analytics em Tempo Real",
    description: "Acompanhe engajamento, progresso e ROI com dashboards detalhados para gestores e equipes de RH."
  },
  {
    icon: Award,
    title: "Reconhecimento e Recompensas",
    description: "Celebre os melhores alunos com badges, rankings e sistemas de recompensa personalizáveis."
  },
  {
    icon: Users,
    title: "Aprendizado Social",
    description: "Promova colaboração com desafios em equipe, aprendizado entre pares e compartilhamento de conhecimento na empresa."
  }
];

export function Features() {
  return (
    <section id="beneficios" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl">Por Que Empresas Escolhem o Skillify</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Construído para a força de trabalho moderna. Projetado para engajar. Comprovadamente eficaz.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
