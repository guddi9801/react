import { Link } from 'react-router-dom';
import { scpp } from './Scpp';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function NavMenu() {
    return (
      <>
      <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {
                        scpp.map(
                            scpff => (
                                <li className='nav-item' key={scpff.no}>
                                <Link className='nav-link' to={`/scp/${scpff.no}`}>{scpff.item}</Link>
                                </li>
                                    )
                                )
                            }
                    </ul>
                  </div>
                </div>
              </nav>
           </header>
      </>
      )
}

export default NavMenu;