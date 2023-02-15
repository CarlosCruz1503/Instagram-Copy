import React from 'react';
import { useNavigate } from "react-router-dom"
import RegisterFormDispatch from '../components/Dispatch/registerFormDispatch';
import "../styles/scss/registerPage.scss"
import { Helmet } from 'react-helmet';

const RegisterPage = ({}) => {

    const navigate = useNavigate()

    return (
        <div className='register-div'>
        <Helmet>
            <title>REGISTER | INSTACREM </title>
        </Helmet>
            <div className="register">
                <h2>Regístrate</h2>
                <p> Regístrate para ver fotos y videos de tus amigos</p>
                <RegisterFormDispatch></RegisterFormDispatch>
            </div>
            <div className="login-link">
                <h5> ¿ Ya tienes una cuenta ?<button onClick={() => {
                    navigate("/login")
                }} className='login-btn'>Entrar</button></h5>
            </div>

        </div>
    );
}

export default RegisterPage;
