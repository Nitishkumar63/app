import { Routes, Route, Navigate } from "react-router";
import Home from "./components/Pages/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/ui/NotFound";
import OtpVerification from "./components/OtpVerfication";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import ProductListing from "./components/ProductsListing";
import Subscribe from "./components/Subscribe";
import ProductDetelis from "./components/ProductDetails";
import { createContext, useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { IoCloseCircleOutline } from "react-icons/io5";
import ProductsZoom from "./components/ProductsZoom";
import ProductsDetails from "./components/ui/ProductsDetails";
import CartPanel from "./components/ui/CartPanel";
import Cart from "./components/Pages/Cart";
import Checkout from "./components/Pages/Checkout";
import Drawer from "@mui/material/Drawer";
import MyAccount from "./components/Pages/MyAccount";
import MyProfile from "./components/MyProfile/MyProfile";
import MyList from "./components/MyList/MyList";
import SignupOtpVerification from "./components/signupOtpVerfication";
import axios from "axios";

// Create a context to manage global state
const MyContext = createContext();

// Reusable ProtectedRoute component
function ProtectedRoute({ children, isLogin }) {
  return isLogin ? children : <Navigate to="/login" />;
}

// Reusable PublicRoute component
function PublicRoute({ children, isLogin }) {
  return isLogin ? <Navigate to="/" /> : children;
}

function App() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(false);
  const [IsLogin, setIsLogin] = useState(false);

  // Handle drawer toggle
  const toggleDrawer = (open) => () => {
    setState(open);
  };

  // Handle dialog open/close
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Values to pass into context
  const values = {
    toggleDrawer,
    handleClickOpen,
    handleClose,
    IsLogin,
    setIsLogin,
  };

  // Verify authentication on component mount
  useEffect(() => {
    const AuthVerified = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/api/v1/users/refresh-token`,
          { withCredentials: true }
        );

        if (data.success) {
          setIsLogin(true);
        }
      } catch (error) {
        console.error("Authentication verification failed:", error);
        setIsLogin(false);
      }
    };

    AuthVerified();
  }, []);

  return (
    <>
      <MyContext.Provider value={values}>
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route
            path="/login"
            element={
              <PublicRoute isLogin={IsLogin}>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute isLogin={IsLogin}>
                <Signup />
              </PublicRoute>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <PublicRoute isLogin={IsLogin}>
                <ForgotPassword />
              </PublicRoute>
            }
          />
          <Route
            path="/signup-otp-verification"
            element={
              <PublicRoute isLogin={IsLogin}>
                <SignupOtpVerification />
              </PublicRoute>
            }
          />
          <Route
            path="/otp-verification"
            element={
              <PublicRoute isLogin={IsLogin}>
                <OtpVerification />
              </PublicRoute>
            }
          />
          <Route
            path="/reset-password"
            element={
              <PublicRoute isLogin={IsLogin}>
                <ResetPassword />
              </PublicRoute>
            }
          />
          <Route path="/help-center" element={<h1>Help Center</h1>} />
          <Route path="/productListing" element={<ProductListing />} />
          <Route path="/productDetails/:id" element={<ProductDetelis />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />

          {/* Protected Routes */}
          <Route
            path="/my-profile"
            element={
              <ProtectedRoute isLogin={IsLogin}>
                <MyProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-list"
            element={
              <ProtectedRoute isLogin={IsLogin}>
                <MyList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-account"
            element={
              <ProtectedRoute isLogin={IsLogin}>
                <MyAccount />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute isLogin={IsLogin}>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute isLogin={IsLogin}>
                <Checkout />
              </ProtectedRoute>
            }
          />
        </Routes>

        <Subscribe />
        <Footer />

        {/* Product Zoom Dialog */}
        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth
          maxWidth="xl"
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <div className="flex gap-x-5 relative py-5">
              <button
                onClick={handleClose}
                className=" !w-[50px] !h-[50px] !max-w-[50px] !rounded-full !absolute flex items-center justify-center !top-0 !right-0"
              >
                <IoCloseCircleOutline className="text-[35px] hover:text-purple-600" />
              </button>
              <div>
                <ProductsZoom />
              </div>
              <div>
                <ProductsDetails />
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Cart Panel Drawer */}
        <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
          <div className="w-[500px] overflow-hidden" role="presentation">
            {/* Header */}
            <div className="flex justify-between items-center relative px-6 border-b border-gray-300 py-3">
              <h1 className="font-semibold text-[25px]">Shopping Cart</h1>
              <button
                onClick={toggleDrawer(false)}
                className="absolute top-2 right-2 w-[40px] h-[40px] flex items-center justify-center rounded-full"
              >
                <IoCloseCircleOutline className="text-[35px] text-gray-700 hover:text-purple-600" />
              </button>
            </div>

            {/* Cart Items */}
            <div>
              <CartPanel />
            </div>
          </div>
        </Drawer>
      </MyContext.Provider>
    </>
  );
}

export default App;
export { MyContext };
