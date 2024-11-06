import React from "react";
import CustomerRoutes from "./Routers/CustomerRoutes";
import Navbar from "./customer/components/Navigation/Navigation";
import Footer from "./customer/components/Footer/Footer";
// Adjust the import path as necessary

function App() {
  return (
    <div>
      <Navbar />
      <CustomerRoutes />
      <Footer />
    </div>
  );
}

export default App;
