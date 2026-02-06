import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Filter, X, Search, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { collections } from "@/lib/data";
import { useProducts } from "@/context/ProductContext";

type CategoryFilter = "all" | "men" | "women" | "accessories" | "new-arrivals";
type SortOption = "newest" | "price-low" | "price-high";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  // Search and Sort States
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("newest");

  const { products, isLoading, error } = useProducts();

  const categoryParam = searchParams.get("category") as CategoryFilter | null;
  const activeCategory = categoryParam || "all";

  // Handle Category + Search + Sort
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by Category
    if (activeCategory !== "all") {
      result = result.filter((product) => product.category === activeCategory);
    }

    // Filter by Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description?.toLowerCase().includes(query),
      );
    }

    // Apply Sorting
    result.sort((a, b) => {
      if (sortOption === "price-low") return a.price - b.price;
      if (sortOption === "price-high") return b.price - a.price;
      // Sort by Newest
      // return (
      //   new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
      // );
    });

    return result;
  }, [activeCategory, products, searchQuery, sortOption]);

  const handleCategoryChange = (category: CategoryFilter) => {
    if (category === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };

  const categories: { value: CategoryFilter; label: string }[] = [
    { value: "all", label: "All Products" },
    { value: "men", label: "Men's Wear" },
    { value: "women", label: "Women's Wear" },
    { value: "accessories", label: "Accessories" },
    { value: "new-arrivals", label: "New Arrivals" },
  ];

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Shop Our Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Discover trendy, quality fashion designed to fit your lifestyle
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          {error && (
            <div className="bg-destructive/10 text-destructive p-4 rounded-lg mb-8 text-center">
              {error}. Please try refreshing the page.
            </div>
          )}

          {/* Search and Sort Bar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-full bg-muted/30 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
              {searchQuery && (
                <X
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground cursor-pointer"
                  onClick={() => setSearchQuery("")}
                />
              )}
            </div>

            {/* Category/Sort Controls */}
            <div className="md:col-span-7 flex items-center justify-between md:justify-end gap-3">
              <div className="flex items-center gap-2 bg-goald p-1 rounded-sm border-2 ">
                <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as SortOption)}
                  className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer">
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="md:hidden"
                onClick={() => setShowFilters(!showFilters)}>
                <Filter className="h-4 w-4 mr-2" />
                Categories
              </Button>
            </div>
          </div>

          {/* Products Count and Active Filters */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm text-muted-foreground">
              {isLoading ? "..." : filteredProducts.length} products found
            </span>
            {activeCategory !== "all" && (
              <Badge
                variant="secondary"
                className="cursor-pointer"
                onClick={() => handleCategoryChange("all")}>
                {categories.find((c) => c.value === activeCategory)?.label}
                <X className="ml-1 h-3 w-3" />
              </Badge>
            )}
          </div>

          {/* Desktop Categories Toolbar */}
          <div className="hidden md:flex flex-wrap items-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={
                  activeCategory === category.value ? "default" : "outline"
                }
                size="sm"
                onClick={() => handleCategoryChange(category.value)}>
                {category.label}
              </Button>
            ))}
          </div>

          {/* Mobile Filter Drawer*/}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="md:hidden mb-8 space-y-2">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.value}
                    variant={
                      activeCategory === category.value ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => {
                      handleCategoryChange(category.value);
                      setShowFilters(false);
                    }}>
                    {category.label}
                  </Button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Products Grid*/}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="h-80 w-full bg-muted animate-pulse rounded-lg"
                />
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No products match your search or filter.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  handleCategoryChange("all");
                  setSearchQuery("");
                }}>
                Reset All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Collection Highlights */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Shop by Category
            </h2>
            <p className="text-muted-foreground">
              Explore our curated collections
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {collections.map((collection, index) => (
              <motion.button
                key={collection.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() =>
                  handleCategoryChange(collection.slug as CategoryFilter)
                }
                className="relative aspect-square overflow-hidden rounded-lg group">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <h3 className="font-display text-lg md:text-xl font-bold text-primary-foreground">
                    {collection.name}
                  </h3>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
