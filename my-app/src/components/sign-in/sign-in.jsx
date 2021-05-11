import React, {useState} from "react";
import Layout from "../shared/layout";
import {Formik} from "formik";
import {withRouter} from 'react-router-dom';
import {auth} from "../../firebase";
import './sign-in.styles.scss'

const SignIn = ({history:{push}}) =>{
    const [error, setError] = useState(null)
    const initialValues = {
        email: '',
        password: '',
    };

    const handleSignIn = async (values, {setSubmitting}) => {
        const {email, password} = values;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setSubmitting(false);
            push('/kitchen');
        }catch (error){
            console.log(error);
            setSubmitting(false);
            setError(error);
        }
    }

    return(
        <Layout>
            <div className='sign-in'>
                <h1 className='form-container'>
                    Sign In
                </h1>
                <Formik initialValues={initialValues}
                        onSubmit={handleSignIn}>
                    {
                        ({values, errors, handleChange, handleSubmit, isSubmitting})=>{
                            const {email, password} = errors;
                            return (
                                <form onSubmit={handleSubmit}>
                                    <div>

                                        <input type='email'
                                               name='email'
                                               onChange={handleChange}
                                               value={values.email}
                                               placeholder='Email'
                                               className={ 'gato-input ' + (email ? 'error' : '') }/>

                                        <input type='password'
                                               name='password'
                                               onChange={handleChange}
                                               value={values.password}
                                               placeholder='Password'
                                               className={ 'gato-input ' + (password ? 'error' : '') }/>

                                    </div>

                                    <div className='submit-btn'>
                                        <button
                                            type='submit'
                                            disabled={isSubmitting}
                                            className='button is-black gato-btn submit'>
                                            Sign In
                                        </button>
                                    </div>

                                    <div className='error-message'>
                                        {
                                            error && <p>{error.message()}</p>
                                        }
                                    </div>

                                </form>
                            )
                        }

                    }
                </Formik>
            </div>
        </Layout>
    );
}

export default withRouter(SignIn);