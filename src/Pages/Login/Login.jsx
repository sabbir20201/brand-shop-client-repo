import React, { useState } from 'react';
import { useContext } from 'react';
// import { useCallback } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { NavLink } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/Firebase.config';
// import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    // const navigate = useNavigate();
    const [loginError, setLoginError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState('');
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();


    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password, name);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                setLoginSuccess('logged in successfully')
                // navigate('/')

            })
            .catch(error => {
                console.error(error);
                setLoginError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log('error', error.message);
        })

    }
    return (
        <div>
            <div className="w-1/2 mx-auto">
                <form onSubmit={handleLogin}>
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
                            loginSuccess && <p className='text-green-600 font-semi-bold'>{loginSuccess}</p>
                        }
                        {
                            loginError &&
                            <div className="text-red-400">
                                {loginError}
                            </div>
                        }
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        <p>don't have an account ? <NavLink to="/register" className="text-red-400 font-semibold">Sign Up</NavLink></p>
                    </div>


                </form>
                <div className="form-control mt-6">
                    <button onClick={handleGoogleSignIn} className="btn bg-green-300 hover:bg-green-400">google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;