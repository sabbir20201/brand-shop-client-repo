import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ProductDetail = () => {

  const data = useLoaderData();
  const { user } = useContext(AuthContext);

  console.log(user);
  const { image, _id, product, price, type, rating, description, brand } = data;

  const handleAddCard = () => {
    const image = data.image;
    const product = data.product;
    const price = data.price;
    const type = data.type;
    const description = data.description;
    const brand = data.brand;
    const rating = data.rating;
  }

  const allProduct = {
    image,
    product,
    price,
    type,
    description,
    brand,
    rating,

  }
  console.log(allProduct);

  fetch(``, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(allProduct)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);

    })

  return (
    <div className="py-10">
      <div className="grid grid-cols-2 shadow-xl">
        <div className="">
          <figure><img src={image} className="" alt="Album" /></figure>
        </div>

        <div className="card-body">
          <h2 className="card-title">name: {product}</h2>
          <h2 className="card-title">Brand: {brand}</h2>
          <h2 className="card-title">Price: $ {price}</h2>
          <h2 className="card-title">Category: {type}</h2>
          <p>details:{description}</p>

          <div className="card-actions justify-start">
            <button onClick={handleAddCard} className="btn btn-primary">Add To Card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;