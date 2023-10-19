import { Helmet } from "react-helmet-async";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import Banner from "../Shared/Banner";
import { useEffect, useState } from "react";

const Home = () => {
  const [brands, setBrands] = useState([]);

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
        <h1 className="text-5xl text-center font-bold my-10">Featured Brands</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto my-10">
        {brands.map(brand => (
          <div key={brand.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={brand.logo_url} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center pb-3">{brand.name}</h2>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">
                  See All Apple Products
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
