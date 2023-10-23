import { Link } from "react-router-dom";

const Product = ({ data }) => {
  const {id, product_id,name, image_url } = data
  console.log(id);

  return (

    <div>
      <Link to={`/allproduct/${product_id}`}>
        <div className="card bg-base-100 shadow-xl">
          <figure className="py-10">
            <img src={image_url} alt="Shoes" className="rounded-xl max-h-40" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
          </div>
        </div>
      </Link>

    </div>
  );
};

export default Product;