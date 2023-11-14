import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

export default function SliderHome() {

    const [img , setImg ] = useState([
       
        {
            url : "https://thietke6d.com/wp-content/uploads/2021/05/banner-quang-cao-du-lich-10.png"
        },
        {
            url : "https://lystravel.com.vn/wp-content/uploads/2016/03/BANNER-ch%C3%ADnh-Ch%C3%B9m-tour-bi%E1%BB%83n-%C4%91%E1%BA%A3o-1365px-x-600px-01.jpg"
        }
    ])
 
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      {img.map((value, index) => (
        <SwiperSlide key={index}>
          <img src={value.url} alt={`Slide ${index}`} width='100%' height="500px" />
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}
