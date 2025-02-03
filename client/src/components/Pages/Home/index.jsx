import HomeSlider from "../HomeSlider";
import CategorySlider from "../categorySlider";
import FreeShippingBanner from "../../ui/FreeShipping";
import ProductMenu from "../ProductMenu";

function Home() {
  return (
    <>
      <div className="w-[100%] h-[900px] bg-[#F4EFEF]">
        <div className="h-[600px]">
          <HomeSlider />
        </div>
        <div className="h-[500px]">
          <CategorySlider />
        </div>
      </div>

      <div>
        <ProductMenu />
      </div>

      <FreeShippingBanner />
    </>
  );
}

export default Home;
