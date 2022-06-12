import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Form() {

    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const user = {
        email: "eve.holt@reqres.in",
        password: "5citylicka"
    }
    let history = useNavigate();

    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }
    const handleClick = (e) => {
        e.preventDefault();
        if (credentials.email == user.email && credentials.password == user.password) {
            localStorage.setItem("token", "QpwL5tke4Pnpja7X4");
            history("/home");
        } else if (credentials.email == "") {
            setError("Email Address required!");
        } else if (credentials.password == "") {
            setError("Password required!!");
        } else {
            setError("Details do not match!");
        }
    }

    return (
        <div className='form-container container d-flex align-items-center flex-column justify-content-center'>
            <h4 className='text-center error'> {error}</h4>
            <div className="col-sm-10 mb-3 ">
                <h1 className='text-center'><b>Welcome Back</b></h1>
                <p className='text-muted text-center'><b>Sub-title text goes here</b></p>
            </div>

            <div className="col-sm-10 mb-3 element">
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email Address" name="email" onChange={onchange} />
            </div>
            <div className="col-sm-10 mb-3 element">
                <input type="password" className="form-control" id="inputPassword" placeholder="Password" name="password" onChange={onchange} />
            </div>
            <div className="d-grid mb-3 col-sm-10 element">
                <button className="btn btn-primary button" type="button" onClick={handleClick}>Login</button>
            </div>
            <div className="mb-3 col-sm-10 d-flex justify-content-between form-check element">
                <div>
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Remember Password</label>
                </div>
                <a href="#" className="align-self-end">Forgot Password?</a>
            </div>
        </div>
    )
}

export default Form