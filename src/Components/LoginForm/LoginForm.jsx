import React from 'react';
import Slider from 'react-slick';
import './LoginForm.css';
import 'slick-carousel/slick/slick-theme.css';



const LoginForm = () => {
    return(
        <div className='wrapper'>
            <form action=''>
                <h1>LOGIN</h1>
                <div className='input-box'>
                    <label>E-mail</label>
                    <input type='text' required />
                </div>
                <div className='input-box'>
                    <label>Senha</label>
                    <input type='password' required />
                </div>

                <div className="forgot">
                    <a href="#"> Recuperar Senha</a>
                </div>

                <button type="submit">Login</button>

            </form>

        </div>
    )
}

export default LoginForm; 