import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

export default function CategorySlider() {
  const categories = [
    {
      name: "Smart Tablet",
      img: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/11-cz_categoryimagelist.jpg",
    },
    {
      name: "Crepe T-Shirt",
      img: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/12-cz_categoryimagelist.jpg",
    },
    {
      name: "Leather Watch",
      img: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/13-cz_categoryimagelist.jpg",
    },
    {
      name: "Rolling Diamond",
      img: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/14-cz_categoryimagelist.jpg",
    },
    {
      name: "Wooden Chair",
      img: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/15-cz_categoryimagelist.jpg",
    },
    {
      name: "Sneakers Shoes",
      img: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/16-cz_categoryimagelist.jpg",
    },
    {
      name: "Purse",
      img: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/17-cz_categoryimagelist.jpg",
    },

    {
      name: "Xbox Controller",
      img: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/18-cz_categoryimagelist.jpg",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-[90%]">
        <Swiper
          modules={[Navigation]}
          slidesPerView={7}
          spaceBetween={30}
          grabCursor={true}
          navigation
          className="mySwiper"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center w-[200px] h-[200px] shadow-xl  bg-white rounded-lg border">
                <div>
                  <img
                    src={category.img}
                    alt={category.name}
                    className="object-cover cursor-pointer "
                  />
                </div>

                <h1 className="text-[18px]  font-medium text-center text-gray-600 -mt-5 ">
                  {category.name}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
