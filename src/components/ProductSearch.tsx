import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProductSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const ProductSearch = ({ searchTerm, onSearchChange }: ProductSearchProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search by name, description, or specifications (e.g., '400mm', '5 inch', 'bore 40mm')..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-11 h-12 text-base"
        />
      </div>
      <div className="flex flex-wrap gap-2 mt-3 justify-center">
        <Badge variant="outline" className="text-xs">
          <Search className="h-3 w-3 mr-1" />
          Search includes all specifications
        </Badge>
        <Badge variant="secondary" className="text-xs">Flange Diameter</Badge>
        <Badge variant="secondary" className="text-xs">Barrel Diameter</Badge>
        <Badge variant="secondary" className="text-xs">Bore Size</Badge>
        <Badge variant="secondary" className="text-xs">Traverse</Badge>
        <Badge variant="secondary" className="text-xs">Volume</Badge>
      </div>
    </div>
  );
};

export default ProductSearch;
