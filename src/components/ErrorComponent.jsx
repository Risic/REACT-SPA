import { React } from "react";
import { Link } from 'react-router-dom';

const git = 'REACT-SPA';

const ErrorComponent = () => {
    return (
        <div className="errorComponent">
            <p>Неправильна адреса</p>
            <Link className="link " to={git}>Повернутись на головну</Link>
        </div>
    )
}

export default ErrorComponent;