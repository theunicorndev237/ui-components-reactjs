import React from "react";
import {
  BrowserRouter, Routes, Route, Navigate,
} from "react-router-dom";

// app layout
import AppLayout from "../hoc/AppLayout";

// pages
import LandingPage from "../pages/landing/Landing.page";
import ComponentsPage from "../pages/components/Components.page";
import ErrorPage from "../pages/error/Error.page";

// paths
export const routesPathsArray = {};

const AppRoutes: React.FC = () => (
  <div className="app__routes">
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Navigate replace to="/" />} />
          <Route path="/components" element={<ComponentsPage />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  </div>
);

export default AppRoutes;
