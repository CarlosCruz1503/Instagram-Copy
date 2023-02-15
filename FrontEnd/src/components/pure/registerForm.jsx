import React from 'react';
import * as yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik"
import "../../styles/scss/mixins/forms.scss"
import { useNavigate } from "react-router-dom"
const RegisterForm = ({ loading, success, errorState, onRegister, }) => {

    const navigate = useNavigate()

    const initialValues = {
        email: "",
        username: "",
        password: "",
    }

    const registerSchema = yup.object().shape({
        email: yup.string()
            .email("El formato del Email es invalido")
            .required("El email es necesario"),
        username: yup.string()
            .required("Debes tener un nombre de usuario")
            .min(4, "Tu nombre debe ser de minimo 4 caracteres"),
        password: yup.string()
            .required("La contraseña es requerida")
            .min(5, "La contraseña es demasiado Corta")
    })

    if (success) {
        navigate("../login/", { replace: true })
    }


    return (
        <div className='forms'>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    onRegister(values.email, values.username, values.password)
                }}
            >
                {({ errors, touched, isSubmitting }) => {
                    return (
                        <Form className='form-form'>
                            <Field id="email" name="email" type="email" placeholder="Email" className="field-form" />
                            {
                                errors.email && touched.email && (
                                    <div>
                                        <ErrorMessage component="p" name="email"></ErrorMessage>
                                    </div>
                                )
                            }
                            <Field id="username" name="username" type="text" placeholder="Tú nombre" className="field-form" />
                            {
                                errors.username && touched.username && (
                                    <div>
                                        <ErrorMessage component="p" name="username"></ErrorMessage>
                                    </div>
                                )
                            }
                            <Field
                                id="password"
                                name="password"
                                placeholder="Password"
                                type="password"
                                className="field-form"
                            />
                            {
                                errors.password && touched.password && (
                                    <div>
                                        <ErrorMessage component="p" name="password"></ErrorMessage>
                                    </div>
                                )
                            }
                            <p>Al registrarte, aceptas nuestras Condiciones, nuestra Política de privacidad y nuestra Política de cookies</p>
                            <button type="submit" className='btn'>Regístrarte</button>
                            {loading ? (<p>Registrando tu usuario</p>) : null}
                            {errorState === null ? null : (<p style={{ color: "red" }}>El email ya esta en uso o el usuario ya esta en uso</p>)}
                        </Form>)
                }}
            </Formik>
        </div>
    );
}

export default RegisterForm;
