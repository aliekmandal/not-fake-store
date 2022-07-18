import "./App.css";
import * as React from "react";
import Header from "./components/header/header";
import MainPage from "./pages/mainPage/main";
import ProductPage from "./pages/productPage/product-page";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import SliderCard from "./components/sliderCard/sliderCard";

function RoutePage() {
  let { id } = useParams();

  return (
    <>
      <ProductPage ids={id} />
    </>
  );
}

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
        </Routes>

        <Routes>
          <Route exact path="/product/:id" element={<RoutePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
