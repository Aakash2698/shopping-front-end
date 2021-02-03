import * as React from "react";
import { RouteComponentProps, withRouter, NavLink } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Home.scss";
import caros1 from "../../../Assets/homeImage/a.jpg";
import caros2 from "../../../Assets/homeImage/b.jpg";
import caros3 from "../../../Assets/homeImage/c.jpg";
import product from "../../../Assets/homeImage/product.jpg";

interface State {
  productList: any;
}

class Home extends React.Component<RouteComponentProps, State> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      productList: [
        {
          id: 1,
          productName: "Royal Blue Shirt",
          productImage: product,
          productPrice: "600",
          productSize: "S,M,XL,XXL",
        },
        {
          id: 2,
          productName: "Royal Black Shirt",
          productImage: product,
          productPrice: "600",
          productSize: "S,M,XL,XXL",
        },
        {
          id: 3,
          productName: "Royal White Shirt",
          productImage: product,
          productPrice: "600",
          productSize: "S,M,XL,XXL",
        },
        {
          id: 4,
          productName: "Royal Pink Shirt",
          productImage: product,
          productPrice: "600",
          productSize: "S,M,XL,XXL",
        },
        {
          id: 5,
          productName: "Royal Green Shirt",
          productImage: product,
          productPrice: "600",
          productSize: "S,M,XL,XXL",
        },
        {
          id: 6,
          productName: "Royal Grey Shirt",
          productImage: product,
          productPrice: "600",
          productSize: "S,M,XL,XXL",
        },
      ],
    };
  }
  render() {
    const { productList } = this.state;

    return (
      <main className="home-main">
        <div>
          <Carousel
            autoPlay
            infiniteLoop={true}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            swipeable={true}
            emulateTouch={true}
            dynamicHeight={false}
          >
            <div>
              <img src={caros1} alt="banner" />
            </div>
            <div>
              <img src={caros2} alt="banner" />
            </div>
            <div>
              <img src={caros3} alt="banner" />
            </div>
          </Carousel>
        </div>
        <section className="mt-9 mb-9">
          <div className="home-container">
            <h2 className="title">Trending now</h2>
            <div className="row">
              {productList &&
                productList.map((data: any, index: any) => {
                  return (
                    <div className="col-md-3 col-6 mb-5">
                      <div
                        className="align-centre product product-image appear-animation-visible appear-animate fadeIn"
                        style={{
                          animationDuration: "1.2s",
                          boxShadow: "rgb(0 0 0 / 20%) 0px 4px 8px 0px",
                        }}
                      >
                        <figure className="product-media">
                          <NavLink to="/fgfg">
                            <img
                              className="product-img"
                              src={data.productImage}
                              alt="product"
                              width="280px"
                              height="315px"
                            />
                          </NavLink>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">{data.productName}</h3>
                          <div className="product-price">
                            <span className="price">
                              <i className="fas fa-rupee-sign"></i>
                              {data.productPrice}
                            </span>
                          </div>
                          <div className="add-cart">
                            <span className="btn-product">Add To Cart</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="home-container">
            <h2 className="title">Men's Wear</h2>
            <div className="row">
              {productList &&
                productList.map((data: any, index: any) => {
                  return (
                    <div className="col-md-3 col-6 mb-5">
                      <div
                        className="align-centre product product-image appear-animation-visible appear-animate fadeIn"
                        style={{
                          animationDuration: "1.2s",
                          boxShadow: "rgb(0 0 0 / 20%) 0px 4px 8px 0px",
                        }}
                      >
                        <figure className="product-media">
                          <NavLink to="/fgfg">
                            <img
                              className="product-img"
                              src={data.productImage}
                              alt="product"
                              width="280px"
                              height="315px"
                            />
                          </NavLink>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">{data.productName}</h3>
                          <div className="product-price">
                            <span className="price">
                              <i className="fas fa-rupee-sign"></i>
                              {data.productPrice}
                            </span>
                          </div>
                          <div className="add-cart">
                            <span className="btn-product">Add To Cart</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default withRouter(Home);
