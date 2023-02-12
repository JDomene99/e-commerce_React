import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../../state/user";
import { clearCart } from "../../state/cart";
import HomeIcon from "@mui/icons-material/Home";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Nav() {

  const dispatch = useDispatch();
  const [list, setToggleList] = useState(false);
  const isAuth = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const [toggleButton, setToggleButton] = useState(true);

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className="flex justify-between items-center h-24 mx-auto lg:px-20 md:px-14 xs:px-10 text-black">
        <ul className="hidden md:flex md:gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button>Product</Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                          to="/products/all"
                        >
                          All Products
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                          to="/products/shoes"
                        >
                          Shoes
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                          to="/products/clothes"
                        >
                          Clothes
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="hidden md:flex  flex-row flex-wrap gap-x-6 list-none">
          <li>
            <Link to="/cart">
              <ShoppingCartIcon />
              {cart.totalCount}
            </Link>
          </li>

          {isAuth.user != null ? (
            <li>
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(setLogout());
                  dispatch(clearCart());
                  setToggleButton(!toggleButton);
                }}
              >
                logOut
              </Button>
            </li>
          ) : (
            <div className="flex flex-row gap-6">
              <li>
                <Link to="/login">
                  <Button variant="contained" color="inherit">
                    Login
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <Button variant="contained">Register</Button>
                </Link>
              </li>
            </div>
          )}
        </div>

        <div className="block md:hidden">
        <Link to="/cart">
              <ShoppingCartIcon />
              {cart.totalCount}
            </Link>
        </div>


        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 z-50"
              : "ease-in-out duration-1000 fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4"></h1>

          <li className="p-3 border-b border-gray-600 flex flex-row">
            <HomeIcon className="m-3 " />{" "}
            <Link
              className="block py-2 pl-3 pr-4 text-black focus:text-black"
              to="/"
            >
              Home{" "}
            </Link>
          </li>

          <li className="p-4 border-b border-gray-600">
            <div className="flex flex-row">
              <ShoppingBagIcon className="m-3 " />
              <button
                className="flex flex-col"
                onClick={() => {
                  setToggleList(!list);
                }}
              >
                <h3 className="block py-2 pl-3 pr-4 text-black focus:text-black">
                  Product
                </h3>
              </button>
            </div>

            {list ? (
              <ul className="flex flex-col pl-14">
                <li>
                  <Link
                    className=""
                    to="/products/all"
                    onClick={() => {
                      dispatch(setSize(null));
                      dispatch(setOrder(null));
                    }}
                  >
                    All Products
                  </Link>
                </li>

                <li>
                  <Link
                    to="/products/shoes"
                    onClick={() => {
                      dispatch(setSize(null));
                      dispatch(setOrder(null));
                    }}
                  >
                    Shoes
                  </Link>
                </li>

                <li>
                  <Link
                    to="/products/clothes"
                    onClick={() => {
                      dispatch(setSize(null));
                      dispatch(setOrder(null));
                    }}
                  >
                    Clothes
                  </Link>
                </li>
              </ul>
            ) : (
              ""
            )}
          </li>
          <li className="p-4 border-b border-gray-600 flex flex-row">
            <ImportContactsIcon className="m-3 " />
            <Link
              className="block py-2 pl-3 pr-4 text-black focus:text-white"
              to="/contact"
            >
              Contact
            </Link>
          </li>

          {isAuth.user != null ? (
              <li className="pt-4">
                <Button
                  variant="contained"
                  onClick={() => {
                    dispatch(setLogout());
                    dispatch(clearCart());
                  }}
                >
                  logOut
                </Button>
              </li>
            ) : (
              <div className="flex flex-row gap-6 pt-4 pl-8">
                <li>
                  <Link to="/login">
                    <Button variant="contained" color="inherit">
                      Login
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    <Button variant="contained">Register</Button>
                  </Link>
                </li>
              </div>
            )}
        </ul>
      </div>
    </>
  );
}

export default Nav;
