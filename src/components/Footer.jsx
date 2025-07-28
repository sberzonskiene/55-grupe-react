import { Link } from "react-router";

export function Footer() {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-body-secondary">&copy; 2025 Company, Lithuania 💗</p>
                <ul className="nav col-md-8 justify-content-end">
                    <li className="nav-item">
                        <Link className='nav-link' to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/about'>Cookies</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/services'>Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/app'>App</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/register'>Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/login'>Login</Link>
                    </li>
                </ul>
            </footer>
        </div>
    );
}












