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

const App = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <Routes>
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

        {user?.role === "user" && (
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        )}
        {user?.role === "Admin" && (
          <Route
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
          </Route>
        )}
      </Routes>
    </div>
  );
};

export default App;
