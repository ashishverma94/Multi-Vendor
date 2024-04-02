import {
  FAQPage,
  HomePage,
  LoginPage,
  SignupPage,
  EventsPage,
  ProfilePage,
  ProductsPage,
  ShopLoginPage,
  ShopCreatePage,
  ActivationPage,
  BestSellingPage,
  ProductDetailsPage,
  SellerActivationPage,
} from "./routes/Routes.js";

import {
  ShopHomePage,
  ShopAllEvents,
  ShopAllProducts,
  ShopCreateEvent,
  ShopAllCoupouns,
  ShopCreateProduct,
  ShopDashboardPage,
} from "./routes/ShopRoutes.js";

import { useEffect } from "react";
import Store from "./redux/store.js";
import { ToastContainer } from "react-toastify";
import { getAllEvents } from "./redux/actions/event.js";
import { getAllProducts } from "./redux/actions/product.js";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import { loadSeller, loadUser } from "./redux/actions/user.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SellerProtectedRoute from "./routes/SellerProtectedRoute.jsx";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
    Store.dispatch(getAllEvents());
    Store.dispatch(getAllProducts());
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/best-selling" element={<BestSellingPage />} />
          <Route path="/products/:name" element={<ProductDetailsPage />} />
          <Route path="/shop-login" element={<ShopLoginPage />} />
          <Route path="/shop-create" element={<ShopCreatePage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/activation/:activation_token"
            element={<ActivationPage />}
          />
          
          {/* shop routes  */}
          <Route
            path="/shop/:id"
            element={
              <SellerProtectedRoute>
                <ShopHomePage />
              </SellerProtectedRoute>
            } 
          />
          <Route
            path="/dashboard"
            element={
              <SellerProtectedRoute>
                <ShopDashboardPage />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-products"
            element={
              <SellerProtectedRoute>
                <ShopAllProducts />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-create-product"
            element={
              <SellerProtectedRoute>
                <ShopCreateProduct />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-create-event"
            element={
              <SellerProtectedRoute>
                <ShopCreateEvent />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-events"
            element={
              <SellerProtectedRoute>
                <ShopAllEvents />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-coupouns"
            element={
              <SellerProtectedRoute>
                <ShopAllCoupouns />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/seller/activation/:activation_token"
            element={<SellerActivationPage />}
          />
        </Routes>

        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition:Bounce
        />
      </BrowserRouter>
    </>
  );
}

export default App;
