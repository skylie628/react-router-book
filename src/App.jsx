//component
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Invoice from "./components/Invoice";
import InvoiceDetail from "./components/InvoiceDetail";
import DefaultInvoiceDetail from "./components/DefaultInvoiceDetail";
import InvoiceFallback from "./components/InvoiceFallback";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import SignIn from "./components/SignIn";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="contact" element={<Contact />} />
          <Route path="home" element={<Home />} />
          <Route path="invoice" element={<Invoice />}>
            <Route
              index
              element={
                <PrivateRoute fallback={<InvoiceFallback />}>
                  <DefaultInvoiceDetail />
                </PrivateRoute>
              }
            />
            <Route
              path=":slug"
              element={
                <PrivateRoute fallback={<InvoiceFallback />}>
                  <InvoiceDetail />
                </PrivateRoute>
              }
            />
          </Route>
        </Route>
        <Route
          path="/signin"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
