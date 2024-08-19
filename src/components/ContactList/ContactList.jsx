import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { selectNameFilter } from '../../redux/filters/selectors';
import Contact from "../Contact/Contact";
import s from './ContactList.module.css';

const ContactList = () => { 
    const contacts = useSelector(selectFilteredContacts);
    const searchQuery = useSelector(selectNameFilter);
    
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    return (
        <ul className={s.contactList}>
            {filteredContacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
            ))}
        </ul>
    );
}

export default ContactList;