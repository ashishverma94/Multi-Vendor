import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Layout/Header";
import { productData } from "../static/data.jsx";
import Footer from "../components/Layout/Footer";
import ProductDetails from "../components/Products/ProductDetails.jsx";
import SuggestedProduct from "../components/Products/SuggestedProduct.jsx";

const ProductDetailsPage = () => {
  const { name } = useParams();

  const [data, setData] = useState(null);
  let productName = "";
  for (let i = 0; i < name.length; i++) {
    if (name[i] == "-") {
      productName = productName + " ";
    } else {
      productName = productName + name[i];
    }
  }

  useEffect(() => {
    const data = productData.find((i) => i.name === productName);
    setData(data);
  }, []);

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
