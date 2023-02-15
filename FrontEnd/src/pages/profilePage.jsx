import React, { useState, useEffect } from 'react';
import NavbarDispatch from '../components/Dispatch/navbarDispatch';
import { useParams, useNavigate } from 'react-router-dom';
import "../styles/scss/profilePage.scss"
import { instance, APIURLIMAGE } from '../utils/axios';
import { Helmet } from 'react-helmet';
const ProfilePage = ({ ourId, blogs, reload }) => {

    const navigate = useNavigate()

    const { id } = useParams()

    const [user, setUser] = useState({});

    useEffect(() => {
        reload()
        peticion(id)
    }, [id]);


    function peticion(id) {
        instance.get(`users/onlyUserName/${id}`)
            .then((response) => {
                setUser(response.data)
            })
            .catch((error) => {
                setUser(false)
            })
    }



    return (
        <div className='div-profile'>
            <Helmet>
                <title>Perfil de "{id}" | INSTACREM</title>
            </Helmet>
            <NavbarDispatch></NavbarDispatch>
            {user
                ?
                <div className='profile'>
                    <div className='div-img-profile'>
                        <div>
                            <img className='img-profile' src={`${APIURLIMAGE}${user.image}`} alt="x" />
                        </div>
                        <div className='div-text'>
                            <h2 className='user-name'>{user.user_name}</h2>
                            {user.id === ourId
                                ?
                                <button className='btn' onClick={() => {
                                    navigate("../profile/editar/")
                                }}><h3>Editar Perfil</h3></button>
                                :
                                <></>}
                        </div>
                    </div>
                    <div className='profile-sec'>
                        {user.bio !== "" ?
                            <p className='bio'>{user.bio}</p>
                            :
                            <p className='bio'>Este usuario no tiene biografía</p>}
                    </div>
                    <div className='profile-sec'>
                        <div className="row">
                            <h1 className='text-center your-post'>Publicaciones de {user.user_name}</h1>
                            {blogs ?

                                blogs.map((blog, key) => {
                                    if (blog.userId == user.id) {
                                        return (
                                            (<div className="col-4 col-lg-3 profile-blogs">
                                                <div className="profile-img-blogs" onClick={() => {
                                                    navigate(`/blog/${blog.id}`)
                                                }}>
                                                    <img className="img-fluid" src={`${APIURLIMAGE}${blog.imageBlog}`} alt="" />
                                                    <div className="text-image-blogs btn">
                                                        <h3><i class="bi bi-heart-fill" style={{ color: "red" }}></i> {blog.stars.length}</h3>
                                                        <h3><i class="bi bi-chat-left-text" style={{ color: "white" }}></i> {blog.comments.length}</h3>
                                                        <h6 className='text-center'>Ver Publicación</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                        )
                                    }
                                })
                                :
                                <></>
                            }
                        </div>
                    </div>
                </div>
                :
                <div className='profile'>
                    <div className='div-img-profile'>
                        <div className='div-text'>
                            <h2 className='user-name'>Este usuario no existe</h2>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default ProfilePage;
