import React from 'react';
import LoginformDispatch from '../components/Dispatch/loginformDispatch';
import "../styles/scss/loginPage.scss"
import phone from "../resources/screen.png"
import { useNavigate } from "react-router-dom"
import { Helmet } from 'react-helmet';

const LoginPage = () => {

    const navigate = useNavigate()


    return (
        <div className='div-login'>
            <Helmet>
                <title>LOGIN | INSTACREM</title>
            </Helmet>
            <div className='login'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 col-photo-cel">
                            <div className="photo-cel">
                                <img src={phone} alt="Not found Image" />
                            </div>
                        </div>
                        <div className="col-12 col-md-7 col-form-div">
                            <div className="form-div">
                                <h1>Inicia Sesion</h1>
                                <LoginformDispatch></LoginformDispatch>
                            </div>
                            <div className="register-link">
                                <h5>¿No tienes una cuenta? <button onClick={() => {
                                    navigate("/register")
                                }} className='reg-btn'>Registrate</button></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
