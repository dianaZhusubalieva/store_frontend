import React from "react";
import "./../../../index.css";

const AboutUs = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="row">
          <div className="mt-lg-5 mb-lg-0 mb-4 col-lg-5 col-md-10 mx-auto col-12">
            <h2 className="mb-4" data-aos="fade-up" data-aos-delay="300">
              New Arrivals
            </h2>

            <p data-aos="fade-up" data-aos-delay="400">
              Made with the planet in mind and a promise to continue to do
              better. Denim made in factories that meet expectations for our
              Water Leadership Program, using recycled and sustainably sourced
              cotton, and recycled polyester.
            </p>

            <p data-aos="fade-up" data-aos-delay="500">
              If you have any question regarding{" "}
              <a
                rel="nofollow"
                href="https://www.tooplate.com/view/2119-gymso-fitness"
                target="_parent"
              >
                jkcnjkfdnkv
              </a>
              , you can{" "}
              <a
                rel="nofollow"
                href="https://www.tooplate.com/contact"
                target="_parent"
              >
                contact Tooplate
              </a>{" "}
              immediately. Thank you.
            </p>
          </div>

          <div
            className="ml-lg-auto col-lg-3 col-md-6 col-12"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="team-thumb">
              <img
                src="https://is4.revolveassets.com/images/up/2022/January/010722_featshops_SBO2.jpg"
                className="img-fluid"
                alt="Trainer"
              />

              <div className="team-info d-flex flex-column">
                <h3>Weekly style inspo</h3>
                <span>see more</span>

                <ul className="social-icon mt-3">
                  <li>
                    <a href="#" className="fa fa-twitter"></a>
                  </li>
                  <li>
                    <a href="#" className="fa fa-instagram"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="mr-lg-auto mt-5 mt-lg-0 mt-md-0 col-lg-3 col-md-6 col-12"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="team-thumb">
              <img
                height="300px"
                src="https://is4.revolveassets.com/images/up/2022/January/010522_f_5dressesbystyle_02.jpg"
                className="img-fluid"
                alt="Trainer"
              />

              <div className="team-info d-flex flex-column">
                <h3>Dress refresh</h3>
                <span>see more</span>

                <ul className="social-icon mt-3">
                  <li>
                    <a href="#" className="fa fa-instagram"></a>
                  </li>
                  <li>
                    <a href="#" className="fa fa-facebook"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
