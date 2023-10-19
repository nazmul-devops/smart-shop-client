import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="max-w-7xl mx-5 md:mx-auto lg:mx-auto my-5">
      <img
        className="w-full rounded-xl"
        src="https://nazmul-ph-resources.s3.ap-south-1.amazonaws.com/assignment-09/404-page-large.png"
        alt=""
      />
      <p className="text-center my-5">
        <button className="btn btn-error">
          <Link to="/">Go to Home </Link>
        </button>
      </p>
    </div>
  );
};

export default NotFound;
