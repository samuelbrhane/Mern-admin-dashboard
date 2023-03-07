import React from "react";
import { Title } from "../components";
import { ProductCard } from "../components";
import { useSelector } from "react-redux";
import { selectProducts } from "../redux/slice/clientSlice";

const Products = () => {
  const products = useSelector(selectProducts);
  return (
    <section className="px-2 md:px-3 lg:px-5 mt-4 mb-6">
      {/* Title */}
      <Title title="Products" subtitle="List of products." />

      {/* Products */}
      <div className="grid mt-3 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
