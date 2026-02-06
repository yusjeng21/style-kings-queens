import { sanityClient } from "./sanityClient";

export const getProducts = async () => {
  return sanityClient.fetch(`
    *[_type == "product"]{
      _id,
      name,
      price,
      description,
      category,
      sizes,
      colors,
      isNew,
      isFeatured,
      "imageUrl": image.asset->url
    }
  `);
};
