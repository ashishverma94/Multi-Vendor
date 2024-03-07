import { useEffect } from "react";
import Store from "./redux/store.js";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./ProtectedRoute.jsx";
import { loadSeller, loadUser } from "./redux/actions/user.js";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
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
} from "./Routes.js";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { isLoading, isSeller, seller } = useSelector((state) => state.user);
  const { loading, isAuthnticated } = useSelector((state) => state.seller);

  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
  }, []);

  return (
    <>
      {loading || isLoading ? null : (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/sign-up" element={<SignupPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/shop-login" element={<ShopLoginPage />} />
              <Route path="/shop-create" element={<ShopCreatePage />} />
              <Route path="/best-selling" element={<BestSellingPage />} />
              <Route path="/products/:name" element={<ProductDetailsPage />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isAuthenticated={isAuthnticated}>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/activation/:activation_token"
                element={<ActivationPage />}
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
      )}
    </>
  );
}

export default App;
