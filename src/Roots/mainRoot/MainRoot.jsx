import Header from '../../Shared/Header/Header';
import Navbar from '../../Shared/Navbar/Navbar';
import LeftSide from '../../LeftSide/LeftSide';
import RightSide from '../../RighSide/RightSide';
import { Link, useLoaderData } from 'react-router-dom';

const MainRoot = () => {
  
  const news = useLoaderData();
    return (
        <div className='max-w-7xl mx-auto'>
            <Header></Header>
            <Navbar></Navbar>
          <div className='mt-8 grid md:grid-cols-4 grid-cols-1 gap-3'>
            <div className='border'><LeftSide/></div>
            <div className='col-span-2 border'>
              {
                news.map(oneNews=>
                  <div className='mb-8 shadow-lg' key={oneNews._id}>
                    <img src={oneNews.image_url} alt="" />
                   
                    <h1 className='text-2xl mt-3 font-semibold '>{oneNews.title}</h1>
                    {
                      oneNews?.details.length>200?(<p className='pb-4'>{
                        oneNews.details.slice(0,200)}<Link className='text-blue-600' to={`/details/${oneNews._id}`}> Read more...</Link></p>):
                       ( <p className='pb-4'>{oneNews.details}</p>)
                    }
                  </div>
                )
              }
            </div>
            <div > <RightSide/></div>
          </div>
        </div>
    );
};

export default MainRoot;