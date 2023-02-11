import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../../state/user";
import { clearCart } from "../../state/cart";
import HomeIcon from "@mui/icons-material/Home";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function Nav() {
  const isNonMobileScreens = useMediaQuery("(min-width: 769px)");
  const dispatch = useDispatch();
  const [list, setToggleList] = useState(false);
  const isAuth = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const [toggleButton, setToggleButton] = useState(true);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      {!isNonMobileScreens ? (
        //Mobile
        <nav className="bg-white border-gray-200 px-4 justify-between  py-2.5 rounded dark:bg-gray-900">
          <div className="flex flex-row flex-wrap items-center justify-between px-4">
            <button
              type="button"
              className=" text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => {
                setToggleButton(!toggleButton);
              }}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

            {toggleButton ? (
              ""
            ) : (
              <ul className="z-50 absolute top-0 left-0 list-none flex flex-col pl-5 w-full pb-3 text-xl border border-gray-100 rounded-lg bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <button
                    type="button"
                    className="p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    onClick={() => {
                      setToggleButton(!toggleButton);
                    }}
                  >
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>

                <li className="flex flex-row ">
                  <HomeIcon className="m-3 " />{" "}
                  <Link
                    className="block py-2 pl-3 pr-4 text-black focus:text-black border-b border-gray-100"
                    to="/"
                  >
                    Home{" "}
                  </Link>
                </li>
                <li className="flex flex-col ">
                  <div className="flex flex-row">
                    <ShoppingBagIcon className="m-3 " />
                    <button
                      className="flex flex-col"
                      onClick={() => {
                        setToggleList(!list);
                      }}
                    >
                      <h3 className="block py-2 pl-3 pr-4 text-black focus:text-black border-b border-gray-100">
                        Product
                      </h3>
                    </button>
                  </div>

                  {list ? (
                    <div className="flex flex-col pl-14">
                      <Link
                        to="/products/all"
                        onClick={() => {
                          dispatch(setSize(null));
                          dispatch(setOrder(null));
                        }}
                      >
                        All Products
                      </Link>

                      <Link
                        to="/products/shoes"
                        onClick={() => {
                          dispatch(setSize(null));
                          dispatch(setOrder(null));
                        }}
                      >
                        Shoes
                      </Link>

                      <Link
                        to="/products/clothes"
                        onClick={() => {
                          dispatch(setSize(null));
                          dispatch(setOrder(null));
                        }}
                      >
                        Clothes
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </li>
                <li className="flex flex-row  w-12/12">
                  <ImportContactsIcon className="m-3 " />
                  <Link
                    className="block py-2 pl-3 pr-4 text-black focus:text-white border-b border-gray-100 "
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
                {isAuth.user == null ? (
                  <div className="flex flex-row gap-6 mt-6">
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
                ) : (
                  <li className="my-5">
                    <Link to="/">
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
                    </Link>
                  </li>
                )}
              </ul>
            )}
            <Link to="/cart">
              <ShoppingCartIcon />
              {cart.totalCount}
            </Link>
          </div>
        </nav>
      ) : (
        //Desktop Nav
        <ul className="list-none md:text-xl flex flex-row justify-between xs:gap-20 2xl:px-20 py-5 md:px-10">
          <div className="flex flex-row flex-wrap gap-x-10">
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
          </div>

          <div className="flex flex-row flex-wrap gap-x-6">
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
        </ul>
      )}
    </>
  );
}

export default Nav;
