import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user.email;

  const fetchUserCart = () => {
    fetch(`http://localhost:5001/get-cart/${userEmail}`)
      .then(res => res.json())
      .then(data => {
        // Handle the cart data here
        setCartData(data);
      });
  };

  const handleDeleteCartItem = itemId => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it",
    }).then(result => {
      if (result.isConfirmed) {
        // User confirmed, proceed with deletion
        fetch(`http://localhost:5001/delete-cart-item/${itemId}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            setCartData(prevCart =>
              prevCart.filter(item => item._id !== itemId)
            );
            console.log(data);
          });
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
      }
    });
  };

  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    fetchUserCart();
  }, []);

  return (
    <div>
      <Helmet>
        <title>My Cart</title>
      </Helmet>
      <Header></Header>
      <div className="max-w-7xl mx-auto">
        <div>
          <div className=" text-center ">
          <h1 className="text-3xl font-bold my-10">
            Cart Products: {cartData.length}
          </h1>
          <Link to="/allProducts">
            <button className="btn btn-info">Show All Products</button>
          </Link>
          </div>
        </div>
        <div className="my-10">
          {cartData.map(cart => (
            <div key={cart._id} className="my-10">
              <div className="flex gap-5 justify-center items-center">
                <img className="w-32 rounded" src={cart.product.image} alt="" />
                <div className="text-xl font-semibold space-y-5">
                  <h1>Product Name: {cart.product.pname}</h1>
                  <p>Price: {cart.product.price}</p>
                </div>
              </div>
              <div className="text-center">
                <button
                  onClick={() => handleDeleteCartItem(cart._id)}
                  className="btn btn-error"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default MyCart;
