import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const ManagantTour = () => {
  return (
    <>
        <div className='mt-[8%]'>
            <div className='grid grid-cols-12 gap-4 items-center py-8'>
                <div className='col-span-2'>
                    <img src='https://camerabox.vn/uploads/news/2018_07/huong-dan-chup-anh-phong-canh.jpg' width='100%'/>
                </div>
                <div className='col-span-8'>
                    <h5>Tour Trung Quốc 7N7Đ: Thành Đô - Trùng Khánh - Cửu Trại Câu - Đô Giang Yển</h5>
                    <h4>19/9/2023 - 25/2/2023</h4>
                    <h3>Trạng thái : <span className='text-green-800 font-bold'>chưa băt đầu</span></h3>
                </div>
                <div className='col-span-2'>
                    <Link to='/updatetour' className='bg-green-600 text-white py-3 px-6 rounded-xl'>Cập nhật</Link>
                </div>  
            </div>
        </div>
    </>
  );
}

export default ManagantTour;
