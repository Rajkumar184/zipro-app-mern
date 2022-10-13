import React from "react";
import "./ContentPageTwo.css";
import entrygroup from "../../assests/img/entry__group__1.png";
import entrygroup2 from "../../assests/img/entry__group__2.png";
import entrygroup3 from "../../assests/img/entry__group__3.png";
import entrygroup4 from "../../assests/img/entry__group__4-1.png";
import entrygroup5 from "../../assests/img/entry__group__5.png";
import entrygroup6 from "../../assests/img/entry__group__6.png";

const ContentPageTwo = () => {
  return (
    <section className="contentpagetwo" id="cards_landscape_wrap-2">
      <div className="container-lg">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-12">
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default">
                For any type of&nbsp;business, <br />
                we&nbsp;know how to&nbsp;help
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 ">
            <a href="">
              <div className="card-flyer">
                <div className="text-box">
                  <div className="image-box">
                    <img src={entrygroup} alt="alv" />
                  </div>
                  <div className="text-container">
                    <h6>E-shop items</h6>
                    <p>
                      Any packages up to 20kg with cash on delivery and buyout
                      options
                    </p>
                    <div
                      className="elementor-element"
                      data-id="ab607e4"
                      data-element_type="widget"
                      data-widget_type="html.default"
                    >
                      {" "}
                      <div className="elementor-widget-container">
                        {" "}
                        <a href="https://borzodelivery.com/in/grocery-delivery">
                          Learn more
                        </a>{" "}
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <a href="">
              <div className="card-flyer">
                <div className="text-box">
                  <div className="image-box">
                    <img src={entrygroup2} alt="entrygroup2" />
                  </div>
                  <div className="text-container">
                    <h6>Documents</h6>
                    <p>
                      Our couriers can deliver and return signed documents fast
                      and secure it in a paper-case
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <a href="">
              <div className="card-flyer">
                <div className="text-box">
                  <div className="image-box">
                    <img src={entrygroup3} alt="entrygroup3" />
                  </div>

                  <div className="text-container">
                    <h6>Clothes and shoes</h6>
                    <p>
                      Free waiting time on the address so that your client can
                      make their decision
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <a href="">
              <div className="card-flyer">
                <div className="text-box">
                  <div className="image-box">
                    <img src={entrygroup4} alt="entrygroup4" />
                  </div>

                  <div className="text-container">
                    <h6>Food and groceries</h6>
                    <p>
                      We use insulated backpacks to preserve the taste — whether
                      the food is hot or frozen
                    </p>
                    <div
                      className="elementor-element"
                      data-id="ab607e4"
                      data-element_type="widget"
                      data-widget_type="html.default"
                    >
                      {" "}
                      <div className="elementor-widget-container">
                        {" "}
                        <a href="https://borzodelivery.com/in/grocery-delivery">
                          Learn more
                        </a>{" "}
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <a href="">
              <div className="card-flyer">
                <div className="text-box">
                  <div className="image-box">
                    <img src={entrygroup5} alt="entrygroup5" />
                  </div>

                  <div className="text-container">
                    <h6>Flowers and gifts</h6>
                    <p>
                      All fragile and delicate items are handled with maximum
                      care and attention
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <a href="">
              <div className="card-flyer">
                <div className="text-box">
                  <div className="image-box">
                    <img src={entrygroup6} alt="entrygroup6" />
                  </div>

                  <div className="text-container">
                    <h6>And anything else</h6>
                    <p>
                      We will take into account the qualities of the item and
                      all your requests
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentPageTwo;
