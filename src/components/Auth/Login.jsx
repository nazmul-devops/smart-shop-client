import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const [showToast, setShowToast] = useState(false);

  const { signInUser, googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (showToast) {
      toast.success("You have Signed In successfully.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [showToast]);

  // Email & password sign in
  const handleSignIn = async e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(result => {
        console.log(result.user);
        setShowToast(true);
        setTimeout(() => {
          navigate("/allProducts");
        }, 1000);
      })
      .catch(error => {
        if (email === "auth/user-not-found") {
          toast.error("Email not found. Please check your email.");
        } else if (error.code === "auth/wrong-password") {
          toast.error("Incorrect password. Please try again.");
        } else {
          toast.error("An unexpected error occurred. Please try again.");
        }
      });
  };

  // Google Sign In
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        console.log(result.user);
        setShowToast(true);
        setTimeout(() => {
          navigate("/myCart");
        }, 1000);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Brand Shop | Login Page</title>
      </Helmet>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://inneed-assets.s3.ap-south-1.amazonaws.com/nazmul/login-bg.jpeg)",
        }}
      >
        <div className="card w-full max-w-md shadow-2xl bg-base-100">
          <form onSubmit={handleSignIn} className="card-body">
            <img
              src="https://inneed-assets.s3.ap-south-1.amazonaws.com/nazmul/logo.png"
              alt=""
            />
            <h1 className="text-3xl text-black font-bold text-center my-5">
              Welcome to SMART SHOP <br />
              <span className="text-gray text-sm">
                Login to your account.
              </span>{" "}
            </h1>
            <Link className="text-center btn" to="/">
              <button>Go Back Home</button>
            </Link>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white bg-red-500 hover:bg-red-600">
                Login
              </button>
              <p className="py-4">
                Do not have an account?
                <Link className="ml-3" to="/register">
                  <button className="link text-red-500">Register</button>
                </Link>
              </p>
            </div>
            <div className="flex gap-5">
              <button
                className="btn flex gap-5 w-full"
                onClick={handleGoogleSignIn}
              >
                Sign in With <FcGoogle className="text-3xl"></FcGoogle>
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
