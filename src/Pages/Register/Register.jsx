import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { NavLink } from 'react-router-dom';

const Register = () => {

    const { createUser } = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState('');


    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password, name);

        setRegisterError('');
        setRegisterSuccess('');

        if(password.length < 6) {
            setRegisterError('password should be at least 6 characters or longer');
            return;
        }else if(!/^(?=.*[A-Z])(?=.*[!#])/.test(password)){
            setRegisterError('your password must be at leaset one capital letter and special characters');
            return
        }



        createUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                setRegisterSuccess('User created successfully')
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })

    }


    return (
        <div>

            <h1 className="">register now</h1>
            <div className="w-1/2 mx-auto">
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
                    <div>
                {
                    registerSuccess && <p className='text-green-600 font-semi-bold'>{registerSuccess}</p>
                    
                }
                {
                    registerError &&
                    <div className="text-red-400">
                        {registerError}
                    </div>
                }
                </div>



                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
                <div>
                    already have an account? <NavLink to="/Login" className="text-green-400 font-semibold">Login </NavLink>
                </div>
            
            

            </div>
        </div>
    );
};

export default Register;