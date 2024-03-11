import React, { useState } from "react";
import ProductCard from "../Route/ProductCard/ProductCard";
import { productData } from "../../static/data";
import styles from "../../styles/style";
import { Link } from "react-router-dom";

const ShopProfileData = ({ isOwner }) => {
  const [active, setActive] = useState(1);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between ">
        <div className="w-full flex">
          <div className="flex items-center" onClick={() => setActive(1)}>
            <h5
              className={`font-[600] ${
                active === 1 ? "text-red-500" : "text-[#333]"
              } cursor-pointer pr-[20px]`}
            >
              Shop Products
            </h5>
          </div>
          <div
            onClick={() => setActive(2)}
            className="flex items-center pr-[20px] "
          >
            <h5
              className={`font-[600]  cursor-pointer ${
                active === 2 ? "text-red-500" : "text-[#333]"
              }`}
            >
              Runnings Events
            </h5>
          </div>
          <div
            onClick={() => setActive(3)}
            className="flex items-center pr-[20px]"
          >
            <h5
              className={`font-[600] cursor-pointer ${
                active === 3 ? "text-red-500" : "text-[#333]"
              }`}
            >
              Shop Reviews
            </h5>
          </div>
        </div>
        <div>
          {isOwner && (
            <div>
              <Link to="/dashboard">
                <div className={`${styles.button} !rounded-[4px] h-[42px]`}>
                  <span className="text-[white] ">Go Dashboard</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
      <br />
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
        {productData &&
          productData.map((i, index) => {
            return <ProductCard data={i} key={index} isShop={true} />;
          })}
      </div>
    </div>
  );
};

export default ShopProfileData;
