import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  activeFilter: string | null;
  onFilterChange: (filter: string | null) => void;
}

const searchFilters = [
  { label: "Flange Diameter", searchKey: "Flange Dia" },
  { label: "Barrel Diameter", searchKey: "Barrel Dia" },
  { label: "Bore Size", searchKey: "Bore" },
  { label: "Traverse", searchKey: "Traverse" },
  { label: "Volume", searchKey: "Volume" },
];

const ProductSearch = ({ searchTerm, onSearchChange, activeFilter, onFilterChange }: ProductSearchProps) => {
  const handleFilterClick = (searchKey: string, label: string) => {
    if (activeFilter === searchKey) {
      // If clicking the same filter, deactivate it
      onFilterChange(null);
      onSearchChange("");
    } else {
      // Activate new filter and clear search
      onFilterChange(searchKey);
      onSearchChange("");
    }
  };

  const handleSearchChange = (value: string) => {
    onSearchChange(value);
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
    return "Search by name, description, or specifications (e.g., '400mm', '5 inch', 'bore 40mm')...";
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder={getPlaceholder()}
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="pl-11 pr-10 h-12 text-base"
        />
        {(searchTerm || activeFilter) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilter}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      
      {activeFilter && (
        <div className="mt-3 text-center">
          <Badge variant="default" className="text-xs">
            Searching by: {searchFilters.find(f => f.searchKey === activeFilter)?.label}
          </Badge>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-3 justify-center">
        <Badge variant="outline" className="text-xs pointer-events-none">
          <Search className="h-3 w-3 mr-1" />
          Click to filter by:
        </Badge>
        {searchFilters.map((filter) => (
          <Badge
            key={filter.searchKey}
            variant={activeFilter === filter.searchKey ? "default" : "secondary"}
            className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={() => handleFilterClick(filter.searchKey, filter.label)}
          >
            {filter.label}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default ProductSearch;
