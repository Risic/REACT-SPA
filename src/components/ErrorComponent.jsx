import { React } from "react";
import { Link } from 'react-router-dom';

const ErrorComponent = () => {
    return (
        <div>
            Неправильна адреса чи інша помилка
            <Link to='/'>Повернутись на головну</Link>
        </div>
    )
}

export default ErrorComponent;