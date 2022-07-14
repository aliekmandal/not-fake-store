import Card from "./components/card/oneCard"
import './App.css';
import { Grid } from "@mui/material";
import * as React from 'react';
import { useEffect , useState} from "react";
import Header from "./components/header/header";
import MainPage from "./pages/mainPage/main"
import ProductPage from "./pages/productPage/product-page";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";


function App() {
  return (
    <> 
      <Router>
        <Header/>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
      </Routes>

      <Routes>
        <Route exact path="/product/:id" element={<ProductPage/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
