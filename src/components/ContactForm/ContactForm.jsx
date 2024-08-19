import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import s from './ContactForm.module.css';

const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!')
        .max(50, 'Too long!')
        .required('Required'),
    number: Yup.string()
        .min(3, 'Too short!')
        .max(50, 'Too long!')
        .required('Required'),
});

const ContactForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(addContact(values));
        actions.resetForm();
    };

    return (
        <Formik initialValues={{ name: '', number: '' }}
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
                        <label htmlFor="number">Number</label>
                        <Field name="number" type="text" />
                        <ErrorMessage className={s.error} name="number" component="div" />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Add contact
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;