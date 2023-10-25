import Footer from "./Footer";
import Header from "./Header";
import {Outlet} from "react-router-dom";

export default function Layout() {
  return (
    
    <div className="py-4  mx-8 flex flex-col min-h-screen ">
      <Header />
      <Outlet  />
      <Footer/>
    </div>
  );
}
