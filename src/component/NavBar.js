import propTypes from 'prop-types';
import NavItem from './NavItem.js';
import logo from'../tamaiti_logo.png';


function NavBar(props) {
    return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                    <img src={logo} className="img-fluid px-3 px-sm-4 mt-3 mb-4" alt="logo"/>
                    </div>
                </a>

                <hr className="sidebar-divider my-0" />

			<li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
            </li>
            <hr className="sidebar-divider" />

			<div className="sidebar-heading">Tienda Online</div>

                <NavItem enlace="Usuarios listado"  icono="fas fa-fw fa-chevron-right" enlaceUrl="#listadoUsuarios"/>
                <NavItem enlace="Productos listado"  icono="fas fa-fw fa-chevron-right" enlaceUrl="#listadoProductos"/>
                <hr className="sidebar-divider d-none d-md-block"/>
		</ul>
        );
}

NavBar.propTypes ={
                enlaces:propTypes.array
}
export default NavBar;
