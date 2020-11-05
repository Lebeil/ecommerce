import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = ({filter, setFiltering, count}) => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="foo">E-commerce</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="foonavbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="foo">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="foo">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="foo" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="foo">Action</a>
                                <a className="dropdown-item" href="foo">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="foo">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="foo" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Recherche"
                            aria-label="Search"
                            onChange={(e)=> {
                                setFiltering(e.target.value.length > 0)
                                filter(e.target.value)
                            }}
                        />
                    </form>
                    <Link className="basket" to='/cart'>
                        <i className="fas fa-shopping-basket fa-3x"></i>
                        <span className="badge badge-pill badge-success">{count}</span>
                    </Link>
                </div>
            </nav>
    );
};

export default Navbar;
