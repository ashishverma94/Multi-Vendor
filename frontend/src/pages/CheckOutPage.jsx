import React from "react";
import Checkout from "../components/Checkout/Checkout.jsx";
import Footer from "../components/Layout/Footer.jsx";
import CheckoutSteps from "../components/Checkout/CheckoutSteps.jsx";
import Header from "../components/Layout/Header.jsx";

const CheckOutPage = () => {
  return (
    <div>
      <Header />
      <br />
      <br />
      <CheckoutSteps active={1} />
      <Checkout />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default CheckOutPage;
