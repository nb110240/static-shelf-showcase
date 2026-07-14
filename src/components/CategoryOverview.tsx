import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { categories, categoryImages, products } from "@/data/products";
import { categoryContent, categoryToSlug } from "@/data/categoryContent";

const CategoryOverview = () => (
  <div>
    <div className="mb-8 max-w-2xl">
      <h2 className="font-display text-2xl tracking-wider text-foreground">Browse product families</h2>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        Choose an application family to see its available models, dimensions and quotation guidance.
      </p>
    </div>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => {
        const content = categoryContent[category];
        const count = products.filter((product) => product.category === category).length;
        return (
          <Link
            key={category}
            to={`/products/category/${categoryToSlug(category)}`}
            className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[var(--shadow-card-hover)]"
          >
            <div className="aspect-[16/9] overflow-hidden bg-muted">
              <img
                src={categoryImages[category]}
                alt={`${content?.title ?? category} product family`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">{count} products</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-primary">{content?.title ?? category}</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">{content?.summary}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                View collection <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  </div>
);

export default CategoryOverview;
