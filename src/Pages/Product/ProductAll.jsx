import { Link } from "react-router-dom";

const ProductAll = ({ data }) => {

  const { image, _id, product, price, type, brand } = data;
  
  return (

    <div className="">
      <div className="card card-compact max-h-96 bg-base-100 shadow-xl">
        <figure><img src={image} className=" h-full" alt="Shoes" /></figure>
        <div className="card-body">
          <div className="grid grid-cols-2 justify-between">
            <h2 className="card-title text-2xl font-bold">{product}</h2>
            <h2 className="card-title text-2xl font-bold">{type}</h2>
            <h2 className="card-title text-lg">{brand}</h2>
            <h2 className="card-title text-lg">${price}</h2>
          </div>
          <div className="rating rating-sm py-3">
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
          </div>
          <div className="card-actions flex justify-between">
            <Link to={`/updateproduct/${_id}`}>
              <button className="btn btn-success text-white">Update</button>
            </Link>
            <Link to={`/product/brand/${_id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAll;
