import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import localhost from "../../api/api";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Skeleton from "react-loading-skeleton";

const MainTour = () => {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const { id } = useParams();
  const [data, setData] = useState([]);
  const [nameTour, setNameTour] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate a delay of 1 second
        setTimeout(async () => {
          const res = await fetch(`${localhost}/tour/categoryId/${id}`);
          const dataAPI = await res.json();
          setData(dataAPI.tours);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    const fetchName = async () => {
      try {
        const resName = await fetch(`${localhost}/category/${id}`);
        const nameAPI = await resName.json();
        console.log(nameAPI.name);
        setNameTour(nameAPI.name);
      } catch (error) {
        console.error("Error fetching name:", error);
      }
    };

    setLoading(true);
    fetchData();
    fetchName();
  }, [id]);

  return (
    <>
      <div className="py-6 px-6">
        {nameTour && (
          <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link to="/" underline="hover" color="inherit">
                Trang chủ
              </Link>
             
              <Typography color="text.primary">{nameTour}</Typography>
            </Breadcrumbs>
          </div>
        )}

        <div className="mt-8 grid grid-cols-12 gap-4">
          {loading ? (
            // Display a loading skeleton while fetching data
            Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="col-span-6 md:col-span-3 bg-zinc-100 rounded-2xl h-[400px]"
              >
                <Skeleton height={250} />
                <Skeleton height={20} style={{ marginTop: 5 }} />
                <Skeleton height={15} style={{ marginTop: 5 }} />
                <Skeleton height={15} style={{ marginTop: 5 }} />
              </div>
            ))
          ) : data && data.length > 0 ? (
            data.map((value, key) => (
              <Link  key={key} className="col-span-6 md:col-span-3" to={`/detail/${value._id}`}>
                <div className="bg-gray-500 mb-2 rounded-2xl flex">
                  <img
                    className="rounded-2xl object-cover aspect-square"
                    src={value.imgDetail[0]}
                    alt=""
                    height="400px"
                    width="100%"
                  />
                </div>
                <h2 className="font-bold" style={{ maxHeight: "3.6em", overflow: "hidden", textOverflow: "ellipsis" }}>{value.name}</h2>
                <p className="text-sm text-gray-500 des-mini-tour" style={{ maxHeight: "5em", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {value.des}
                </p>
                <div className="mt-1">
                  <span className="font-bold">
                    {value.price.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <div className="flex justify-center text-center">
              <p className="text-center">Dữ liệu rỗng</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MainTour;
