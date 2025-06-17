import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DetailsPage, HomePage, LoginPage, SignUpPage } from "./pages";
import { Footer, NavBar } from "./components";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
