import React, { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";

// import { Button, Modal } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import Toastify from "toastify-js";
// import { signUpUser, loginUser } from "../../redux/user-actions";
// import { useDispatch } from "react-redux";
import "./navbar.css";
import MyVerticallyCenteredModal from "../modal/sign_up_modal";
import MyVerticallyCenteredModal2 from "../modal/login_modal";
import { Link, useNavigate } from "react-router-dom";
import { productContext } from "../../contexts/ProductContext";

const Navbar = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

  // ! for serach
  const { createProduct, getProducts, products, deleteProduct } =
    useContext(productContext);
  const navigate = useNavigate();

  const [brandValue, setBrandValue] = useState("");

  let object = new URLSearchParams(window.location.search);
  function filterProducts(key, value) {
    object.set(key, value);
    let newUrl = `${window.location.pathname}?${object.toString()}`;
    navigate(newUrl);
    getProducts();
    setBrandValue(value);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Revolve
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-lg-auto">
              <li className="nav-item">
                <a href="#home" className="nav-link smoothScroll">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a href="#about" className="nav-link smoothScroll">
                  About Us
                </a>
              </li>

              <li className="nav-item">
                <Link to="/products" className="nav-link smoothScroll">
                  Products
                </Link>
              </li>

              <li className="nav-item" onClick={() => setModalShow(true)}>
                <a href="#schedule" className="nav-link smoothScroll">
                  sign up
                </a>
              </li>

              <li className="nav-item" onClick={() => setModalShow2(true)}>
                <a href="#contact" className="nav-link smoothScroll">
                  login
                </a>
              </li>
            </ul>

            {/* <ul className="social-icon ml-lg-3">
              <li>
                <a
                  href="https://fb.com/tooplate"
                  className="fa fa-facebook"
                ></a>
              </li>
              <li>
                <a href="#" className="fa fa-twitter"></a>
              </li>
              <li>
                <a href="#" className="fa fa-instagram"></a>
              </li>
            </ul> */}

            <div className="input-box">
              <input
                type="text"
                className="form-control2"
                onChange={(e) => {
                  filterProducts("q", e.target.value);
                }}
              />
              <FiSearch className="sr" size="20" />
            </div>

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />

            <MyVerticallyCenteredModal2
              show={modalShow2}
              onHide={() => setModalShow2(false)}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
