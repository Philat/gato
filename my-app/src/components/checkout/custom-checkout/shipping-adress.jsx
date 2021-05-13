import React from 'react';
import { Formik } from 'formik'

const validate = values => {
    const { name, email, address } = values;
    const errors = {};
    if (!email) { errors.email = 'Required'};
    if (!name) { errors.name = 'Required' };
    if (!address) { errors.address = 'Required'};

    return errors;
}

const ShippingAddress = ({ setShipping }) => {
    const initialValues = {
        email: '',
        name: '',
        address: '',
    }
    return (
        <div>
            <h4>Доставка</h4>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={(values) => {
                    console.log('values', values);
                    setShipping(values);
                }}
            >
                {
                    ({ values, errors, handleChange, handleSubmit }) => {
                        const { name, email, address } = errors;
                        return (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <input
                                        type='text'
                                        name='name'
                                        onChange={handleChange}
                                        value={values.name}
                                        placeholder='Имя'
                                        className={ 'gato-input ' + (name ? 'error' : '') }
                                    />
                                </div>
                                <div>
                                    <input
                                        type='email'
                                        name='email'
                                        onChange={handleChange}
                                        value={values.email}
                                        placeholder='Email'
                                        className={ 'gato-input ' + (email ? 'error' : '') }
                                    />
                                </div>
                                <div>
                                    <input
                                        type='text'
                                        name='address'
                                        onChange={handleChange}
                                        value={values.address}
                                        placeholder='Адрес'
                                        className={ 'gato-input ' + (address ? 'error' : '') }
                                    />
                                </div>
                                <div className='submit-btn'>
                                    <button type='submit' className='button is-black gato-btn submit'>
                                        ПРОДОЛЖИТЬ
                                    </button>
                                </div>
                            </form>
                        );
                    }
                }
            </Formik>
        </div>
    );
};

export default ShippingAddress;