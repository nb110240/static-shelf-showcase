import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Product } from "@/types/product";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  products: Product[];
}

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange, products }: CategoryFilterProps) => {
  const countByCategory = (cat: string) => products.filter((p) => p.category === cat).length;

  return (
    <div className="w-full mb-10">
      <ScrollArea className="w-full whitespace-nowrap">
        <ToggleGroup
          type="single"
          value={selectedCategory}
          onValueChange={(value) => value && onCategoryChange(value)}
          className="justify-start gap-1.5 flex-wrap"
        >
          <ToggleGroupItem value="All" className="px-5 py-2.5 text-[11px] tracking-wider rounded-sm border border-border text-foreground font-semibold data-[state=on]:bg-primary data-[state=on]:text-white data-[state=on]:border-primary">
            All Products ({products.length})
          </ToggleGroupItem>
          {categories.map((category) => (
            <ToggleGroupItem
              key={category}
              value={category}
              className="px-5 py-2.5 text-[11px] tracking-wider rounded-sm border border-border text-foreground font-semibold data-[state=on]:bg-primary data-[state=on]:text-white data-[state=on]:border-primary"
            >
              {category} ({countByCategory(category)})
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default CategoryFilter;
