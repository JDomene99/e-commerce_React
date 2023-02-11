import React, { useEffect, useState } from "react";
import { getProductFilter, getProductsBySize } from "../../api/products";
import ProductCard from "../../components/Product/ProductCard";
import { useOutletContext } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

function AllProducts({}) {
  const isNonMobileScreens = useMediaQuery("(min-width: 970px)");
  const [products, setProduct] = useState([]);
  const { data, size, order } = useOutletContext();

  async function fetchData() {
    setProduct([]);
    let response;
    size !== null
      ? (response = await getProductsBySize(size))
      : (response = await getProductFilter(data));

    if (order !== null) {
      const cloneArray = [...response];
      cloneArray.sort(function (a, b) {
        if (order == -1) {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
      setProduct(cloneArray);
    } else {
      setProduct(response);
    }
  }

  useEffect(() => {
    fetchData();
  }, [size, order, data]);

  return (
    <section className={` ${isNonMobileScreens ? 'w-10/12' : 'w-10-/12'} pb-10`}>
      <header className="text-gray-500 w-full text-start">
        {products.length} resultados
      </header>

      <article className="w-full grid xs:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.length <= 0 ? (
          <h1 className=" text-xl font-bold">no result found :(</h1>
        ) : (
          products.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })
        )}
      </article>
    </section>
  );
}

export default AllProducts;
