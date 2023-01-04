import { React } from "react";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <NavLink
                to=''
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