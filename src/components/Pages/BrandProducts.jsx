import Banner from "../Shared/Banner";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const BrandProducts = () => {
  const products = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Brand Products Page</title>
      </Helmet>
      <Header></Header>
      <Banner></Banner>
      <div>
        <h1 className="max-w-7xl mx-auto my-10">
          {/* { selectedBrands.filter(brand => brand.name == 'Apple') } Brand Products: {selectedBrand.length} */}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto my-10">
          {products.map(product => (
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
      <Footer></Footer>
    </div>
  );
};

export default BrandProducts;
