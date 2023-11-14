import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import localhost from "../../api/api";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DetailTour() {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const resDetail = await fetch(`${localhost}/tour/detail/${id}`);
      const dataDetail = await resDetail.json();
      console.log(dataDetail.tour);
      setData(dataDetail.tour);
    };
    getData();
  }, [id]);

  return (
    <>
      {data && (
        <div className=" bg-gray-100  p-6 ">
          <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link to="/" underline="hover" color="inherit">
                Trang chủ
              </Link>
              <Link underline="hover" color="inherit">
                Danh mục tour
              </Link>

              <Typography color="text.primary">{data.name}</Typography>
            </Breadcrumbs>
          </div>

          <h1 className="text-3xl pt-6">{data.name}</h1>

          <div className="mt-8 mb-8 grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <div className="my-4">
                <p>{data.des}</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper"
              >
                {data.imgDetail &&
                  data.imgDetail.map((value, key) => {
                    return (
                      <SwiperSlide>
                        <img src={value} width="100%" height="200px" />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          </div>

          <div className="py-4">
            <div className="grid grid-cols-12 gap-6">
              <div
                className="col-span-12 md:col-span-7 text-justify prose"
                dangerouslySetInnerHTML={{ __html: data.detail }}
              ></div>

              <div className="col-span-12 md:col-span-5  ">
                <div
                  className="dontour bg-white sticky p-8 top-[15%]"
                  id="booking"
                >
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
                            <button id="decrease-btn">-</button>
                            <input
                              type="text"
                              id="quantity"
                              value={1}
                              readOnly
                            />
                            <button o id="increase-btn">
                              +
                            </button>
                          </div>
                        </td>
                        <td>
                          {data.price.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </td>
                        <td className="tongtien">23232323 ₫</td>
                      </tr>
                      <tr>
                        <td>Trẻ Em</td>
                        <td>
                          <div className="quantity-input">
                            <button id="decrease-btn">-</button>
                            <input
                              type="text"
                              id="quantity"
                              readOnly
                              value={0}
                            />
                            <button id="increase-btn">+</button>
                          </div>
                        </td>
                        <td>
                        {data.childrenPrice.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </td>
                        <td className="tongtien">23232323₫</td>
                      </tr>
                      <tr>
                        <td>Em bé</td>
                        <td>
                          <div className="quantity-input">
                            <button id="decrease-btn">-</button>
                            <input
                              type="text"
                              id="quantity"
                              readOnly
                              value={0}
                            />
                            <button id="increase-btn">+</button>
                          </div>
                        </td>
                        <td>
                        {data.oldPrice.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </td>
                        <td className="tongtien">23232323₫</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td className="tongtien">Tổng Tiền:</td>
                        <td className="tong">23232323₫</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="select-booking items-center">
                    <div className="select flex">
                      <label>Chọn Ngày</label>
                      <input type="date" name="" id="departure-date" />
                    </div>

                    <div className="btn-booking">
                      <button className="bg-[#f79321] rounded-xl py-4 px-8 text-white">
                        YÊU CẦU ĐẶT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
