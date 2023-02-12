import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { setSize, setOrder } from "../../state/products";
import AllProducts from "./AllProducts";

function ProductPage() {
  
  const location = useLocation();
  const product = location.pathname.split('/')[2]
  const size = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSize(null));
    dispatch(setOrder(null))
  }, [])
 
  return (
    <main className="flex flex-row flex-wrap mx-10">
      <AllProducts  />
    </main>
  );
}

export default ProductPage;
