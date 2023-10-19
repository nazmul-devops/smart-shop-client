import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";

const Login = () => {
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
          <form className="card-body">
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
                // onClick={handleGoogleSignIn}
              >
                Sign in With <FcGoogle className="text-3xl"></FcGoogle>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
