import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Admin } from "./pages/Admin";
import { HomePage } from "./pages/HomePage";
import { Layout } from "./components/Layout";
import { MenuPage } from "./pages/MenuPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="home">
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="meals/:id" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
