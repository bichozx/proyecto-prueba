import { Link } from 'react-router-dom'
import React from 'react'
import logoMarvel3 from '../../img/logoMarvel3.png'

export const HeaderNav = () => {
    return (
        <>
            <div className='container-fluid '>
                <nav className="navbar navbar-expand-lg navbar-light container-fluid ">
                    <div className="container-fluid p-3 mb-2">
                        <img src={logoMarvel3} alt={'logo'} width="16%" height="12%" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to='/inicio' className="nav-link active fs-3 letras">HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/inicio' className="nav-link fs-3 letras">PERSONAJES</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
