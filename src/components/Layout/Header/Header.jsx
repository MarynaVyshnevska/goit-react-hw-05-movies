import { NavLink } from "react-router-dom";
import { GiTheaterCurtains, GiLaurels } from 'react-icons/gi';

const items = [
    { name: 'Home', link: '', icon: GiTheaterCurtains },
    { name: 'Movies', link: 'movies', icon: GiLaurels },
];

const Header = () => {
    return (
        <div className="">
            <ul>
                {items.map(({ name, link, icon: Pic }) => (
                    <li key={link}>
                        <NavLink to={link}>
                            <Pic size='24px' />
                            {name}
                        </NavLink>
                    </li>
                ))}
            
            </ul>
        </div>
    )
}

export default Header;