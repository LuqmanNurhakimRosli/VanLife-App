import {Link} from 'react-router-dom'
import './css/NotFound.css';

function NotFound() {
    return (
        <div className="not-found-container">
            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link to="/">Go back to home</Link>
        </div>
    );
}

export default NotFound