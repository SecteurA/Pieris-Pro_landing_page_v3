import { Benefits } from '@/components/Benefits';
import { ContactForm } from '@/components/ContactForm';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Benefits />
      <ContactForm />
    </div>
  );
}

export default App;