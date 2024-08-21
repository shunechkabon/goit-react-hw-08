import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { register } from '../../redux/auth/operations';
import s from './RegistrationForm.module.css';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too short!')
        .max(50, 'Too long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Password is too short - should be 6 chars minimum.')
        .required('Required'),
});

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const navigate = useNavigate();

    const handleSubmit = (values, actions) => {
        dispatch(register(values)).finally(() => actions.resetForm()); 
    };

    useEffect(() => {
    if (isLoggedIn) {
        navigate('/contacts');
        }
    }, [isLoggedIn, navigate]);

    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className={s.form}>
                <div>
                    <label htmlFor="name">Name</label>
                        <Field name="name" type="text" />
                        <ErrorMessage className={s.error} name="name" component="div" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" type="email" autoComplete="email"/>
                    <ErrorMessage className={s.error} name="email" component="div" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password" autoComplete="new-password"/>
                    <ErrorMessage className={s.error} name="password" component="div" />
                </div>
                <button type="submit" >
                    Register
                </button>
            </Form>
        </Formik>
    );
};

export default RegistrationForm;
