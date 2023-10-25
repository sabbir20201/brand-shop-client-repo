
const OurBeverage = () => {


    const data = [{
        "id": 1,
        "name": "Product A",
        "price": 19.99,
        "img": "https://i.ibb.co/zbJXZX2/beverage-1.jpg"
    },
    {
        "id": 2,
        "name": "Product B",
        "price": 24.99,
        "img": "https://i.ibb.co/G3JZcyz/beverage-2.jpg"
    },
    {
        "id": 3,
        "name": "Product C",
        "price": 12.49,
        "img": "https://i.ibb.co/HTGTP5K/beverage-6.jpg"
    },
    {
        "id": 4,
        "name": "Product D",
        "price": 39.99,
        "img": "https://i.ibb.co/StdTP3H/beverage-7.jpg"
    }
    ];

    return (
        <div className="mx-4">
            <h1 className="text-4xl font-bold text-center mt-6">Our Beverage</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-20">
                {
                    data.map((item, index) => {
                        return (

                            <div key={item.id} className="bg-white rounded-md shadow-md">
                                <div className="items-center">
                                    <img src={item.img} alt={item.name} className="object-cover w-full" />
                                    <div className="ml-4">
                                        <h3 className="text-lg font-bold">{item.name}</h3>
                                        <div className="items-center">
                                            <span className="text-sm font-medium text-gray-500 mr-2">$</span>
                                            <span className="text-lg font-medium text-gray-900">{item.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default OurBeverage;
