import NavbarComponents from "./components/Navbar";
import BannerComponents from "./components/Banner";
import OfferBanner from "./components/Offerbanner";
import About from "./components/About";
import Company from "./components/Company";
import ProductsHome from "./components/Products";
import Testimoni from "./components/Testi";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavbarComponents />
      <BannerComponents />
      <OfferBanner />
      <About />
      <Company />
      <ProductsHome />
      <Testimoni />
      <Footer />
    </>
  );
}
