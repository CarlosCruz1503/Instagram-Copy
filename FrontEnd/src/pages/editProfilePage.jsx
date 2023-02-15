import React, { useRef, useState } from 'react';
import NavbarDispatch from '../components/Dispatch/navbarDispatch';
import { useNavigate } from 'react-router-dom';
import "../styles/scss/editProfilePage.scss"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
import "../styles/scss/formImage.scss"
import { instance, config, configForm, APIURLIMAGE } from '../utils/axios';
import { Helmet } from 'react-helmet';

const EditProfilePage = ({ id, user_name, image, bio, email, reload, token }) => {

    const navigate = useNavigate();

    const [error, setError] = useState(false);
    const [editando, setEditando] = useState(false);
    const [file, setFile] = useState()
    const [preview, setPreview] = useState()

    const initialCredentials = {
        emailForm: email,
        usernameForm: user_name,
        bioForm: bio,
    }

    const editSchema = yup.object().shape({
        emailForm: yup.string()
            .email("El formato del Email es invalido"),
        usernameForm: yup.string()
            .min(4, "Tu nombre de usuario debe tener minimo 4 caracteres")
            .max(30, "Tu nombre de usuario puede tener maximo 30 caracteres"),
        bioForm: yup.string()
            .min(4, "Tu biografía debe de ser de minimo 4 caracteres")
            .max(256, "Tu biografía puede ser de maximo 256 caracteres"),
    })

    const submit = e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("image", file)
        formData.append("user_id", id)
        instance.post('users/uploadImage/', formData, configForm(token))
        reload()
        setTimeout(() => {
            navigate(`../profile/${user_name}`)
        }, 1000)
    }



    return (
        <div className='div-editprofile'>
            <NavbarDispatch></NavbarDispatch>
            <Helmet>
                <title>Editar Perfil | Instacrem</title>
            </Helmet>
            <div className='profile'>
                <div className='div-img-profile'>
                    <div className='edit-profile'>
                        <div>
                            {preview ? <img className='img-profile' src={preview} alt="x" /> : <img className='img-profile' src={`${APIURLIMAGE}${image}`} alt="x" />}
                            <button className='btn'>
                                <img className='img-profile-edit' src={`https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png`} alt="x" />
                            </button>
                        </div>
                        <form action="" onSubmit={submit} className='form-edit-image-profile'>
                            <input
                                className='background-image'
                                filename={file}
                                onChange={e => {
                                    setFile(e.target.files[0])
                                    setPreview(URL.createObjectURL(e.target.files[0]))
                                }}
                                type="file"
                                accept="image/*"
                            >
                            </input>
                            <button className='btn' onClick={() => {
                            }} type="submit">Guardar Imagen</button>
                        </form>
                    </div>
                </div>
                <div className='forms'>
                    <Formik
                        initialValues={initialCredentials}
                        validationSchema={editSchema}
                        onSubmit={async (values) => {
                            let body = {
                                "user_name": values.usernameForm.trim(),
                                "email": values.emailForm.trim(),
                                "bio": values.bioForm.trim(),
                                "password": "",
                            }
                            await instance.put("users/put/", body, configForm(token))
                                .then((response) => {
                                    setEditando(true)
                                    reload()
                                    navigate(`../profile/${values.usernameForm}`)
                                })
                                .catch((e) => {
                                    setError(true)
                                })

                        }}

                    >
                        {({ errors, touched, isSubmitting }) => {
                            return (
                                <Form className='form-form'>
                                    <p className='text-center'>Edita los Datos que quieras, lo que no edites se quedara como esta</p>
                                    <label htmlFor="emailForm">Edita tú Email</label>
                                    <Field id="emailForm" name="emailForm" type="text" className="field-form" />
                                    {
                                        errors.emailForm && (
                                            <div>
                                                <ErrorMessage component="p" name="emailForm"></ErrorMessage>
                                            </div>
                                        )
                                    }
                                    <label htmlFor="usernameForm">Edita tú Nombre de usuario</label>
                                    <Field id="usernameForm" name="usernameForm" type="text" className="field-form" />
                                    {
                                        errors.usernameForm && (
                                            <div>
                                                <ErrorMessage component="p" name="usernameForm"></ErrorMessage>
                                            </div>
                                        )
                                    }
                                    <label htmlFor="usernameForm">Edita tú biografía</label>
                                    <Field id="bioForm" name="bioForm" type="text" className="field-form" />
                                    {
                                        errors.bioForm && (
                                            <div>
                                                <ErrorMessage component="p" name="bioForm"></ErrorMessage>
                                            </div>
                                        )
                                    }
                                    {editando ? (<p>Editando tu perfil</p>) : null}
                                    <button type="submit" className='btn'>Guardar Cambios</button>
                                </Form>)

                        }}
                    </Formik>
                    {error ?
                        (<p style={{ color: "red" }}>Opps, parece que el nombre de usuario o el gmail que quieres ya esta en uso, prueba otro</p>)
                        :
                        <></>
                    }
                </div>
            </div>
        </div>
    );
}

export default EditProfilePage;
