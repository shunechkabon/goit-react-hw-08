import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { login } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import s from './LoginForm.module.css';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Password is too short - should be 6 chars minimum.')
        .required('Required'),
});

const LoginForm = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const navigate = useNavigate();

    const handleSubmit = async (values, actions) => {
        const trimmedValues = {
            email: values.email.trim(),
            password: values.password.trim(),
        };
        try {
            await dispatch(login(trimmedValues)).unwrap();
        } catch (error) {
            console.error('Login error:', error);
        } finally {
            actions.resetForm();
        }
    };

    useEffect(() => {
    if (isLoggedIn) {
        navigate('/contacts');
        }
    }, [isLoggedIn, navigate]);

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className={s.form}>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" type="email" autoComplete="email"/>
                    <ErrorMessage className={s.error} name="email" component="div" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password" autoComplete="current-password"/>
                    <ErrorMessage className={s.error} name="password" component="div" />
                </div>
                <button type="submit" >
                    Login
                </button>
            </Form>
        </Formik>
    );
};

export default LoginForm;