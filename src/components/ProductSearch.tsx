import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  activeFilter: string | null;
  onFilterChange: (filter: string | null) => void;
  resultsCount: number;
}

const searchFilters = [
  { label: "Flange Diameter", searchKey: "Flange Dia" },
  { label: "Barrel Diameter", searchKey: "Barrel Dia" },
  { label: "Bore Size", searchKey: "Bore" },
  { label: "Traverse", searchKey: "Traverse" },
  { label: "Volume", searchKey: "Volume" },
];

const ProductSearch = ({ searchTerm, onSearchChange, activeFilter, onFilterChange, resultsCount }: ProductSearchProps) => {
  const handleFilterClick = (searchKey: string) => {
    if (activeFilter === searchKey) {
      onFilterChange(null);
      onSearchChange("");
    } else {
      onFilterChange(searchKey);
      onSearchChange("");
    }
  };

  const clearFilter = () => {
    onFilterChange(null);
    onSearchChange("");
  };

  const getPlaceholder = () => {
    if (activeFilter) {
      const filter = searchFilters.find(f => f.searchKey === activeFilter);
      return `Search by ${filter?.label} (e.g., "400mm", "5 inch", "40mm")...`;
    }
    return "Search by name, description, or specifications...";
  };

  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          aria-label="Search products"
          placeholder={getPlaceholder()}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-11 pr-10 h-12 text-sm bg-card border-border rounded-lg focus:border-primary/40 focus:ring-primary/20"
        />
        {(searchTerm || activeFilter) && (
          <Button
            variant="ghost"
            size="sm"
            aria-label="Clear search"
            onClick={clearFilter}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {activeFilter && (
        <div className="mt-3 text-center">
          <Badge variant="default" className="text-[10px] tracking-wider">
            Searching by: {searchFilters.find(f => f.searchKey === activeFilter)?.label}
          </Badge>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-3 justify-center" aria-label="Search by specification">
        <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/60 flex items-center gap-1.5 pr-2">
          <Search className="h-3 w-3" />
          Filter by:
        </span>
        {searchFilters.map((filter) => (
          <button
            key={filter.searchKey}
            type="button"
            aria-pressed={activeFilter === filter.searchKey}
            className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-semibold tracking-wider transition-colors ${
              activeFilter === filter.searchKey
                ? "border-primary bg-primary text-primary-foreground"
                : "border-transparent bg-secondary text-secondary-foreground hover:border-primary/30 hover:bg-primary hover:text-primary-foreground"
            }`}
            onClick={() => handleFilterClick(filter.searchKey)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <p className="mt-4 text-center font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground" aria-live="polite">
        {resultsCount} {resultsCount === 1 ? "product" : "products"} available
      </p>
    </div>
  );
};

export default ProductSearch;
