import React from 'react';
import './Navbar.css';

const Navbar = ({filter, setFiltering, count}) => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/foo">E-commerce</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="foonavbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="ml-auto cart">
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
                        <div className="basket">
                            <i className="fas fa-shopping-basket fa-2x"></i>
                            <span className="badge badge-pill badge-success">{count}</span>
                        </div>
                    </div>

                </div>
            </nav>
    );
};

export default Navbar;
