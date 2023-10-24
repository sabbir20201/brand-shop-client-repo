import { Link } from "react-router-dom";

const ProductAll = ({data}) => {

    const {image,_id} = data;
    console.log(_id);
    return (
        <div>
        <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{data.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
            <Link to={`/product/brand/${data._id}`}>
            <button className="btn btn-primary">detail</button>

            </Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default ProductAll;
