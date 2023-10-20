import { Helmet } from "react-helmet-async";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import Banner from "../Shared/Banner";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const [brands, setBrands] = useState([]);

  const products = useLoaderData();

  useEffect(() => {
    fetch("./brands.json")
      .then(res => res.json())
      .then(data => setBrands(data));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Brand Shop | Home Page</title>
      </Helmet>
      <Header></Header>

      <Banner></Banner>

      {/* brand section  */}
      <div className="max-w-7xl mx-auto">
        <div>
          <h1 className="text-5xl text-center font-bold my-10">
            Featured Brands
          </h1>
          <hr className="border-b-4 border-gray-300 w-1/3 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
          {brands.map(brand => (
            <Link key={brand.id} to={`/brandProducts/`}>
              <div className="card bg-base-100 shadow-xl">
                <figure>
                  <img src={brand.logo_url} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title justify-center pb-3">
                    {brand.name}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Latest Apple Products */}
      <div className="max-w-7xl mx-auto">
        <div>
          <h1 className="text-5xl text-center font-bold my-10">
            Latest Apple Products
          </h1>
          <hr className="border-b-4 border-gray-200 w-1/3 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
          {products
            .filter(product => product.bname === "Apple")
            .slice(0, 3)
            .map(product => (
              <div key={product._id} className="card bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="w-[300px] h-[220px]"
                    src={product.image}
                    alt="Product Image"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.pname}</h2>
                  <h2 className="card-title">{product.price}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-center">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Best Selling Products */}
      <div className="max-w-7xl mx-auto">
        <div>
          <h1 className="text-5xl text-center font-bold my-10">
            Best Selling Samsung Products
          </h1>
          <hr className="border-b-4 border-gray-200 w-1/3 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
          {products
            .filter(product => product.bname === "Samsung")
            .slice(0, 3)
            .map(product => (
              <div key={product._id} className="card bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="w-[300px] h-[220px]"
                    src={product.image}
                    alt="Product Image"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.pname}</h2>
                  <h2 className="card-title">{product.price}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-center">
                    <button className="btn btn-primary">Buy Now</button>
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

export default Home;
