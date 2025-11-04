import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Send, CheckCircle2 } from "lucide-react";

export function DemoRequestForm({ onClose }: { onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    role: "",
    comment: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({
        company: "",
        name: "",
        role: "",
        comment: "",
      });
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <CardHeader>
        <CardTitle className="text-3xl text-blue-400">
          Solicitar Demonstração
        </CardTitle>
        <CardDescription className="text-gray-400">
          Preencha os dados e entraremos em contato
        </CardDescription>
      </CardHeader>

      <CardContent>
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <CheckCircle2 className="w-16 h-16 text-blue-500 mb-4" />
            <h3 className="text-2xl mb-2">Solicitação enviada!</h3>
            <p className="text-gray-400">
              Obrigado! Nosso time responderá em breve.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">Empresa *</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nome da empresa"
                  required
                  className="bg-[#111418] border-blue-900/50 text-white focus:border-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Nome *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  required
                  className="bg-[#111418] border-blue-900/50 text-white focus:border-blue-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Cargo *</Label>
              <Input
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Ex: Gerente de RH"
                required
                className="bg-[#111418] border-blue-900/50 text-white focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="comment">Observações (opcional)</Label>
              <Textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Se quiser, descreva seu cenário atual..."
                rows={5}
                className="bg-[#111418] border-blue-900/50 text-white focus:border-blue-500 resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center justify-center gap-2 transition-all"
            >
              {isSubmitting ? "Enviando..." : "Solicitar demo"}
              {!isSubmitting && <Send className="w-4 h-4" />}
            </Button>
          </form>
        )}
        <div className="pt-6">
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-blue-400 hover:text-blue-300"
          >
            ← voltar
          </button>
        </div>
      </CardContent>
    </div>
  );
}
