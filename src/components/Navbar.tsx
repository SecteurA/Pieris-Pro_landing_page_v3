import { cn } from '@/lib/utils';

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-background/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-24 flex items-center">
        <img 
          src="https://gestion.pieris.ma/layouts/v7/resources/Images/vtiger.png" 
          alt="Pieris Logo" 
          className="h-12"
        />
      </div>
    </nav>
  );
}