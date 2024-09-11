import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import PrivetRoute from "./components/PrivetRoute.jsx";
import { createRoutes } from './routes.jsx';

const getRoutes = (allRoutes) =>
  allRoutes.map((route) => {
    if (route.private) {
      return (
        <Route
          path={route.route}
          element={<PrivetRoute>{route.component}</PrivetRoute>}
          key={route.key}
        />
      );
    }

    return <Route path={route.route} element={route.component} key={route.key} />;
  });

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
  {getRoutes(createRoutes())} 
</Routes>
      <Footer />
    </BrowserRouter>
  );
}
