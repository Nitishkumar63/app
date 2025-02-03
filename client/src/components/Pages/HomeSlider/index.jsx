import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Navigation,
  Autoplay,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

const slidesData = [
  {
    imageUrl:
      "https://api.spicezgold.com/download/file_1734524958576_NewProject(10).jpg",
    caption: "Slide 1",
  },
  {
    imageUrl:
      "https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg",
    caption: "Slide 2",
  },
  {
    imageUrl:
      "https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg",
    caption: "Slide 3",
  },
  {
    imageUrl:
      "https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg",
    caption: "Slide 4",
  },
  {
    imageUrl:
      "https://api.spicezgold.com/download/file_1734525014348_NewProject(7).jpg",
    caption: "Slide 5",
  },
];

export default function HomeSlider() {
  return (
    <div className="flex justify-center py-10 homeSlider">
      <div className="w-[90%] h-[300px]">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[500px]">
                <img
                  src={slide.imageUrl}
                  alt={slide.caption}
                  className="w-[100%] h-[500px] rounded-[10px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
