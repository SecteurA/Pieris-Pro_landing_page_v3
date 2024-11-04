import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

export function ContactForm() {
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    // Using a simple, reliable IP service
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        if (data.ip) {
          setIpAddress(data.ip);
          // Immediately set the hidden field value
          const ipField = document.querySelector('input[name="cf_866"]') as HTMLInputElement;
          if (ipField) {
            ipField.value = data.ip;
          }
        }
      })
      .catch(error => console.error('Error fetching IP:', error));
  }, []);

  return (
    <section id="contact-form" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Prêt à transformer vos services ?
          </h2>
          <p className="text-muted-foreground">
            Remplissez le formulaire ci-dessous pour rejoindre le programme Pieris Professionnel et accéder à notre gamme exclusive.
          </p>
        </div>

        <Card className="p-8">
          <form 
            id="__vtigerWebForm" 
            name="Pieris_Pro" 
            action="https://gestion.pieris.ma/modules/Webforms/capture.php" 
            method="post" 
            acceptCharset="utf-8" 
            encType="multipart/form-data" 
            className="space-y-6"
          >
            <input type="hidden" name="__vtrftk" value="sid:e6e8b9c99445db04fee254b08837e30542973b61,1730697393" />
            <input type="hidden" name="publicid" value="416b244939fb59f4398a41b748e515a3" />
            <input type="hidden" name="urlencodeenable" value="1" />
            <input type="hidden" name="name" value="Pieris_Pro" />
            <input type="hidden" name="cf_866" defaultValue={ipAddress} />
            <input type="hidden" name="leadsource" value="Pro Landing Page" />

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstname">Prénom*</Label>
                  <Input 
                    id="firstname"
                    name="firstname" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastname">Nom*</Label>
                  <Input 
                    id="lastname"
                    name="lastname" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email*</Label>
                <Input 
                  id="email"
                  type="email" 
                  name="email" 
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile">Téléphone Mobile*</Label>
                <Input 
                  id="mobile"
                  name="mobile" 
                  required 
                />
              </div>
            </div>

            <Button 
              type="submit"
              className="w-full"
            >
              Envoyer
            </Button>
          </form>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Nous respectons votre vie privée. Vos informations ne seront jamais partagées.
        </p>
      </div>
    </section>
  );
}