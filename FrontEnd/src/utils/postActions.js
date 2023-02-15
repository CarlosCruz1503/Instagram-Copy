import { instance,config } from "./axios"

export const giveHeart = async (idBlog,token,reloadBlogs) => {
    await instance.post(`blogs/star/${idBlog}/`, {}, config(token))
    reloadBlogs()
}

export const deleteHeart = async (idHeart,token,reloadBlogs) => {
    await instance.delete(`blogs/starDelete/${idHeart}/`, config(token), {})
    reloadBlogs();
}
export const createComment = async (idBlog, newComment,token,reloadBlogs) => {
    const data = {
        "text": newComment
    }
    await instance.post(`blogs/comment/${idBlog}/`, data, config(token))
    reloadBlogs();
}
export const deleteComment = async (idComment,token,reloadBlogs) => {
    await instance.delete(`blogs/deleteComment/${idComment}/`, config(token))
    reloadBlogs();
}
export const deleteBlog = async (idBlog,token,reloadBlogs) => {
    await instance.delete(`blogs/deleteBlog/${idBlog}/`, config(token))
    reloadBlogs();
}