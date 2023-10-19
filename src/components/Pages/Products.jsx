import { useEffect, useState } from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import { Helmet } from "react-helmet-async";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>Products Page</title>
      </Helmet>
      <Header></Header>
      <div>
        <h1 className="max-w-7xl mx-auto my-10">
          Total Products: {products.length}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto my-10">
          {products.map(product => (
            <div key={product._id} className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={product.image}
                  alt="Product Image"
                  className="rounded-xl w-[300px] h-[190px]"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{product.pname}</h2>
                <p>{product.bname}</p>
                <p className="font-semibold text-xs">{product.selectedType}</p>
                <p className="font-semibold">{product.price}</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Details</button>
                  <button className="btn btn-primary">Update</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Products;
