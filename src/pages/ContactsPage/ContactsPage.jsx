import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import s from './ContactsPage.module.css';

const ContactsPage = () => {
    return (
        <div className={s.container}>
            <h1>Contacts</h1>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </div>
    );
};

export default ContactsPage;