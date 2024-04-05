import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ProductDetails from "../components/Products/ProductDetails.jsx";
import SuggestedProduct from "../components/Products/SuggestedProduct.jsx";

const ProductDetailsPage = () => {
  const { allProducts } = useSelector((state) => state.products);
  const { allEvents } = useSelector((state) => state.events);

  const { id } = useParams();
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
  const isEvent = searchParams.get("isEvent");

  useEffect(() => {
    if (isEvent !== null) {
      const data = allEvents?.find((i) => i._id === id);
      setData(data);
    } else {
      const data = allProducts?.find((i) => i._id === id);
      setData(data);
    }

    window.scrollTo(0, 0);
  }, [allProducts, data, id]);

  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {!isEvent && <>{data && <SuggestedProduct data={data} />}</>}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
