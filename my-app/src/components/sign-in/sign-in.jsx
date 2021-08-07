import React, {useContext, useState} from 'react';
import { withRouter } from 'react-router-dom';
import { Formik } from 'formik';
import { auth } from '../../firebase';
import './sign-in.styles.scss'

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    return errors;
}

const SignIn = ({ history: { push } }) => {
    const [error, setError] = useState(null);
    const initialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        const { email, password } = values;
        try {
            //signin with firebase
            await auth.signInWithEmailAndPassword(email, password);
            setSubmitting(false);
            push('/kitchen');



        } catch (error) {
            console.log('error', error);
            setSubmitting(false);
            setError(error);
        }

    }

    return (
            <div className='sign-in'>
                <h1>Авторизация</h1>
                <div className='form-container'>
                    <Formik
                        initialValues={initialValues}
                        validate={validate}
                        onSubmit={handleSubmit}>
                        {({
                              values,
                              errors,
                              handleChange,
                              handleSubmit,
                              isSubmitting
                          }) => {
                            const { email } = errors;
                            return (
                                <form onSubmit={handleSubmit} >
                                    <div>
                                        <input
                                            type='email'
                                            name='email'
                                            onChange={handleChange}
                                            value={values.email}
                                            placeholder='Email'
                                            className={'gato-input email ' + (email ? 'error' : '')}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type='password'
                                            name='password'
                                            onChange={handleChange}
                                            value={values.password}
                                            placeholder='Пароль'
                                            className='gato-input password'
                                        />
                                    </div>
                                    <div className='submit-btn'>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="button is-black nomad-btn submit">
                                            Войти
                                        </button>
                                    </div>
                                    <div className='error-message'>
                                        {
                                            error && <p>{error.message}</p>
                                        }
                                    </div>
                                </form>
                            )
                        }
                        }
                    </Formik>
                </div>
            </div>
    );
}

export default withRouter(SignIn);