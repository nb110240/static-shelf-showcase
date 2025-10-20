import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold text-foreground">Catalog</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#catalog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Products
          </a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        <Button variant="default" size="sm">
          Get in Touch
        </Button>
      </div>
    </header>
  );
};

export default Header;
