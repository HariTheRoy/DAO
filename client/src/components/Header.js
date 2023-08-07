import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Header.css'; // Import your custom CSS styles
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">DAO</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/home">Home</a>
            </li>
            {/* <li className="nav-item">
             <Link className="nav-link" to="/manager">Manager</Link>
            </li> */}
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Manager
              </a>
              <ul class="dropdown-menu">
                <Link class="dropdown-item" to="/createProposal">Create proposal</Link>
                <Link class="dropdown-item" to="/executeProposals">Execute Propsal</Link>
                <Link class="dropdown-item" to="/proposalLists">Propsal List</Link>

              </ul>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/investor">Investor</Link>
            </li> */}
             <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Investor
              </a>
              <ul class="dropdown-menu">
                <Link class="dropdown-item" to="/investor">Investors</Link>
                <Link class="dropdown-item" to="/investorList">Investors List</Link>

              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
