import {Link, useNavigate} from "react-router-dom";
import { useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function LoginPage() {
  const navigate = useNavigate();
  
  const [userData, setUserData] = useState({
    username: "",
    password: "",
   
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(userData.username == "" || userData.password == "" ){
      toast.error("Hãy nhập đầy đủ thông tin", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:8888/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        
        toast.success("Đăng nhập thành công !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        const dataAPI = await response.json()
        console.log(dataAPI._id);
        localStorage.setItem('Id' , dataAPI._id)
        localStorage.setItem('role' , dataAPI.role)
         setTimeout(() => {
         window.location.href = 'http://localhost:5173/'
        }, 1000);
      } else {
        toast.error("Tài khoản hoặc mật khẩu không đúng !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      toast.error("Thông tin không hợp lệ ", {
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
      <span class="block w-full text-xl uppercase font-bold mb-4">Đăng nhập</span>      
        <form onSubmit={handleSubmit} class="mb-4" >
          <div class="mb-4 md:w-full">
            <label for="email" class="block text-xs mb-1">Tên đăng nhập</label>
            <input onChange={handleInputChange} class="input-login w-full bg-white border rounded p-2 outline-none focus:shadow-outline" type="text" name="username" id="username" placeholder="Tên đăng nhập" />
          </div>
          <div class="mb-6 md:w-full">
            <label for="password" class="block text-xs mb-1">Mật khẩu</label>
            <input onChange={handleInputChange} class="input-login w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="password" id="password" placeholder="Mật khẩu" />
          </div>
          <button class="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Đăng nhập</button>
        </form>
        <Link to='/register' class="text-blue-700 text-center text-sm" >Đăng ký tài khoản?</Link>
    </div>
  </div>
</div>
   </>
  );
}