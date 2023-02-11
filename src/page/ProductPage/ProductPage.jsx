import React, { useEffect, useState } from "react";
import Aside from "./Aside";
import { Outlet  } from "react-router";
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { setSize, setOrder } from "../../state/products";

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
      <Aside type={product}/>
      <Outlet context={{ data: product , size : size.size, order : size.order}} />
    </main>
  );
}

export default ProductPage;
