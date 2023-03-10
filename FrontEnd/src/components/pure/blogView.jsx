import React, { useState, useRef } from 'react';
import "../../styles/scss/blogView.scss"
import { useNavigate } from 'react-router-dom';
import { APIURLIMAGEBLOGVIEW,APIURLIMAGE } from '../../utils/axios';
const BlogView = ({ token, ourUser_name, blogId, imagePerfil, imageBlog, username, date,  body, Nhearts, comments, giveHeart, deleteHeart, createComment, deleteComment, deleteBlog,reloadBlogs }) => {

    const fecha = date.substr(0, 10)

    let buttonHeart;

    const [errorComment, setErrorComment] = useState(false);

    const navigate = useNavigate()

    const newComment = useRef()

    return (
        <div className='div-blogView'>
            <div className='superior' >
                <div className='img-profile-post btn' onClick={() => {
                    navigate(`../profile/${username}`)
                }}>
                    <img src={`${APIURLIMAGEBLOGVIEW}${imagePerfil}`} alt="x" />
                </div>
                {ourUser_name === username
                    ?
                    <div className='myPubli'>
                        <h4 style={{ color: "green" }} className="btn" onClick={() => {
                            navigate(`../profile/${username}`)
                        }}>{username}
                        </h4>
                        <i class="bi bi-trash-fill btn" style={{ color: "red" }} onClick={() => {
                            navigate("../home/")
                            deleteBlog(blogId,token,reloadBlogs)
                        }}>
                        </i>
                    </div>
                    :
                    <h4 className="btn" onClick={() => {
                        navigate(`../profile/${username}`)
                    }}>
                        {username}
                    </h4>
                }
            </div>
            <div className="body">
                <div className='img-profile-post'>
                    <img className="img-fluid" src={`${APIURLIMAGE}${imageBlog}`} alt="x" />
                </div>
                <div className="body-without-image">
                    <div className='div-body-text'>
                        <p className="body-text fecha-blog">{fecha}</p>
                        {body !== "undefined" ? <h6 className="body-text-blog">{body}</h6> : <h6 className="body-text-blog" style={{ display: "none" }}></h6>}
                    </div>
                    <div className='heart'>
                        {
                            Nhearts.map((heart, key) => {
                                if (heart.user === ourUser_name) {
                                    buttonHeart = (<button className='btn' onClick={() => {
                                        deleteHeart(heart.id,token,reloadBlogs)
                                    }}>
                                        <i class="bi bi-heart-fill" style={{ color: "red" }}></i>
                                    </button>)
                                }
                            })
                        }
                        {buttonHeart
                            ?
                            buttonHeart
                            :
                            buttonHeart = (<button className='btn' onClick={() => {
                                giveHeart(blogId,token,reloadBlogs)
                            }}>
                                <i class="bi bi-heart" style={{ color: "black" }}></i>
                            </button>)
                        }
                        <h1> {Nhearts.length} </h1>
                    </div>
                </div>

            </div>
            <div className="footer">
                <h5>Crea un comentario</h5>
                {
                    errorComment ?
                        (<div>
                            <p>T?? comentario es demasiado largo o demasiado corto</p>
                            <p>Prueba usando entre 3 y 100 caracteres</p>
                        </div>)
                        :
                        <></>
                }
                <form action="" className='form-form' onSubmit={(e) => {
                    e.preventDefault()
                    if (newComment.current.value.length < 100 && newComment.current.value.length > 3) {
                        createComment(blogId, newComment.current.value,token,reloadBlogs)
                    } else {
                        setErrorComment(true)
                    }
                }}>
                    <input type="text" placeholder="Escribe un comentario" className='form-control' ref={newComment} />
                    <button className='btn'>Comentar</button>
                </form>
                {
                    comments.map((comment, key) => {
                        if (comment.user === ourUser_name) {
                            return (<div className="comments">
                                <button className='btn' onClick={() => {
                                    navigate(`../profile/${comment.user}`)
                                }}>
                                    <p>{comment.user}: {comment.text}</p>
                                </button>
                                <i class="bi bi-trash-fill btn" onClick={() => {
                                    deleteComment(comment.id,token,reloadBlogs)
                                }}></i>
                            </div>)
                        } else {
                            return (
                                <div className="comments">
                                    <p>
                                        <button className='btn' onClick={() => {
                                            navigate(`../profile/${comment.user}`)
                                        }}>{comment.user}: {comment.text} </button>
                                    </p>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    );
}

export default BlogView;
