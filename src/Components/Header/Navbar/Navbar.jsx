import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignout = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/AddProduct'>Add Product</NavLink></li>
        {
            user && <li><NavLink to={`/cards/${user.email}`}>My Card</NavLink></li>
        }
    </>

    return (
        <div>
            <div className="navbar bg-green-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        <img src="https://i.ibb.co/tCzvJCY/logo-2.png" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="flex">
                                <span>{user.email}</span>
                                <span className="w-10 p-0 rounded-full"><img src={user.photoURL} /></span>
                                <button onClick={handleSignout} className="btn btn-sm">LogOut</button>

                            </div>
                            :
                            <NavLink to="/Login">
                                <button className="btn btn-sm">login</button>
                            </NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;