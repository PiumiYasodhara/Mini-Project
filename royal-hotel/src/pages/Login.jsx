import React, { useState } from 'react'
import './Login.css'

const Login = () => {
    const [state, setState] = useState('Sign Up');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log({ email, password, name });
    };

    return (
        <form className="form-container" onSubmit={onSubmitHandler}>
            <div className="form-card">
                <p className="form-title">{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
                <p className="form-subtitle">Please {state === 'Sign Up' ? 'sign up' : 'log in'} to continue</p>

                {state === 'Sign Up' && (
                    <div className="form-group">
                        <label className="form-label">Full Name</label>
                        <input
                            className="form-input"
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                        />
                    </div>
                )}

                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                        className="form-input"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Password</label>
                    <input
                        className="form-input"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                </div>
                <button className="form-button" type="submit">
                    {state === 'Sign Up' ? 'Create Account' : 'Login'}
                </button>
                {state === 'Sign Up' ? (
                    <p className="form-footer">
                        Already have an account?{' '}
                        <span onClick={() => setState('Login')} className="form-link">
                            Login here
                        </span>
                    </p>
                ) : (
                    <p className="form-footer">
                        Need an account?{' '}
                        <span onClick={() => setState('Sign Up')} className="form-link">
                            Sign up here
                        </span>
                    </p>
                )}
            </div>
        </form>
    );
}

export default Login