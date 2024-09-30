import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import RightSide from '../../RighSide/RightSide';

const News_datails = () => {
    return (
        <div>
            <Navbar></Navbar>
         <div className='grid md:grid-cols-4 grid-cols-1'>
            <div className='col-span-3'>news details</div>
            <div><RightSide></RightSide></div>
         </div>
        </div>
    );
};

export default News_datails;