
import Layout from "@/components/layout/Layout"
import Testimonials1 from "@/components/sections/Testimonials1"
import Link from "next/link"
export default function Service() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="digital services">
                <div>
                    <section id="about" className="about-two-area pt-135 pb-85 rpt-100 rpb-50 rel z-1">
                        <div className="container">
                            <div className="row gap-110 align-items-center">
                                <div className="col-xl-6 wow fadeInRight delay-0-2s">
                                    <div className="about-three-images mb-50">
                                        <div className="experience-corner">
                                            <img src="/assets/images/shapes/experience-corner.jpg" alt="Shape" />
                                        </div>
                                        <div className="image">
                                            <img src="/assets/images/about/about-four.jpg" alt="About" />
                                        </div>
                                        <div className="experience-circle">
                                            <span>13</span>
                                            <p>Years of Experince</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 wow fadeInLeft delay-0-2s">
                                    <div className="about-two-content mb-50">
                                        <div className="section-title mb-30">
                                            <span className="sub-title mb-10">Trusted web design services</span>
                                            <h2>We Give You Digital Solutions for</h2>
                                        </div>
                                        <h5>Proin est lacus, sagittislobortis iaculise get sagittislo</h5>
                                        <p>TTransmax is the world’s driving worldwide coordinations supplier — we uphold industry and exchange the worldwide trade of merchandise through land transport.</p>
                                        <div className="row pt-25">
                                            <div className="col-md-6">
                                                <div className="service-item wow fadeInUp delay-0-2s">
                                                    <div className="content">
                                                        <h6><Link href="/service-details">WEBSITE DESIGN</Link></h6>
                                                        <p>Design an website</p>
                                                    </div>
                                                    <Link href="/service-details" className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="service-item wow fadeInUp delay-0-6s">
                                                    <div className="content">
                                                        <h6><Link href="/service-details">GRAPHICS DESIGN</Link></h6>
                                                        <p>Design an website</p>
                                                    </div>
                                                    <Link href="/service-details" className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="author-name-btn">
                                            <img className="author" src="/assets/images/about/author.jpg" alt="Author" />
                                            <img className="signature" src="/assets/images/about/signature-two.png" alt="Signature" />
                                            <Link href="/about" className="theme-btn style-two">More about us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* About Two Area end */}
                    {/* Services Area start */}
                    <section className="services-area-five pt-135 rpt-100 pb-100 rpb-60 rel z-1">
                        <div className="container">
                            <div className="row pb-35 align-items-center justify-content-between">
                                <div className="col-xl-5 col-lg-6 wow fadeInLeft delay-0-2s">
                                    <div className="section-title mb-20 rmb-35">
                                        <span className="sub-title mb-15">Trusted web design Service</span>
                                        <h2>modern &amp; intuitive web <span>solutions</span></h2>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-6 wow fadeInRight delay-0-2s">
                                    <div className="text">On the other hand, we denounce with righteous indignation dislike are so beguiled and demoralized by the charms of pleasure of the blinded by desire that they cannot foresee the pain and trouble</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-md-6">
                                    <div className="service-item-five wow fadeInUp delay-0-2s">
                                        <div className="image">
                                            <img src="/assets/images/services/service-five1.jpg" alt="Service" />
                                        </div>
                                        <div className="content">
                                            <h5><Link href="/service-details">Website Development</Link></h5>
                                            <Link href="/service-details" className="btn"><i className="far fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="service-item-five wow fadeInUp delay-0-4s">
                                        <div className="image">
                                            <img src="/assets/images/services/service-five2.jpg" alt="Service" />
                                        </div>
                                        <div className="content">
                                            <h5><Link href="/service-details">Digital Marketing</Link></h5>
                                            <Link href="/service-details" className="btn"><i className="far fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="service-item-five wow fadeInUp delay-0-6s">
                                        <div className="image">
                                            <img src="/assets/images/services/service-five3.jpg" alt="Service" />
                                        </div>
                                        <div className="content">
                                            <h5><Link href="/service-details">Mobile Application</Link></h5>
                                            <Link href="/service-details" className="btn"><i className="far fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="service-item-five wow fadeInUp delay-0-2s">
                                        <div className="image">
                                            <img src="/assets/images/services/service-five4.jpg" alt="Service" />
                                        </div>
                                        <div className="content">
                                            <h5><Link href="/service-details">Seo Optimization</Link></h5>
                                            <Link href="/service-details" className="btn"><i className="far fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="service-item-five wow fadeInUp delay-0-4s">
                                        <div className="image">
                                            <img src="/assets/images/services/service-five5.jpg" alt="Service" />
                                        </div>
                                        <div className="content">
                                            <h5><Link href="/service-details">Graphics Design</Link></h5>
                                            <Link href="/service-details" className="btn"><i className="far fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="service-item-five wow fadeInUp delay-0-6s">
                                        <div className="image">
                                            <img src="/assets/images/services/service-five6.jpg" alt="Service" />
                                        </div>
                                        <div className="content">
                                            <h5><Link href="/service-details">UI/UX Development</Link></h5>
                                            <Link href="/service-details" className="btn"><i className="far fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Services Area end */}
                    {/* Testimonials Area start */}
                    <Testimonials1 />
                    {/* Testimonials Area end */}
                    {/* Lets Talk Area start */}
                    <div className="lets-talk-area text-center pb-75 rpb-100">
                        <div className="container">
                            <Link href="/contact" className="lets-talk-text wow zoomIn delay-0-2s">Let’s Talk <i className="fal fa-arrow-right" /></Link>
                        </div>
                    </div>
                    {/* Lets Talk Area end */}
                    {/* Headline area start */}
                    <div className="headline-area bgc-primary py-20">
                        <div className="headline-wrap style-two color-black">
                            <span className="marquee-wrap">
                                <span className="marquee-inner left">
                                    <span className="marquee-item"><b>customer business solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b>web development based company</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b>marketing based devlopment</b><i className="fas fa-bahai" /></span>
                                </span>
                                <span className="marquee-inner left">
                                    <span className="marquee-item"><b>customer business solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b>web development based company</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b>marketing based devlopment</b><i className="fas fa-bahai" /></span>
                                </span>
                                <span className="marquee-inner left">
                                    <span className="marquee-item"><b>customer business solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b>web development based company</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b>marketing based devlopment</b><i className="fas fa-bahai" /></span>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}