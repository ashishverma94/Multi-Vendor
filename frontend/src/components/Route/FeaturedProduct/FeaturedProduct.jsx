import React from "react";
import Loader from "../../Loader/Loader";
import { useSelector } from "react-redux";
import styles from "../../../styles/style";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProduct = () => {
  const { allProducts, isLoading } = useSelector((state) => state.products);
  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Featured Product</h1>
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 bottom-0">
            {allProducts &&
              allProducts.map((i, index) => (
                <ProductCard data={i} key={index} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProduct;
