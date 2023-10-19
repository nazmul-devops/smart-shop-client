import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const phone = e.target.phone.value;

    const passMinLength = 6;
    const passHasCapitalLetter = /[A-Z]/.test(password);
    const passHasSpecialCharacter = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(
      password
    );

    if (password.length < passMinLength) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    if (!passHasCapitalLetter) {
      toast.error("Password must contain at least one capital letter.");
      return;
    }

    if (!passHasSpecialCharacter) {
      toast.error("Password must contain at least one special character.");
      return;
    }

    createUser(email, password)
      .then(result => {
        console.log(result.user);
        const user = { email, password, name, phone };
        fetch("http://localhost:5001/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
          });
        navigate("/login");
      })
      .catch(error => {
        console.error(error);
      });
    toast.success("You have Registered successfully.");
  };

  return (
    <div>
      <Helmet>
        <title>Register Page</title>
      </Helmet>
      <Header></Header>
      <div>
        <div>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-full">
              <div className="text-center">
                <h1 className="text-4xl font-bold">Register here!</h1>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      name="name"
                      className="input input-bordered"
                      required
                    />
                  </div>

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
                      <span className="label-text">Phone</span>
                    </label>
                    <input
                      type="text"
                      placeholder="phone"
                      name="phone"
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      name="password"
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
                    <button className="btn btn-error">Register</button>
                    <p className="py-4">
                      Already have an account?
                      <Link className="ml-3" to="/login">
                        <button className="btn-link">Login</button>
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
