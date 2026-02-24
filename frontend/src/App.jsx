import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/user/About";
import Contact from "./pages/user/Contact";
import Store from "./pages/user/Store";
import Community from "./pages/user/Community";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import ProtectedRoute from "./ProtectedRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Books from "./pages/admin/Books";
import { Users } from "lucide-react";
import Messages from "./pages/admin/Messages";
import Orders from "./pages/admin/Orders";
import Reports from "./pages/admin/Reports";
import Settings from "./pages/admin/Settings";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Protected routes */}
          <Route
            path="/store"
            element={
              <ProtectedRoute>
                <Store />
              </ProtectedRoute>
            }
          />
          <Route
            path="/community"
            element={
              <ProtectedRoute>
                <Community />
              </ProtectedRoute>
            }
          />

          {/* Admin only */}
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin-books"
            element={
              <ProtectedRoute role="admin">
                <Books />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin-users"
            element={
              <ProtectedRoute role="admin">
                <Users />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin-orders"
            element={
              <ProtectedRoute role="admin">
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin-reports"
            element={
              <ProtectedRoute role="admin">
                <Reports />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin-messages"
            element={
              <ProtectedRoute role="admin">
                <Messages />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin-settings"
            element={
              <ProtectedRoute role="admin">
                <Settings />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
