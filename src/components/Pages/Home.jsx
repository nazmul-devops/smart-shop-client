import { Helmet } from "react-helmet-async";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Brand Shop | Home Page</title>
      </Helmet>
      <Header></Header>
      <h1>This is Home Component</h1>
      <Footer></Footer>
    </div>
  );
};

export default Home;
