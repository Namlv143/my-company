import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Contact() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact Us">
        <div>
          {/* About Section - 3 Columns */}
          <section className="py-20 black text-center">
            <div className="container">
              <h2 className="text-2xl font-semibold mb-12 text-black">About</h2>
              <div className="row justify-content-center">
                <div className="col-md-4 mb-4">
                  <h5 className="mb-2 text-black">Team</h5>
                  <p className="text-white">
                    We design, develop and deliver outstanding results for our
                    customers. Our collaboration models are tailored to your
                    organisation needs.
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <h5 className="mb-2 text-black">Leadership</h5>
                  <p className="text-white">
                    Our management team has over 33 years of global information
                    technology experience across a diverse range of industries.
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <h5 className="mb-2 text-black">Let’s Connect</h5>
                  <p className="text-white">
                    We would like the opportunity to have a discussion to see if
                    we can help you achieve your goals.
                  </p>
                  <button className="btn btn-dark mt-3 px-4 py-2 text-sm rounded-pill">
                    BOOK A CONSULTATION
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="contact-page py-140 rpy-100 rel z-1">
            <div className="container">
              <div className="row pb-60 justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="contact-info-item wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <img src="/assets/images/icons/contact1.png" alt="Icon" />
                    </div>
                    <div className="content">
                      <h5>Phone Number</h5>
                      <Link href="/callto:+84978608188">0978608188</Link>
                      <br />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="contact-info-item wow fadeInUp delay-0-4s">
                    <div className="icon">
                      <img src="/assets/images/icons/contact2.png" alt="Icon" />
                    </div>
                    <div className="content">
                      <h5>Address line</h5>
                      <span>
                        30 P. Hoàng Đạo Thúy Trung Hòa Nhân Chính, Trung Hoà,
                        Cầu Giấy, Hanoi, Vietnam
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="contact-info-item wow fadeInUp delay-0-6s">
                    <div className="icon">
                      <img src="/assets/images/icons/contact3.png" alt="Icon" />
                    </div>
                    <div className="content">
                      <h5>Phone Number</h5>
                      <span>
                        Moday - Friday
                        <br /> 09:00 AM - 05:00 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-page-form wow fadeInUp delay-0-2s">
                <form action="#" method="post">
                  <div className="row">
                    <div className="col-md-6 wow fadeInUp delay-0-2s">
                      <div className="form-group">
                        <input
                          type="text"
                          id="fname"
                          name="fname"
                          className="form-control"
                          placeholder="First Name*"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp delay-0-4s">
                      <div className="form-group">
                        <input
                          type="text"
                          id="lname"
                          name="lname"
                          className="form-control"
                          placeholder="Last Name*"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp delay-0-2s">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Email Address*"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp delay-0-4s">
                      <div className="form-group">
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          className="form-control"
                          placeholder="Phone Number*"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 wow fadeInUp delay-0-2s">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={8}
                          placeholder="Enter Your Messege"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12 text-center wow fadeInUp delay-0-2s">
                      <button type="submit" className="theme-btn style-two">
                        Send Massage
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
          {/* Contact Page Area end */}
          {/* Location Map Area Start */}
          <div className="contact-page-map wow fadeInUp delay-0-2s">
            <div className="our-location">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4005.9283847219863!2d105.80042037555772!3d21.007045680636864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aca1124d6387%3A0x178c49e7f49a1488!2zUC4gSG_DoG5nIMSQ4bqhbyBUaMO6eSwgVHJ1bmcgSMOyYSBOaMOibiBDaMOtbmgsIFRydW5nIEhvw6AsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaWV0bmFt!5e1!3m2!1sen!2sbd!4v1712586769055!5m2!1sen!2sbd"
                style={{ border: 0, width: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {/* Location Map Area End */}
          {/* Lets Talk Area start */}
          <div className="lets-talk-area text-center pt-110 rpt-80 pb-75 rpb-100">
            <div className="container">
              <Link
                href="/contact"
                className="lets-talk-text wow zoomIn delay-0-2s"
              >
                Let’s Talk <i className="fal fa-arrow-right" />
              </Link>
            </div>
          </div>
          {/* Lets Talk Area end */}
          {/* Headline area start */}
          <div className="headline-area bgc-primary py-20">
            <div className="headline-wrap style-two color-black">
              <span className="marquee-wrap">
                <span className="marquee-inner left">
                  <span className="marquee-item">
                    <b>customer business solution</b>
                    <i className="fas fa-bahai" />
                  </span>
                  <span className="marquee-item">
                    <b>
                      <span>design</span> - customer centric solution
                    </b>
                    <i className="fas fa-bahai" />
                  </span>
                  <span className="marquee-item">
                    <b>web development based company</b>
                    <i className="fas fa-bahai" />
                  </span>
                  <span className="marquee-item">
                    <b>
                      <span>design</span> - customer centric solution
                    </b>
                    <i className="fas fa-bahai" />
                  </span>
                  <span className="marquee-item">
                    <b>marketing based devlopment</b>
                    <i className="fas fa-bahai" />
                  </span>
                </span>
                <span className="marquee-inner left">
                  <span className="marquee-item">
                    <b>customer business solution</b>
                    <i className="fas fa-bahai" />
                  </span>
                  <span className="marquee-item">
                    <b>
                      <span>design</span> - customer centric solution
                    </b>
                    <i className="fas fa-bahai" />
                  </span>
                  <span className="marquee-item">
                    <b>web development based company</b>
                    <i className="fas fa-bahai" />
                  </span>
                  <span className="marquee-item">
                    <b>
                      <span>design</span> - customer centric solution
                    </b>
                    <i className="fas fa-bahai" />
                  </span>
                  <span className="marquee-item">
                    <b>marketing based devlopment</b>
                    <i className="fas fa-bahai" />
                  </span>
                </span>
                <span className="marquee-inner left">
                  <span className="marquee-item">
                    <b>customer business solution</b>
                    <i className="fas fa-bahai" />
                  </span>
                  <span className="marquee-item">
                    <b>
                      <span>design</span> - customer centric solution
                    </b>
                    <i className="fas fa-bahai" />
                  </span>
                  <span className="marquee-item">
                    <b>web development based company</b>
                    <i className="fas fa-bahai" />
                  </span>
                  <span className="marquee-item">
                    <b>
                      <span>design</span> - customer centric solution
                    </b>
                    <i className="fas fa-bahai" />
                  </span>
                  <span className="marquee-item">
                    <b>marketing based devlopment</b>
                    <i className="fas fa-bahai" />
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
