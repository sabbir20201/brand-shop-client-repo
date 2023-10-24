import { useLoaderData } from "react-router-dom";
import FreshFruits from "../../Components/FreshFruits/FreshFruits";
import Banner from "../../Components/Header/Banner/Banner";
import OurBeverage from "../../Components/OurBeverage/OurBeverage";
import Product from "../Product/Product";



const Home = () => {
    const {brands} = useLoaderData()
   console.log(brands);

    return (
        <div>
            <section>
                <Banner></Banner>
            </section>

            <section className="my-10 mx-4">
            <h1 className="text-4xl text-center py-6 font-bold">Our Product Category</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           
            {
                brands.map(data => <Product key={data.id} data={data}></Product>)
            }
          
            </div>
              
            </section>

            <section>
                <FreshFruits></FreshFruits>
                <OurBeverage></OurBeverage>
            </section>

        </div>
    );
};

export default Home;