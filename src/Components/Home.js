import React from 'react';
import { useNavigate } from "react-router-dom";

function Home() {
    let token = localStorage.getItem("token");
    let history = useNavigate();

    const handleClick = () => {
        localStorage.removeItem("token");
        history("/")
    }

    return (
        <div className="d-flex align-items-center flex-column justify-content-center" style={{ height: "80vh" }}>
            <h3 className='mb-5'>
                Successfully logged in!
                <br />
                <br />
                Token generate={token}
            </h3>
            <button className='button btn text-white' onClick={handleClick}>Logout</button>
        </div>
    )
}

export default Home