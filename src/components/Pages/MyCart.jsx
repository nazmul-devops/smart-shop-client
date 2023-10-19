import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const MyCart = () => {
  return (
    <div>
      <Header></Header>
      <h1>My Cart Component</h1>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default MyCart;
