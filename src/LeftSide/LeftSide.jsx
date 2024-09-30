import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [Categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
      
    },[])
    return (
        <div className='mx-2'>
         <h1 className='text-2xl mt-3 font-bold'>All Category</h1>
         <div >
            {
Categories.map(category =><Link className='block my-6  text-xl text-gray-600' key={category.id}>{category.name}</Link>)
            }
         </div>
        </div>
    );
};

export default LeftSide;