import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
// import { useLoaderData } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
// import Swal from 'sweetalert2'

const MyCart = () => {
  // const { user } =useContext(AuthContext);

  // // const cartProducts = useLoaderData();
  // console.log(cartProducts);

  return (
    <div>
      <Header></Header>
      <div className="max-w-7xl mx-auto">
        <div>
          <h1 className="text-5xl text-center font-bold my-10">
            Cart Products
          </h1>
          <hr className="border-b-4 border-gray-200 w-1/3 mx-auto" />
        </div>
        <div>
          <div className="flex">
            <img src="" alt="" />
            <div>
              <h1>Product Name:</h1>
              <p>Price: </p>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default MyCart;
