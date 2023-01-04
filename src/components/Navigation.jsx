import { React } from "react";
import { NavLink } from 'react-router-dom';

const git = 'REACT-SPA';

const Navigation = () => {
    return (
        <nav>
            <NavLink
                to={git}
            >Main</NavLink>

            <NavLink
                to='posts'
            >Posts</NavLink>

            <NavLink
                to='gallery'
            >Gallery</NavLink>

            <NavLink
                to='contacts'
            >Contacts</NavLink>
        </nav>
    )
}

export default Navigation