import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import s from './RegistrationPage.module.css';

const RegistrationPage = () => {
    return (
        <div className={s.container}>
            <h1>Register</h1>
            <RegistrationForm />
        </div>
    );
};

export default RegistrationPage;