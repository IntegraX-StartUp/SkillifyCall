import { Card } from "./ui/card";

const logos = [
'https://media.discordapp.net/attachments/1437571358623137823/1437571714534998066/carreiras.png?ex=6913ba7d&is=691268fd&hm=48e7a3b76b1c32fb587d45c41567dcfd59aeeca17eacfa679be74092ca7b5ea5&=&format=webp&quality=lossless&width=1280&height=480',
'https://media.discordapp.net/attachments/1437571358623137823/1437571714983919737/face.png?ex=6913ba7d&is=691268fd&hm=5d48215fecb9482e278164ebfa07cb745829f871388914390b7e26d55e4f9a58&=&format=webp&quality=lossless&width=1280&height=480',
'https://media.discordapp.net/attachments/1437571358623137823/1437571715369668708/facens.png?ex=6913ba7d&is=691268fd&hm=6f1c674588e38bbc05ff0d052ff1735b87ca5344039f461227a2c5a2615ca9af&=&format=webp&quality=lossless&width=1280&height=480',
'https://media.discordapp.net/attachments/1437571358623137823/1437571713473839196/lince.png?ex=6913ba7d&is=691268fd&hm=6c4c04ff554520c0f7f00316ceffbf85a84df2c9099d45b5b98e3977a27b4b46&=&format=webp&quality=lossless&width=1280&height=480',
'https://media.discordapp.net/attachments/1437571358623137823/1437571714102853767/unifacens.png?ex=6913ba7d&is=691268fd&hm=bfbb17a77af640202e2aef93a30e9ed2f96d79a1a370bf0d69b090f84a9b5cb2&=&format=webp&quality=lossless&width=1280&height=480'
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
