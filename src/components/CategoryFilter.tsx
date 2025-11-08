import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="w-full mb-8">
      <ScrollArea className="w-full whitespace-nowrap">
        <ToggleGroup
          type="single"
          value={selectedCategory}
          onValueChange={(value) => value && onCategoryChange(value)}
          className="justify-start gap-2 flex-wrap"
        >
          <ToggleGroupItem value="All" className="px-6 py-2">
            All Products
          </ToggleGroupItem>
          {categories.map((category) => (
            <ToggleGroupItem
              key={category}
              value={category}
              className="px-6 py-2"
            >
              {category}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default CategoryFilter;
