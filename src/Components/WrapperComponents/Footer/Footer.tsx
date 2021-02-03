import * as React from "react";
import { RouteComponentProps, withRouter, NavLink } from "react-router-dom";
import "./Footer.scss";

class Footer extends React.Component<RouteComponentProps> {
  constructor(props: RouteComponentProps) {
    super(props);
  }
  render() {
    return (
      <footer className="footer-main">
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-xl-3 col-md-4 col-sm-6 col-6">
                <div className="widget">
                  <h4 className="footer-header">About US</h4>
                  <div className="widget-body">
                    <p className="footer-desc">
                      We are Evolving And So is out Style New Era Begins here, A
                      New Era Of Style With Quality.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 col-sm-6 col-6">
                <div className="widget">
                  <h4 className="footer-header">Contact info</h4>
                  <ul className="widget-body">
                    <li>
                      <NavLink to="/hmnmm" className="footer-font-size">
                        <i className="fas fa-envelope"></i>
                        support@gmail.com
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-6 col-6">
                <div className="widget">
                  <h4 className="footer-header">Useful Links </h4>
                  <ul className="widget-body">
                    <ul>
                      <li>
                        <NavLink to="/about" className="footer-font-size">
                          About us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/about" className="footer-font-size">
                          Return & Exchange
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/about" className="footer-font-size">
                          Terms & Conditins
                        </NavLink>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-6 col-6">
                <div className="widget">
                  <h4 className="footer-header">Follow Us on</h4>
                  <div className="social-links">
                    <span style={{ fontSize: "1.6rem" }}>
                      <i className="fab fa-facebook"></i>
                    </span>
                    <span style={{ fontSize: "1.6rem" }}>
                      <i className="fab fa-instagram"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-6 col-6">
                <div className="widget">
                  <h4 className="footer-header">My Account</h4>
                  <ul className="widget-body">
                    <li>
                      <NavLink to="/hmnmm" className="footer-font-size">
                        Sign In
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/hmnmm" className="footer-font-size">
                        View Cart
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
