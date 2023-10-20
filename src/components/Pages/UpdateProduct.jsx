import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import Header from "../Shared/Header";
import { useLoaderData, useNavigate } from "react-router-dom";
import Footer from "../Shared/Footer";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const loadedProduct = useLoaderData();
  console.log(loadedProduct);

  const handleUpdateProduct = e => {
    e.preventDefault();
    const pname = e.target.pname.value;
    const bname = e.target.bname.value;
    const selectedType = e.target.selectedType.value;
    const price = e.target.price.value;
    const image = e.target.image.value;
    const des = e.target.des.value;
    const rating = e.target.rating.value;

    const updatedProduct = {
      pname,
      bname,
      selectedType,
      price,
      des,
      image,
      rating,
    };
    fetch(`https://smart-shop.inneedcloud.com/products/${loadedProduct._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
    navigate("/");
    toast.success("Product Updated successfully.");
  };

  return (
    <div>
      <Helmet>
        <title>Update Product</title>
      </Helmet>
      <Header></Header>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Update Product</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <form onSubmit={handleUpdateProduct} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Product Name"
                  name="pname"
                  defaultValue={loadedProduct.pname}
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
                  defaultValue={loadedProduct.bname}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control w-full max-w-md">
                <label className="label">
                  <span className="label-text">Pick Type</span>
                </label>
                <select
                  className="select select-bordered"
                  name="selectedType"
                  defaultValue={loadedProduct.selectedType}
                >
                  <option disabled selected>
                    Select Product Type
                  </option>
                  <option>Smart Phone</option>
                  <option>Laptop</option>
                  <option>Headphone</option>
                  <option>Desktop</option>
                  <option>Microphone</option>
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
                  defaultValue={loadedProduct.price}
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
                  defaultValue={loadedProduct.image}
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
                  defaultValue={loadedProduct.des}
                  className="textarea textarea-bordered"
                  placeholder="Short Description"
                ></textarea>
              </div>

              <div className="form-control w-full max-w-md">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <select
                  className="select select-bordered"
                  name="rating"
                  defaultValue={loadedProduct.rating}
                >
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
                <button className="btn btn-info">Update Product</button>
                {/* <button className="btn btn-error">Delete Product</button> */}
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

export default UpdateProduct;
