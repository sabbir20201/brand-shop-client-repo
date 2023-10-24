import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductAll from './ProductAll';

const AllProduct = () => {


    const data = useLoaderData();
    console.log(data);
    
    return (
        <div className='grid grid-cols-3 gap-4'>
        
       {
        data.map(item => <ProductAll key={item.id} data={item}></ProductAll>)
       }
        </div>
    );
};

export default AllProduct;