import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import ProductItem from "../ProductItem";

function ProductSlider(props) {
  return (
    <div className="flex justify-center">
      <div className="w-[100%]">
        <Swiper
          modules={[Navigation]}
          slidesPerView={props.item}
          spaceBetween={30}
          navigation
          className="mySwiper"
        >
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>

          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>

          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>

          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>

          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>

          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>

          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>

          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>

          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>

          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>

          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default ProductSlider;
