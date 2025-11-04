import { useState } from "react"
import { Card } from "./ui/card"
import { ArrowRight, Mail, Calendar } from "lucide-react"
import { DemoRequestForm } from "./DemoRequestForm"
import { FeedbackForm } from "./FeedbackForm"

export function FinalCTA() {
  const [mode, setMode] = useState<"default" | "demo" | "feedback">("default")

  const goToCTA = (m: "demo" | "feedback") => {
    setMode(m)
    document.getElementById("contato")?.scrollIntoView({ behavior:"smooth" })
  }

  return (
    <section id="contato" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-card to-primary/5">
          <div className="relative p-12 md:p-16 text-center space-y-8">
            
            {mode === "default" && (
              <>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl">
                  Pronto para Transformar Seus Treinamentos?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Junte-se a empresas inovadoras usando o Skillify...
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <DemoCTAButton onClick={() => goToCTA("demo")}>
                    Solicitar Demonstração
                  </DemoCTAButton>

                  <FeedbackCTAButton onClick={() => goToCTA("feedback")}>
                    Avalie nossa ideia
                  </FeedbackCTAButton>
                </div>
              </>
            )}

            {mode === "demo" && <DemoRequestForm onClose={() => setMode("default")} />}
            {mode === "feedback" && <FeedbackForm onClose={() => setMode("default")} />}

          </div>
        </Card>
      </div>
    </section>
  )
}


// agora os botões são 100% customizáveis
export function DemoCTAButton({
  onClick,
  children,
  className=""
}: {
  onClick: () => void,
  children?: React.ReactNode,
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-primary hover:bg-primary/90 text-primary-foreground group min-w-[200px] px-6 py-3 rounded-md flex items-center justify-center ${className}`}
    >
      <Calendar className="w-4 h-4 mr-2" />
      {children}
      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </button>
  )
}

export function FeedbackCTAButton({
  onClick,
  children,
  className=""
}: {
  onClick: () => void,
  children?: React.ReactNode,
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      className={`border border-primary/30 hover:bg-primary/10 min-w-[200px] px-6 py-3 rounded-md flex items-center justify-center ${className}`}
    >
      <Mail className="w-4 h-4 mr-2 text-primary" />
      {children}
    </button>
  )
}
