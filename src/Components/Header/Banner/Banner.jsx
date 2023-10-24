
const Banner = () => {
    return (
        <div>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/bsbykdn/1.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Explore Culinary Delights with Us!</h1>
            <p className="mb-5">"At Foodily, we're on a mission to create culinary experiences that delight your taste buds. From classic comfort foods to innovative gourmet creations, our menu has something for everyone. Explore the world of flavors with us!"</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Banner;