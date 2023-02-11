import React, { useState, useEffect } from "react";
import { addToCart } from "../../state/cart";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../api/products";

function ProductView() {
  const dispatch = useDispatch();

  //parametros de la url
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProduct(id);
      setProduct(response);
    };
    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div  className="lg:px-32 xs:px-4 py-10">
      {product != undefined ? (
        <div className="flex lg:flex-row flex-wrap md:flex-col">
          <img src={product.img} alt={product.name} className="lg:w-5/12 xs:w-12/12" />

          <div className="lg:w-6/12 xs:w-12/12 xs:text-center lg:pl-8">
            <h1 className="text-xl font-bold xs:mt-6">{product.name}</h1>
            <h1 className="font-bold pb-6">{product.price}$</h1>
            <h2>Selecciona tu talla</h2>
            <div className="flex flex-row flex-wrap gap-4 text-center pt-3 pb-6">
              {product.size.map((size) => {
                return (
                  <button
                    key={size}
                    className="border-gray-300 border-2 w-1/12 hover:border-black focus:bg-black focus:text-white"
                  >
                    {size}
                  </button>
                );
              })}
            </div>
            <p className="mb-20">{product.description}</p>
            
            <button className="bg-black px-10 py-2 border-4 border-white text-white rounded-lg hover:opacity-70" onClick={() => handleAddToCart(product)}>
              Add to cart
            </button>
          </div>
        </div>
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
}

export default ProductView;
