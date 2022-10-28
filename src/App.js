import { SnackbarProvider } from "notistack";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import KycPage from "./pages/KycPage";
import Contact from "./pages/Contact";
import OrderDelivery from "./pages/OrderDelivery";

function App() {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route exact="true" path="/" element={<LandingPage />}></Route>

        <Route exact="true" path="/login" element={<Login />}></Route>

        <Route exact="true" path="/signup" element={<Register />}></Route>
        {/* 
        <Route
          exact="true"
          path="/forgot-password"
          element={<ForgotPassword />}
        ></Route>

        <Route exact="true" path="/kyc" element={<KycPage />}></Route>

        <Route exact="true" path="/contact" element={<Contact />}></Route>

        <Route exact="true" path="/order" element={<OrderDelivery />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
