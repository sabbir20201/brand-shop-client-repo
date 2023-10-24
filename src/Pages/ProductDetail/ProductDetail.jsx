import { useLoaderData } from "react-router-dom";

const ProductDetail = () => {

    const data = useLoaderData();
    console.log(data);
    const { image, _id, product, price, type, description, brand } = data;
    return (
        <div>
        
    
            <div className="grid grid-cols-2 shadow-xl">
       <div className="">
       <figure><img src={image} className="" alt="Album"/></figure>

       </div>
          
            <div className="card-body">
              <h2 className="card-title">name: {product}</h2>
              <h2 className="card-title">Brand: {brand}</h2>
              <h2 className="card-title">Price: {price}</h2>
              <h2 className="card-title">Category: {type}</h2>

              <p>details:{description}</p>
              <div className="card-actions justify-start">
                <button className="btn btn-primary">Add To Card</button>
              </div>
            </div>
          </div>




        </div>
    );
};

export default ProductDetail;