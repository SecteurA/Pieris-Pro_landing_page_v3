import { Sparkles, Leaf, Award, BookOpen, Users, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: "Certification Bio",
    description: "Nos produits sont certifiés bio par ECOCERT selon les normes internationales."
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Support dédié",
    description: "Une équipe professionnelle à votre service pour vous accompagner dans votre développement."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Formations exclusives",
    description: "Accédez à nos formations spécialisées et perfectionnez vos techniques de soin."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Qualité garantie",
    description: "Des formules testées et approuvées par des professionnels du secteur."
  },
  {
    icon: <Leaf className="w-8 h-8 text-primary" />,
    title: "100% Naturel",
    description: "Des ingrédients naturels sélectionnés avec soin pour des résultats optimaux."
  },
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    title: "Documentation complète",
    description: "Accès à notre bibliothèque de ressources et protocoles de soins."
  }
];

export function Benefits() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Pourquoi devenir partenaire Pieris ?
          </h2>
          <p className="text-muted-foreground">
            Rejoignez notre réseau de professionnels et bénéficiez d'avantages exclusifs pour développer votre activité.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}