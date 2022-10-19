import { SnackbarProvider } from "notistack";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route exact="true" path="/" element={<LandingPage />}></Route>

        <Route exact="true" path="/login" element={<Login />}></Route>

        <Route exact="true" path="/signup" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
