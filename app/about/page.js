
import Accordion from "@/components/elements/Accordion"
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
export default function About() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    {/* About Hero Area start */}
                    <section className="about-page-hero bg-primary-shape rel z-1">
                        <div className="container">
                            <div className="row align-items-end justify-content-between">
                                <div className="col-lg-8 wow fadeInLeft delay-0-2s">
                                    <div className="about-hero-content pt-135 rpt-95 pb-95">
                                        <h1>We’re professional creative <span>agency</span></h1>
                                        <p>We work closely with our clients throughout the design process, from the initial consultation to the final delivery, to ensure that we meet their expectations and exceed their goals.</p>
                                        <Link href="/contact" className="theme-btn style-two">Contact with us</Link>
                                        <div className="row justify-content-center">
                                            <div className="col-lg-6">
                                                <div className="hero-scroll-down mt-60 wow fadeInDown delay-0-6s">
                                                    <Link href="#about"><i className="far fa-arrow-down" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 wow fadeInRight delay-0-2s">
                                    <div className="about-hero-image">
                                        <img src="/assets/images/testimonials/testimonials-right.png" alt="Testimonials" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="headline-wrap style-three color-black">
                            <span className="marquee-wrap bg-white py-15">
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
                    </section>
                    {/* About Hero Area end */}
                    {/* Headline area start */}
                    <div className="headline-area bgc-lighter py-20">
                        <div className="headline-wrap style-two">
                            <span className="marquee-wrap for-arrow-icon">
                                <span className="marquee-inner left">
                                    <span className="marquee-item"><b>customer business solution</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>design - customer centric solution</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>web development based company</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>design - customer centric solution</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>marketing based devlopment</b><i className="fal fa-long-arrow-right" /></span>
                                </span>
                                <span className="marquee-inner left">
                                    <span className="marquee-item"><b>customer business solution</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>design - customer centric solution</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>web development based company</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>design - customer centric solution</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>marketing based devlopment</b><i className="fal fa-long-arrow-right" /></span>
                                </span>
                                <span className="marquee-inner left">
                                    <span className="marquee-item"><b>customer business solution</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>design - customer centric solution</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>web development based company</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>design - customer centric solution</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>marketing based devlopment</b><i className="fal fa-long-arrow-right" /></span>
                                </span>
                            </span>
                        </div>
                    </div>
                    {/* Headline Area end */}
                    {/* About Area start */}
                    <section id="about" className="about-area bgc-black py-145 rpy-100 rel z-1">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-lg-4">
                                    <div className="our-experience-years rmb-55 wow fadeInLeft delay-0-2s">
                                        <span className="years">36</span>
                                        <span className="text">years of experience</span>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-content wow fadeInRight delay-0-2s">
                                        <div className="section-title mb-30">
                                            <span className="sub-title mb-15">Trusted web design agency</span>
                                            <h2>We’re a digital design studio connecting brands to people <span>through</span> craft and culture. <i className="fas fa-asterisk" /></h2>
                                        </div>
                                        <VideoPopup style={2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* About Area end */}
                    {/* Portfolio Area start */}
                    <section className="portfolio-area-three rel z-1">
                        <div className="row justify-content-center">
                            <div className="col-xl-4 col-sm-6">
                                <div className="portfolio-item style-three wow fadeInUp delay-0-2s">
                                    <div className="portfolio-image">
                                        <img src="/assets/images/portfolio/portfolio-three1.jpg" alt="Portfolio" />
                                    </div>
                                    <Link className="hover-box" href="/portfolio-details">
                                        <span>View More</span>
                                        <i className="far fa-arrow-right" />
                                    </Link>
                                    <div className="portfolio-content">
                                        <h6><Link href="/portfolio-details">Digital Marketing</Link></h6>
                                        <Link className="tag-category" href="/blog">Art , Direction</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-sm-6">
                                <div className="portfolio-item style-three wow fadeInUp delay-0-4s">
                                    <div className="portfolio-image">
                                        <img src="/assets/images/portfolio/portfolio-three2.jpg" alt="Portfolio" />
                                    </div>
                                    <Link className="hover-box" href="/portfolio-details">
                                        <span>View More</span>
                                        <i className="far fa-arrow-right" />
                                    </Link>
                                    <div className="portfolio-content">
                                        <h6><Link href="/portfolio-details">Digital Marketing</Link></h6>
                                        <Link className="tag-category" href="/blog">Art , Direction</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-sm-6">
                                <div className="portfolio-item style-three wow fadeInUp delay-0-6s">
                                    <div className="portfolio-image">
                                        <img src="/assets/images/portfolio/portfolio-three3.jpg" alt="Portfolio" />
                                    </div>
                                    <Link className="hover-box" href="/portfolio-details">
                                        <span>View More</span>
                                        <i className="far fa-arrow-right" />
                                    </Link>
                                    <div className="portfolio-content">
                                        <h6><Link href="/portfolio-details">Digital Marketing</Link></h6>
                                        <Link className="tag-category" href="/blog">Art , Direction</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Portfolio Area end */}
                    {/* Counter Two Area start */}
                    <div className="counter-two-area pt-45 pb-140">
                        <div className="container">
                            <span className="sub-title-style-two mb-40 wow fadeInUp delay-0-2s">we’re proud to work with a Wide range of companies</span>
                            <div className="row no-gap">
                                <div className="col-lg-3 col-6 col-small">
                                    <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-2s">
                                        <CounterUp count={250} time={3} plus />
                                        <h6 className="counter-title">Satsified Clients</h6>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6 col-small">
                                    <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-3s">
                                        <CounterUp count={28} time={3} plus />
                                        <h6 className="counter-title">Years of build</h6>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6 col-small">
                                    <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-4s">
                                        <CounterUp count={1538} time={3} />
                                        <h6 className="counter-title">Total Products</h6>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6 col-small">
                                    <div className="counter-item-two no-border counter-text-wrap wow fadeInUp delay-0-5s">
                                        <CounterUp count={386} time={3} />
                                        <h6 className="counter-title">Total Revinew</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Counter Two Area end */}
                    {/* Services Four Area start */}
                    <section className="services-area-four pb-130 rpb-100 rel z-1">
                        <div className="container">
                            <div className="row gap-150 justify-content-between">
                                <div className="col-lg-6 wow fadeInLeft delay-0-2s">
                                    <div className="section-title mb-20">
                                        <span className="sub-title mb-20">Trusted web design services</span>
                                        <h2>Unlock Revenue Growth for Your Business</h2>
                                        <Link href="/services" className="read-more-two mt-20">What We Do <img src="/assets/images/icons/arrow.svg" alt="Arrow" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 pt-35 wow fadeInRight delay-0-2s">
                                    <div className="service-item-four">
                                        <h5>WEBSITE DEsign <span className="number">01</span></h5>
                                        <p>There are many variations of simply free text passages of hold industry available but the majority have suffered alteration</p>
                                        <Link href="/services" className="read-more-two">Read More <img src="/assets/images/icons/arrow.svg" alt="Arrow" /></Link>
                                    </div>
                                    <div className="service-item-four">
                                        <h5>digital marketing <span className="number">02</span></h5>
                                        <p>There are many variations of simply free text passages of hold industry available but the majority have suffered alteration</p>
                                        <Link href="/services" className="read-more-two">Read More <img src="/assets/images/icons/arrow.svg" alt="Arrow" /></Link>
                                    </div>
                                    <div className="service-item-four">
                                        <h5>Content Solutions <span className="number">03</span></h5>
                                        <p>There are many variations of simply free text passages of hold industry available but the majority have suffered alteration</p>
                                        <Link href="/services" className="read-more-two">Read More <img src="/assets/images/icons/arrow.svg" alt="Arrow" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Services Four Area end */}
                    {/* Headline area start */}
                    <div className="headline-area bgc-lighter py-20">
                        <div className="headline-wrap style-two">
                            <span className="marquee-wrap for-arrow-icon">
                                <span className="marquee-inner left">
                                    <span className="marquee-item"><b>customer business solution</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>design - customer centric solution</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>web development based company</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>design - customer centric solution</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>marketing based devlopment</b><i className="fal fa-long-arrow-right" /></span>
                                </span>
                                <span className="marquee-inner left">
                                    <span className="marquee-item"><b>customer business solution</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>design - customer centric solution</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>web development based company</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>design - customer centric solution</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>marketing based devlopment</b><i className="fal fa-long-arrow-right" /></span>
                                </span>
                                <span className="marquee-inner left">
                                    <span className="marquee-item"><b>customer business solution</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>design - customer centric solution</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>web development based company</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>design - customer centric solution</b><i className="fal fa-long-arrow-right" /></span>
                                    <span className="marquee-item"><b>marketing based devlopment</b><i className="fal fa-long-arrow-right" /></span>
                                </span>
                            </span>
                        </div>
                    </div>
                    {/* Headline Area end */}
                    {/* Team Area start */}
                    <section className="team-area overflow-hidden pt-140 rpt-50 pb-120 rpb-70 rel z-1">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-6 col-lg-8">
                                    <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
                                        <span className="sub-title mb-15">team member of company</span>
                                        <h2>Extra ordinary <span>creation</span> Team behind</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container container-1450">
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="team-member style-two wow fadeInUp delay-0-2s">
                                        <div className="image">
                                            <img src="/assets/images/team/team1.jpg" alt="Team" />
                                        </div>
                                        <div className="description">
                                            <div className="title">
                                                <h5>Alextina Ditarson</h5>
                                                <span className="designation">creative director</span>
                                            </div>
                                            <Link href="/team-details" className="details-btn"><i className="far fa-arrow-right" /></Link>
                                            <div className="social-media">
                                                <Link href="#"><i className="fab fa-twitter" /></Link>
                                                <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                                <Link href="#"><i className="fab fa-instagram" /></Link>
                                                <Link href="#"><i className="fab fa-pinterest-p" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="team-member style-two wow fadeInUp delay-0-3s">
                                        <div className="image">
                                            <img src="/assets/images/team/team2.jpg" alt="Team" />
                                        </div>
                                        <div className="description">
                                            <div className="title">
                                                <h5>Alextina Ditarson</h5>
                                                <span className="designation">creative director</span>
                                            </div>
                                            <Link href="/team-details" className="details-btn"><i className="far fa-arrow-right" /></Link>
                                            <div className="social-media">
                                                <Link href="#"><i className="fab fa-twitter" /></Link>
                                                <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                                <Link href="#"><i className="fab fa-instagram" /></Link>
                                                <Link href="#"><i className="fab fa-pinterest-p" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="team-member style-two wow fadeInUp delay-0-4s">
                                        <div className="image">
                                            <img src="/assets/images/team/team3.jpg" alt="Team" />
                                        </div>
                                        <div className="description">
                                            <div className="title">
                                                <h5>Alextina Ditarson</h5>
                                                <span className="designation">creative director</span>
                                            </div>
                                            <Link href="/team-details" className="details-btn"><i className="far fa-arrow-right" /></Link>
                                            <div className="social-media">
                                                <Link href="#"><i className="fab fa-twitter" /></Link>
                                                <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                                <Link href="#"><i className="fab fa-instagram" /></Link>
                                                <Link href="#"><i className="fab fa-pinterest-p" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="team-member style-two wow fadeInUp delay-0-5s">
                                        <div className="image">
                                            <img src="/assets/images/team/team4.jpg" alt="Team" />
                                        </div>
                                        <div className="description">
                                            <div className="title">
                                                <h5>Alextina Ditarson</h5>
                                                <span className="designation">creative director</span>
                                            </div>
                                            <Link href="/team-details" className="details-btn"><i className="far fa-arrow-right" /></Link>
                                            <div className="social-media">
                                                <Link href="#"><i className="fab fa-twitter" /></Link>
                                                <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                                <Link href="#"><i className="fab fa-instagram" /></Link>
                                                <Link href="#"><i className="fab fa-pinterest-p" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="team-btn pt-30 text-center">
                                <Link href="/team" className="theme-btn style-three">Meet with team</Link>
                            </div>
                        </div>
                    </section>
                    {/* Team Area end */}
                    {/* FAQ Area start */}
                    <section className="faq-area py-135 rpy-100 rel z-1 bgs-cover" style={{ backgroundImage: 'url(assets/images/faqs/faq-bg.jpg)' }}>
                        <div className="faq-section-inner rel">
                            <div className="faq-image-part bgs-cover" style={{ backgroundImage: 'url(assets/images/faqs/faq.jpg)' }}>
                                <div className="headline-wrap style-three color-black">
                                    <span className="marquee-wrap bg-white py-15">
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
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 offset-lg-6 wow fadeInLeft delay-0-2s">
                                        <div className="faq-content-part mb-25 rmb-0">
                                            <div className="section-title mb-35">
                                                <span className="sub-title mb-10">Trusted web design agency</span>
                                                <h2>Frequently Ask Ques -tion for everyone</h2>
                                            </div>
                                            <Accordion />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="faq-shape"><img src="/assets/images/icons/star.png" alt="Star" /></div>
                        </div>
                    </section>
                    {/* FAQ Area end */}
                    {/* Lets Talk Area start */}
                    <div className="lets-talk-area text-center bgs-cover pt-120 pb-130 rpy-90" style={{ backgroundImage: 'url(assets/images/background/tets-talk.jpg)' }}>
                        <div className="container">
                            <Link href="/contact" className="lets-talk-text mb-50 wow zoomIn delay-0-2s">Let’s <span>Talk</span> <i className="fal fa-arrow-right" /></Link>
                            <h5 className="talk-to-email"><Link href="/contact">Contact us</Link> or send an <span>email to</span> info@Mehedii.com</h5>
                        </div>
                    </div>
                    {/* Lets Talk Area end */}
                </div>

            </Layout>
        </>
    )
}