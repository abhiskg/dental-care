import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="bg-layer">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
