import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Properties from "./pages/Properties";
import OrderPage from "./pages/OrderPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AuthProvider from "./context/AuthProvider";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Myorder from "./pages/Dashboard/Myorder";
import Review from "./pages/Dashboard/Review";
import MyProfile from "./pages/Dashboard/MyProfile";
import AllReviews from "./pages/AllReviews";
import AllProperties from "./pages/Dashboard/AllProperties";
import AddProperties from "./pages/Dashboard/AddProperties";
import AllUser from "./pages/Dashboard/AllUser";
import AllOrders from "./pages/Dashboard/AllOrders";
import MakeAdmin from "./pages/Dashboard/MakeAdmin";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Payment from "./pages/Dashboard/Payment";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          {/* <ToastContainer /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/allreviews" element={<AllReviews />} />
            <Route path="/properties" element={<Properties />} />

            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<MyProfile />} />
              <Route path="review" element={<Review />} />
              <Route path="myorder" element={<Myorder />} />
              <Route path="allproperties" element={<AllProperties />} />
              <Route path="addproperties" element={<AddProperties />} />
              <Route path="allusers" element={<AllUser />} />
              <Route path="allorders" element={<AllOrders />} />
              <Route path="makeadmin" element={<MakeAdmin />} />
              <Route path="payment/:orderId" element={<Payment />} />
            </Route>

            <Route element={<PrivateRoute />}>
              {" "}
              <Route
                path="/orderpage/:propertyId"
                element={<OrderPage />}
              />{" "}
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
