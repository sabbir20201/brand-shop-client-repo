
import Navbar from './../Components/Header/Navbar/Navbar';
import Footer from './../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home';

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
           <div>
           <Outlet></Outlet>
           
           </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Root;