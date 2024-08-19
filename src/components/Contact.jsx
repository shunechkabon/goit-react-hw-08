import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsOps'; 
import s from './Contact.module.css';

const Contact = ({ contact }) => { 
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(contact.id));
    };
    
    return (
        <li className={s.contactItem}>
            <div>
                <p><FontAwesomeIcon icon={faUser} />  {contact.name}</p>
                <p><FontAwesomeIcon icon={faPhone} />  {contact.number}</p>
            </div>
            <button type="button" onClick={handleDelete}>Delete</button>
        </li>
    );
}

export default Contact;