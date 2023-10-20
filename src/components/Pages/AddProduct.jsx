import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const AddProduct = () => {
  const navigate = useNavigate();

  const handleAddProduct = e => {
    e.preventDefault();
    const pname = e.target.pname.value;
    const bname = e.target.bname.value;
    const selectedType = e.target.selectedType.value;
    const price = e.target.price.value;
    const image = e.target.image.value;
    const des = e.target.des.value;
    const rating = e.target.rating.value;

    const product = { pname, bname, selectedType, price, des, image, rating };
    fetch("https://smart-shop.inneedcloud.com/products/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
    navigate("/brandProducts");
    toast.success("Product Added successfully.");
  };

  return (
    <div>
      <Helmet>
        <title>Add New Product</title>
      </Helmet>
      <Header></Header>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Add New Product</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={handleAddProduct} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Product Name"
                  name="pname"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Brand Name"
                  name="bname"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text">Pick Type</span>
                </label>
                <select className="select select-bordered" name="selectedType">
                  <option disabled selected>
                    Select Product Type
                  </option>
                  <option>Smart Phone</option>
                  <option>Laptop</option>
                  <option>Tablet</option>
                  <option>Headphone</option>
                  <option>Desktop</option>
                  <option>Microphone</option>
                  <option>Accessories</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Image URL"
                  name="image"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <textarea
                  name="des"
                  className="textarea textarea-bordered"
                  placeholder="Short Description"
                ></textarea>
              </div>

              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <select className="select select-bordered" name="rating">
                  <option disabled selected>
                    Select Rating
                  </option>
                  <option>1 Star</option>
                  <option>2 Star</option>
                  <option>3 Star</option>
                  <option>4 Star</option>
                  <option>5 Star</option>
                </select>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-error">Add Product</button>
                <p className="py-4">
                  Do not have an account?
                  <Link className="ml-3" to="/register">
                    <button className="btn-link">Register Here</button>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddProduct;
