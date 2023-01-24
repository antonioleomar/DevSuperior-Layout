import React from 'react'
import './navbar.css'
import 'bootstrap/js/dist/collapse'
import {Link} from 'react-router-dom'



function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark navbar-container nav">
                <div className="container-fluid">

                    <a className="nav-logo-text" href="#">Carros Top</a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03"
                        aria-expanded="false" aria-label="Toggle navigation">

                        <span class="navbar-toggler-icon"></span>
                    </button>


                    <div class="collapse navbar-collapse menu-item" id="navbarTogglerDemo03">
                        <ul class="navbar-nav offset-md-9 main-menu">
                            <li class="nav-item">
                                <Link className="nav-link" aria-current="page" to='/'>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to='/catalogo'>Catálogo</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar