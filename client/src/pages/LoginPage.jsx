import {Link, Navigate} from "react-router-dom";
import {useContext, useState} from "react";
import axios from "axios";

export default function LoginPage() {
  

  return (
    <div className="mt-[10%] grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Đăng nhập</h1>
        <form className="max-w-md mx-auto" >
          <input type="text"
                 placeholder="Tên tài khoản"
                 />
          <input type="password"
                 placeholder="Mật khẩu"
                />
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
             Bạn chưa có tài khoản? <Link className="underline text-black" to={'/register'}>Đăng ký ngay</Link>
          </div>
        </form>
      </div>
    </div>
  );
}