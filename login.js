import { React, useContext, useState } from 'react';
import { UserContext, Card } from './context';
import { Link } from 'react-router-dom';

function Login() {
    const [ show, setShow ] = useState(true);
    const [ validEmail, setValidEmail ] = useState(false);
    const [ validPassword, setValidPassword ] = useState(false);
    const ctx = useContext(UserContext);

    function verifyEmail(email) {
        if (email === ctx.email) {
            setValidEmail(true);
        }
    }

    function verifyPassword(password) {
        if (password === ctx.password) {
            setValidPassword(true);
        }
    }

    function handleLogin() {
        if ((validEmail === true) && (validPassword === true)) {
            setShow(false);
        }
    }

    return (
        <Card
            bgcolor="light"
            txtcolor="black"
            header="Badbank Account Login"
            body={show ? (
                <>
                Email Address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter Email" value={validEmail} onChange={verifyEmail(validEmail)} /><br/>
                Password<br/>
                <input type="input" className="form-control" id="password" placeholder="Enter Password" value={validPassword} onChange={verifyPassword(validPassword)} /><br/>
                <button type="submit" className="btn btn-light border-dark" onClick={handleLogin}>Log In</button>
                </>
            ):(
                <>
                    <h5>Success!</h5>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login/">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/balance/">Balance</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/deposit/">Deposit</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/withdraw/">Withdraw</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/alldata/">All Data</Link>
                        </li>
                    </ul>
                </>
            )}
            title="Log Into Your Account"
        />
    );
}

export default Login;