import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Layout/Header";
import { productData } from "../static/data.jsx";
import Footer from "../components/Layout/Footer";
import ProductDetails from "../components/Products/ProductDetails.jsx";
import SuggestedProduct from "../components/Products/SuggestedProduct.jsx";

const ProductDetailsPage = () => {
  const { name } = useParams();
  const { allProducts } = useSelector((state) => state.products);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const data = allProducts?.find((i) => i._id === name);
    setData(data);
  }, [allProducts]);

  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {data && <SuggestedProduct data={data} />}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
