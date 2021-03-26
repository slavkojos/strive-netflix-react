import { CgSearch } from "react-icons/cg";
import { FaBell } from "react-icons/fa";
const NavBar = (props) => (
  <nav className="navbar navbar-expand-lg my-3 mx-3 d-flex justify-content-between">
    <div className="left">
      <ul className="navbar-nav">
        <li>
          <img
            id="logo"
            className="mr-3"
            src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png"
            alt="logo"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="http://www.google.com">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://www.google.com">
            TV Shows
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://www.google.com">
            Movies
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://www.google.com">
            Recently Added
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://www.google.comackoffice.html">
            My List
          </a>
        </li>
      </ul>
    </div>
    <div className="right">
      <ul className="no-bullets row">
        <li className="nav-item">
          <CgSearch className="mt-2"/>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://www.google.com">
            KIDS
          </a>
        </li>
        <li className="nav-item">
          <FaBell className="mt-2"/>
        </li>
        <li className="nav-item">
          <a href="http://www.google.comrofile.html">
            <img
              id="profile-icon"
              className="mt-1 ml-3"
              src="https://occ-0-173-2581.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZfW1RUr22fiBWaYExj7CxON4XhbCzdXecA3cogZ0L2umPLeF1G2CRjQOqJ4DsYba55_ydC_mMzPhNI-1lGWzjg.png?r=9fe"
              alt=""
            />
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
