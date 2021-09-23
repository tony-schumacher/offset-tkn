import type { NextPage } from "next";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Contact: NextPage = () => {
  return (
    <main className="main" id="top">
      <Navbar />
      <section className="bg-extra-1 py-0">
        <div
          className="bg-holder"
          style={{ backgroundImage: "url(assets/img/bg-img/contact-bg.png)" }}
        ></div>
        {/*/.bg-holder*/}
        <div
          className="bg-holder"
          style={{
            backgroundImage:
              "url(assets/img/illustrations/contact-bottom-curve.png)",
            backgroundPosition: "bottom",
            backgroundSize: "contain",
          }}
        ></div>
        {/*/.bg-holder*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 col-10 pt-8 pb-9">
              <h1 className="font-weight-medium text-white fs-xl-5 fs-sm-4 fs-3">
                <span className="position-relative">
                  Get in touch with us
                  <span
                    className="heading-shapes heading-shapes-right"
                    style={{
                      backgroundImage:
                        "url(assets/img/illustrations/shapes-19.png)",
                      height: 70,
                      width: 80,
                    }}
                  />
                </span>
              </h1>
              <div className="overflow-hidden">
                <p className="text-100 mt-4 w-lg-75">
                  Does your project need a jumpstart? Our best customers have a
                  graveyard of design system attempts that just haven't quite
                  caught on. They’re ready to bring in some outside help to gain
                  traction. Sound familiar? We’d love to chat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="down-arrow">
          <a href="#map" data-fancyscroll="data-fancyscroll" data-offset={96}>
            <span className="fa-stack fa-1x">
              <span
                className="fas fa-circle fa-stack-2x text-white"
                data-fa-transform="grow-4"
              />
              <span className="fas fa-angle-down fa-stack-1x fa-inverse text-800" />
            </span>
          </a>
        </div>
      </section>
      {/* ============================================*/}
      {/* <section> begin ============================*/}
      <section className="bg-extra-1 z-index--1 text-center">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg col-md-5">
              <h6 className="fs-0 font-weight-bold text-white mb-0 mt-2">
                Address
              </h6>
              <p className="text-500">Arkansas 59299, United States</p>
            </div>
            <div
              className="border-right border-900 position-relative d-none d-md-block"
              style={{ height: 50, width: 1 }}
            />
            <div className="col-lg col-md-5">
              <h6 className="fs-0 font-weight-bold text-white mb-0 mt-2">
                telephone
              </h6>
              <p className="text-500">(307) 555-0133</p>
            </div>
            <div
              className="border-right border-900 position-relative d-none d-lg-block"
              style={{ height: 50, width: 1 }}
            />
            <div className="col-lg col-md-5 mt-md-4 mt-lg-0">
              <h6 className="fs-0 font-weight-bold text-white mb-0 mt-2">
                email
              </h6>
              <p className="text-500">support@shape.com</p>
            </div>
            <div
              className="border-right border-900 position-relative d-none d-md-block"
              style={{ height: 50, width: 1 }}
            />
            <div className="col-lg col-md-5 mt-md-4 mt-lg-0">
              <h6 className="fs-0 font-weight-bold text-white mb-0 mt-2">
                chat
              </h6>
              <p className="text-500">Click here to chat with us!</p>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      {/* <section> close ============================*/}
      {/* ============================================*/}
      {/* ============================================*/}
      {/* <section> begin ============================*/}
      <section className="pt-0 bg-extra-1">
        <div
          className="bg-holder"
          style={{
            backgroundImage: "url(assets/img/bg-img/contact-form-bg.svg)",
            backgroundPosition: "center 40%",
            backgroundSize: "contain",
          }}
        ></div>
        {/*/.bg-holder*/}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-11 col-lg-10 text-center">
              <img
                className="position-absolute d-none d-lg-block b-0"
                src="assets/img/illustrations/map-side-shape.png"
                style={{ width: "30%", right: "-8%" }}
              />
              <img
                className="position-absolute d-none d-lg-block"
                src="assets/img/illustrations/contact-map-shape.png"
                style={{ width: "7%", left: "-2%", top: "4%" }}
              />
              <h4 className="text-white mb-5" id="map">
                Find Us On the map!
              </h4>
              <div
                className="googlemap rounded-soft shadow-sm"
                data-latlng="48.8583701,2.2922873,17"
                data-scrollwheel="false"
                data-icon="assets/img/icons/map-marker.png"
                data-zoom={15}
                data-theme="UltraLight"
                style={{ minHeight: 450 }}
              >
                <div className="marker-content">
                  <h5 className="mb-2">Eiffel Tower</h5>
                  <p className="mb-0">
                    Gustave Eiffel's iconic, wrought-iron 1889 tower,
                    <br />
                    with steps and elevators to observation decks.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-10 mt-9">
              <img
                className="jhiri-left-top"
                src="assets/img/illustrations/contact-b.png"
                style={{ width: "13%" }}
              />
              <img
                className="jhiri-right-top d-none d-md-block"
                src="assets/img/illustrations/contact-a.png"
                style={{ width: "18%" }}
              />
              <img
                className="position-absolute d-none d-lg-block b-0"
                src="assets/img/illustrations/contact-form-sideshape.png"
                style={{ width: "40%", right: "-18%" }}
              />
              <img
                className="position-absolute d-none d-lg-block"
                src="assets/img/illustrations/contact-map-shape.png"
                style={{ width: "11%", right: "-7%", bottom: "-4%" }}
              />
              <div className="card bg-secondary">
                <div className="card-body p-md-6 p-4">
                  <div className="text-center">
                    <h1 className="text-white fs-xl-5 fs-lg-4 fs-md-3 fs-2">
                      We’d love to hear from you!
                    </h1>
                    <p className="text-600 w-lg-75 mx-auto mt-3">
                      you’re precisely the person whom we’d love to hear from.
                      Drop us a line and let us know what’s on your mind.
                    </p>
                  </div>
                  <form className="mt-5 zform">
                    <div className="zform-feedback" />
                    <input
                      type="hidden"
                      name="to"
                      defaultValue="youremail@domain.com"
                    />
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="inputName">Your Name</label>
                        <input
                          className="form-control bg-extra-1 border-extra-1 text-700"
                          id="inputName"
                          type="text"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="inputEmail">Your Mail</label>
                        <input
                          className="form-control bg-extra-1 border-extra-1 text-700"
                          id="inputEmail"
                          type="email"
                          placeholder="example@domain.com"
                        />
                      </div>
                      <div className="form-group col mt-4">
                        <label htmlFor="message">Your Massage</label>
                        <textarea
                          className="form-control bg-extra-1 border-extra-1 text-700"
                          id="message"
                          placeholder="type your message here"
                          rows={10}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <button
                      className="btn btn-light btn-block mt-4 shadow-white"
                      type="submit"
                    >
                      Send Mail
                    </button>
                  </form>
                </div>
              </div>
              <img
                className="position-absolute d-none d-lg-block"
                src="assets/img/illustrations/contact-leaf1.png"
                style={{ width: "32%", left: "-27%", bottom: "-1%" }}
              />
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      {/* <section> close ============================*/}
      {/* ============================================*/}
      {/* ============================================*/}
      {/* <section> begin ============================*/}
      <section className="py-0 bg-dark">
        <div
          className="bg-holder"
          style={{ backgroundImage: "url(assets/img/bg-img/CTA-contact.png)" }}
        ></div>
        {/*/.bg-holder*/}
        <div className="container">
          <div className="row">
            <div className="col text-center py-5">
              <h3 className="text-white fs-lg-3 fs-2">
                <span className="position-relative">
                  Start your project with us
                  <span
                    className="heading-shapes heading-shapes-right d-none d-md-block"
                    style={{
                      backgroundImage:
                        "url(assets/img/illustrations/shapes-19.png)",
                      height: 70,
                      width: 81,
                    }}
                  />
                </span>
              </h3>
              <button className="btn mt-3 btn-light">Start Now</button>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      {/* <section> close ============================*/}

      <Footer />
    </main>
  );
};

export default Contact;
