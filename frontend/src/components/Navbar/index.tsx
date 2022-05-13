import {ReactComponent as GitHubIcon} from 'assets/img/github.svg';
import './styles.css';

function Navbar() {
    return (
    <header>
        <nav className="container">
          <div className="dsmovie-nav-content">
              <h1>DSMovie</h1>
              <a href="http://github.com/mjcl86">
                <div className='dsmovie-contact-container'>
                  <GitHubIcon/>
                  <p className='dsmovie-contact-link'>/mjcl86</p>
                </div>
              </a>
          </div>
        </nav>
    </header>
    );
}

export default Navbar;