import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const BrakingNews = () => {
    return (
        <div className='bg-slate-100 p-2  flex items-center'>
            <button className='btn h-8 btn-secondary text-xl'>Latest</button>
            <Marquee className='text-lg' pauseOnHover speed={100}> 
                <Link className='mr-3' to=''>Braking news is coming soooon.. </Link>
                <Link to=''>Braking news 2 is coming .</Link>
                </Marquee>
            
           
            
        </div>
    );
};

export default BrakingNews;