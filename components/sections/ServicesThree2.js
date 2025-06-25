import Link from "next/link";

export default function ServicesThree2() {
  return (
    <>
      <section
        className="services-area-three py-130 rpy-100 rel z-1"
        style={{
          backgroundImage: "url(assets/images/services/service-bg.png)",
        }}
      >
        <div className="container">
          <div className="row pb-30 align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-8 wow fadeInLeft delay-0-2s">
              <div className="section-title mb-20 rmb-35">
                <span className="sub-title mb-15">
                  Trusted Service
                </span>
                <h2>
                  Popular Web Agencies <span>Services</span> You Get
                </h2>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 wow fadeInRight delay-0-2s">
              {/* <div className="text mb-20">
                Our team of experts are here to tackle your business’s
                challenges.
              </div> */}
            </div>
          </div>
        </div>
        <div className="container container-1450">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-style-three wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="/assets/images/services/service1.jpg"
                    alt="Service"
                  />
                </div>
                {/* <Link href="/service-details" className="details-btn">
                  <i className="fal fa-long-arrow-right" />
                </Link> */}
                <div className="hover-content">
                  <div className="icon">
                    <img
                      src="/assets/images/icons/development-2.png"
                      alt="Icon"
                    />
                  </div>
                  <h6>
                    <Link href="/service-details">Application Design</Link>
                  </h6>
                </div>
                <div className="content">
                  <h6>
                    <Link href="/service-details">Application Design</Link>
                  </h6>
                  <p>
                  Offering Business Analysis, Process Design, Application Architecture, Application Technical Design and Experience Design
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-style-three wow fadeInUp delay-0-3s">
                <div className="image">
                  <img
                    src="/assets/images/services/service2.jpg"
                    alt="Service"
                  />
                </div>
                {/* <Link href="/service-details" className="details-btn">
                  <i className="fal fa-long-arrow-right" />
                </Link> */}
                <div className="hover-content">
                  <div className="icon">
                    <img src="/assets/images/icons/test.png" alt="Icon" />
                  </div>
                  <h6>
                    <Link href="/service-details">Web and Mobile Development</Link>
                  </h6>
                </div>
                <div className="content">
                  <h6>
                    <Link href="/service-details">Web and Mobile Development</Link>
                  </h6>
                  <p>
                  App Development expertise across a range of: industries, cloud service providers and software coding/programming languages
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-style-three wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src="/assets/images/services/service3.jpg"
                    alt="Service"
                  />
                </div>
                {/* <Link href="/service-details" className="details-btn">
                  <i className="fal fa-long-arrow-right" />
                </Link> */}
                <div className="hover-content">
                  <div className="icon">
                    <img src="/assets/images/icons/promotion.png" alt="Icon" />
                  </div>
                  <h6>
                    <Link href="/service-details">Application Support</Link>
                  </h6>
                </div>
                <div className="content">
                  <h6>
                    <Link href="/service-details">Application Support</Link>
                  </h6>
                  <p>
                  Various levels and types of App and Platform Support: from single application dev support through to 24x7 platform development supports
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-style-three wow fadeInUp delay-0-5s">
                <div className="image">
                  <img
                    src="/assets/images/services/service4.jpg"
                    alt="Service"
                  />
                </div>
                {/* <Link href="/service-details" className="details-btn">
                  <i className="fal fa-long-arrow-right" />
                </Link> */}
                <div className="hover-content">
                  <div className="icon">
                    <img src="/assets/images/icons/test.png" alt="Icon" />
                  </div>
                  <h6>
                    <Link href="/service-details">Solution Architecture Design</Link>
                  </h6>
                </div>
                <div className="content">
                  <h6>
                    <Link href="/service-details">Solution Architecture Design</Link>
                  </h6>
                  <p>
                  Uplifting organisation capabilities and app/platform capabilities through optimal architecture solution design
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h6 className="more-btn-with-text mt-20">
            Bring them together and you overcome the ordinary.{" "}
            <Link className="read-more" href="/services">
              View More SErvice <i className="fal fa-plus" />
            </Link>
          </h6>
        </div>
      </section>
    </>
  );
}
