import { Link } from "react-router-dom";

const AllProductCard = ({item}) => {
    const {id,image, brand} = item
    return (
        <div>
           
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{brand}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
            <Link to={`/productDetail/${id}`}>
            <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default AllProductCard;