import React from "react";

const Product = () => {
  return (
    <section className="class section" id="class">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 text-center mb-5">
            <h6 data-aos="fade-up">best price offers</h6>

            <h2 data-aos="fade-up" data-aos-delay="200">
              Sales up to 80%
            </h2>
          </div>

          <div
            className="col-lg-4 col-md-6 col-12"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="class-thumb">
              <img
                src="https://is4.revolveassets.com/images/up/2022/January/010322_f_letsgetactive_02.jpg"
                className="img-fluid"
                alt="Class"
              />

              <div className="class-info">
                <h3 class="mb-1">Sport wears</h3>

                <span>
                  <strong>price</strong> - 79$
                </span>

                <span className="class-price">50%</span>

                <p className="mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
              </div>
            </div>
          </div>

          <div
            className="mt-5 mt-lg-0 mt-md-0 col-lg-4 col-md-6 col-12"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div class="class-thumb">
              <img
                src="https://is4.revolveassets.com/images/up/2022/January/010222_f_5weeklystyleinspo_02.jpg"
                className="img-fluid"
                alt="Class"
              />

              <div className="class-info">
                <h3 className="mb-1">Areobic</h3>

                <span>
                  <strong>price</strong> - 120$
                </span>

                <span className="class-price">30%</span>

                <p className="mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
              </div>
            </div>
          </div>

          <div
            className="mt-5 mt-lg-0 col-lg-4 col-md-6 col-12"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="class-thumb">
              <img
                src="https://is4.revolveassets.com/images/up/2022/January/010522_f_5dressesbystyle_02.jpg"
                className="img-fluid"
                alt="Class"
              />

              <div className="class-info">
                <h3 className="mb-1">Cardio</h3>

                <span>
                  <strong>price</strong> - 89$
                </span>

                <span className="class-price">20%</span>

                <p className="mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
