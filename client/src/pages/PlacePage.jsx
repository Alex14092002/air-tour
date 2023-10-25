import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
export default function PlacePage() {

  return (
    <div className="mt-[6%] bg-gray-100  px-8 pt-8">
      <h1 className="text-3xl">
        Tour Trung Quốc 7N7Đ: Thành Đô - Trùng Khánh - Cửu Trại Câu - Đô Giang
        Yển
      </h1>

      <div className="mt-8 mb-8 grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6">
          <div className="my-4">
            <h2 className="font-semibold text-2xl">
              Thiên Đường Chốn Hạ Giới Cửu Trại Câu
            </h2>
            <p>
              Trung Quốc sở hữu nền văn hóa hàng nghìn năm, làm say mê biết bao
              du khách nước ngoài. Hơn nữa, đất nước tỷ dân này còn có những khu
              thắng cảnh với nét đẹp rung động lòng người, đậm dấu ấn văn hóa,
              hòa hợp với thiên nhiên. Nhiều địa điểm sở hữu vẻ đẹp kỳ thú như
              chốn bồng lai nơi hạ giới như: Cửu Trại Câu, Trương Gia Giới,
              Thiên Cung Trên Mây...Có những kiến trúc nhân tạo vĩ đại nói lên
              lịch sử ngàn năm của Trung Quốc và một trong 7 kỳ quang thế giới:
              Vạn Lý Trường Thành, Tử Cấm Thành...Ngoài ra, Trung Quốc là nơi
              hội tụ những khoảng khắc thăng trần từ xưa đến nay của Bến Thượng
              Hải vừa cổ kín lại rất hiện đại cũng là nơi những cảnh quay của
              các bộ phim và những bản nhạc nổi tiếng của đất nước này. Để nói
              đến sự phong phú và đa dạng của các món ăn Trung Quốc thì phải
              nhắc đến 4 nền ẩm thực chính, đó là: Quảng Đông, Sơn Đông, Tứ
              Xuyên và Giang Tô. Đây như là những mảnh ghép để tạo nên bức tranh
              đa màu sắc cho ẩm thực Trung Quốc. Cùng iVIVU khám phá ngay hôm
              nay !{" "}
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
              <img
                src="https://data.webnhiepanh.com/wp-content/uploads/2020/11/21105453/phong-canh-1.jpg"
                width="100%"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://data.webnhiepanh.com/wp-content/uploads/2020/11/21105453/phong-canh-1.jpg"
                width="100%"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://data.webnhiepanh.com/wp-content/uploads/2020/11/21105453/phong-canh-1.jpg"
                width="100%"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://data.webnhiepanh.com/wp-content/uploads/2020/11/21105453/phong-canh-1.jpg"
                width="100%"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://data.webnhiepanh.com/wp-content/uploads/2020/11/21105453/phong-canh-1.jpg"
                width="100%"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://data.webnhiepanh.com/wp-content/uploads/2020/11/21105453/phong-canh-1.jpg"
                width="100%"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://data.webnhiepanh.com/wp-content/uploads/2020/11/21105453/phong-canh-1.jpg"
                width="100%"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="py-4">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7 text-justify">
            <h2 class="text-3xl text-[#003c71] py-2 font-bold">
              Chương trình tour
            </h2>
            <div className="">
              <h3 className="font-bold text-xl">GIỜ BAY DỰ KIẾN:</h3>
              <p>
                <strong>Tháng 10 ( Khách ra trước 1 đêm)</strong>
              </p>
              <p>CA408 SGN CKG 00:20 - 04:50&nbsp;</p>
              <p>CA407 CKG SGN 18:30 - 21:20</p>
              <p>
                <strong>
                  Tháng 11, 12 giờ bay dự kiến ( Khách ra đúng ngày khởi
                  hành)&nbsp;
                </strong>
              </p>
              <p>CA408 SGN-CKG 23:20-04:00+1</p>
              <p>CA407 CKG-SGN 18:30-21:20</p>
              <h3 className="font-bold text-xl">
                NGÀY 1: TP.HCM – TRÙNG KHÁNH- THÀNH ĐÔ - ĐÔ GIANG YỂN&nbsp;( ĂN
                SÁNG, TRƯA, TỐI)
              </h3>
              <p>
                Trưởng đoàn đón Quý khách tại sân bay Tân Sơn Nhất để làm thủ
                tục check-in đáp chuyến bay: CA408 SGN-CKG 00:20 – 04:50 đi
                Trùng Khánh.
              </p>
              <p>
                Đến sân bay Trùng Khánh, Đoàn làm thủ tục nhập cảnh Trung Quốc –
                Hướng Dẫn đón đoàn đưa đi ăn sáng.
              </p>
              <p>
                - Sau đó, đoàn di chuyển đi tham quan
                <strong>Phố Cổ Hồng Nhai Động</strong>: Khu phố cổ 11 tầng lầu
                với mái ngói rêu phong, hoa văn chạm trổ, phía sau là những tòa
                nhà chọc trời, nằm ở khu trung tâm thương mại thành phố Trùng
                Khánh, bên bờ sông Dương Tử, là điểm bờ sông giao nhau của hai
                con sông Trường Giang và sông Gia Linh, du khách tự do tham quan
                chụp hình các kiến trúc nhà treo, ngắm cảnh đẹp lung linh của
                Hồng Nhai.
              </p>
              <p className="py-6 flex justify-center">
                <img
                  src="//cdn2.ivivu.com/2023/03/28/15/ivivu-pho-co-hong-nhai-dong-2.gif"
                  data-src="//cdn2.ivivu.com/2023/03/28/15/ivivu-pho-co-hong-nhai-dong-2.gif"
                  className="w-full md:w-[50%]"
                />
              </p>
              <h3 className="font-bold text-xl">
                NGÀY 1: TP.HCM – TRÙNG KHÁNH- THÀNH ĐÔ - ĐÔ GIANG YỂN&nbsp;( ĂN
                SÁNG, TRƯA, TỐI)
              </h3>
              <p>
                Trưởng đoàn đón Quý khách tại sân bay Tân Sơn Nhất để làm thủ
                tục check-in đáp chuyến bay: CA408 SGN-CKG 00:20 – 04:50 đi
                Trùng Khánh.
              </p>
              <p>
                Đến sân bay Trùng Khánh, Đoàn làm thủ tục nhập cảnh Trung Quốc –
                Hướng Dẫn đón đoàn đưa đi ăn sáng.
              </p>
              <p>
                - Sau đó, đoàn di chuyển đi tham quan
                <strong>Phố Cổ Hồng Nhai Động</strong>: Khu phố cổ 11 tầng lầu
                với mái ngói rêu phong, hoa văn chạm trổ, phía sau là những tòa
                nhà chọc trời, nằm ở khu trung tâm thương mại thành phố Trùng
                Khánh, bên bờ sông Dương Tử, là điểm bờ sông giao nhau của hai
                con sông Trường Giang và sông Gia Linh, du khách tự do tham quan
                chụp hình các kiến trúc nhà treo, ngắm cảnh đẹp lung linh của
                Hồng Nhai.
              </p>
              <p className="py-6 flex justify-center">
                <img
                  src="//cdn2.ivivu.com/2023/03/28/15/ivivu-pho-co-hong-nhai-dong-2.gif"
                  data-src="//cdn2.ivivu.com/2023/03/28/15/ivivu-pho-co-hong-nhai-dong-2.gif"
                  className="w-full md:w-[50%]"
                />
              </p>
              <h3 className="font-bold text-xl">
                NGÀY 1: TP.HCM – TRÙNG KHÁNH- THÀNH ĐÔ - ĐÔ GIANG YỂN&nbsp;( ĂN
                SÁNG, TRƯA, TỐI)
              </h3>
              <p>
                Trưởng đoàn đón Quý khách tại sân bay Tân Sơn Nhất để làm thủ
                tục check-in đáp chuyến bay: CA408 SGN-CKG 00:20 – 04:50 đi
                Trùng Khánh.
              </p>
              <p>
                Đến sân bay Trùng Khánh, Đoàn làm thủ tục nhập cảnh Trung Quốc –
                Hướng Dẫn đón đoàn đưa đi ăn sáng.
              </p>
              <p>
                - Sau đó, đoàn di chuyển đi tham quan
                <strong>Phố Cổ Hồng Nhai Động</strong>: Khu phố cổ 11 tầng lầu
                với mái ngói rêu phong, hoa văn chạm trổ, phía sau là những tòa
                nhà chọc trời, nằm ở khu trung tâm thương mại thành phố Trùng
                Khánh, bên bờ sông Dương Tử, là điểm bờ sông giao nhau của hai
                con sông Trường Giang và sông Gia Linh, du khách tự do tham quan
                chụp hình các kiến trúc nhà treo, ngắm cảnh đẹp lung linh của
                Hồng Nhai.
              </p>
              <p className="py-6 flex justify-center">
                <img
                  src="//cdn2.ivivu.com/2023/03/28/15/ivivu-pho-co-hong-nhai-dong-2.gif"
                  data-src="//cdn2.ivivu.com/2023/03/28/15/ivivu-pho-co-hong-nhai-dong-2.gif"
                  className="w-full md:w-[50%]"
                />
              </p>
              <h3 className="font-bold text-xl">
                NGÀY 1: TP.HCM – TRÙNG KHÁNH- THÀNH ĐÔ - ĐÔ GIANG YỂN&nbsp;( ĂN
                SÁNG, TRƯA, TỐI)
              </h3>
              <p>
                Trưởng đoàn đón Quý khách tại sân bay Tân Sơn Nhất để làm thủ
                tục check-in đáp chuyến bay: CA408 SGN-CKG 00:20 – 04:50 đi
                Trùng Khánh.
              </p>
              <p>
                Đến sân bay Trùng Khánh, Đoàn làm thủ tục nhập cảnh Trung Quốc –
                Hướng Dẫn đón đoàn đưa đi ăn sáng.
              </p>
              <p>
                - Sau đó, đoàn di chuyển đi tham quan
                <strong>Phố Cổ Hồng Nhai Động</strong>: Khu phố cổ 11 tầng lầu
                với mái ngói rêu phong, hoa văn chạm trổ, phía sau là những tòa
                nhà chọc trời, nằm ở khu trung tâm thương mại thành phố Trùng
                Khánh, bên bờ sông Dương Tử, là điểm bờ sông giao nhau của hai
                con sông Trường Giang và sông Gia Linh, du khách tự do tham quan
                chụp hình các kiến trúc nhà treo, ngắm cảnh đẹp lung linh của
                Hồng Nhai.
              </p>
              <p className="py-6 flex justify-center">
                <img
                  src="//cdn2.ivivu.com/2023/03/28/15/ivivu-pho-co-hong-nhai-dong-2.gif"
                  data-src="//cdn2.ivivu.com/2023/03/28/15/ivivu-pho-co-hong-nhai-dong-2.gif"
                  className="w-full md:w-[50%]"
                />
              </p>
              <h3 className="font-bold text-xl">
                NGÀY 1: TP.HCM – TRÙNG KHÁNH- THÀNH ĐÔ - ĐÔ GIANG YỂN&nbsp;( ĂN
                SÁNG, TRƯA, TỐI)
              </h3>
              <p>
                Trưởng đoàn đón Quý khách tại sân bay Tân Sơn Nhất để làm thủ
                tục check-in đáp chuyến bay: CA408 SGN-CKG 00:20 – 04:50 đi
                Trùng Khánh.
              </p>
              <p>
                Đến sân bay Trùng Khánh, Đoàn làm thủ tục nhập cảnh Trung Quốc –
                Hướng Dẫn đón đoàn đưa đi ăn sáng.
              </p>
              <p>
                - Sau đó, đoàn di chuyển đi tham quan
                <strong>Phố Cổ Hồng Nhai Động</strong>: Khu phố cổ 11 tầng lầu
                với mái ngói rêu phong, hoa văn chạm trổ, phía sau là những tòa
                nhà chọc trời, nằm ở khu trung tâm thương mại thành phố Trùng
                Khánh, bên bờ sông Dương Tử, là điểm bờ sông giao nhau của hai
                con sông Trường Giang và sông Gia Linh, du khách tự do tham quan
                chụp hình các kiến trúc nhà treo, ngắm cảnh đẹp lung linh của
                Hồng Nhai.
              </p>
              <p className="py-6 flex justify-center">
                <img
                  src="//cdn2.ivivu.com/2023/03/28/15/ivivu-pho-co-hong-nhai-dong-2.gif"
                  data-src="//cdn2.ivivu.com/2023/03/28/15/ivivu-pho-co-hong-nhai-dong-2.gif"
                  className="w-full md:w-[50%]"
                />
              </p>
              <h3 className="font-bold text-xl">
                NGÀY 1: TP.HCM – TRÙNG KHÁNH- THÀNH ĐÔ - ĐÔ GIANG YỂN&nbsp;( ĂN
                SÁNG, TRƯA, TỐI)
              </h3>
              <p>
                Trưởng đoàn đón Quý khách tại sân bay Tân Sơn Nhất để làm thủ
                tục check-in đáp chuyến bay: CA408 SGN-CKG 00:20 – 04:50 đi
                Trùng Khánh.
              </p>
              <p>
                Đến sân bay Trùng Khánh, Đoàn làm thủ tục nhập cảnh Trung Quốc –
                Hướng Dẫn đón đoàn đưa đi ăn sáng.
              </p>
              <p>
                - Sau đó, đoàn di chuyển đi tham quan
                <strong>Phố Cổ Hồng Nhai Động</strong>: Khu phố cổ 11 tầng lầu
                với mái ngói rêu phong, hoa văn chạm trổ, phía sau là những tòa
                nhà chọc trời, nằm ở khu trung tâm thương mại thành phố Trùng
                Khánh, bên bờ sông Dương Tử, là điểm bờ sông giao nhau của hai
                con sông Trường Giang và sông Gia Linh, du khách tự do tham quan
                chụp hình các kiến trúc nhà treo, ngắm cảnh đẹp lung linh của
                Hồng Nhai.
              </p>
              <p className="py-6 flex justify-center">
                <img
                  src="//cdn2.ivivu.com/2023/03/28/15/ivivu-pho-co-hong-nhai-dong-2.gif"
                  data-src="//cdn2.ivivu.com/2023/03/28/15/ivivu-pho-co-hong-nhai-dong-2.gif"
                  className="w-full md:w-[50%]"
                />
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5  ">
            <div className="dontour p-8 bg-white sticky top-[15%]" id="booking">
              <table>
                <thead>
                  <tr>
                    <th>Loại khách</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Tổng giá</th>
                  </tr>
                </thead>
  
                <tbody>
                  <tr>
                    <td>Người lớn</td>
                    <td>
                      <div className="quantity-input">
                        <button

                          id="decrease-btn"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          id="quantity"
                         
                          readOnly
                        />
                        <button
                          o
                          id="increase-btn"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      23232323₫
                    </td>
                    <td className="tongtien">
                    23232323
                      ₫
                    </td>
                  </tr>
                  <tr>
                    <td>Trẻ Em</td>
                    <td>
                      <div className="quantity-input">
                        <button
                         
                          id="decrease-btn"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          id="quantity"
                          
                          readOnly
                        />
                        <button
                         
                          id="increase-btn"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                    23232323₫
                    </td>
                    <td className="tongtien">
                    23232323₫
                    </td>
                  </tr>
                  <tr>
                    <td>Em bé</td>
                    <td>
                      <div className="quantity-input">
                        <button
                        
                          id="decrease-btn"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          id="quantity"
                      
                          readOnly
                        />
                        <button

                          id="increase-btn"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>23232323₫</td>
                    <td className="tongtien">
                    23232323₫
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td className="tongtien">Tổng Tiền:</td>
                    <td className="tong">
                    23232323₫
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="select-booking items-center">
                <div className="select flex">
                  <label >Chọn Ngày</label>
                  <input type="date" name="" id="departure-date" />
                </div>
                  
                <div className="btn-booking"> 
                  <button className="bg-[#f79321] rounded-xl py-4 px-8 text-white">YÊU CẦU ĐẶT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
