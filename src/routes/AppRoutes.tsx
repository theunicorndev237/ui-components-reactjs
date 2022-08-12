import React from "react";
import {
  BrowserRouter, Routes, Route, Navigate,
} from "react-router-dom";

// app layout
import AppLayout from "../hoc/AppLayout";

// pages
import LandingPage from "../pages/landing/Landing.page";

// paths
export const routesPathsArray = {};

const AppRoutes: React.FC = () => (
  <div className="app__routes">
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Navigate replace to="/" />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  </div>
);

export default AppRoutes;
