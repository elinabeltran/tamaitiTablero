import '../App.css';
import SideNavBar from '../component/NavBar.js';
import TopBar from '../component/TopBar.js';
import Main from '../component/Main.js';
import Footer from '../component/Footer.js';



function home() {
  return (
    <div id="wrapper">

      <SideNavBar enlaces={['Home', 'Productos', 'Usuarios', 'Categorias']} />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />

          <Main />

          <Footer />

        </div>

      </div>

    </div>
  )
}

export default home;