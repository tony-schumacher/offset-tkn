import type { NextPage } from "next";
import DefaultTemplate, { SEO } from "../components/DefaultTemplate";

const About: NextPage = () => {
    return (
        <DefaultTemplate SEO={{ ...SEO }}>
            <section className="pb-11">
                <div
                    className="bg-holder"
                    style={{
                        backgroundImage:
                            "url(assets/img/bg-img/about/about-bg.png)",
                    }}
                ></div>
                {/*/.bg-holder*/}
                <div
                    className="bg-holder"
                    style={{
                        backgroundImage:
                            "url(assets/img/illustrations/about-bottom-curve.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "contain",
                    }}
                ></div>
                {/*/.bg-holder*/}
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-10 pt-6 pb-6">
                            <h1 className="font-weight-medium text-white fs-xl-5 fs-4">
                                <span className="position-relative">
                                    About us
                                </span>
                            </h1>
                            <p className="text-100 mt-4 w-lg-75">
                                Founded at the start of 2018,{" "}
                                <a
                                    className="font-weight-bold text-white"
                                    href="#!"
                                >
                                    Shape
                                </a>{" "}
                                is a platform giving users the ability to buy,
                                sell, and accept digital assets with the US
                                Dollar, Pound Sterling, and Euro.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10 mt-xxl-11 mt-xl-9 mt-8">
                            <div className="card shadow-white">
                                <div className="card-body text-center py-4">
                                    <div className="row">
                                        <div className="col">
                                            <span
                                                className="fs-xl-4 fs-lg-3 fs-2 font-weight-bold text-primary text-sans-serif"
                                                data-countup='{"count":10,"duration":1000,"delay":2}'
                                            >
                                                0
                                            </span>
                                            <h6 className="fs-md-0 fs--1 font-weight-bold text-700">
                                                years in business
                                            </h6>
                                        </div>
                                        <div className="col">
                                            <span
                                                className="fs-xl-4 fs-lg-3 fs-2 font-weight-bold text-primary text-sans-serif"
                                                data-countup='{"format":"alphanumeric","count":1500,"duration":1000,"delay":2}'
                                            >
                                                0
                                            </span>
                                            <h6 className="fs-md-0 fs--1 font-weight-bold text-700">
                                                products launched
                                            </h6>
                                        </div>
                                        <div className="col">
                                            <span
                                                className="fs-xl-4 fs-lg-3 fs-2 font-weight-bold text-primary text-sans-serif"
                                                data-countup='{"count":55,"duration":1000,"suffix":"%","delay":2}'
                                            >
                                                0%
                                            </span>
                                            <h6 className="fs-md-0 fs--1 font-weight-bold text-700">
                                                remote employees
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ============================================*/}
            {/* <section> begin ============================*/}
            <section className="pt-10 pb-11">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg col-10 order-lg-1 order-md-0">
                            <div className="position-relative">
                                <h1 className="font-weight-medium fs-xl-5 fs-sm-4 fs-3 heading-big-shape-right">
                                    <span className="position-relative">
                                        Change the world
                                    </span>
                                    <br />
                                    through design.
                                </h1>
                                <p className="text-900 mt-4 w-lg-75">
                                    We are on a journey to make financial
                                    products more tangible. We build digital
                                    products and support finance and insurance
                                    companies, but also Fintech and Insurtech
                                    startups on how to achieve state of the art
                                    customer experience and user experience
                                    design.
                                </p>
                                <div className="row">
                                    <div className="col-xxl col-xl-11 col-md-10">
                                        <img
                                            className="img-fluid rounded-soft mt-6 position-relative"
                                            src="assets/img/gallery/about-second-sec3.png"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-10 mt-4 mt-lg-0">
                            <div className="row justify-content-end">
                                <div className="col-lg-11 col-6">
                                    <img
                                        className="img-fluid rounded-soft"
                                        src="assets/img/gallery/about-second-sec.png"
                                    />
                                </div>
                                <div className="col-lg-8 mt-lg-4 col-6">
                                    <img
                                        className="img-fluid rounded-soft position-relative"
                                        src="assets/img/gallery/about-second-sec2.png"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of .container*/}
            </section>
            {/* <section> close ============================*/}
            {/* ============================================*/}
            {/* ============================================*/}
            {/* <section> begin ============================*/}
            <section className="py-11">
                <div
                    className="bg-holder"
                    style={{
                        backgroundImage:
                            "url(assets/img/bg-img/about/about-team-bg.png)",
                    }}
                ></div>
                {/*/.bg-holder*/}
                <div className="container">
                    <div className="position-relative text-center">
                        <h1 className="font-weight-medium text-white fs-xl-5 fs-lg-4 fs-md-3 fs-2">
                            <span className="position-relative">
                                Meet our team
                            </span>
                        </h1>
                    </div>
                    <div className="row mt-8">
                        <div className="col">
                            <div
                                className="slick-carousel slick-theme-warning"
                                data-slick='{"arrows":false,"autoplay":false,"autoplaySpeed":1000,"slidesToShow":1,"slidesToScroll":1,"dots":true}'
                            >
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-6">
                                        <div className="row d-flex my-4 flex-center">
                                            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-5 col-6 mb-4 mb-xl-0">
                                                <svg
                                                    className="h-team"
                                                    width="100%"
                                                    height="100%"
                                                    viewBox="0 0 240 240"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                >
                                                    <path
                                                        d="M90.5117 12.5646L118.672 3.8754C159.699 -8.78414 203.821 10.4226 222.51 49.0773L223.613 51.3579C229.654 63.8525 232.234 77.7384 231.084 91.5691C228.81 118.934 212.245 143.059 187.524 155.012L175.767 160.696C163.708 166.527 149.868 167.496 137.114 163.402L136.306 163.143C124.071 159.216 110.793 160.146 99.2242 165.739C90.0855 170.158 79.8192 171.693 69.7876 170.142L58.2933 168.364C39.3175 165.429 22.9965 153.355 14.6384 136.068C11.1142 128.779 9.14397 120.837 8.85273 112.746L8.69184 108.276C7.75529 82.2577 19.5888 57.4227 40.3857 41.7598L55.1761 30.6207C65.8215 22.6033 77.7774 16.494 90.5117 12.5646Z"
                                                        fill="#FEB850"
                                                    />
                                                    <mask
                                                        id="mask3"
                                                        maskUnits="userSpaceOnUse"
                                                        x={0}
                                                        y={0}
                                                        width={240}
                                                        height={238}
                                                    >
                                                        <path
                                                            d="M105.964 235.051L102.711 234.409C43.0235 222.626 9.16349e-06 170.279 3.84472e-06 109.44L2.98839e-06 99.6443C1.74327e-06 85.4019 3.05324 71.3249 8.95389 58.3623L15.6651 43.6191C27.7579 17.0534 54.2555 0.00152686 83.4441 0.00152431L93.3536 0.00152344C109.553 0.00152202 124.887 7.31539 135.082 19.905L137.929 23.4201C146.323 33.7863 158.949 39.8085 172.288 39.8085C183.164 39.8085 193.658 43.8171 201.764 51.0679L212.59 60.7517C230.031 76.3527 240 98.6451 240 122.046L240 128.664C240 139.264 238.263 149.793 234.858 159.831L234.156 161.904C222.183 197.203 193.193 224.068 157.087 233.324L155.8 233.654C139.5 237.832 122.472 238.31 105.964 235.051Z"
                                                            fill="#FAFAFF"
                                                        />
                                                    </mask>
                                                    <g mask="url(#mask3)">
                                                        <rect
                                                            y="0.000976562"
                                                            width={240}
                                                            height="239.999"
                                                            fill="url(#pattern3)"
                                                        />
                                                    </g>
                                                    <path
                                                        d="M195.218 72.5763L195.21 72.7099C195.164 73.4996 194.724 74.2133 194.039 74.6089C193.454 74.9464 192.753 75.0162 192.113 74.8005L191.363 74.5476C191.006 74.4272 190.627 74.389 190.253 74.4359L190.127 74.4518C189.305 74.5548 188.492 74.2051 188.002 73.5378C187.382 72.693 187.417 71.5345 188.087 70.7284L188.544 70.1781C189.18 69.4124 190.137 68.9865 191.131 69.0261L191.723 69.0497C192.967 69.0992 194.098 69.7826 194.72 70.8602L194.874 71.1269C195.128 71.5661 195.247 72.07 195.218 72.5763Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M212.501 0.809122L212.648 0.912573C213.523 1.52434 214.03 2.53493 213.999 3.60153C213.973 4.51177 213.556 5.36668 212.856 5.94834L212.035 6.63009C211.644 6.95458 211.331 7.3632 211.12 7.82543L211.049 7.98198C210.586 8.99794 209.609 9.68344 208.496 9.77338C207.087 9.88724 205.781 9.02708 205.33 7.68754L205.022 6.77297C204.593 5.50048 204.782 4.10093 205.531 2.98699L205.978 2.32382C206.915 0.931453 208.5 0.116715 210.178 0.165417L210.593 0.177469C211.277 0.19732 211.94 0.4169 212.501 0.809122Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M195.571 6.33707L195.563 6.47061C195.517 7.26037 195.077 7.97408 194.392 8.36963C193.807 8.70719 193.106 8.77698 192.466 8.56121L191.716 8.30831C191.359 8.18794 190.98 8.14977 190.606 8.19665L190.48 8.21253C189.658 8.31558 188.845 7.96582 188.355 7.2985C187.735 6.45375 187.77 5.29523 188.44 4.48916L188.897 3.93881C189.533 3.17309 190.49 2.74726 191.484 2.78686L192.076 2.81044C193.32 2.85995 194.451 3.54338 195.073 4.62099L195.227 4.88763C195.481 5.32687 195.6 5.83073 195.571 6.33707Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M193.121 31.2433L193.01 31.3175C192.352 31.7567 191.517 31.8353 190.789 31.5267C190.167 31.2634 189.689 30.7454 189.476 30.1048L189.226 29.3539C189.107 28.9966 188.909 28.6707 188.646 28.4006L188.557 28.3091C187.98 27.7156 187.77 26.8561 188.007 26.0631C188.308 25.0592 189.254 24.3891 190.301 24.4381L191.015 24.4715C192.01 24.5181 192.926 25.025 193.493 25.8429L193.831 26.3298C194.541 27.352 194.677 28.6666 194.191 29.8123L194.071 30.0958C193.873 30.5628 193.543 30.9617 193.121 31.2433Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M168.656 23.9823L168.777 23.9268C169.497 23.5986 170.334 23.6546 171.004 24.0759C171.575 24.4354 171.964 25.0233 172.072 25.6897L172.198 26.4709C172.259 26.8426 172.402 27.196 172.618 27.5046L172.691 27.6092C173.166 28.2875 173.236 29.1695 172.874 29.9143C172.417 30.8571 171.376 31.3672 170.35 31.1512L169.65 31.0038C168.676 30.7986 167.853 30.1516 167.424 29.2534L167.168 28.7187C166.632 27.5961 166.708 26.2767 167.37 25.2235L167.534 24.9628C167.804 24.5335 168.194 24.1926 168.656 23.9823Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M192.172 43.4294L192.296 43.4799C193.028 43.7788 193.561 44.4262 193.714 45.2024C193.844 45.8648 193.683 46.5513 193.272 47.0868L192.79 47.7144C192.561 48.0131 192.402 48.3598 192.325 48.7286L192.299 48.8535C192.131 49.6641 191.537 50.32 190.747 50.5676C189.747 50.881 188.662 50.4733 188.116 49.5788L187.743 48.9681C187.225 48.1184 187.131 47.0757 187.49 46.1473L187.704 45.5946C188.154 44.4341 189.166 43.585 190.387 43.345L190.689 43.2856C191.187 43.1877 191.702 43.2377 192.172 43.4294Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M230.863 45.596L230.929 45.6457C231.325 45.9392 231.547 46.4121 231.519 46.9039C231.495 47.3236 231.292 47.7129 230.961 47.9723L230.573 48.2765C230.389 48.4212 230.239 48.6058 230.136 48.8165L230.101 48.8878C229.874 49.3507 229.415 49.6546 228.9 49.6819C228.248 49.7164 227.657 49.3028 227.465 48.6788L227.335 48.2528C227.153 47.6601 227.258 47.0166 227.618 46.5121L227.833 46.2117C228.283 45.5811 229.025 45.2254 229.799 45.2693L229.99 45.2802C230.306 45.2981 230.609 45.4079 230.863 45.596Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M211.667 48.809L211.617 48.8757C211.321 49.2699 210.847 49.4891 210.356 49.4588C209.936 49.433 209.548 49.228 209.29 48.8959L208.988 48.5068C208.844 48.3216 208.66 48.1713 208.45 48.0671L208.379 48.0318C207.917 47.8028 207.615 47.3417 207.59 46.8268C207.559 46.175 207.975 45.5855 208.6 45.3973L209.027 45.2688C209.62 45.0901 210.263 45.1979 210.766 45.5606L211.065 45.7765C211.694 46.2297 212.046 46.9736 211.998 47.747L211.987 47.9383C211.967 48.2536 211.856 48.5562 211.667 48.809Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M211.052 25.4359L211.118 25.4855C211.514 25.779 211.736 26.2519 211.708 26.7437C211.684 27.1635 211.481 27.5527 211.15 27.8122L210.762 28.1163C210.578 28.2611 210.428 28.4457 210.325 28.6563L210.29 28.7276C210.063 29.1906 209.604 29.4945 209.089 29.5217C208.437 29.5563 207.846 29.1426 207.654 28.5187L207.524 28.0926C207.342 27.4999 207.447 26.8564 207.807 26.3519L208.022 26.0516C208.472 25.421 209.214 25.0652 209.988 25.1091L210.179 25.12C210.495 25.1379 210.798 25.2477 211.052 25.4359Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <defs>
                                                        <pattern
                                                            id="pattern3"
                                                            patternContentUnits="objectBoundingBox"
                                                            width={1}
                                                            height={1}
                                                        >
                                                            <use
                                                                xlinkHref="#image3"
                                                                transform="translate(0 -0.0829673) scale(0.000366166)"
                                                            />
                                                        </pattern>
                                                        <image
                                                            id="image3"
                                                            width={2731}
                                                            height={3100}
                                                            xlinkHref="assets/img/team/adult-boy-1.png"
                                                        />
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="col-xl-6 col-lg col-md-6 text-center text-md-left">
                                                <h4 className="font-weight-bold text-white">
                                                    Lionel d’ costa
                                                </h4>
                                                <h6 className="text-800 font-weight-bold fs-0">
                                                    Founder &amp; CEO
                                                </h6>
                                                <p
                                                    className="font-weight-bold display-4 mb-0 text-100 line-height-0 pt-3 pb-1"
                                                    style={{
                                                        textIndent: "-5px",
                                                    }}
                                                >
                                                    <em>"</em>
                                                </p>
                                                <p className="text-500">
                                                    A design platform should
                                                    unite code, content, and
                                                    design, helping people in
                                                    each discipline collaborate.
                                                    And That is Shape for you.
                                                </p>
                                                <div className="row justify-content-center justify-content-md-start">
                                                    <div className="col-auto">
                                                        <a
                                                            className="text-decoration-none d-inline-block py-2 pr-4 social-icon-hover-warning"
                                                            href="#!"
                                                        >
                                                            <span className="fab fa-twitter social-icon" />
                                                        </a>
                                                        <a
                                                            className="text-decoration-none d-inline-block py-2 pr-4 social-icon-hover-warning"
                                                            href="#!"
                                                        >
                                                            <span className="fab fa-facebook-f social-icon" />
                                                        </a>
                                                        <a
                                                            className="text-decoration-none d-inline-block py-2 pr-4 social-icon-hover-warning"
                                                            href="#!"
                                                        >
                                                            <span className="fab fa-instagram social-icon" />
                                                        </a>
                                                        <a
                                                            className="text-decoration-none d-inline-block social-icon-hover-warning"
                                                            href="#!"
                                                        >
                                                            <span className="fab fa-linkedin-in social-icon" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="row d-flex my-4 flex-center">
                                            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-5 col-6 mb-4 mb-xl-0">
                                                <svg
                                                    className="h-team"
                                                    width="100%"
                                                    height="100%"
                                                    viewBox="0 0 240 240"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                >
                                                    <path
                                                        d="M90.5117 12.5646L118.672 3.8754C159.699 -8.78414 203.821 10.4226 222.51 49.0773L223.613 51.3579C229.654 63.8525 232.234 77.7384 231.084 91.5691C228.81 118.934 212.245 143.059 187.524 155.012L175.767 160.696C163.708 166.527 149.868 167.496 137.114 163.402L136.306 163.143C124.071 159.216 110.793 160.146 99.2242 165.739C90.0855 170.158 79.8192 171.693 69.7876 170.142L58.2933 168.364C39.3175 165.429 22.9965 153.355 14.6384 136.068C11.1142 128.779 9.14397 120.837 8.85273 112.746L8.69184 108.276C7.75529 82.2577 19.5888 57.4227 40.3857 41.7598L55.1761 30.6207C65.8215 22.6033 77.7774 16.494 90.5117 12.5646Z"
                                                        fill="#5A45FF"
                                                    />
                                                    <mask
                                                        id="mask2"
                                                        maskUnits="userSpaceOnUse"
                                                        x={0}
                                                        y={0}
                                                        width={240}
                                                        height={238}
                                                    >
                                                        <path
                                                            d="M105.964 235.051L102.711 234.409C43.0235 222.626 9.16349e-06 170.279 3.84472e-06 109.44L2.98839e-06 99.6443C1.74327e-06 85.4019 3.05324 71.3249 8.95389 58.3623L15.6651 43.6191C27.7579 17.0534 54.2555 0.00152686 83.4441 0.00152431L93.3536 0.00152344C109.553 0.00152202 124.887 7.31539 135.082 19.905L137.929 23.4201C146.323 33.7863 158.949 39.8085 172.288 39.8085C183.164 39.8085 193.658 43.8171 201.764 51.0679L212.59 60.7517C230.031 76.3527 240 98.6451 240 122.046L240 128.664C240 139.264 238.263 149.793 234.858 159.831L234.156 161.904C222.183 197.203 193.193 224.068 157.087 233.324L155.8 233.654C139.5 237.832 122.472 238.31 105.964 235.051Z"
                                                            fill="#FAFAFF"
                                                        />
                                                    </mask>
                                                    <g mask="url(#mask2)">
                                                        <rect
                                                            y="0.000976562"
                                                            width={240}
                                                            height="239.999"
                                                            fill="url(#pattern2)"
                                                        />
                                                    </g>
                                                    <path
                                                        d="M195.218 72.5763L195.21 72.7099C195.164 73.4996 194.724 74.2133 194.039 74.6089C193.454 74.9464 192.753 75.0162 192.113 74.8005L191.363 74.5476C191.006 74.4272 190.627 74.389 190.253 74.4359L190.127 74.4518C189.305 74.5548 188.492 74.2051 188.002 73.5378C187.382 72.693 187.417 71.5345 188.087 70.7284L188.544 70.1781C189.18 69.4124 190.137 68.9865 191.131 69.0261L191.723 69.0497C192.967 69.0992 194.098 69.7826 194.72 70.8602L194.874 71.1269C195.128 71.5661 195.247 72.07 195.218 72.5763Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M212.501 0.809122L212.648 0.912573C213.523 1.52434 214.03 2.53493 213.999 3.60153C213.973 4.51177 213.556 5.36668 212.856 5.94834L212.035 6.63009C211.644 6.95458 211.331 7.3632 211.12 7.82543L211.049 7.98198C210.586 8.99794 209.609 9.68344 208.496 9.77338C207.087 9.88724 205.781 9.02708 205.33 7.68754L205.022 6.77297C204.593 5.50048 204.782 4.10093 205.531 2.98699L205.978 2.32382C206.915 0.931453 208.5 0.116715 210.178 0.165417L210.593 0.177469C211.277 0.19732 211.94 0.4169 212.501 0.809122Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M195.571 6.33707L195.563 6.47061C195.517 7.26037 195.077 7.97408 194.392 8.36963C193.807 8.70719 193.106 8.77698 192.466 8.56121L191.716 8.30831C191.359 8.18794 190.98 8.14977 190.606 8.19665L190.48 8.21253C189.658 8.31558 188.845 7.96582 188.355 7.2985C187.735 6.45375 187.77 5.29523 188.44 4.48916L188.897 3.93881C189.533 3.17309 190.49 2.74726 191.484 2.78686L192.076 2.81044C193.32 2.85995 194.451 3.54338 195.073 4.62099L195.227 4.88763C195.481 5.32687 195.6 5.83073 195.571 6.33707Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M193.121 31.2433L193.01 31.3175C192.352 31.7567 191.517 31.8353 190.789 31.5267C190.167 31.2634 189.689 30.7454 189.476 30.1048L189.226 29.3539C189.107 28.9966 188.909 28.6707 188.646 28.4006L188.557 28.3091C187.98 27.7156 187.77 26.8561 188.007 26.0631C188.308 25.0592 189.254 24.3891 190.301 24.4381L191.015 24.4715C192.01 24.5181 192.926 25.025 193.493 25.8429L193.831 26.3298C194.541 27.352 194.677 28.6666 194.191 29.8123L194.071 30.0958C193.873 30.5628 193.543 30.9617 193.121 31.2433Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M168.656 23.9823L168.777 23.9268C169.497 23.5986 170.334 23.6546 171.004 24.0759C171.575 24.4354 171.964 25.0233 172.072 25.6897L172.198 26.4709C172.259 26.8426 172.402 27.196 172.618 27.5046L172.691 27.6092C173.166 28.2875 173.236 29.1695 172.874 29.9143C172.417 30.8571 171.376 31.3672 170.35 31.1512L169.65 31.0038C168.676 30.7986 167.853 30.1516 167.424 29.2534L167.168 28.7187C166.632 27.5961 166.708 26.2767 167.37 25.2235L167.534 24.9628C167.804 24.5335 168.194 24.1926 168.656 23.9823Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M192.172 43.4294L192.296 43.4799C193.028 43.7788 193.561 44.4262 193.714 45.2024C193.844 45.8648 193.683 46.5513 193.272 47.0868L192.79 47.7144C192.561 48.0131 192.402 48.3598 192.325 48.7286L192.299 48.8535C192.131 49.6641 191.537 50.32 190.747 50.5676C189.747 50.881 188.662 50.4733 188.116 49.5788L187.743 48.9681C187.225 48.1184 187.131 47.0757 187.49 46.1473L187.704 45.5946C188.154 44.4341 189.166 43.585 190.387 43.345L190.689 43.2856C191.187 43.1877 191.702 43.2377 192.172 43.4294Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M230.863 45.596L230.929 45.6457C231.325 45.9392 231.547 46.4121 231.519 46.9039C231.495 47.3236 231.292 47.7129 230.961 47.9723L230.573 48.2765C230.389 48.4212 230.239 48.6058 230.136 48.8165L230.101 48.8878C229.874 49.3507 229.415 49.6546 228.9 49.6819C228.248 49.7164 227.657 49.3028 227.465 48.6788L227.335 48.2528C227.153 47.6601 227.258 47.0166 227.618 46.5121L227.833 46.2117C228.283 45.5811 229.025 45.2254 229.799 45.2693L229.99 45.2802C230.306 45.2981 230.609 45.4079 230.863 45.596Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M211.667 48.809L211.617 48.8757C211.321 49.2699 210.847 49.4891 210.356 49.4588C209.936 49.433 209.548 49.228 209.29 48.8959L208.988 48.5068C208.844 48.3216 208.66 48.1713 208.45 48.0671L208.379 48.0318C207.917 47.8028 207.615 47.3417 207.59 46.8268C207.559 46.175 207.975 45.5855 208.6 45.3973L209.027 45.2688C209.62 45.0901 210.263 45.1979 210.766 45.5606L211.065 45.7765C211.694 46.2297 212.046 46.9736 211.998 47.747L211.987 47.9383C211.967 48.2536 211.856 48.5562 211.667 48.809Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M211.052 25.4359L211.118 25.4855C211.514 25.779 211.736 26.2519 211.708 26.7437C211.684 27.1635 211.481 27.5527 211.15 27.8122L210.762 28.1163C210.578 28.2611 210.428 28.4457 210.325 28.6563L210.29 28.7276C210.063 29.1906 209.604 29.4945 209.089 29.5217C208.437 29.5563 207.846 29.1426 207.654 28.5187L207.524 28.0926C207.342 27.4999 207.447 26.8564 207.807 26.3519L208.022 26.0516C208.472 25.421 209.214 25.0652 209.988 25.1091L210.179 25.12C210.495 25.1379 210.798 25.2477 211.052 25.4359Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <defs>
                                                        <pattern
                                                            id="pattern2"
                                                            patternContentUnits="objectBoundingBox"
                                                            width={1}
                                                            height={1}
                                                        >
                                                            <use
                                                                xlinkHref="#image2"
                                                                transform="translate(0 -0.0829673) scale(0.000366166)"
                                                            />
                                                        </pattern>
                                                        <image
                                                            id="image2"
                                                            width={2731}
                                                            height={3100}
                                                            xlinkHref="assets/img/team/adult-girl-1.png"
                                                        />
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="col-xl-6 col-lg col-md-6 text-center text-md-left">
                                                <h4 className="font-weight-bold text-white">
                                                    Mila dalush
                                                </h4>
                                                <h6 className="text-800 font-weight-bold fs-0">
                                                    business developement
                                                    manager
                                                </h6>
                                                <p
                                                    className="font-weight-bold display-4 mb-0 text-100 line-height-0 pt-3 pb-1"
                                                    style={{
                                                        textIndent: "-5px",
                                                    }}
                                                >
                                                    <em>"</em>
                                                </p>
                                                <p className="text-500">
                                                    Web publishing platforms
                                                    should empower you to build
                                                    whatever you like. Here at
                                                    Shape we we work on that for
                                                    you.
                                                </p>
                                                <div className="row justify-content-center justify-content-md-start">
                                                    <div className="col-auto">
                                                        <a
                                                            className="text-decoration-none d-inline-block py-2 pr-4 social-icon-hover-warning"
                                                            href="#!"
                                                        >
                                                            <span className="fab fa-twitter social-icon" />
                                                        </a>
                                                        <a
                                                            className="text-decoration-none d-inline-block py-2 pr-4 social-icon-hover-warning"
                                                            href="#!"
                                                        >
                                                            <span className="fab fa-facebook-f social-icon" />
                                                        </a>
                                                        <a
                                                            className="text-decoration-none d-inline-block py-2 pr-4 social-icon-hover-warning"
                                                            href="#!"
                                                        >
                                                            <span className="fab fa-instagram social-icon" />
                                                        </a>
                                                        <a
                                                            className="text-decoration-none d-inline-block social-icon-hover-warning"
                                                            href="#!"
                                                        >
                                                            <span className="fab fa-linkedin-in social-icon" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="row d-flex my-4 flex-center">
                                            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-5 col-6 mb-4 mb-xl-0">
                                                <svg
                                                    className="h-team"
                                                    width="100%"
                                                    height="100%"
                                                    viewBox="0 0 240 240"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                >
                                                    <path
                                                        d="M90.5117 12.5646L118.672 3.8754C159.699 -8.78414 203.821 10.4226 222.51 49.0773L223.613 51.3579C229.654 63.8525 232.234 77.7384 231.084 91.5691C228.81 118.934 212.245 143.059 187.524 155.012L175.767 160.696C163.708 166.527 149.868 167.496 137.114 163.402L136.306 163.143C124.071 159.216 110.793 160.146 99.2242 165.739C90.0855 170.158 79.8192 171.693 69.7876 170.142L58.2933 168.364C39.3175 165.429 22.9965 153.355 14.6384 136.068C11.1142 128.779 9.14397 120.837 8.85273 112.746L8.69184 108.276C7.75529 82.2577 19.5888 57.4227 40.3857 41.7598L55.1761 30.6207C65.8215 22.6033 77.7774 16.494 90.5117 12.5646Z"
                                                        fill="#FE3162"
                                                    />
                                                    <mask
                                                        id="mask4"
                                                        maskUnits="userSpaceOnUse"
                                                        x={0}
                                                        y={0}
                                                        width={240}
                                                        height={238}
                                                    >
                                                        <path
                                                            d="M105.964 235.051L102.711 234.409C43.0235 222.626 9.16349e-06 170.279 3.84472e-06 109.44L2.98839e-06 99.6443C1.74327e-06 85.4019 3.05324 71.3249 8.95389 58.3623L15.6651 43.6191C27.7579 17.0534 54.2555 0.00152686 83.4441 0.00152431L93.3536 0.00152344C109.553 0.00152202 124.887 7.31539 135.082 19.905L137.929 23.4201C146.323 33.7863 158.949 39.8085 172.288 39.8085C183.164 39.8085 193.658 43.8171 201.764 51.0679L212.59 60.7517C230.031 76.3527 240 98.6451 240 122.046L240 128.664C240 139.264 238.263 149.793 234.858 159.831L234.156 161.904C222.183 197.203 193.193 224.068 157.087 233.324L155.8 233.654C139.5 237.832 122.472 238.31 105.964 235.051Z"
                                                            fill="#FAFAFF"
                                                        />
                                                    </mask>
                                                    <g mask="url(#mask4)">
                                                        <rect
                                                            y="0.000976562"
                                                            width={240}
                                                            height="239.999"
                                                            fill="url(#pattern4)"
                                                        />
                                                    </g>
                                                    <path
                                                        d="M195.218 72.5763L195.21 72.7099C195.164 73.4996 194.724 74.2133 194.039 74.6089C193.454 74.9464 192.753 75.0162 192.113 74.8005L191.363 74.5476C191.006 74.4272 190.627 74.389 190.253 74.4359L190.127 74.4518C189.305 74.5548 188.492 74.2051 188.002 73.5378C187.382 72.693 187.417 71.5345 188.087 70.7284L188.544 70.1781C189.18 69.4124 190.137 68.9865 191.131 69.0261L191.723 69.0497C192.967 69.0992 194.098 69.7826 194.72 70.8602L194.874 71.1269C195.128 71.5661 195.247 72.07 195.218 72.5763Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M212.501 0.809122L212.648 0.912573C213.523 1.52434 214.03 2.53493 213.999 3.60153C213.973 4.51177 213.556 5.36668 212.856 5.94834L212.035 6.63009C211.644 6.95458 211.331 7.3632 211.12 7.82543L211.049 7.98198C210.586 8.99794 209.609 9.68344 208.496 9.77338C207.087 9.88724 205.781 9.02708 205.33 7.68754L205.022 6.77297C204.593 5.50048 204.782 4.10093 205.531 2.98699L205.978 2.32382C206.915 0.931453 208.5 0.116715 210.178 0.165417L210.593 0.177469C211.277 0.19732 211.94 0.4169 212.501 0.809122Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M195.571 6.33707L195.563 6.47061C195.517 7.26037 195.077 7.97408 194.392 8.36963C193.807 8.70719 193.106 8.77698 192.466 8.56121L191.716 8.30831C191.359 8.18794 190.98 8.14977 190.606 8.19665L190.48 8.21253C189.658 8.31558 188.845 7.96582 188.355 7.2985C187.735 6.45375 187.77 5.29523 188.44 4.48916L188.897 3.93881C189.533 3.17309 190.49 2.74726 191.484 2.78686L192.076 2.81044C193.32 2.85995 194.451 3.54338 195.073 4.62099L195.227 4.88763C195.481 5.32687 195.6 5.83073 195.571 6.33707Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M193.121 31.2433L193.01 31.3175C192.352 31.7567 191.517 31.8353 190.789 31.5267C190.167 31.2634 189.689 30.7454 189.476 30.1048L189.226 29.3539C189.107 28.9966 188.909 28.6707 188.646 28.4006L188.557 28.3091C187.98 27.7156 187.77 26.8561 188.007 26.0631C188.308 25.0592 189.254 24.3891 190.301 24.4381L191.015 24.4715C192.01 24.5181 192.926 25.025 193.493 25.8429L193.831 26.3298C194.541 27.352 194.677 28.6666 194.191 29.8123L194.071 30.0958C193.873 30.5628 193.543 30.9617 193.121 31.2433Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M168.656 23.9823L168.777 23.9268C169.497 23.5986 170.334 23.6546 171.004 24.0759C171.575 24.4354 171.964 25.0233 172.072 25.6897L172.198 26.4709C172.259 26.8426 172.402 27.196 172.618 27.5046L172.691 27.6092C173.166 28.2875 173.236 29.1695 172.874 29.9143C172.417 30.8571 171.376 31.3672 170.35 31.1512L169.65 31.0038C168.676 30.7986 167.853 30.1516 167.424 29.2534L167.168 28.7187C166.632 27.5961 166.708 26.2767 167.37 25.2235L167.534 24.9628C167.804 24.5335 168.194 24.1926 168.656 23.9823Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M192.172 43.4294L192.296 43.4799C193.028 43.7788 193.561 44.4262 193.714 45.2024C193.844 45.8648 193.683 46.5513 193.272 47.0868L192.79 47.7144C192.561 48.0131 192.402 48.3598 192.325 48.7286L192.299 48.8535C192.131 49.6641 191.537 50.32 190.747 50.5676C189.747 50.881 188.662 50.4733 188.116 49.5788L187.743 48.9681C187.225 48.1184 187.131 47.0757 187.49 46.1473L187.704 45.5946C188.154 44.4341 189.166 43.585 190.387 43.345L190.689 43.2856C191.187 43.1877 191.702 43.2377 192.172 43.4294Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M230.863 45.596L230.929 45.6457C231.325 45.9392 231.547 46.4121 231.519 46.9039C231.495 47.3236 231.292 47.7129 230.961 47.9723L230.573 48.2765C230.389 48.4212 230.239 48.6058 230.136 48.8165L230.101 48.8878C229.874 49.3507 229.415 49.6546 228.9 49.6819C228.248 49.7164 227.657 49.3028 227.465 48.6788L227.335 48.2528C227.153 47.6601 227.258 47.0166 227.618 46.5121L227.833 46.2117C228.283 45.5811 229.025 45.2254 229.799 45.2693L229.99 45.2802C230.306 45.2981 230.609 45.4079 230.863 45.596Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M211.667 48.809L211.617 48.8757C211.321 49.2699 210.847 49.4891 210.356 49.4588C209.936 49.433 209.548 49.228 209.29 48.8959L208.988 48.5068C208.844 48.3216 208.66 48.1713 208.45 48.0671L208.379 48.0318C207.917 47.8028 207.615 47.3417 207.59 46.8268C207.559 46.175 207.975 45.5855 208.6 45.3973L209.027 45.2688C209.62 45.0901 210.263 45.1979 210.766 45.5606L211.065 45.7765C211.694 46.2297 212.046 46.9736 211.998 47.747L211.987 47.9383C211.967 48.2536 211.856 48.5562 211.667 48.809Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M211.052 25.4359L211.118 25.4855C211.514 25.779 211.736 26.2519 211.708 26.7437C211.684 27.1635 211.481 27.5527 211.15 27.8122L210.762 28.1163C210.578 28.2611 210.428 28.4457 210.325 28.6563L210.29 28.7276C210.063 29.1906 209.604 29.4945 209.089 29.5217C208.437 29.5563 207.846 29.1426 207.654 28.5187L207.524 28.0926C207.342 27.4999 207.447 26.8564 207.807 26.3519L208.022 26.0516C208.472 25.421 209.214 25.0652 209.988 25.1091L210.179 25.12C210.495 25.1379 210.798 25.2477 211.052 25.4359Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <defs>
                                                        <pattern
                                                            id="pattern4"
                                                            patternContentUnits="objectBoundingBox"
                                                            width={1}
                                                            height={1}
                                                        >
                                                            <use
                                                                xlinkHref="#image4"
                                                                transform="translate(0 -0.0829673) scale(0.000366166)"
                                                            />
                                                        </pattern>
                                                        <image
                                                            id="image4"
                                                            width={2731}
                                                            height={3100}
                                                            xlinkHref="assets/img/team/adult-boy-2.png"
                                                        />
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="col-xl-6 col-lg col-md-6 text-center text-md-left">
                                                <h4 className="font-weight-bold text-white">
                                                    Mila dalush
                                                </h4>
                                                <h6 className="text-800 font-weight-bold fs-0">
                                                    HR manager
                                                </h6>
                                                <p
                                                    className="font-weight-bold display-4 mb-0 text-100 line-height-0 pt-3 pb-1"
                                                    style={{
                                                        textIndent: "-5px",
                                                    }}
                                                >
                                                    <em>"</em>
                                                </p>
                                                <p className="text-500">
                                                    Web publishing platforms
                                                    should empower you to build
                                                    whatever you like. Here at
                                                    Shape we we work on that for
                                                    you.
                                                </p>
                                                <div className="row justify-content-center justify-content-md-start">
                                                    <div className="col-auto">
                                                        <a
                                                            className="text-decoration-none d-inline-block py-2 pr-4 social-icon-hover-warning"
                                                            href="#!"
                                                        >
                                                            <span className="fab fa-twitter social-icon" />
                                                        </a>
                                                        <a
                                                            className="text-decoration-none d-inline-block py-2 pr-4 social-icon-hover-warning"
                                                            href="#!"
                                                        >
                                                            <span className="fab fa-facebook-f social-icon" />
                                                        </a>
                                                        <a
                                                            className="text-decoration-none d-inline-block py-2 pr-4 social-icon-hover-warning"
                                                            href="#!"
                                                        >
                                                            <span className="fab fa-instagram social-icon" />
                                                        </a>
                                                        <a
                                                            className="text-decoration-none d-inline-block social-icon-hover-warning"
                                                            href="#!"
                                                        >
                                                            <span className="fab fa-linkedin-in social-icon" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="row d-flex my-4 flex-center">
                                            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-5 col-6 mb-4 mb-xl-0">
                                                <svg
                                                    className="h-team"
                                                    width="100%"
                                                    height="100%"
                                                    viewBox="0 0 240 240"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                >
                                                    <path
                                                        d="M90.5117 12.5646L118.672 3.8754C159.699 -8.78414 203.821 10.4226 222.51 49.0773L223.613 51.3579C229.654 63.8525 232.234 77.7384 231.084 91.5691C228.81 118.934 212.245 143.059 187.524 155.012L175.767 160.696C163.708 166.527 149.868 167.496 137.114 163.402L136.306 163.143C124.071 159.216 110.793 160.146 99.2242 165.739C90.0855 170.158 79.8192 171.693 69.7876 170.142L58.2933 168.364C39.3175 165.429 22.9965 153.355 14.6384 136.068C11.1142 128.779 9.14397 120.837 8.85273 112.746L8.69184 108.276C7.75529 82.2577 19.5888 57.4227 40.3857 41.7598L55.1761 30.6207C65.8215 22.6033 77.7774 16.494 90.5117 12.5646Z"
                                                        fill="#4AAFF9"
                                                    />
                                                    <mask
                                                        id="mask5"
                                                        maskUnits="userSpaceOnUse"
                                                        x={0}
                                                        y={0}
                                                        width={240}
                                                        height={238}
                                                    >
                                                        <path
                                                            d="M105.964 235.051L102.711 234.409C43.0235 222.626 9.16349e-06 170.279 3.84472e-06 109.44L2.98839e-06 99.6443C1.74327e-06 85.4019 3.05324 71.3249 8.95389 58.3623L15.6651 43.6191C27.7579 17.0534 54.2555 0.00152686 83.4441 0.00152431L93.3536 0.00152344C109.553 0.00152202 124.887 7.31539 135.082 19.905L137.929 23.4201C146.323 33.7863 158.949 39.8085 172.288 39.8085C183.164 39.8085 193.658 43.8171 201.764 51.0679L212.59 60.7517C230.031 76.3527 240 98.6451 240 122.046L240 128.664C240 139.264 238.263 149.793 234.858 159.831L234.156 161.904C222.183 197.203 193.193 224.068 157.087 233.324L155.8 233.654C139.5 237.832 122.472 238.31 105.964 235.051Z"
                                                            fill="#FAFAFF"
                                                        />
                                                    </mask>
                                                    <g mask="url(#mask5)">
                                                        <rect
                                                            y="0.000976562"
                                                            width={240}
                                                            height="239.999"
                                                            fill="url(#pattern5)"
                                                        />
                                                    </g>
                                                    <path
                                                        d="M195.218 72.5763L195.21 72.7099C195.164 73.4996 194.724 74.2133 194.039 74.6089C193.454 74.9464 192.753 75.0162 192.113 74.8005L191.363 74.5476C191.006 74.4272 190.627 74.389 190.253 74.4359L190.127 74.4518C189.305 74.5548 188.492 74.2051 188.002 73.5378C187.382 72.693 187.417 71.5345 188.087 70.7284L188.544 70.1781C189.18 69.4124 190.137 68.9865 191.131 69.0261L191.723 69.0497C192.967 69.0992 194.098 69.7826 194.72 70.8602L194.874 71.1269C195.128 71.5661 195.247 72.07 195.218 72.5763Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M212.501 0.809122L212.648 0.912573C213.523 1.52434 214.03 2.53493 213.999 3.60153C213.973 4.51177 213.556 5.36668 212.856 5.94834L212.035 6.63009C211.644 6.95458 211.331 7.3632 211.12 7.82543L211.049 7.98198C210.586 8.99794 209.609 9.68344 208.496 9.77338C207.087 9.88724 205.781 9.02708 205.33 7.68754L205.022 6.77297C204.593 5.50048 204.782 4.10093 205.531 2.98699L205.978 2.32382C206.915 0.931453 208.5 0.116715 210.178 0.165417L210.593 0.177469C211.277 0.19732 211.94 0.4169 212.501 0.809122Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M195.571 6.33707L195.563 6.47061C195.517 7.26037 195.077 7.97408 194.392 8.36963C193.807 8.70719 193.106 8.77698 192.466 8.56121L191.716 8.30831C191.359 8.18794 190.98 8.14977 190.606 8.19665L190.48 8.21253C189.658 8.31558 188.845 7.96582 188.355 7.2985C187.735 6.45375 187.77 5.29523 188.44 4.48916L188.897 3.93881C189.533 3.17309 190.49 2.74726 191.484 2.78686L192.076 2.81044C193.32 2.85995 194.451 3.54338 195.073 4.62099L195.227 4.88763C195.481 5.32687 195.6 5.83073 195.571 6.33707Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M193.121 31.2433L193.01 31.3175C192.352 31.7567 191.517 31.8353 190.789 31.5267C190.167 31.2634 189.689 30.7454 189.476 30.1048L189.226 29.3539C189.107 28.9966 188.909 28.6707 188.646 28.4006L188.557 28.3091C187.98 27.7156 187.77 26.8561 188.007 26.0631C188.308 25.0592 189.254 24.3891 190.301 24.4381L191.015 24.4715C192.01 24.5181 192.926 25.025 193.493 25.8429L193.831 26.3298C194.541 27.352 194.677 28.6666 194.191 29.8123L194.071 30.0958C193.873 30.5628 193.543 30.9617 193.121 31.2433Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M168.656 23.9823L168.777 23.9268C169.497 23.5986 170.334 23.6546 171.004 24.0759C171.575 24.4354 171.964 25.0233 172.072 25.6897L172.198 26.4709C172.259 26.8426 172.402 27.196 172.618 27.5046L172.691 27.6092C173.166 28.2875 173.236 29.1695 172.874 29.9143C172.417 30.8571 171.376 31.3672 170.35 31.1512L169.65 31.0038C168.676 30.7986 167.853 30.1516 167.424 29.2534L167.168 28.7187C166.632 27.5961 166.708 26.2767 167.37 25.2235L167.534 24.9628C167.804 24.5335 168.194 24.1926 168.656 23.9823Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M192.172 43.4294L192.296 43.4799C193.028 43.7788 193.561 44.4262 193.714 45.2024C193.844 45.8648 193.683 46.5513 193.272 47.0868L192.79 47.7144C192.561 48.0131 192.402 48.3598 192.325 48.7286L192.299 48.8535C192.131 49.6641 191.537 50.32 190.747 50.5676C189.747 50.881 188.662 50.4733 188.116 49.5788L187.743 48.9681C187.225 48.1184 187.131 47.0757 187.49 46.1473L187.704 45.5946C188.154 44.4341 189.166 43.585 190.387 43.345L190.689 43.2856C191.187 43.1877 191.702 43.2377 192.172 43.4294Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M230.863 45.596L230.929 45.6457C231.325 45.9392 231.547 46.4121 231.519 46.9039C231.495 47.3236 231.292 47.7129 230.961 47.9723L230.573 48.2765C230.389 48.4212 230.239 48.6058 230.136 48.8165L230.101 48.8878C229.874 49.3507 229.415 49.6546 228.9 49.6819C228.248 49.7164 227.657 49.3028 227.465 48.6788L227.335 48.2528C227.153 47.6601 227.258 47.0166 227.618 46.5121L227.833 46.2117C228.283 45.5811 229.025 45.2254 229.799 45.2693L229.99 45.2802C230.306 45.2981 230.609 45.4079 230.863 45.596Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M211.667 48.809L211.617 48.8757C211.321 49.2699 210.847 49.4891 210.356 49.4588C209.936 49.433 209.548 49.228 209.29 48.8959L208.988 48.5068C208.844 48.3216 208.66 48.1713 208.45 48.0671L208.379 48.0318C207.917 47.8028 207.615 47.3417 207.59 46.8268C207.559 46.175 207.975 45.5855 208.6 45.3973L209.027 45.2688C209.62 45.0901 210.263 45.1979 210.766 45.5606L211.065 45.7765C211.694 46.2297 212.046 46.9736 211.998 47.747L211.987 47.9383C211.967 48.2536 211.856 48.5562 211.667 48.809Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M211.052 25.4359L211.118 25.4855C211.514 25.779 211.736 26.2519 211.708 26.7437C211.684 27.1635 211.481 27.5527 211.15 27.8122L210.762 28.1163C210.578 28.2611 210.428 28.4457 210.325 28.6563L210.29 28.7276C210.063 29.1906 209.604 29.4945 209.089 29.5217C208.437 29.5563 207.846 29.1426 207.654 28.5187L207.524 28.0926C207.342 27.4999 207.447 26.8564 207.807 26.3519L208.022 26.0516C208.472 25.421 209.214 25.0652 209.988 25.1091L210.179 25.12C210.495 25.1379 210.798 25.2477 211.052 25.4359Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <defs>
                                                        <pattern
                                                            id="pattern5"
                                                            patternContentUnits="objectBoundingBox"
                                                            width={1}
                                                            height={1}
                                                        >
                                                            <use
                                                                xlinkHref="#image5"
                                                                transform="translate(0 -0.0829673) scale(0.000366166)"
                                                            />
                                                        </pattern>
                                                        <image
                                                            id="image5"
                                                            width={2731}
                                                            height={3100}
                                                            xlinkHref="assets/img/team/adult-girl-2.png"
                                                        />
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="col-xl-6 col-lg col-md-6 text-center text-md-left">
                                                <h4 className="font-weight-bold text-white">
                                                    Mila dalush
                                                </h4>
                                                <h6 className="text-800 font-weight-bold fs-0">
                                                    Marketing manager
                                                </h6>
                                                <p
                                                    className="font-weight-bold display-4 mb-0 text-100 line-height-0 pt-3 pb-1"
                                                    style={{
                                                        textIndent: "-5px",
                                                    }}
                                                >
                                                    <em>"</em>
                                                </p>
                                                <p className="text-500">
                                                    Web publishing platforms
                                                    should empower you to build
                                                    whatever you like. Here at
                                                    Shape we we work on that for
                                                    you.
                                                </p>
                                                <div className="row justify-content-center justify-content-md-start">
                                                    <div className="col-auto">
                                                        <a
                                                            className="text-decoration-none d-inline-block py-2 pr-4 social-icon-hover-warning"
                                                            href="#!"
                                                        >
                                                            <span className="fab fa-twitter social-icon" />
                                                        </a>
                                                        <a
                                                            className="text-decoration-none d-inline-block py-2 pr-4 social-icon-hover-warning"
                                                            href="#!"
                                                        >
                                                            <span className="fab fa-facebook-f social-icon" />
                                                        </a>
                                                        <a
                                                            className="text-decoration-none d-inline-block py-2 pr-4 social-icon-hover-warning"
                                                            href="#!"
                                                        >
                                                            <span className="fab fa-instagram social-icon" />
                                                        </a>
                                                        <a
                                                            className="text-decoration-none d-inline-block social-icon-hover-warning"
                                                            href="#!"
                                                        >
                                                            <span className="fab fa-linkedin-in social-icon" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex">
                                    <div className="col-lg-6">
                                        <div className="row d-flex my-4 flex-center">
                                            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-5 col-6 mb-4 mb-xl-0">
                                                <svg
                                                    className="h-team"
                                                    width="100%"
                                                    height="100%"
                                                    viewBox="0 0 240 240"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                >
                                                    <path
                                                        d="M90.5117 12.5646L118.672 3.8754C159.699 -8.78414 203.821 10.4226 222.51 49.0773L223.613 51.3579C229.654 63.8525 232.234 77.7384 231.084 91.5691C228.81 118.934 212.245 143.059 187.524 155.012L175.767 160.696C163.708 166.527 149.868 167.496 137.114 163.402L136.306 163.143C124.071 159.216 110.793 160.146 99.2242 165.739C90.0855 170.158 79.8192 171.693 69.7876 170.142L58.2933 168.364C39.3175 165.429 22.9965 153.355 14.6384 136.068C11.1142 128.779 9.14397 120.837 8.85273 112.746L8.69184 108.276C7.75529 82.2577 19.5888 57.4227 40.3857 41.7598L55.1761 30.6207C65.8215 22.6033 77.7774 16.494 90.5117 12.5646Z"
                                                        fill="#5A45FF"
                                                    />
                                                    <mask
                                                        id="mask6"
                                                        maskUnits="userSpaceOnUse"
                                                        x={0}
                                                        y={0}
                                                        width={240}
                                                        height={238}
                                                    >
                                                        <path
                                                            d="M105.964 235.051L102.711 234.409C43.0235 222.626 9.16349e-06 170.279 3.84472e-06 109.44L2.98839e-06 99.6443C1.74327e-06 85.4019 3.05324 71.3249 8.95389 58.3623L15.6651 43.6191C27.7579 17.0534 54.2555 0.00152686 83.4441 0.00152431L93.3536 0.00152344C109.553 0.00152202 124.887 7.31539 135.082 19.905L137.929 23.4201C146.323 33.7863 158.949 39.8085 172.288 39.8085C183.164 39.8085 193.658 43.8171 201.764 51.0679L212.59 60.7517C230.031 76.3527 240 98.6451 240 122.046L240 128.664C240 139.264 238.263 149.793 234.858 159.831L234.156 161.904C222.183 197.203 193.193 224.068 157.087 233.324L155.8 233.654C139.5 237.832 122.472 238.31 105.964 235.051Z"
                                                            fill="#FAFAFF"
                                                        />
                                                    </mask>
                                                    <g mask="url(#mask6)">
                                                        <rect
                                                            y="0.000976562"
                                                            width={240}
                                                            height="239.999"
                                                            fill="url(#pattern6)"
                                                        />
                                                    </g>
                                                    <path
                                                        d="M195.218 72.5763L195.21 72.7099C195.164 73.4996 194.724 74.2133 194.039 74.6089C193.454 74.9464 192.753 75.0162 192.113 74.8005L191.363 74.5476C191.006 74.4272 190.627 74.389 190.253 74.4359L190.127 74.4518C189.305 74.5548 188.492 74.2051 188.002 73.5378C187.382 72.693 187.417 71.5345 188.087 70.7284L188.544 70.1781C189.18 69.4124 190.137 68.9865 191.131 69.0261L191.723 69.0497C192.967 69.0992 194.098 69.7826 194.72 70.8602L194.874 71.1269C195.128 71.5661 195.247 72.07 195.218 72.5763Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M212.501 0.809122L212.648 0.912573C213.523 1.52434 214.03 2.53493 213.999 3.60153C213.973 4.51177 213.556 5.36668 212.856 5.94834L212.035 6.63009C211.644 6.95458 211.331 7.3632 211.12 7.82543L211.049 7.98198C210.586 8.99794 209.609 9.68344 208.496 9.77338C207.087 9.88724 205.781 9.02708 205.33 7.68754L205.022 6.77297C204.593 5.50048 204.782 4.10093 205.531 2.98699L205.978 2.32382C206.915 0.931453 208.5 0.116715 210.178 0.165417L210.593 0.177469C211.277 0.19732 211.94 0.4169 212.501 0.809122Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M195.571 6.33707L195.563 6.47061C195.517 7.26037 195.077 7.97408 194.392 8.36963C193.807 8.70719 193.106 8.77698 192.466 8.56121L191.716 8.30831C191.359 8.18794 190.98 8.14977 190.606 8.19665L190.48 8.21253C189.658 8.31558 188.845 7.96582 188.355 7.2985C187.735 6.45375 187.77 5.29523 188.44 4.48916L188.897 3.93881C189.533 3.17309 190.49 2.74726 191.484 2.78686L192.076 2.81044C193.32 2.85995 194.451 3.54338 195.073 4.62099L195.227 4.88763C195.481 5.32687 195.6 5.83073 195.571 6.33707Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M193.121 31.2433L193.01 31.3175C192.352 31.7567 191.517 31.8353 190.789 31.5267C190.167 31.2634 189.689 30.7454 189.476 30.1048L189.226 29.3539C189.107 28.9966 188.909 28.6707 188.646 28.4006L188.557 28.3091C187.98 27.7156 187.77 26.8561 188.007 26.0631C188.308 25.0592 189.254 24.3891 190.301 24.4381L191.015 24.4715C192.01 24.5181 192.926 25.025 193.493 25.8429L193.831 26.3298C194.541 27.352 194.677 28.6666 194.191 29.8123L194.071 30.0958C193.873 30.5628 193.543 30.9617 193.121 31.2433Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M168.656 23.9823L168.777 23.9268C169.497 23.5986 170.334 23.6546 171.004 24.0759C171.575 24.4354 171.964 25.0233 172.072 25.6897L172.198 26.4709C172.259 26.8426 172.402 27.196 172.618 27.5046L172.691 27.6092C173.166 28.2875 173.236 29.1695 172.874 29.9143C172.417 30.8571 171.376 31.3672 170.35 31.1512L169.65 31.0038C168.676 30.7986 167.853 30.1516 167.424 29.2534L167.168 28.7187C166.632 27.5961 166.708 26.2767 167.37 25.2235L167.534 24.9628C167.804 24.5335 168.194 24.1926 168.656 23.9823Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M192.172 43.4294L192.296 43.4799C193.028 43.7788 193.561 44.4262 193.714 45.2024C193.844 45.8648 193.683 46.5513 193.272 47.0868L192.79 47.7144C192.561 48.0131 192.402 48.3598 192.325 48.7286L192.299 48.8535C192.131 49.6641 191.537 50.32 190.747 50.5676C189.747 50.881 188.662 50.4733 188.116 49.5788L187.743 48.9681C187.225 48.1184 187.131 47.0757 187.49 46.1473L187.704 45.5946C188.154 44.4341 189.166 43.585 190.387 43.345L190.689 43.2856C191.187 43.1877 191.702 43.2377 192.172 43.4294Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M230.863 45.596L230.929 45.6457C231.325 45.9392 231.547 46.4121 231.519 46.9039C231.495 47.3236 231.292 47.7129 230.961 47.9723L230.573 48.2765C230.389 48.4212 230.239 48.6058 230.136 48.8165L230.101 48.8878C229.874 49.3507 229.415 49.6546 228.9 49.6819C228.248 49.7164 227.657 49.3028 227.465 48.6788L227.335 48.2528C227.153 47.6601 227.258 47.0166 227.618 46.5121L227.833 46.2117C228.283 45.5811 229.025 45.2254 229.799 45.2693L229.99 45.2802C230.306 45.2981 230.609 45.4079 230.863 45.596Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M211.667 48.809L211.617 48.8757C211.321 49.2699 210.847 49.4891 210.356 49.4588C209.936 49.433 209.548 49.228 209.29 48.8959L208.988 48.5068C208.844 48.3216 208.66 48.1713 208.45 48.0671L208.379 48.0318C207.917 47.8028 207.615 47.3417 207.59 46.8268C207.559 46.175 207.975 45.5855 208.6 45.3973L209.027 45.2688C209.62 45.0901 210.263 45.1979 210.766 45.5606L211.065 45.7765C211.694 46.2297 212.046 46.9736 211.998 47.747L211.987 47.9383C211.967 48.2536 211.856 48.5562 211.667 48.809Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M211.052 25.4359L211.118 25.4855C211.514 25.779 211.736 26.2519 211.708 26.7437C211.684 27.1635 211.481 27.5527 211.15 27.8122L210.762 28.1163C210.578 28.2611 210.428 28.4457 210.325 28.6563L210.29 28.7276C210.063 29.1906 209.604 29.4945 209.089 29.5217C208.437 29.5563 207.846 29.1426 207.654 28.5187L207.524 28.0926C207.342 27.4999 207.447 26.8564 207.807 26.3519L208.022 26.0516C208.472 25.421 209.214 25.0652 209.988 25.1091L210.179 25.12C210.495 25.1379 210.798 25.2477 211.052 25.4359Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <defs>
                                                        <pattern
                                                            id="pattern6"
                                                            patternContentUnits="objectBoundingBox"
                                                            width={1}
                                                            height={1}
                                                        >
                                                            <use
                                                                xlinkHref="#image6"
                                                                transform="translate(0 -0.0829673) scale(0.000366166)"
                                                            />
                                                        </pattern>
                                                        <image
                                                            id="image6"
                                                            width={2731}
                                                            height={3100}
                                                            xlinkHref="assets/img/team/adult-boy-3.png"
                                                        />
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="col-xl-6 col-lg col-md-6 text-center text-md-left">
                                                <h4 className="font-weight-bold text-white">
                                                    Mila dalush
                                                </h4>
                                                <h6 className="text-800 font-weight-bold fs-0">
                                                    front-end developer
                                                </h6>
                                                <p
                                                    className="font-weight-bold display-4 mb-0 text-100 line-height-0 pt-3 pb-1"
                                                    style={{
                                                        textIndent: "-5px",
                                                    }}
                                                >
                                                    <em>"</em>
                                                </p>
                                                <p className="text-500">
                                                    Web publishing platforms
                                                    should empower you to build
                                                    whatever you like. Here at
                                                    Shape we we work on that for
                                                    you.
                                                </p>
                                                <div className="row justify-content-center justify-content-md-start">
                                                    <div className="col-auto">
                                                        <a
                                                            className="text-decoration-none d-inline-block py-2 pr-4 social-icon-hover-warning"
                                                            href="#!"
                                                        >
                                                            <span className="fab fa-twitter social-icon" />
                                                        </a>
                                                        <a
                                                            className="text-decoration-none d-inline-block py-2 pr-4 social-icon-hover-warning"
                                                            href="#!"
                                                        >
                                                            <span className="fab fa-facebook-f social-icon" />
                                                        </a>
                                                        <a
                                                            className="text-decoration-none d-inline-block py-2 pr-4 social-icon-hover-warning"
                                                            href="#!"
                                                        >
                                                            <span className="fab fa-instagram social-icon" />
                                                        </a>
                                                        <a
                                                            className="text-decoration-none d-inline-block social-icon-hover-warning"
                                                            href="#!"
                                                        >
                                                            <span className="fab fa-linkedin-in social-icon" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="row d-flex my-4 flex-center">
                                            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-5 col-6 mb-4 mb-xl-0">
                                                <svg
                                                    className="h-team"
                                                    width="100%"
                                                    height="100%"
                                                    viewBox="0 0 240 240"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                >
                                                    <path
                                                        d="M90.5117 12.5646L118.672 3.8754C159.699 -8.78414 203.821 10.4226 222.51 49.0773L223.613 51.3579C229.654 63.8525 232.234 77.7384 231.084 91.5691C228.81 118.934 212.245 143.059 187.524 155.012L175.767 160.696C163.708 166.527 149.868 167.496 137.114 163.402L136.306 163.143C124.071 159.216 110.793 160.146 99.2242 165.739C90.0855 170.158 79.8192 171.693 69.7876 170.142L58.2933 168.364C39.3175 165.429 22.9965 153.355 14.6384 136.068C11.1142 128.779 9.14397 120.837 8.85273 112.746L8.69184 108.276C7.75529 82.2577 19.5888 57.4227 40.3857 41.7598L55.1761 30.6207C65.8215 22.6033 77.7774 16.494 90.5117 12.5646Z"
                                                        fill="#FEB850"
                                                    />
                                                    <mask
                                                        id="mask7"
                                                        maskUnits="userSpaceOnUse"
                                                        x={0}
                                                        y={0}
                                                        width={240}
                                                        height={238}
                                                    >
                                                        <path
                                                            d="M105.964 235.051L102.711 234.409C43.0235 222.626 9.16349e-06 170.279 3.84472e-06 109.44L2.98839e-06 99.6443C1.74327e-06 85.4019 3.05324 71.3249 8.95389 58.3623L15.6651 43.6191C27.7579 17.0534 54.2555 0.00152686 83.4441 0.00152431L93.3536 0.00152344C109.553 0.00152202 124.887 7.31539 135.082 19.905L137.929 23.4201C146.323 33.7863 158.949 39.8085 172.288 39.8085C183.164 39.8085 193.658 43.8171 201.764 51.0679L212.59 60.7517C230.031 76.3527 240 98.6451 240 122.046L240 128.664C240 139.264 238.263 149.793 234.858 159.831L234.156 161.904C222.183 197.203 193.193 224.068 157.087 233.324L155.8 233.654C139.5 237.832 122.472 238.31 105.964 235.051Z"
                                                            fill="#FAFAFF"
                                                        />
                                                    </mask>
                                                    <g mask="url(#mask7)">
                                                        <rect
                                                            y="0.000976562"
                                                            width={240}
                                                            height="239.999"
                                                            fill="url(#pattern7)"
                                                        />
                                                    </g>
                                                    <path
                                                        d="M195.218 72.5763L195.21 72.7099C195.164 73.4996 194.724 74.2133 194.039 74.6089C193.454 74.9464 192.753 75.0162 192.113 74.8005L191.363 74.5476C191.006 74.4272 190.627 74.389 190.253 74.4359L190.127 74.4518C189.305 74.5548 188.492 74.2051 188.002 73.5378C187.382 72.693 187.417 71.5345 188.087 70.7284L188.544 70.1781C189.18 69.4124 190.137 68.9865 191.131 69.0261L191.723 69.0497C192.967 69.0992 194.098 69.7826 194.72 70.8602L194.874 71.1269C195.128 71.5661 195.247 72.07 195.218 72.5763Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M212.501 0.809122L212.648 0.912573C213.523 1.52434 214.03 2.53493 213.999 3.60153C213.973 4.51177 213.556 5.36668 212.856 5.94834L212.035 6.63009C211.644 6.95458 211.331 7.3632 211.12 7.82543L211.049 7.98198C210.586 8.99794 209.609 9.68344 208.496 9.77338C207.087 9.88724 205.781 9.02708 205.33 7.68754L205.022 6.77297C204.593 5.50048 204.782 4.10093 205.531 2.98699L205.978 2.32382C206.915 0.931453 208.5 0.116715 210.178 0.165417L210.593 0.177469C211.277 0.19732 211.94 0.4169 212.501 0.809122Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M195.571 6.33707L195.563 6.47061C195.517 7.26037 195.077 7.97408 194.392 8.36963C193.807 8.70719 193.106 8.77698 192.466 8.56121L191.716 8.30831C191.359 8.18794 190.98 8.14977 190.606 8.19665L190.48 8.21253C189.658 8.31558 188.845 7.96582 188.355 7.2985C187.735 6.45375 187.77 5.29523 188.44 4.48916L188.897 3.93881C189.533 3.17309 190.49 2.74726 191.484 2.78686L192.076 2.81044C193.32 2.85995 194.451 3.54338 195.073 4.62099L195.227 4.88763C195.481 5.32687 195.6 5.83073 195.571 6.33707Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M193.121 31.2433L193.01 31.3175C192.352 31.7567 191.517 31.8353 190.789 31.5267C190.167 31.2634 189.689 30.7454 189.476 30.1048L189.226 29.3539C189.107 28.9966 188.909 28.6707 188.646 28.4006L188.557 28.3091C187.98 27.7156 187.77 26.8561 188.007 26.0631C188.308 25.0592 189.254 24.3891 190.301 24.4381L191.015 24.4715C192.01 24.5181 192.926 25.025 193.493 25.8429L193.831 26.3298C194.541 27.352 194.677 28.6666 194.191 29.8123L194.071 30.0958C193.873 30.5628 193.543 30.9617 193.121 31.2433Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M168.656 23.9823L168.777 23.9268C169.497 23.5986 170.334 23.6546 171.004 24.0759C171.575 24.4354 171.964 25.0233 172.072 25.6897L172.198 26.4709C172.259 26.8426 172.402 27.196 172.618 27.5046L172.691 27.6092C173.166 28.2875 173.236 29.1695 172.874 29.9143C172.417 30.8571 171.376 31.3672 170.35 31.1512L169.65 31.0038C168.676 30.7986 167.853 30.1516 167.424 29.2534L167.168 28.7187C166.632 27.5961 166.708 26.2767 167.37 25.2235L167.534 24.9628C167.804 24.5335 168.194 24.1926 168.656 23.9823Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M192.172 43.4294L192.296 43.4799C193.028 43.7788 193.561 44.4262 193.714 45.2024C193.844 45.8648 193.683 46.5513 193.272 47.0868L192.79 47.7144C192.561 48.0131 192.402 48.3598 192.325 48.7286L192.299 48.8535C192.131 49.6641 191.537 50.32 190.747 50.5676C189.747 50.881 188.662 50.4733 188.116 49.5788L187.743 48.9681C187.225 48.1184 187.131 47.0757 187.49 46.1473L187.704 45.5946C188.154 44.4341 189.166 43.585 190.387 43.345L190.689 43.2856C191.187 43.1877 191.702 43.2377 192.172 43.4294Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M230.863 45.596L230.929 45.6457C231.325 45.9392 231.547 46.4121 231.519 46.9039C231.495 47.3236 231.292 47.7129 230.961 47.9723L230.573 48.2765C230.389 48.4212 230.239 48.6058 230.136 48.8165L230.101 48.8878C229.874 49.3507 229.415 49.6546 228.9 49.6819C228.248 49.7164 227.657 49.3028 227.465 48.6788L227.335 48.2528C227.153 47.6601 227.258 47.0166 227.618 46.5121L227.833 46.2117C228.283 45.5811 229.025 45.2254 229.799 45.2693L229.99 45.2802C230.306 45.2981 230.609 45.4079 230.863 45.596Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M211.667 48.809L211.617 48.8757C211.321 49.2699 210.847 49.4891 210.356 49.4588C209.936 49.433 209.548 49.228 209.29 48.8959L208.988 48.5068C208.844 48.3216 208.66 48.1713 208.45 48.0671L208.379 48.0318C207.917 47.8028 207.615 47.3417 207.59 46.8268C207.559 46.175 207.975 45.5855 208.6 45.3973L209.027 45.2688C209.62 45.0901 210.263 45.1979 210.766 45.5606L211.065 45.7765C211.694 46.2297 212.046 46.9736 211.998 47.747L211.987 47.9383C211.967 48.2536 211.856 48.5562 211.667 48.809Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <path
                                                        d="M211.052 25.4359L211.118 25.4855C211.514 25.779 211.736 26.2519 211.708 26.7437C211.684 27.1635 211.481 27.5527 211.15 27.8122L210.762 28.1163C210.578 28.2611 210.428 28.4457 210.325 28.6563L210.29 28.7276C210.063 29.1906 209.604 29.4945 209.089 29.5217C208.437 29.5563 207.846 29.1426 207.654 28.5187L207.524 28.0926C207.342 27.4999 207.447 26.8564 207.807 26.3519L208.022 26.0516C208.472 25.421 209.214 25.0652 209.988 25.1091L210.179 25.12C210.495 25.1379 210.798 25.2477 211.052 25.4359Z"
                                                        fill="#EEEFF1"
                                                    />
                                                    <defs>
                                                        <pattern
                                                            id="pattern7"
                                                            patternContentUnits="objectBoundingBox"
                                                            width={1}
                                                            height={1}
                                                        >
                                                            <use
                                                                xlinkHref="#image7"
                                                                transform="translate(0 -0.0829673) scale(0.000366166)"
                                                            />
                                                        </pattern>
                                                        <image
                                                            id="image7"
                                                            width={2731}
                                                            height={3100}
                                                            xlinkHref="assets/img/team/adult-girl-3.png"
                                                        />
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="col-xl-6 col-lg col-md-6 text-center text-md-left">
                                                <h4 className="font-weight-bold text-white">
                                                    Mila dalush
                                                </h4>
                                                <h6 className="text-800 font-weight-bold fs-0">
                                                    Marketing manager
                                                </h6>
                                                <p
                                                    className="font-weight-bold display-4 mb-0 text-100 line-height-0 pt-3 pb-1"
                                                    style={{
                                                        textIndent: "-5px",
                                                    }}
                                                >
                                                    <em>"</em>
                                                </p>
                                                <p className="text-500">
                                                    Web publishing platforms
                                                    should empower you to build
                                                    whatever you like. Here at
                                                    Shape we we work on that for
                                                    you.
                                                </p>
                                                <div className="row justify-content-center justify-content-md-start">
                                                    <div className="col-auto">
                                                        <a
                                                            className="text-decoration-none d-inline-block py-2 pr-4 social-icon-hover-warning"
                                                            href="#!"
                                                        >
                                                            <span className="fab fa-twitter social-icon" />
                                                        </a>
                                                        <a
                                                            className="text-decoration-none d-inline-block py-2 pr-4 social-icon-hover-warning"
                                                            href="#!"
                                                        >
                                                            <span className="fab fa-facebook-f social-icon" />
                                                        </a>
                                                        <a
                                                            className="text-decoration-none d-inline-block py-2 pr-4 social-icon-hover-warning"
                                                            href="#!"
                                                        >
                                                            <span className="fab fa-instagram social-icon" />
                                                        </a>
                                                        <a
                                                            className="text-decoration-none d-inline-block social-icon-hover-warning"
                                                            href="#!"
                                                        >
                                                            <span className="fab fa-linkedin-in social-icon" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                    style={{
                        backgroundImage:
                            "url(assets/img/bg-img/CTA-primary.png)",
                    }}
                ></div>
                {/*/.bg-holder*/}
                <div className="container">
                    <div className="row">
                        <div className="col text-center py-5">
                            <h3 className="text-white fs-lg-3 fs-2">
                                <span className="position-relative">
                                    we are hiring. want to start working with
                                    us?
                                </span>
                            </h3>
                            <button className="btn mt-3 btn-light">
                                Join us now
                            </button>
                        </div>
                    </div>
                </div>
                {/* end of .container*/}
            </section>
            {/* <section> close ============================*/}
            {/* ============================================*/}
        </DefaultTemplate>
    );
};

export default About;
