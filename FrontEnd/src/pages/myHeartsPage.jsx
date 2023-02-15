import React, { useEffect } from 'react';
import NavbarDispatch from '../components/Dispatch/navbarDispatch';
import "../styles/scss/homePage.scss"
import BlogViewHeart from '../components/pure/HeartBlogView';
import { giveHeart, deleteHeart, createComment, deleteComment, deleteBlog } from '../utils/postActions';
import FormUser from '../components/pure/formUser';
import { Helmet } from 'react-helmet';

const MyHeartsPage = ({ token, ourUser_name, blogs, ourId, reloadBlogs, }) => {

    useEffect(() => {
        reloadBlogs()
    }, []);


    return (
        <div className='div-home'>
            <Helmet>
                <title>Mis Corazoncitos | INSTACREM </title>
            </Helmet>
            <NavbarDispatch id="navbar"></NavbarDispatch>
            <div id="top"></div>
            <div className='home'>
                <FormUser></FormUser>
                <h3 className='ult-post'>Post a los que les diste me encanta</h3>
                {blogs ?
                    blogs.map((blog, key) => {
                        return (
                            (<BlogViewHeart
                                key={key}
                                token={token}
                                ourUser_name={ourUser_name}
                                ourId={ourId}
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
                            </BlogViewHeart>)
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

export default MyHeartsPage;
