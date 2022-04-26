import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Admin } from "./pages/Admin";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Admin />} />
          <Route path="meals/:id" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
