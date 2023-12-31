
import Navbar from './../Components/Header/Navbar/Navbar';
import Footer from './../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;