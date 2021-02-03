import * as React from "react";
import { RouteComponentProps, withRouter, NavLink } from "react-router-dom";
import "./Header.scss";
import headerimg from "../../../Assets/header/shop.png";

class Header extends React.Component<RouteComponentProps> {
  render() {
    return (
      <header className="header-main">
        <div className="sticky-content">
          <div className="d-flex header-middle">
            <div className="container-main">
              <div className="content-left">
                <span className="three-dotes-toggle">
                  <i className="fas fa-bars" style={{ fontSize: "2.3rem" }}></i>
                </span>
                <ul className="nav-ul">
                  <li className="nav-li">
                    <div className="list-main">
                      <div className="list-text">Home</div>
                    </div>
                  </li>
                  <li className="nav-li">
                    <div className="list-main">
                      <div className="list-li">
                        <div className="list-text">Pages</div>
                        <i className="fas fa-chevron-down plus-icon"></i>

                        {/* <img src={plus} alt="plus" className="plus-icon" /> */}
                      </div>

                      <nav className="nav-item w-open">
                        <NavLink
                          to="/"
                          className="nav-dropdown-item nav-dropdown-link"
                        >
                          About Us
                        </NavLink>
                        <NavLink
                          to="/"
                          className="nav-dropdown-item nav-dropdown-link"
                        >
                          Return & Exchange
                        </NavLink>
                        <NavLink
                          to="/"
                          className="nav-dropdown-item nav-dropdown-link"
                        >
                          Terms & Conditions
                        </NavLink>
                      </nav>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="content-center">
                <NavLink to="/hommmmme">
                  <img src={headerimg} alt="header-center" className="logo" />
                </NavLink>
              </div>
              <div className="content-right">
                <NavLink to="/login" className="login-content">
                  <i className="fa fa-user login-user"></i>
                  {/* <span className="login-btn">Login</span> */}
                </NavLink>
                <span className="divider"></span>
                <div className="dropdown-cart">
                  <NavLink to="/cart" className="cart-toggle">
                    <span className="cart-label">
                      <span className="cart-name">My Cart</span>
                    </span>
                    <i className="fas fa-shopping-cart"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default withRouter(Header);
