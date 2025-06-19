import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DetailsPage, HomePage, LoginPage, SignUpPage } from "./pages";
//import { Footer, NavBar } from "./components";
import "./App.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer position="top-center" autoClose={5000} />
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
