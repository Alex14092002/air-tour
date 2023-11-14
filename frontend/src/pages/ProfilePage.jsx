import { useContext, useState, useEffect } from "react";

import { Link, Navigate, useParams } from "react-router-dom";
import localhost from "../../api/api";
export default function ProfilePage() {
  const { id } = useParams();
  console.log(id);

  const [user, setuser] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${localhost}/user/${id}`);
      const data = await res.json();
      console.log(data);
      setuser(data);
    };
    getData();
  }, []);

  return (
    <>
      {user && (
        <div className="">
          <div className=" py-5 items-center">
            <div className="bg-white">
              <h4 className="flex justify-center p-3 text-[22px]">
                Thông tin tài khoản
              </h4>
              <div className="md:grid grid-cols-12 flex flex-col md:items-center gap-4 p-4">
                <div className="col-span-6 relative">
                  <span className="absolute bg-white left-3 -top-[12px] px-2">
                    Tên tài khoản
                  </span>
                  <input
                    type="text"
                    placeholder="Nhập tên tài khoản mới"
                    readOnly
                    value={user.username}
                    className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                  />
                </div>
                <div className="col-span-6 relative">
                  <span className="absolute bg-white left-3 -top-[12px] px-2">
                    Họ và tên
                  </span>
                  <input
                    type="text"
                    placeholder="Nhập họ và tên"
                    
                    value={user.name}
                    className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                  />
                </div>

               

                <div className="col-span-6 relative">
                  <span className="absolute bg-white left-3 -top-[12px] px-2">
                    Số điện thoại
                  </span>
                  <input
                    type="text"
                    placeholder="Nhập số điện thoại"
                    value={user.phone}
                    className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                  />
                </div>

                <div className="col-span-6 relative">
                  <span className="absolute bg-white left-3 -top-[12px] px-2">
                    Địa chỉ
                  </span>
                  <input
                    type="text"
                    placeholder="Nhập địa chỉ"
                    value={user.address}
                    className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                  />
                </div>

                <div className="col-span-6 relative">
                  <span className="absolute bg-white left-3 -top-[12px] px-2">
                    Email
                  </span>
                  <input
                    type="text"
                    placeholder="Nhập email mới"
                    value={user.email}
                    className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                  />
                </div>
              </div>

              <div className="px-4 text-right py-2">
                <button className="h-10 w-32 rounded-sm shadow-md text-white text-[16px] hover:bg-green-700 bg-green-600">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
