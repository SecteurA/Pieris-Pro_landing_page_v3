import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
        <img 
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070" 
          alt="Cosmétiques naturels" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 pt-24 md:pt-0">
        <div className="max-w-2xl">
          <div className="bg-background/30 backdrop-blur-sm p-6 md:p-8 rounded-2xl">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm mb-4">
              Programme Professionnel Pieris
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Enrichissez vos soins avec l'excellence des cosmétiques bio marocains
            </h1>
            <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
              Rejoignez le réseau des professionnels Pieris et offrez à vos clients une expérience unique avec nos produits certifiés bio.
            </p>
            <Button 
              size="lg" 
              className="group w-full md:w-auto"
              onClick={scrollToContact}
            >
              Devenir partenaire
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}