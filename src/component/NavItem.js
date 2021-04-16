import propTypes from 'prop-types';


function NavItem(props) {
  return (
    <li className="nav-item">
      <a className="nav-link collapsed" href={props.enlaceUrl}>
        <i className= {props.icono} ></i>
        <span>{props.enlace}</span>
      </a>
    </li>
  );
}

NavItem.defaultProps = {
}

NavItem.propTypes = {
  enlace: propTypes.string,
}

export default NavItem;
