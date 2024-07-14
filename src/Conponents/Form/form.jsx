import React from 'react';
import'./form.css';
import { FaLock, FaUser } from "react-icons/fa";

const Form = () => {
    return(
        <div className='wrapper'>
            <form action="">
                <h1>Formulario</h1>
                <div className="input-box">
                    <input type="name" placeholder='Name'required />
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="lastname" placeholder='Last name'required />
                </div>
                <div className="input-box">
                    <input type="email" placeholder='Email'required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Pasword'required />
                    <FaLock className='icon'/>
                </div>
                <div className="input-box">
                    <input type="confirmpassword" placeholder='Confirm Password'required />
                    <FaLock className='icon'/>
                </div>
                
                <button type="submit">Send</button>
            </form>
            
        </div>
    )
}

export default Form