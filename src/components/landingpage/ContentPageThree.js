import React from "react";
import "./ContentPageThree.css";

const ContentPageTwo = () => {
  return (
    <section className="contentpagetwo" id="cards_landscape_wrap-2">
      <div className="container-lg">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-12">
            <div className="elementor-widget-container">
              <h2 class="elementor-heading-title elementor-size-default">
                For any type of&nbsp;business, <br />
                we&nbsp;know how to&nbsp;help
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 ">
            <a href="">
              <div className="card-flyer-2">
                <div className="text-box">
                  <div className="text-container">
                    <h6>Flexible timing</h6>
                    <p>
                      Schedule your delivery for a particular date and time, or
                      choose express delivery that will be completed ASAP
                    </p>
                    <div
                      className="elementor-element"
                      data-id="ab607e4"
                      data-element_type="widget"
                      data-widget_type="html.default"
                    >
                      {" "}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6">
            <a href="">
              <div className="card-flyer-2">
                <div className="text-box">
                  <div className="text-container">
                    <h6>Combined orders</h6>
                    <p>
                      Delivery is faster and cheaper thanks to smart logistics
                      solutions: send several parcels with a single courier
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6">
            <a href="">
              <div className="card-flyer-2">
                <div className="text-box">
                  <div className="text-container">
                    <h6>Attentive support</h6>
                    <p>
                      The support team is ready to answer all your questions
                      daily from 9:00am to 9:00pm
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6">
            <a href="">
              <div className="card-flyer-2">
                <div className="text-box">
                  <div className="text-container">
                    <h6>Money guarantee</h6>
                    <p>
                      We will compensate up to ₹ 50,000 of declared value if
                      your package is lost or damaged
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* <div className="col-xs-12 col-sm-6 col-md-6">
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
          </div> */}
          {/* <div className="col-xs-12 col-sm-6 col-md-4">
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContentPageTwo;
