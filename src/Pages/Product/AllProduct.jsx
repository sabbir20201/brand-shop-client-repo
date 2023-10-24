import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductAll from './ProductAll';

const AllProduct = () => {


    const data = useLoaderData();
    console.log(data);
    
    return (
        <div className='py-10'>
        <section>
        <div className="carousel max-h-96 w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/8b8nLW8/coke-one-brand-4.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/dBqZjF7/a54305ea219fd4a3d1bf68637ba93058.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/Cw6H5kn/190812154518-20190809-coca-cola-dasani-cans.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src=" https://i.ibb.co/cwGVDMd/download.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
        </section>
       
    <section className=' pt-7'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
       {
        data.map(item => <ProductAll key={item.id} data={item}></ProductAll>)
       }
        </div>
    </section>
   
        


        </div>
    );
};

export default AllProduct;