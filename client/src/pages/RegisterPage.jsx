import { Link } from "react-router-dom";
import { useState } from "react";

export default function RegisterPage() {
  return (
    <div className="mt-[10%] grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl textenter mb-4">Đăng ký tài khoản</h1>
        <form className="max-w-md mx-auto">
          <input type="text" placeholder="Tên tài khoản" />
          <input type="text" placeholder="Họ và tên" />
          <input type="password" placeholder="Mật khẩu" />
          <input type="password" placeholder="Nhập lại mật khẩu" />
          <input type="number" placeholder="Số điện thoại" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Địa chỉ" />
          <button className="primary">Đăng ký</button>
          <div className="text-center py-2 text-gray-500">
              Bạn đã có tài khoản?
            <Link className="underline text-black" to={"/login"}>
               Đăng nhập
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
