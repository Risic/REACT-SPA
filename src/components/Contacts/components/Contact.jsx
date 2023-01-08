import maleGenderIcon from "../image/male_icon.svg";
import femaleGenderIcon from "../image/female_icon.svg";
import anonimGenderIcon from "../image/anonim_icon.svg";
import { useParams } from 'react-router-dom';
import contactsInit from "./initContacts";

const Contact = () => {
    const {username} = useParams()

    const getContact = (user) => {
        return contactsInit.find(contact => contact.firstName === user)
    }
    const {firstName, lastName, phone, gender} = getContact(username)

    const getGender = (gender) => {
        switch (gender) {
            case "male":
                return maleGenderIcon;
            case "female":
                return femaleGenderIcon;
            default:
                return anonimGenderIcon
        }
    };
    
    return (
        <div className="contact">
            <div className="contact-avatar"></div>
            <div className="contact-info">
                <div className="contact-fullName">
                    <span className="name">{firstName} </span>
                    <span className="surname">{lastName} </span>
                </div>
                <div className="contact-phone">{phone}</div>
            </div>
            <img className="contact-gender" src={getGender(gender)} alt="gender" />
        </div>
    )
}

export default Contact