import { useSelector } from "react-redux";
import styles from "../../../styles/style";
import { useEffect, useState } from "react";
import Loader from "../../Loader/Loader.jsx";
import ProductCard from "../ProductCard/ProductCard.jsx";

const BestDeals = () => {
  const [data, setData] = useState([]);
  const { allProducts, isLoading } = useSelector((state) => state.products);
  useEffect(() => {
    // const d =
    //   allProducts && allProducts.sort((a, b) => b.sold_out - a.sold_out);
    const firstFive = allProducts?.slice(0, 5);
    setData(firstFive);
  }, [allProducts]);

  return (
    <div className={`${styles.section}`}>
      <div className={`${styles.heading}`}>
        <h1>Best Deals</h1>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 bottom-0">
          {data &&
            data.map((i, index) => (
              <ProductCard key={index} index={index} data={i} />
            ))}
        </div>
      )}
    </div>
  );
};

export default BestDeals;
