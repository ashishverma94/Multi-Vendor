import { useEffect } from "react";
import Store from "./redux/store.js";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { loadUser } from "./redux/actions/user.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  FAQPage,
  HomePage,
  LoginPage,
  SignupPage,
  EventsPage,
  ProductsPage,
  ActivationPage,
  BestSellingPage,
  ProductDetailsPage,
} from "./Routes.js";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { loading } = useSelector((state) => state.user);

  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <>
      {loading ? null : (
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
              <Route
                path="/activation/:activation_token"
                element={<ActivationPage />}
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
