
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
const UpdateProduct = () => {
    const allproduct = useLoaderData()

    const { rating, image, _id, product, price, type, description, brand } = allproduct;


    console.log(allproduct);



    const handleUpdateBtn = (e) => {
        e.preventDefault()
        const form = e.target

        const image = form.image.value
        const product = form.product.value
        const brand = form.brand.value
        const type = form.type.value
        const price = form.price.value
        const description = form.description.value
        const rating = form.rating.value

        const UpdatedProduct = {
            image,
            product,
            brand,
            type,
            price,
            description,
            rating
        }


        fetch(`http://localhost:5000/brand/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0)
                    Swal.fire({
                        title: 'success',
                        text: 'product updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
            })
    }

    return (
        <div>

            <div className="mx-auto my-10 bg-slate-200 px-5 py-6">
                <h1 className="text-center text-2xl font-bold">Update Product</h1>
                <form onSubmit={handleUpdateBtn} className="">

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">image</span>
                                </label>
                                <input type="text" name="image" defaultValue={image} placeholder="image url" className="input input-bordered w-full" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">product name</span>
                                </label>
                                <input type="text" name="product" defaultValue={product} placeholder="product name" className="input input-bordered w-full" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <select name='brand' defaultValue={brand} className="select select-bordered w-[500] max-w-xs">
                                    <option disabled selected className=' w-full'>select product</option>
                                    <option>McDonald's</option>
                                    <option>Pepsi</option>
                                    <option>Nestle</option>
                                    <option>Coca-Cola</option>
                                    <option>StarBucks</option>
                                    <option>kelloggs</option>
                                </select>

                            </div>
                        </div>
                        <div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">type</span>
                                </label>
                                <input type="text" name="type" defaultValue={type} placeholder="type" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">price</span>
                                </label>
                                <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">short description</span>
                                </label>
                                <input type="text" name="description" defaultValue={description} placeholder="short description" className="input input-bordered w-full" required />
                            </div>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">rating</span>
                        </label>
                        <input type="text" name="rating" defaultValue={rating} placeholder="rating" className="input input-bordered w-full" required />
                    </div>

                    <div className="form-control mt-6">
                        <input type="submit" value="update product" className="btn btn-success" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;