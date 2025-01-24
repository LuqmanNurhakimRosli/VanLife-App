import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div>
        <div>
            <h1>404 Not Found</h1>
            <Link to="/">
                Back to Home
            </Link>
        </div>
    </div>
  )
}

export default NotFound