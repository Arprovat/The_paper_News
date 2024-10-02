import React from 'react';
import moment from 'moment';

import logo_news from '../../assets/logo_news.png';
import BrakingNews from '../../pages/BrakingNews/BrakingNews';

const Header = () => {
    return (
        <div className='text-center space-y-2'>
            
            <img src={logo_news} alt="" className='w-[40%] mx-auto' />
            <p className='text-lg max-md:text-sm text-gray-500 font-poppins '>Journalism Without Fear or Favour</p>
            <p className='text-lg max-md:text-sm font-poppins text-gray-500'> 
           { moment().format('dddd,MMMM Do YYYY,')}
           </p>
           <BrakingNews></BrakingNews>
               

        </div>
    );
};

export default Header;