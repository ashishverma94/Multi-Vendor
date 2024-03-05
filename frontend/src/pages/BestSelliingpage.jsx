import { useState, useEffect } from "react";
import { productData } from "../static/data";
import Header from "../components/Layout/Header";
import ProductCard from "../components/Route/ProductCard/ProductCard";

const BestSellingPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const d =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell);
    setData(d);
  }, []);

  return (
    <div>
      <Header activeHeading={2} />
      <br />
      <br />
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[30px] mb-12">
        {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
      </div>
      {data && data.length === 0 ? (
        <h1 className="text-center font-bold md:text-[40px] w-full pb-[100px] text-[20px]">
          {" "}
          No Products Found!
        </h1>
      ) : null}
    </div>
  );
};

export default BestSellingPage;
