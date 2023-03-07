import React, { useState } from "react";
import { Rating } from "@mui/material";
import { useSelector } from "react-redux";
import { selectMode } from "../redux/slice/modeSlice";

const ProductCard = ({
  category,
  description,
  name,
  price,
  rating,
  supply,
  stat,
}) => {
  const mode = useSelector(selectMode);
  const [openStat, setOpenStat] = useState(false);

  return (
    <article className="flex justify-center">
      <div
        className={`${
          mode === "dark" ? "bg-[#114a5d]" : "bg-[#f8fbfc]"
        } shadow p-3 text-sm`}
      >
        <h3 className="text-[#b4ce4d]">{category}</h3>
        <h4 className="text-[16px]">{name}</h4>
        <p className="mb-3 text-[#92df39]">${parseFloat(price).toFixed(2)}</p>
        <Rating readOnly value={rating} sx={{ color: "#92df39" }} />
        <h4>{description}</h4>
        <button
          className="my-1 uppercase bg-[#92df39] text-black px-4 py-1 rounded text-[12px]"
          onClick={() => setOpenStat((prev) => !prev)}
        >
          See {`${openStat ? "Less" : "More"}`}
        </button>
        {openStat && (
          <div className="text-[12px] text-gray-400">
            {stat.map((item) => {
              const { _id, yearlySalesTotal, yearlyTotalSoldUnits } = item;
              return (
                <div key={_id}>
                  <p>id: {_id}</p>
                  <p>Supply Left: {supply}</p>
                  <p>Total Yearly Sales: {yearlySalesTotal}</p>
                  <p>Total Yearly Unit Sales: {yearlyTotalSoldUnits}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
