import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const ProductDetail = () => {

  const data = useLoaderData();
  const { user } = useContext(AuthContext);

  console.log(user);
  const { image, product, price, type, brand } = data;

  const handleAddCard = () => {
    const image = data.image;
    const product = data.product;
    const price = data.price;
    const type = data.type;
    const description = data.description;
    const brand = data.brand;
    const rating = data.rating;
    const email = user.email;

    const allProduct = {
      image,
      product,
      price,
      type,
      description,
      brand,
      rating,
      email

    }

    fetch(`http://localhost:5000/cards`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(allProduct)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId)
          Swal.fire({
            title: 'success',
            text: 'product added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })

      })


  }



  return (
    <div className="py-10">
      <div className="grid grid-cols-2 shadow-xl">
        <div className="">
          <figure><img src={image} className="" alt="Album" /></figure>
        </div>

        <div className="card-body">
          <h2 className="card-title">Name: {product}</h2>
          <h2 className="card-title">Brand: {brand}</h2>
          <h2 className="card-title">Price: $ {price}</h2>
          <h2 className="card-title">Category: {type}</h2>
          <p><span className="card-title"> Details: </span> Savor the exquisite flavors of our signature dish, the Grilled Salmon Fillet. Delicately seasoned and cooked to perfection, it's a culinary masterpiece that tantalizes the taste buds with a harmonious blend of rich, smoky notes and a melt-in-your-mouth texture. A symphony of taste awaits you.</p>

          <div className="card-actions justify-start">
            <button onClick={handleAddCard} className="btn btn-primary">Add To Card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;