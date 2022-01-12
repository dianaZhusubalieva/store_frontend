import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContext";
import CommentContextProvider from "./contexts/CommentContext";
import ProductContextProvider from "./contexts/ProductContext";
import AddPage from "./pages/AddPage";
import AllProducts from "./pages/AllProducts";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";

import MainPage from "./pages/MainPage";

const MyRoutes = () => {
  return (
    <CommentContextProvider>
      <AuthContextProvider>
        <ProductContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<MainPage />} />

              <Route path="/add" element={<AddPage />} />
              <Route path="/products/edit/:id" element={<EditPage />} />

              <Route path="/products" element={<AllProducts />} />
              <Route path="/products/detail/:id" element={<DetailPage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ProductContextProvider>
      </AuthContextProvider>
    </CommentContextProvider>
  );
};

export default MyRoutes;
