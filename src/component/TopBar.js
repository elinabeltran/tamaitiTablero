import { React } from 'react'

function TopBar() {
    return (

        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>

            <ul className="navbar-nav ml-auto">

                   <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Admin</span>
                        <img className="img-profile rounded-circle" src="assets/images/dummy-avatar.jpg" width="60" alt="imagen"/>
                        </a>
                    </li>

                </ul>
            </nav>


            );
}

export default TopBar;
