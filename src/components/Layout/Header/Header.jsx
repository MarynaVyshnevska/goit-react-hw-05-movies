import { NavLink } from "react-router-dom";
import { GiTheaterCurtains, GiLaurels } from 'react-icons/gi';
import css from './Header.module.css';

const items = [
    { name: 'Home', link: '', icon: GiTheaterCurtains },
    { name: 'Movies', link: 'movies', icon: GiLaurels },
];


const Header = () => {
    const activeStyle = {
        backgroundColor: 'var(--color-bg-accent)',
        color: 'var(--color-accent-lite)',
    }
    return (
        <div className={css.box}>
            <ul className={css.list}>
                {items.map(({ name, link, icon: Pic }) => (
                    <li key={link} >
                        <NavLink
                            to={link}
                            className={css.nav}
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined}
                        >
                            <Pic className={css.icon} />
                            {name}
                        </NavLink>
                    </li>
                ))}
            
            </ul>
        </div>
    )
}

export default Header;