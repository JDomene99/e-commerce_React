import React, {useState} from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../state/cart";
import { useNavigate } from "react-router-dom";


const CartContainer = () => {
  const isAuth = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

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
                  setShowModal(true);
                  const timer = setTimeout(() => {
                    setShowModal(false);
                    dispatch(clearCart());
                  }, 2000);
                  
                }}
              >
                Comprar
              </button>
            </div>
          </footer>

          {showModal ? (
        <>
          <div className="top-28  mx-auto flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-3/12 ">
            <div className="relative w-full mx-auto max-w-3xl">
              <div className="relative p-4 flex-auto text-black bg-green-700 rounded-3xl font-bold">
                Compra realizada correctamente
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

        </section>
      )}
    </main>
  );
};

export default CartContainer;
