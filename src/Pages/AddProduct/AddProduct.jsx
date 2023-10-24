import Swal from 'sweetalert2'

const AddProduct = () => {


    const handleAddBtn = (e) => {
        e.preventDefault()
        const form = e.target

        const image = form.image.value
        const product = form.product.value
        const brand = form.brand.value
        const type = form.type.value
        const price = form.price.value
        const description = form.description.value
        const rating = form.rating.value

        const newProduct = {
            image,
            product,
            brand,
            type,
            price,
            description,
            rating
        }
        console.log(newProduct);

        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId)
                    Swal.fire({
                        title: 'success',
                        text: 'product successfully inserted',
                        title: 'success',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
            })
    }


    return (
        <div>

            <div className="mx-auto my-10 bg-slate-200 px-5 py-6">
                <h1 className="text-center text-2xl">Add Product</h1>
                <form onSubmit={handleAddBtn} className="">

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">image</span>
                                </label>
                                <input type="text" name="image" placeholder="image url" className="input input-bordered w-full" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">product name</span>
                                </label>
                                <input type="text" name="product" placeholder="product name" className="input input-bordered w-full" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <select name='brand' className="select select-bordered w-full max-w-xs">
                                <option disabled selected>select product</option>
                                <option>berger</option>
                                <option>pepsi</option>
                                <option>nescafe</option>
                                <option>cocaCola</option>
                                <option>starBucks</option>
                                <option>kelloggs</option>
                              </select>

                            </div>

                        </div>

                        <div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">type</span>
                                </label>
                                <input type="text" name="type" placeholder="type" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">price</span>
                                </label>
                                <input type="text" name="price" placeholder="price" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">short description</span>
                                </label>
                                <input type="text" name="description" placeholder="short description" className="input input-bordered w-full" required />
                            </div>



                        </div>


                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">rating</span>
                        </label>
                        <input type="text" name="rating" placeholder="rating" className="input input-bordered w-full" required />
                    </div>

                    <div className="form-control mt-6">
                        <input type="submit" value="add product" className="btn btn-success" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;