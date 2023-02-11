import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeItem,incrementQuantity,decrementQuantity } from "../../state/cart";
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const [category, setcategory] = useState('')
  const [type, settype] = useState('')
 
  useEffect(() => {
    setcategory(product.category.name)
    settype(product.category.type)
  }, [])
  

  return (
    <article className="xs:w-10/12 md:w-5/12 flex flex-row flex-wrap mx-auto  border-b-2 border-gray-300 py-5">
      <img src={product.img} alt={product.name} className="w-4/12"/>
      <div className="w-8/12 pl-5">
        <h1 className="xs:text-sm md:text-xl font-bold">{product.name}</h1>
        <h1 className="xs:text-sm md:text-sm">{category + ' / '+ type}</h1>
        <h2 className="xs:text-sm md:text-xl">${product.totalPrice}</h2>

        <div>
        <span className="xs:text-sm md:text-base">Cantidad: {product.quantity}</span>
          <button  onClick={() => dispatch(incrementQuantity(product))}>➕</button>

          <button  onClick={() => dispatch(decrementQuantity(product))}>➖</button>
          
        </div>
        <button onClick={() => dispatch(removeItem(product))}><DeleteIcon/></button>
        
      </div>
    </article>
  );
};

export default CartItem;
