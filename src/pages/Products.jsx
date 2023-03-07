import React from "react";
import { Title } from "../components";
import { useSelector } from "react-redux";
import { selectProductList } from "../redux/slice/productSlice";
import { ProductCard } from "../components";

const Products = () => {
  const productList = useSelector(selectProductList);
  console.log("productList", productList);
  return (
    <section className="px-2 md:px-3 lg:px-5 mt-4 mb-6">
      {/* Title */}
      <Title title="Products" subtitle="See list of products." />

      {/* Products */}
      <div className="grid mt-3 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productList.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
