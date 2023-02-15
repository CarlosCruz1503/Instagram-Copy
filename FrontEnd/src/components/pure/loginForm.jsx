import React from 'react';
import PropTypes from 'prop-types'
import { Formik, Form, ErrorMessage, Field } from "formik"
import * as Yup from "yup"
import "../../styles/scss/mixins/forms.scss"
const LoginForm = ({ getting, onLogin,errorState }) => {

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
                .email("El formato del Email es invalido")
                .required("El email es necesario"),
            password: Yup.string().required("La contraseña es requerida").min(5, "La contraseña es demasiado Corta")
        }
    );


    const initialCredentials = {
        email: "",
        password: "",
    }

    return (
        <div className='forms'>
            <Formik
                initialValues={
                    initialCredentials
                }
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    onLogin(values.email, values.password)
                }}
            >
                {/** We obtain props from Formik */}
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
                            <button type="submit" className='btn'>Login</button>
                            {getting ? (<p>Iniciando Sesion</p>) : null}
                            {errorState === null ? null : (<p style={{color:"red"}}>La contraseña o el usuario son incorrectos</p>)}
                        </Form>)
                }}
            </Formik>
        </div>
    );
}



LoginForm.propTypes = {
    onLogin: PropTypes.func.isRequired,
};


export default LoginForm;
