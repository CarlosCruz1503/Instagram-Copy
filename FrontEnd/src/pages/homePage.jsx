import React, { useEffect, useState } from 'react';
import NavbarDispatch from '../components/Dispatch/navbarDispatch';
import "../styles/scss/homePage.scss"
import BlogView from '../components/pure/blogView';
import FormUser from '../components/pure/formUser';
import { giveHeart, deleteHeart, createComment, deleteComment, deleteBlog } from '../utils/postActions';
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom';
const HomePage = ({ token, logged, ourUser_name, blogs, reloadBlogs, }) => {

    const navigate = useNavigate()

    useEffect(() => {
        reloadBlogs()
    }, []);

    return (
        <div className='div-home'>
            <Helmet>
                <title>HOME | INSTACREM</title>
            </Helmet>
            <NavbarDispatch id="navbar"></NavbarDispatch>
            <div id="top"></div>
            <div className='home'>
                <FormUser></FormUser>
                <h3 className='ult-post'>Ultimas Publicaciones</h3>
                {logged
                    ?
                    <></>
                    :
                    <div className='disclaimer'>
                        <h6 >Actualmente no estas logeado, puedes ver las publicaciones, pero no comentar ni dar corazones, si quieres poder hacer esas acciones y ademas tener tu perfil y crear publicaciones, ! Inicia sesion o crea tu usuario !</h6>
                        <div className="buttons">
                            <button className='btn' onClick={() => {
                                navigate("../login")
                            }}>Iniciar Sesion</button>
                            <button className='btn' onClick={() => {
                                navigate("../register")
                            }}>Crear una cuenta</button>
                        </div>
                    </div>
                }
                {
                    blogs ?
                        blogs.map((blog, key) => {
                            return (
                                (<BlogView
                                    key={key}
                                    token={token}
                                    ourUser_name={ourUser_name}
                                    blogId={blog.id}
                                    imagePerfil={blog.userImage}
                                    imageBlog={blog.imageBlog}
                                    username={blog.user}
                                    date={blog.date}
                                    body={blog.body}
                                    Nhearts={blog.stars}
                                    comments={blog.comments}
                                    giveHeart={giveHeart}
                                    deleteHeart={deleteHeart}
                                    createComment={createComment}
                                    deleteComment={deleteComment}
                                    deleteBlog={deleteBlog}
                                    reloadBlogs={reloadBlogs}
                                >
                                </BlogView>)
                            )
                        })
                        :
                        <div className='loading'>
                            <h5>Cargando</h5>
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden" style={{ fontSize: "20rem" }}>Loading...</span>
                            </div>
                        </div>}
            </div>
        </div>
    );
}

export default HomePage;
