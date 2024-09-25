import React from "react";
import { Route, Routes } from "react-router-dom";
import OpenRoute from "./components/admin/auth/OpenRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/admin/auth/PrivateRoute";
import Layout from "./components/admin/pages/Layout";
import Dashboard from "./components/admin/pages/Dashboard";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Partner from "./pages/Partner";
import AddService from "./components/admin/pages/AddService";
import GetAllService from "./components/admin/pages/GetAllService";
import About from "./components/admin/pages/About";
import Service from "./pages/Service";
import SingleService from "./pages/SingleService";
import InvestorHome from "./pages/investor/InvestorHome";
import InvestorAbout from "./pages/investor/InvestorAbout";
import InvestorServices from "./pages/investor/InvestorServices";

const App = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service/:id" element={<SingleService />} />
        <Route path="/investor" element={<InvestorHome />} />
        <Route path="/investor/about-us" element={<InvestorAbout />} />
        <Route path="/investor/services" element={<InvestorServices />} />

        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="/register"
          element={
            <OpenRoute>
              <Register />
            </OpenRoute>
          }
        />

        {user?.role === "Admin" && (
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          >
            <Route
              path="/admin/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/add-service"
              element={
                <PrivateRoute>
                  <AddService />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/get-service"
              element={
                <PrivateRoute>
                  <GetAllService />
                </PrivateRoute>
              }
            />
          </Route>
        )}
      </Routes>
    </div>
  );
};

export default App;
