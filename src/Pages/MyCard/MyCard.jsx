import { useLoaderData } from "react-router-dom";


const MyCard = () => {
    const data = useLoaderData();

    return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
             {  
                 data && data.map(item => <div key={item._id}>
                    <div className="card bg-base-100 max-h-96 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={item.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{item.brand}</h2>
                            <p className="font-semi-bold">$ {item.price}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                )}
         </div>


    );
};

export default MyCard;