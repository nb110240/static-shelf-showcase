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
    <div className="w-full mb-10" aria-label="Product categories">
      <ScrollArea className="w-full whitespace-nowrap">
        <ToggleGroup
          type="single"
          value={selectedCategory}
          onValueChange={(value) => value && onCategoryChange(value)}
          aria-label="Choose a product category"
          className="justify-start gap-1.5 flex-nowrap w-max min-w-full pb-2"
        >
          <ToggleGroupItem value="All" className="px-5 py-2.5 text-[11px] tracking-wider rounded-sm border border-border text-foreground font-semibold data-[state=on]:bg-primary data-[state=on]:text-white data-[state=on]:border-primary focus-visible:ring-2 focus-visible:ring-primary/40">
            All Products ({products.length})
          </ToggleGroupItem>
          {categories.map((category) => (
            <ToggleGroupItem
              key={category}
              value={category}
              className="px-5 py-2.5 text-[11px] tracking-wider rounded-sm border border-border text-foreground font-semibold data-[state=on]:bg-primary data-[state=on]:text-white data-[state=on]:border-primary focus-visible:ring-2 focus-visible:ring-primary/40"
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
