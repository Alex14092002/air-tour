import {Link, useNavigate} from "react-router-dom";
import { useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    phone: "",
    address: "",
    email: "",
    name: ""
  });
  const [passwordConfirm, setPasswordConfirm] = useState(""); // Trạng thái cho nhập lại mật khẩu

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(userData.username == "" || userData.password == "" 
    || passwordConfirm == "" || userData.phonne == "" || userData.email == "" || userData.address == ""){
      toast.error("Hãy nhập đầy đủ thông tin", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    console.log(userData.password ,passwordConfirm );
    // Kiểm tra xem mật khẩu và nhập lại mật khẩu có trùng nhau không
    if (userData.password !== passwordConfirm) {
      toast.error("Mật khẩu và nhập lại mật khẩu không khớp", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:8888/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        toast.success("Đăng ký thành công !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setTimeout(() => {
          navigate(`/login`);
        }, 2000);
        console.log("Đăng ký thành công");
      } else {
        // Xử lý lỗi khi đăng ký không thành công
        console.error("Đăng ký không thành công");
      }
    } catch (error) {
      toast.error("Thông tin không hợp lệ hoặc đã tồn tại", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
   <>
    <ToastContainer />
    <div class="antialiased bg-gray-200 text-gray-900 font-sans">
    <div class="flex items-center  w-full">
      <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
      <span class="block w-full text-xl uppercase font-bold mb-4">Đăng ký</span>      
        <form  onSubmit={handleSubmit}>
          <div class="mb-4 md:w-full">
            <label for="email" class="block text-xs mb-1">Tên đăng nhập</label>
            <input  onChange={handleInputChange}  class="input-login w-full bg-white border rounded p-2 outline-none focus:shadow-outline" type="text" name="username" id="username" placeholder="Tên đăng nhập" />
          </div>
          <div class="mb-4 md:w-full">
            <label for="name" class="block text-xs mb-1">Họ và tên</label>
            <input  onChange={handleInputChange}  class="input-login w-full bg-white border rounded p-2 outline-none focus:shadow-outline" type="text" name="name" id="name" placeholder="Họ và tên" />
          </div>
          <div class="mb-6 md:w-full">
            <label for="password" class="block text-xs mb-1">Mật khẩu</label>
            <input  onChange={handleInputChange} class="input-login w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="password" id="password" placeholder="Mật khẩu" />
          </div>
          <div class="mb-6 md:w-full">
            <label for="enterPassword" class="block text-xs mb-1">Nhập lại mật khẩu</label>
            <input  onChange={handlePasswordConfirmChange} class="input-login w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="enterPassword"  placeholder="Nhập lại mật khẩu" />
          </div>
          <div class="mb-6 md:w-full">
            <label for="phone" class="block text-xs mb-1">Số điện thoại</label>
            <input  onChange={handleInputChange} class="input-login w-full border rounded p-2 outline-none focus:shadow-outline" type="text" name="phone"  placeholder="Số điện thoại" />
          </div>
          <div class="mb-6 md:w-full">
            <label for="phone" class="block text-xs mb-1">Email</label>
            <input  onChange={handleInputChange} class="input-login w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email"  placeholder="Email" />
          </div>
          <div class="mb-6 md:w-full">
            <label for="address" class="block text-xs mb-1">Địa chỉ</label>
            <input  onChange={handleInputChange} class="input-login w-full border rounded p-2 outline-none focus:shadow-outline" type="text" name="address"  placeholder="Địa chỉ" />
          </div>
          <button class="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Đăng ký</button>
        </form>
        <Link to='/login' class="text-blue-700 text-center text-sm" >Đăng nhập</Link>
    </div>
  </div>
</div>
   </>
  );
}