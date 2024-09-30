import React from 'react';
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../assets/qZone1.png'
import qZone2 from '../assets/qZone2.png'
import qZone3 from '../assets/qZone3.png'

const RightSide = () => {
    return (
        <div>
            <div className='w-full'>
            <button className="btn w-full btn-outline  mb-3 btn-primary text-xl "> <FaGoogle/>Google</button>
            <button className="btn w-full btn-outline mb-3 btn-secondary text-xl"><FaFacebook />Facebook</button>
            </div>
            <div>
                <h1 className='text-2xl font-bold mb-3'>Find us</h1>
                <h1 className='flex  items-center h-12 border gap-3 text-xl hover:bg-slate-50 '><FaFacebook className='ml-3 text-blue-950'/>Facebook</h1>
                <h1 className='flex  items-center h-12 border gap-3 text-xl hover:bg-slate-50 '><FaInstagram  className='ml-3 text-pink-600'/>Instagram</h1>
                <h1 className='flex  items-center h-12 border gap-3 text-xl hover:bg-slate-50 '><FaTwitter className='ml-3 text-blue-600'/>Twitter</h1>
            </div>
            <div className='bg-slate-100 mt-6 flex flex-col'>
                <h1 className='text-2xl font-bold ml-3 mt-3'>QZone</h1>
              <img className='mt-3' src={qZone1} alt="" />
              <img className='mt-3' src={qZone2} alt="" />
              <img className='mt-3' src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSide;