import React, { useEffect, useState } from "react";
import { Loader, Title } from "../components";
import { ProductCard } from "../components";
import axios from "axios";
import { productsRoute } from "../utils/api";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await axios.get(productsRoute);
      setProducts(products.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <Loader />;

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
