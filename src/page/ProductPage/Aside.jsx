import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSize } from "../../state/products";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useMediaQuery } from "@mui/material";
import NavProducts from "./NavProducts";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CloseIcon from '@mui/icons-material/Close';

function Aside({ type }) {
  const isNonMobileScreens = useMediaQuery("(min-width: 970px)");
  const [list, setToggleList] = useState(false);
  const [toglleIcon, setToglleIcon] = useState(false);
  const dispatch = useDispatch();
  const [filter, toggleFilters] = useState(false);
  const shoesSize = {
    name: "Shoes",
    array: [
      38, 39, 40, 41, 42, 43, 43, 44, 45, 46,
    ],
  };
  const clothesSize = {
    name: "Clothes",
    array: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
  };

  const handleButton = (size) => {
    dispatch(setSize(size));
  };

  function ArticleSize({ type }) {
    return (
      <article className=" text-left">
        <h3 className="font-bold ">Filter By {type.name} Size</h3>

        <div className="flex flex-row flex-wrap gap-4  justify-start pt-3 pb-6">
          {type.array.map((size, i) => {
            return (
              <button
                key={i}
                className="border-gray-300 border-2 p-2 hover:border-black focus:bg-black focus:text-white"
                onClick={() => handleButton(size)}
              >
                {size}{" "}
              </button>
            );
          })}
        </div>
      </article>
    );
  }

  return (
    <aside className={` pr-7 ${isNonMobileScreens ? "w-2/12" : "w-12-/12 flex justify-start text-left"}`}>
      {isNonMobileScreens ? (
        //Desktop Nav
        <nav className="h-screen sticky top-20">
          <NavProducts />
          <article className=" py-5">
            <button
              className="flex flex-row"
              onClick={() => {
                setToggleList(!list);
                setToglleIcon(!toglleIcon);
              }}
            >
              <h3 className="font-bold">By Category</h3>
              {toglleIcon ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </button>

            {list ? (
              <div className="flex flex-col  justify-start">
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
          </article>

          {type == "all" ? (
            <div>
              <ArticleSize type={clothesSize} />
              <ArticleSize type={shoesSize} />
            </div>
          ) : type === "shoes" ? (
            <ArticleSize type={shoesSize} />
          ) : (
            <ArticleSize type={clothesSize} />
          )}
        </nav>
      ) :
      //Mobile Nav
      (
        <nav className="flex flex-col justify-start text-left">
          {filter ? (
            <div className="flex flex-col justify-start">
              <button onClick={() => toggleFilters(!filter)} className="text-left"><CloseIcon/></button>
              <div className="flex flex-col">
                <NavProducts/>
                <button
                  className="flex flex-row mr-0"
                  onClick={() => {
                    setToggleList(!list);
                    setToglleIcon(!toglleIcon);
                  }}
                >
                  <h3 className="font-bold my-2">Filter By Category</h3>
                  {toglleIcon ? (
                    <KeyboardArrowDownIcon />
                  ) : (
                    <KeyboardArrowUpIcon />
                  )}
                </button>

                {list ? (
                  <div className="flex flex-col justify-start text-left">
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
                <div className="">
                  {type == "all" ? (
                    <div>
                      <ArticleSize type={clothesSize} />
                      <ArticleSize type={shoesSize} />
                    </div>
                  ) : type === "shoes" ? (
                    <ArticleSize type={shoesSize} />
                  ) : (
                    <ArticleSize type={clothesSize} />
                  )}
                </div>
              </div>
            </div>
          ) : (
            <nav className="flex flex-col justify-start" >
              <button onClick={() => toggleFilters(!filter)} className="text-left"><FilterAltIcon/></button>
            </nav>
            
          )}
        </nav>
      )}

    
    </aside>
  );
}

export default Aside;
