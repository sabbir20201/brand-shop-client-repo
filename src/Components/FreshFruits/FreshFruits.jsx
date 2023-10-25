
const FreshFruits = () => {
    return (
        <div className="mx-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 my-10">
                <div>
                    <img src="https://i.ibb.co/VqN4TqZ/juice.png" />
                </div>
                <div className="pt-16">
                    <p className="italic pb-2">Drink For Health</p>
                    <h1 className="text-5xl font-bold pb-14">Fresh Fruit Juices</h1>
                    <p>Fresh fruit juices are a delightful blend of flavor and nutrition. These natural elixirs burst with vitamins, antioxidants, and a refreshing taste that can quench your thirst while boosting your well-being. Whether it's a zesty orange juice or a crisp apple concoction, the options are as diverse as they are delicious</p>
                    <div className="pt-8">
                        <button className="btn">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreshFruits;