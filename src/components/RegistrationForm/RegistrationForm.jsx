import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
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

    const handleSubmit = (values, actions) => {
        dispatch(register(values));
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form className={s.form}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Field name="name" type="text" />
                        <ErrorMessage className={s.error} name="name" component="div" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" />
                        <ErrorMessage className={s.error} name="email" component="div" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field name="password" type="password" />
                        <ErrorMessage className={s.error} name="password" component="div" />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Register
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default RegistrationForm;
