import React from 'react'
import Banner from '../images/banner.png'
import Form from './Form'

function Login() {
    return (
        <div className='row'>
            <div className='col-md-5'>
               <Form/>
            </div>
            <div className='col-md-7 img-div'>
                <img src={Banner} alt='..' />
            </div>
        </div>
    )
}

export default Login