import { Link } from "react-router-dom";
import './ErrorPage.css'
const ErrorPage = () => {
    return (
        <div className='error'>
            <h1>Oopss...!</h1>
            <Link>Go Back To Home</Link>
        </div>
    );
};

export default ErrorPage;