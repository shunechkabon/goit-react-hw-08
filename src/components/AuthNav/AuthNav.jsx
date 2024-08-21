import { NavLink } from 'react-router-dom';
import s from '../Navigation/Navigation.module.css';

const AuthNav = () => {
    return (
        <div className={s.nav}>
            <NavLink className={s.navLink} to="/register">Register</NavLink>
            <NavLink className={s.navLink} to="/login">Login</NavLink>
        </div>
    );
};

export default AuthNav;