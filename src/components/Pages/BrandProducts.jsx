import { useEffect, useState } from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";

const BrandProducts = () => {
  const [brandProducts, setBrandProducts] = useState([]);

  const { brandName } = useParams();

  useEffect(() => {
    fetch(
      `https://smart-shop-server.abcfanbd.com/products-by-brand/${brandName}`
    )
      .then(res => res.json())
      .then(data => setBrandProducts(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Brand Products Page</title>
      </Helmet>
      <Header></Header>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center font-bold text-2xl my-5">
          To see brand Slider please swap left/right
        </h1>
        <div className="carousel rounded-box w-full">
          {brandProducts?.map(product => (
            <div key={product._id} className="carousel-item w-full h-[700px]">
              <img src={product?.image} className="w-full" />
            </div>
          ))}
        </div>
      </div>

      <div>
        {brandProducts.length === 0 ? (
          <h1 className="max-w-7xl mx-auto my-10 text-2xl font-semibold">
            No products available for {brandName}
          </h1>
        ) : (
          <div>
            <h1 className="max-w-7xl mx-auto my-10 text-2xl font-semibold">
              Brand Products: {brandProducts.length}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto my-10">
              {brandProducts?.map(product => (
                <div key={product._id} className="card bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={product.image}
                      alt="Product Image"
                      className="rounded-xl w-[300px] h-[190px]"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{product.pname}</h2>
                    <p className="font-bold">
                      {product.bname}{" "}
                      <span className="font-normal text-gray-400">
                        {product.selectedType}
                      </span>
                    </p>
                    <p className="font-semibold text-xs"></p>
                    <p className="font-semibold">{product.price}</p>
                    <div className="card-actions">
                      <Link to={`/productDetails/${product._id}`}>
                        <button className="btn btn-primary">Details</button>
                      </Link>
                      <Link to={`/updateProduct/${product._id}`}>
                        <button className="btn btn-primary">Update</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default BrandProducts;
