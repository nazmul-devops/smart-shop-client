import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";

const ProductDetails = () => {
  const handleAddToCart = () => {
    console.log("Added to Cart");
    toast.success("Product added to your cart successfully.");
  };
  const loadedProduct = useLoaderData();
  console.log(loadedProduct);
  return (
    <div>
      <Header></Header>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl text-center font-bold">
          Product Details Information
        </h1>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={loadedProduct.image}
              alt="Product Image"
              className="rounded-xl w-[300px] h-[190px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{loadedProduct.pname}</h2>
            <p>{loadedProduct.bname}</p>
            <p className="font-semibold text-xs">
              {loadedProduct.selectedType}
            </p>
            <p className="font-semibold">{loadedProduct.price}</p>
            <div className="card-actions">
              <Link to="/myCart">
                <button onClick={handleAddToCart} className="btn btn-success">
                  Add To Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProductDetails;
