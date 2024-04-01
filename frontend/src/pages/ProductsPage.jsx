import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { productData } from "../static/data";
import Header from "../components/Layout/Header";
import Loader from "../components/Loader/Loader";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/Route/ProductCard/ProductCard";

const ProductsPage = () => {
  const { allProducts, isLoading } = useSelector((state) => state.products);
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   if (categoryData === null) {
  //     const d =
  //     allProducts && allProducts.sort((a, b) => a.sold_out - b.sold_out);
  //     setData(d);
  //   } else {
  //     const d =
  //     allProducts && allProducts.filter((i) => i.category === categoryData);
  //     setData(d);
  //   }
  //   // window.scrollTo(0,0)
  // }, [allProducts]);

  return (
    <div>
      <Header activeHeading={3} />
      <br />
      <br />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[30px] mb-12">
            {allProducts &&
              allProducts.map((i, index) => (
                <ProductCard data={i} key={index} />
              ))}
          </div>
          {allProducts && allProducts.length === 0 ? (
            <h1 className="text-center font-bold md:text-[40px] w-full pb-[100px] text-[20px]">
              No Products Found!
            </h1>
          ) : null}
        </>
      )}
    </div>
  );
};

export default ProductsPage;
