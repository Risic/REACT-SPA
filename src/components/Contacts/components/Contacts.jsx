import { React, useState, useEffect } from "react";
import { Link, Outlet } from 'react-router-dom';
import contactsInit from "./initContacts";
import GenderCheck from "./GenderCheck";

const Contacts = () => {
    const [contacts, setContacts] = useState(contactsInit);
    const [search, setSearch] = useState("");
    const [gender, setGender] = useState ({
        male: true,
        female: true,
        anon: true
    })

    const inputHandlerSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    };

    useEffect(() => {
        if (search === "") {
            setContacts(contactsInit.filter(contact => (setGender[contact.gender])));
        }
        setContacts(contactsInit.filter((contact) => 
        (
            (contact.firstName.toLowerCase().includes(search.toLowerCase()) || 
            contact.lastName.toLowerCase().includes(search.toLowerCase()) ||
            contact.phone.includes(search)) && 
            gender[contact.gender]
        )))
    }, [search, gender])

    return (
        <div className="contacts"> 
            <div className="searchSection">
                <input type="text" name="search" id="searchInput" placeholder="Search" maxLength={100}
                    onChange={inputHandlerSearch}
                    value={search}/>
                <GenderCheck gender={gender} setGender={setGender}/>
            </div>
        <div className="contacts-list">
        {
            contacts.map((contact, index) => {
                return (
                    <div key={index}>
                        {/* <Contact {...contact} /> */}
                        <Link to={`/contacts/${contact.firstName}`} >
                            <p>{(index += 1) + ". " + contact.firstName + " " + contact.lastName}</p>
                        </Link>
                        <Outlet />
                    </div>
                )
            })
        }
        </div>
        </div>
    )
}

export default Contacts