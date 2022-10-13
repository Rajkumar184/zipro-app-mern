import { SnackbarProvider } from "notistack";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route exact="true" path="/" element={<LandingPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
