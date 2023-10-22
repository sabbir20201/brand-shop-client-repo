
const Banner = () => {
  return (
    <div>


      <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/RhVkgm7/3-1.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Wellcome to Foodily</h1>
            <p className="mb-5">Welcome to Foddily, your delectable destination for all things culinary. Explore flavors, recipes, and food adventures in this gastronomic haven.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Banner;