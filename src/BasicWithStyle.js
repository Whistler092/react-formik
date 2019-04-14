import React from 'react';
import { Formik } from 'formik';
import './BasicWithStyle.scss';

const BasicWithStyle = ({ handleSaveForm }) => {
    return (
        <div>
            <h1>Basic Formik form with css!</h1>
            <Formik
                initialValues={{ name: '', email: '', password: '' , foo: '', cb: false}}
                validate={values => {
                    let errors = {};

                    if(!values.name){
                        errors.name = 'Required';
                    }

                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log("submitting ...");
                    setTimeout(() => {
                        /*alert(JSON.stringify(values, null, 2));*/
                        setSubmitting(false);
                        handleSaveForm(values);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (

                        <form class="pure-form pure-form-aligned" onSubmit={handleSubmit}>
                            <fieldset>
                                <div class="pure-control-group">
                                    <label for="name">Username</label>
                                    <input id="name" type="text" placeholder="Username" onChange={handleChange} onBlur={handleBlur} value={values.name}/>
                                    <span class="pure-form-message-inline">{errors.name && touched.name && errors.name}</span>
                                    
                                </div>

                                <div class="pure-control-group">
                                    <label for="password">Password</label>
                                    <input id="password" type="password" placeholder="Password" onChange={handleChange} onBlur={handleBlur} value={values.password}/>
                                    {errors.password && touched.password && errors.password}
                                </div>

                                <div class="pure-control-group">
                                    <label for="email">Email Address</label>
                                    <input id="email" type="email" placeholder="Email Address" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                                    <span class="pure-form-message-inline">{errors.email && touched.email && errors.email}</span>
                                </div>

                                <div class="pure-control-group">
                                    <label for="foo">Supercalifragilistic Label</label>
                                    <input id="foo" type="text" placeholder="Enter something here..." onChange={handleChange} onBlur={handleBlur} value={values.foo} />
                                    {errors.foo && touched.foo && errors.foo}
                                </div>

                                <div class="pure-controls">
                                    <label for="cb" class="pure-checkbox">
                                        <input id="cb" type="checkbox" onChange={handleChange} onBlur={handleBlur} checked={values.cb} /> I've read the terms and conditions
                                    </label>

                                    <button type="submit" disabled={isSubmitting} class="pure-button pure-button-primary">Submit</button>
                                </div>
                            </fieldset>
                        </form>
                    )}
            </Formik>
        </div>
    );
};

export default BasicWithStyle;