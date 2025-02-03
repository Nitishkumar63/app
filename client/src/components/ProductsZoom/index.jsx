import { useState, useRef } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

const ProductsZoom = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef(null); // Ref for main Swiper

  const mainImages = [
    "https://api.spicezgold.com/download/file_1734526483285_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp",
  ];

  return (
    <div>
      {/* Main Image Swiper */}
      <div className="w-[600px] rounded-3xl">
        <Swiper
          className="mySwiper"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          initialSlide={activeIndex}
          onSwiper={(swiper) => (mainSwiperRef.current = swiper)} // Store swiper instance
        >
          {mainImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div>
                <InnerImageZoom
                  src={image}
                  alt={`image-${index}`}
                  zoomScale={1}
                  zoomType="hover"
                  fadeDuration={150}
                  className="w-[100%] h-[600px] rounded-2xl object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail Swiper */}
      <div className="py-5 w-[600px]">
        <Swiper
          modules={[Navigation]}
          slidesPerView={5}
          grabCursor={true}
          navigation
          className="mySwiper"
        >
          {mainImages.map((thumbnail, index) => (
            <SwiperSlide key={index}>
              <div
                className={`relative w-[100px] cursor-pointer h-[100px] rounded-lg ${
                  activeIndex === index
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  if (mainSwiperRef.current) {
                    mainSwiperRef.current.slideTo(index);
                  }
                }}
              >
                <img
                  src={thumbnail}
                  alt={`thumbnail-${index}`}
                  className={`rounded-xl cursor-pointer transition-all duration-300 ${
                    activeIndex !== index ? "opacity-50" : "opacity-100"
                  }`}
                />

                {activeIndex !== index && (
                  <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductsZoom;
