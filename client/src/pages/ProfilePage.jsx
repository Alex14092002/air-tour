import {useContext, useState} from "react";

import {Link, Navigate, useParams} from "react-router-dom";


export default function ProfilePage() {


  return (
    <>
    <div className="mt-[8%]">
    <div className=" py-5 items-center">
   <div className="bg-white"> 
    <h4 className="flex justify-center p-3 text-[22px]">Thông tin tài khoản</h4>
    <div className="md:grid grid-cols-12 flex flex-col md:items-center gap-4 p-4">
        <div className="col-span-6 relative">
            <span className="absolute bg-white left-3 -top-[12px] px-2">Tên tài khoản</span>
            <input  type="text" placeholder="Nhập tên tài khoản mới" readOnly value='quochung10' className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
        </div>
        <div className="col-span-6 relative">
            <span className="absolute bg-white left-3 -top-[12px] px-2">Họ và tên</span>
            <input  type="text" placeholder="Nhập họ và tên" readOnly value='Lê Quốc Hùng' className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
        </div>
    
        <div className="col-span-6 relative">
            <span className="absolute bg-white left-3 -top-[12px] px-2">Mật khẩu</span>
            <input type="password" placeholder="Nhập mật khẩu mới" value='quochung10' className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
        </div>
    
        <div className="col-span-6 relative">
            <span className="absolute bg-white left-3 -top-[12px] px-2">Xác nhận mật khẩu</span>
            <input type="password" placeholder="Xác nhận mật khẩu" value='quochung10' className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
        </div>
    
    
        <div className="col-span-6 relative">
            <span className="absolute bg-white left-3 -top-[12px] px-2">Số điện thoại</span>
            <input type="text" placeholder="Nhập số điện thoại" value='098765544' className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
        </div>
    
    
        <div className="col-span-6 relative">
            <span className="absolute bg-white left-3 -top-[12px] px-2">Địa chỉ</span>
            <input type="text" placeholder="Nhập địa chỉ" value='Hồ Chí Minh'  className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
        </div>
    
    
    
        <div className="col-span-6 relative">
            <span className="absolute bg-white left-3 -top-[12px] px-2">Email</span>
            <input type="text" placeholder="Nhập email mới" value='sadaklsjd@gmail.com'  className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
        </div>
    
    
    
    </div>
    
    <div className="px-4 text-right py-2">
        <button className="h-10 w-32 rounded-sm shadow-md text-white text-[16px] hover:bg-green-700 bg-green-600">Save</button>
    </div>
  </div>
</div>
    </div>

    </>
 


  );
}