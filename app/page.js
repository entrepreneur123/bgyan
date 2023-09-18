import Navbar from "@/components/Navbar";
import Searchbar from "@/components/Searchbar";
import Banner from "@/components/Banner";
import FeaturedProducts from "@/components/FeaturedProducts";
import ShowProducts from "@/components/ShowProducts";
import Explore from "@/components/Explore";
import Footer from "@/components/Footer";

// import FeaturedCard from "@/components/FeaturedCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <Searchbar />
      <Banner />
      {/* <FeaturedCard /> */}
      <FeaturedProducts />
      <ShowProducts />
      <Explore />
      <Footer />
    </>
  );
}
