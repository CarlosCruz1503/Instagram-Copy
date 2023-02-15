import React from 'react';
import "../../styles/scss/navbar.scss"
import { useNavigate } from "react-router-dom"
import { APIURLIMAGE } from '../../utils/axios';
const Navbar = ({ userIn, user_name, image, logOut, reload, reloadBlogs }) => {

    const navigate = useNavigate()


    if (userIn) {
        return (
            <div className='div-navbar'>
                <ul className='ul-navbar'>
                    <li onClick={() => {
                        navigate("../home/",)
                    }}>
                        <div className="li-div-icons">
                            <p>Home</p>
                            <img class="li-icon" src="https://cdn-icons-png.flaticon.com/512/57/57419.png" alt="x" />
                        </div>
                    </li>
                    <li onClick={() => {
                        navigate("../create/")
                    }}>
                        <div className="li-div-icons">
                            <p>Create</p>
                            <img class="li-icon" src="https://cdn-icons-png.flaticon.com/512/4074/4074958.png" alt="x" />
                        </div>
                    </li>
                    <li onClick={() => {
                        navigate(`../profile/${user_name}`)
                    }}>
                        <div className="li-div-img">
                            <img class="li-img" src={`${APIURLIMAGE}${image}`} alt="x" />
                            <p>{user_name}</p>
                        </div>
                        <div className="li-div-icons">
                            <p>Perfil</p>
                            <img class="li-icon" src="https://cdn-icons-png.flaticon.com/512/62/62112.png" alt="x" />
                        </div>
                    </li>
                    <li onClick={() => {
                        navigate("../home/favoritePost/")
                    }}>
                        <div className="li-div-img">
                            <p>Mis Favoritos</p>
                            <img class="li-img" src="https://cdn-icons-png.flaticon.com/512/3208/3208707.png" alt="x" />
                        </div>
                    </li>
                    <li onClick={() => {
                        logOut()
                    }}>
                        <div className="li-div-icons">
                            <p>LogOut</p>
                            <img class="li-icon" src="https://cdn-icons-png.flaticon.com/512/4386/4386819.png" alt="x" />
                        </div>
                    </li>
                </ul>
                <a class="go-up" href='#top'>
                    <span class="fa-stack">
                        <i class="bi bi-arrow-up-circle-fill"></i>
                    </span>
                </a>
            </div>
        )
    } else {
        return (
            <div className='div-navbar'>
                {reloadBlogs()}
                {reload()}
                <ul className='ul-navbar'>
                    <li onClick={() => {
                        navigate("../home/")
                    }}>
                        <div className="li-div-icons">
                            <p>Home</p>
                            <img class="li-icon" src="https://cdn-icons-png.flaticon.com/512/57/57419.png" alt="x" />
                        </div>
                    </li>
                    <li onClick={() => {
                        navigate("../login/")
                    }}>
                        <div className="li-div-icons">
                            <p>Create</p>
                            <img class="li-icon" src="https://cdn-icons-png.flaticon.com/512/4074/4074958.png" alt="x" />
                        </div>
                    </li>
                    <li onClick={() => {
                        navigate("../register/")
                    }}>
                        <div className="li-div-icons-down">
                            <p>Crea tu perfil</p>
                            <img class="li-icon" src="https://cdn-icons-png.flaticon.com/512/62/62112.png" alt="x" />
                        </div>
                    </li>
                    <li onClick={() => {
                        navigate("../login/")
                    }}>
                        <div className="li-div-icons">
                            <p>Login</p>
                            <img class="li-icon" src="https://cdn-icons-png.flaticon.com/512/1828/1828391.png" alt="x" />
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar;
