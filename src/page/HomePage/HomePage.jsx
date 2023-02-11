import React, { useState, useEffect } from "react";
import homePage from "../../assets/homePage_Jordan.jpg";
import "./style.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { getProductFilter } from "../../api/products";
import { useMediaQuery } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {

  const navigate = useNavigate()
  const [products, setProduct] = useState([]);
  const isNonMobileScreens = useMediaQuery("(min-width: 450px)");
  async function fetchData() {
    const response = await getProductFilter("all");
    setProduct(response);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  return (
    <div className="">
      <section className="bg-contain bg-no-repeat mx">
        <img src={homePage} alt="" />
      </section>

      <section className="text-center w-10/12 mx-auto pb-20">
        <h1 className="md:text-8xl xs:text-3xl  pb-5 pt-20 font-bold">FEEL THEM. BELIEVE IT.</h1>
        <p className="pb-5">
          Our most cushioned road running shoe gives you great comfort, ultimate
          softness, and lightweight support mile after mile.
        </p>

        <Link to="/products/clothes">
          <button className="bg-black px-10 py-2 border-4 border-white text-white rounded-3xl hover:opacity-70">
            Shop Clothes
          </button>
        </Link>

        <Link to="/products/shoes">
          <button className="bg-black px-10 py-2 border-4 border-white text-white rounded-3xl hover:opacity-70">
            Shop Shoes
          </button>
        </Link>
      </section>

      <section className="text-center">
        <h1 className="font-bold text-xl">Best Sellers</h1>
        <div className="relative flex items-center xs:w-11/12  sm:mx-auto xs:mx-auto xs:mb-4">
          {isNonMobileScreens ? (
            <ArrowBackIosIcon
              className="opacity-50 cursor-pointer hover:opacity-100"
              onClick={slideLeft}
              size={70}
            />
          ) : (
            ""
          )}

          <div
            id="slider"
            className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {products.map((button, i) => (
              <button
                key={i}
                value={button.name}
                className="w-5/12 align-middle p-2 px-4 mx-1 rounded-md cursor-pointer hover:scale-105 ease-in-out duration-300"
                onClick={() => navigate(`/product/${button._id}`)}
              >
                <div className="flex flex-col relative justify-center ">
                  <img
                    value={button.name}
                    className=" w-12/12"
                    src={button.img}
                    alt=""
                  />

                  <h1 className="absolute bottom-0 text-black bg-slate-300 xs:text-[10px] xs:w-full" >
                    <span className="font-bold">{button.name}</span>
                  </h1>
                </div>
              </button>
            ))}
          </div>

          {isNonMobileScreens ? (
            <ArrowForwardIosIcon
              className="opacity-50 cursor-pointer hover:opacity-100"
              onClick={slideRight}
              size={70}
            />
          ) : (
            ""
          )}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
