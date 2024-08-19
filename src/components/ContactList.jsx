import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../redux/contactsSlice';
// import { selectContacts } from '../redux/contactsSlice';
// import { selectNameFilter } from '../redux/filtersSlice';
import Contact from "./Contact";
import s from './ContactList.module.css';

const ContactList = () => { 
    const filteredContacts = useSelector(selectFilteredContacts); 
    
    return (
        <ul className={s.contactList}>
            {filteredContacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
            ))}
        </ul>
    );
}

export default ContactList;