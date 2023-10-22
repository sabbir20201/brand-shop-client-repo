import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { NavLink } from 'react-router-dom';

const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password, name);

        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error);
        })

    }


    return (
        <div>

            <h1 className="">register now</h1>
            <div className="w-4/3">
                <form onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div>
                already have an account? <NavLink to="/Login">Login </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Register;