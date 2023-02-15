import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
import { instance, configForm } from '../utils/axios';
import NavbarDispatch from '../components/Dispatch/navbarDispatch';
import "../styles/scss/createPostPage.scss"
import { Helmet } from 'react-helmet'

const CreatePostPage = ({ user_name, email, token }) => {

    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState()

    const initialCredentials = {
        bodyPost: "",
    }

    const createSchema = yup.object().shape({
        bodyPost: yup.string()
            .max(256, "La longitud del texto de tu publicacion debe ser de 256 caracteres"),
    })

    return (
        <div className='div-editprofile'>
            <Helmet>
                <title>CREATE | INSTACREM</title>
            </Helmet>
            <NavbarDispatch></NavbarDispatch>
            <div className='profile'>
                <div className='forms'>
                    <form action="" className='form-edit-image'>
                        <input
                            filename={file}
                            onChange={e => {
                                setFile(e.target.files[0])
                                setPreview(URL.createObjectURL(e.target.files[0]))
                            }}
                            type="file"
                            accept="image/*"
                            className='form-control'
                        >
                        </input>
                        <div className='preview'>
                            {preview ? <img className='img-profile img-fluid' src={preview} alt="x" /> : <img className='img-profile img-fluid' src={`https://i.pinimg.com/550x/b5/46/3c/b5463c3591ec63cf076ac48179e3b0db.jpg`} alt="x" />}
                        </div>
                    </form>
                    <Formik
                        initialValues={initialCredentials}
                        validationSchema={createSchema}
                        onSubmit={async (values) => {
                            if (file !== null) {
                                const formData = new FormData()
                                formData.append("body", values.bodyForm)
                                formData.append("image", file)
                                instance.post('blogs/postBlog/', formData, configForm(token))
                                    .then((response) => {
                                        setSubmitting(true)
                                        setTimeout(() => {
                                            navigate("../profile")
                                        }, 1000)
                                    })
                                    .catch((e) => {
                                        setError(true)
                                    })
                            } else {
                                setError(true)
                            }

                        }}
                    >
                        {({ errors, touched, isSubmitting }) => {
                            return (
                                <Form className='form-form form-edit-image' >

                                    <label htmlFor="bodyForm" className='text-center'>Escribe el texto que quieras para tu publicación</label>
                                    <Field id="bodyForm" name="bodyForm" type="text" className="field-form" />
                                    {
                                        errors.bodyForm && (
                                            <div>
                                                <ErrorMessage component="h1" name="bodyForm"></ErrorMessage>
                                            </div>
                                        )
                                    }

                                    {submitting ? (<p>Creando tú publicación</p>) : null}
                                    <button type="submit" className='btn'>Crear Tu publiacion</button>
                                </Form>)
                        }}
                    </Formik>
                    {error ?
                        (<p style={{ color: "red" }}>Opps, Debes de poner una imagen a tu publicación</p>)
                        :
                        <></>
                    }
                </div>
            </div>
        </div>
    );
}

export default CreatePostPage;
