import Footer from "../../components/Layout/Footer.jsx" ;
import OrderDetails from "../../components/Shop/OrderDetails.jsx" ;
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";

const ShopOrderDetails = () => {
    return (
        <>
          <DashboardHeader />
          <OrderDetails/>
          <Footer/>
        </>
      );
}

export default ShopOrderDetails