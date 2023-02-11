import React from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../state/cart";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const isAuth = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <main className="py-10 w-full text-center" >
      <header className="w-5/12 mx-auto">
        <h1 className="font-bold text-2xl">Your Cart</h1>
      </header>

      {cart.cart.length === 0 ? (
        <section className="text-center w-full h-96">
          <span className="text-xl">is currently empty</span>
          
        </section>
      ) : (
        <section>
          <div className="flex flex-col gap-y-6">
            {cart.cart.map((item) => {
              return <CartItem key={item._id} product={item} />;
            })}
          </div>

          <footer className="w-5/12 mx-auto ">
            <hr />

            <h4>
              Total <span className="font-bold">${cart.total}</span>
            </h4>
            <div className="flex flex-row flex-wrap md:justify-between xs:justify-center">
              <button
                className="bg-gray-500 px-10 py-2 border-4 border-white text-white rounded-lg hover:opacity-70"
                onClick={() => {
                  dispatch(clearCart());
                  navigate("/products/all");
                }}
              >
                Clear cart
              </button>

              <button
                className="bg-black px-10 py-2 border-4 border-white text-white rounded-lg hover:opacity-70"
                onClick={() => {
                  isAuth.user === null ?  navigate("/register") : /*navigate("/ckeckOut")*/''
                  
                  
                }}
              >
                Comprar
              </button>
            </div>
          </footer>
        </section>
      )}
    </main>
  );
};

export default CartContainer;
