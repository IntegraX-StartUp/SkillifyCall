import { Card } from "./ui/card";

const logos = [
'/src/assets/parceiros/carreiras.png',
'/src/assets/parceiros/face.png',
'/src/assets/parceiros/facens.png',
'/src/assets/parceiros/lince.png',
'/src/assets/parceiros/unifacens.png'
];

const stats = [
  {
    value: "10.000+",
    label: "Usuários Ativos",
    description: "Meta para 12 Meses em Mais de 50 Empresas"
  },
  {
    value: "48%",
    label: "Taxa de Conclusão",
    description: "Engajamento Líder do Setor Baseado em Pilotos"
  },
  {
    value: "+55%",
    label: "Taxa de retenção 30 dias",
    description: "Baseado no Piloto em Comparação com LMS Tradicionais"
  },
  {
    value: "12 min",
    label: "Tempo médio por sessão",
    description: "Prolonga o Engajamento dos Colaboradores"
  }
];

export function Stats() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl">Confiado por Empresas em Crescimento</h2>
          <p className="text-xl text-muted-foreground">
            Resultados Baseados em Beta Testers e em Modelos Piloto
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-primary/20 text-center hover:border-primary/40 transition-all duration-300"
            >
              <div className="space-y-2">
                <p className="text-5xl text-primary">{stat.value}</p>
                <p className="text-lg">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Confiado por organizações líderes</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* Placeholder para logos de empresas */}
            {logos.map((src, i) => (
              <img key={i} src={src} alt={`Parceiro ${i+1}`} className="w-32 h-12 object-contain" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
