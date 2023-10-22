
import Brands from '../../Components/Brands/Brands';
import FreshFruits from '../../Components/FreshFruits/FreshFruits';
import OurBeverage from '../../Components/OurBeverage/OurBeverage';
import Banner from './../../Components/Header/Banner/Banner';
const Home = () => {
    return (
        <div>
     
          <Banner></Banner>
          <Brands></Brands>
        <FreshFruits></FreshFruits>
        <OurBeverage></OurBeverage>
        </div>
    );
};

export default Home;