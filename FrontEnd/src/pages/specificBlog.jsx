import React from 'react';
import { useParams } from 'react-router-dom';
import NavbarDispatch from '../components/Dispatch/navbarDispatch';
import BlogView from '../components/pure/blogView';
import { Helmet } from 'react-helmet';

import { giveHeart, deleteHeart, createComment, deleteComment, deleteBlog } from '../utils/postActions';

const SpecificBlog = ({ token, ourUser_name, reloadBlogs, blogs }) => {

    const { blogId } = useParams()

    return (
        <div className='div-home'>
            <NavbarDispatch id="navbar"></NavbarDispatch>
            <Helmet>
                <title>BLOG {blogId} | INSTACREM</title>
            </Helmet>
            <div id="top"></div>
            <div className='home'>
                {blogs ?
                    blogs.map((blog, key) => {
                        if (blog.id == blogId) {
                            return ((<BlogView
                                token={token}
                                ourUser_name={ourUser_name}
                                blogId={blog.id}
                                imagePerfil={blog.userImage}
                                imageBlog={blog.imageBlog}
                                username={blog.user}
                                user_id={blog.userId}
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
                            </BlogView>))
                        }
                    })
                    :
                    <></>}
            </div>
        </div>
    );
}

export default SpecificBlog;
