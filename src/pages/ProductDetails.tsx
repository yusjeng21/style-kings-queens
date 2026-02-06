import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "@/context/ProductContext";
import { formatPrice, getWhatsAppOrderLink } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";
import SEO from "@/components/SEO";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, isLoading } = useProducts();

  // Find the product that matches the ID from the URL
  const product = products.find((p) => p.id === id);

  const [selectedSize, setSelectedSize] = useState<string>("");

  if (isLoading)
    return (
      <Layout>
        <div className="p-20 text-center">Loading...</div>
      </Layout>
    );
  if (!product)
    return (
      <Layout>
        <div className="p-20 text-center">Product not found.</div>
      </Layout>
    );

  return (
    <Layout>
      <SEO
        title={product.name}
        description={
          product.description ||
          "Order this item via WhatsApp at Style Kings & Queens."
        }
        image={product.image}
      />
      <div className="container-custom py-12">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-8 hover:bg-transparent p-0">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Shop
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="rounded-xl overflow-hidden bg-muted">
            <img
              src={`${product.image}?w=1000&auto=format`}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold font-display">
                {product.name}
              </h1>
              <p className="text-2xl font-bold text-accent mt-2">
                {formatPrice(product.price)}
              </p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              {product.description}
            </p>

            {product.sizes && (
              <div>
                <h3 className="font-semibold mb-2">Available Sizes</h3>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <span key={size} className="border px-4 py-2 rounded-md">
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <a
              href={getWhatsAppOrderLink(product, selectedSize)}
              target="_blank"
              className="block pt-4">
              <Button
                // disabled={!selectedSize && product.sizes?.length > 0}
                className="w-full py-5 bg-accent text-accent-foreground hover:bg-accent/90 btn-gold-glow"
                size="sm">
                <FaWhatsapp className="h-4 w-4 mr-2" />
                Order via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
      {/* Related Products */}
      <section className="mt-20 border-t pt-12">
        <h2 className="font-display text-2xl font-bold mb-8">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
          {products
            .filter(
              (p) => p.category === product.category && p.id !== product.id,
            )
            .slice(0, 4) // Show only 4 related items
            .map((relatedProduct, index) => (
              <ProductCard
                key={relatedProduct.id}
                product={relatedProduct}
                index={index}
              />
            ))}
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetails;
