import React from "react";
import cart from '../../images/cart.jpg'
import { useCart } from 'react-use-cart'

const NavBarLog = () => {
    const { totalUniqueItems } = useCart();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container" id="pj">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/cart">
                                <span className="badge badge-pill bg-danger"></span>
                                <span><i className="fas fa-shopping-cart"><img src={cart} pathText="/cart" className="cart-img" alt="cart" width={50} />Cart({totalUniqueItems})</i></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <i className="bi bi-cart"></i>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/home">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">about</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact US</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>


    )
}
export default NavBarLog