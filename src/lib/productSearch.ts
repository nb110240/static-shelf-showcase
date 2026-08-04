import type { Product } from "@/types/product";

export type ProductSearchMode = "standard" | "exact-flange" | "nearest-flange";

export interface ProductSearchResult {
  products: Product[];
  mode: ProductSearchMode;
  requestedFlangeDiameter: number | null;
  nearestFlangeDiameters: number[];
}

const FLANGE_FEATURE = /^flange\s+dia(?:meter)?\b/i;
const FLANGE_QUERY = /\bflange\b/i;
const MILLIMETRE_VALUE = /(\d+(?:\.\d+)?)\s*mm\b/i;
const BARE_NUMBER = /\b(\d+(?:\.\d+)?)\b/;
const EXACT_TOLERANCE = 0.001;

export const getFlangeDiameters = (product: Product): number[] => {
  const feature = product.features.find((item) => FLANGE_FEATURE.test(item));
  if (!feature) return [];

  const valueText = feature.split(":").slice(1).join(":").split(/\bmm\b/i)[0];
  return Array.from(valueText.matchAll(/\d+(?:\.\d+)?/g), (match) => Number(match[0]))
    .filter(Number.isFinite);
};

const getRequestedFlangeDiameter = (searchTerm: string, activeFilter: string | null) => {
  const normalizedSearch = searchTerm.trim();
  const isFlangeFilter = activeFilter === "Flange Dia";
  const isFlangeSearch = isFlangeFilter || FLANGE_QUERY.test(normalizedSearch);
  if (!isFlangeSearch) return null;

  const millimetreMatch = normalizedSearch.match(MILLIMETRE_VALUE);
  const numericMatch = millimetreMatch ?? (isFlangeFilter ? normalizedSearch.match(BARE_NUMBER) : null);
  if (!numericMatch) return null;

  const requestedDiameter = Number(numericMatch[1]);
  return Number.isFinite(requestedDiameter) ? requestedDiameter : null;
};

const matchesStandardSearch = (product: Product, searchTerm: string, activeFilter: string | null) => {
  const searchLower = searchTerm.toLowerCase().trim();
  if (activeFilter) {
    const filterLower = activeFilter.toLowerCase();
    return product.features.some((feature) => {
      const featureLower = feature.toLowerCase();
      return featureLower.includes(filterLower) && featureLower.includes(searchLower);
    });
  }

  return (
    product.name.toLowerCase().includes(searchLower) ||
    product.description.toLowerCase().includes(searchLower) ||
    product.category.toLowerCase().includes(searchLower) ||
    product.features.some((feature) => feature.toLowerCase().includes(searchLower))
  );
};

export const searchProducts = (
  allProducts: Product[],
  selectedCategory: string,
  searchTerm: string,
  activeFilter: string | null,
): ProductSearchResult => {
  const categoryProducts = allProducts.filter(
    (product) => selectedCategory === "All" || product.category === selectedCategory,
  );

  if (!searchTerm.trim()) {
    return {
      products: categoryProducts,
      mode: "standard",
      requestedFlangeDiameter: null,
      nearestFlangeDiameters: [],
    };
  }

  const requestedFlangeDiameter = getRequestedFlangeDiameter(searchTerm, activeFilter);
  if (requestedFlangeDiameter !== null) {
    const productsWithDiameters = categoryProducts.map((product) => ({
      product,
      diameters: getFlangeDiameters(product),
    }));
    const exactProducts = productsWithDiameters
      .filter(({ diameters }) =>
        diameters.some((diameter) => Math.abs(diameter - requestedFlangeDiameter) <= EXACT_TOLERANCE),
      )
      .map(({ product }) => product);

    if (exactProducts.length > 0) {
      return {
        products: exactProducts,
        mode: "exact-flange",
        requestedFlangeDiameter,
        nearestFlangeDiameters: [],
      };
    }

    const availableDiameters = Array.from(
      new Set(productsWithDiameters.flatMap(({ diameters }) => diameters)),
    ).sort((a, b) => a - b);
    const lowerDiameter = availableDiameters.filter((diameter) => diameter < requestedFlangeDiameter).at(-1);
    const upperDiameter = availableDiameters.find((diameter) => diameter > requestedFlangeDiameter);
    const nearestFlangeDiameters = [lowerDiameter, upperDiameter].filter(
      (diameter): diameter is number => diameter !== undefined,
    );
    const nearestProducts = productsWithDiameters
      .filter(({ diameters }) =>
        diameters.some((diameter) => nearestFlangeDiameters.includes(diameter)),
      )
      .map(({ product }) => product);

    return {
      products: nearestProducts,
      mode: "nearest-flange",
      requestedFlangeDiameter,
      nearestFlangeDiameters,
    };
  }

  return {
    products: categoryProducts.filter((product) =>
      matchesStandardSearch(product, searchTerm, activeFilter),
    ),
    mode: "standard",
    requestedFlangeDiameter: null,
    nearestFlangeDiameters: [],
  };
};
