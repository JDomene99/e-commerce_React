import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch } from "react-redux";
import { setOrder } from "../../state/products";

function NavProducts() {
  const [toglleIcon, setToglleIcon] = useState(false);
  const [list, setToggleList] = useState(false);
  const dispatch = useDispatch();

  return (
    <nav className="flex flex-col w-12/12 ">
      <button
        className="flex flex-row"
        onClick={() => {
          setToggleList(!list);
          setToglleIcon(!toglleIcon);
        }}
      >
        <h3 className="font-bold">By Sort</h3>
        {toglleIcon ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
      </button>

      {list ? (
        <div className="flex flex-col justify-start">
          <button className="text-left" onClick={() => dispatch(setOrder(-1))}>
          Price: low-high
          </button>

          <button className="text-left" onClick={() => dispatch(setOrder(1))}>
          Price: high-low
          </button>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}

export default NavProducts;
