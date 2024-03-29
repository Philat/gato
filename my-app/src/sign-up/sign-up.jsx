import React, { useState } from 'react';
import Layout from "../components/shared/layout";
import { Formik } from 'formik';
import {auth, createUserProfileDocument} from "../firebase";
import { withRouter } from 'react-router-dom';
import './sign-up.styles.scss';

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.firstname) { errors.firstname = 'Required' }
    if (!values.password) { errors.password = 'Required' }
    return errors;
}

const SignUp = ({ history: { push } }) => {
    const [error, setError] = useState(null);
    const initialValues = {
        firstname: '',
        email: '',
        password: '',
    }

    const handleSignUp = async (values, { setSubmitting }) => {
        const { firstname, email, password } = values;

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { displayName: firstname });
            push('/kitchen');
            setSubmitting(false);
        } catch (error) {
            console.log('error', error);
            setSubmitting(false);
            setError(error);
        }
    }

    return (
            <div className='sign-up'>
                <h1>Регистрация</h1>
                <div className='form-container'>
                    <Formik
                        initialValues={initialValues}
                        validate={validate}
                        onSubmit={handleSignUp}
                    >
                        {
                            ({ values, errors, handleChange, handleSubmit, isSubmitting }) => {
                                const { firstname, email, password } = errors;
                                return (
                                    <form onSubmit={handleSubmit}>
                                        <div>
                                            <input
                                                type='text'
                                                name='firstname'
                                                onChange={handleChange}
                                                value={values.firstname}
                                                placeholder='Имя'
                                                className={ 'gato-input ' + ( firstname ? 'error' : '' ) }
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type='email'
                                                name='email'
                                                onChange={handleChange}
                                                value={values.email}
                                                placeholder='Email'
                                                className={ 'gato-input ' + ( email ? 'error' : '' ) }
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type='password'
                                                name='password'
                                                onChange={handleChange}
                                                value={values.password}
                                                placeholder='Пароль'
                                                className={ 'gato-input ' + ( password ? 'error' : '' ) }
                                            />
                                        </div>
                                        <div className='submit-btn'>
                                            <button
                                                type='submit'
                                                disabled={isSubmitting}
                                                className='button is-black gato-btn submit'
                                            >
                                                РЕГИСТРАЦИЯ
                                            </button>
                                        </div>
                                        <div className='error-message'>
                                            {
                                                error && <p>{error.message}</p>
                                            }
                                        </div>
                                    </form>
                                );
                            }
                        }
                    </Formik>
                </div>
            </div>
    );
}

export default withRouter(SignUp);