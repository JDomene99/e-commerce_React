import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <button
      className="w-12/12"
      onClick={() => navigate(`/product/${product._id}`)}
    >
      <div className="text-left">
        <img src={product.img} alt=""  className=""/>
        <h3 className="font-bold">{product.name}</h3>
        <h3 className="text-gray-500">{product.category.name}</h3>
        <h3 className="text-gray-500 font-semibold">{product.price} $</h3>
      </div>
    </button>
  );
}

export default ProductCard;
