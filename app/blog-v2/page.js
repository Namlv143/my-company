
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Blog2() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="blog page">
                <div>
                    {/* Blog Page Two Area start */}
                    <div className="blog-page-two pt-100 rpt-70">
                        <div className="container">
                            <div className="row gap-50">
                                <div className="col-lg-8">
                                    <div className="blog-standard-item wow fadeInUp delay-0-2s">
                                        <div className="image">
                                            <Link href="#" className="category">Business</Link>
                                            <img src="/assets/images/blog/blog-standard1.jpg" alt="Blog" />
                                        </div>
                                        <div className="content">
                                            <ul className="blog-meta">
                                                <li><i className="fal fa-user" /> <Link href="#">Mehedii .Ha</Link></li>
                                                <li><i className="fal fa-comments" /> <Link href="#">Coments (03)</Link></li>
                                                <li><i className="fal fa-clock" /> <Link href="#">3 min Read</Link></li>
                                            </ul>
                                            <h4><Link href="/blog-details">The whimsically named Egg Canvas brainch </Link></h4>
                                            <p>There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised words which don't look even slight believable. If you are going to use a passage of Lorem Ipsum.</p>
                                            <Link href="/blog-details" className="read-more">Read More <i className="far fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                    <div className="blog-standard-item wow fadeInUp delay-0-2s">
                                        <div className="image">
                                            <Link href="#" className="category">Business</Link>
                                            <img src="/assets/images/blog/blog-standard2.jpg" alt="Blog" />
                                        </div>
                                        <div className="content">
                                            <ul className="blog-meta">
                                                <li><i className="fal fa-user" /> <Link href="#">Mehedii .Ha</Link></li>
                                                <li><i className="fal fa-comments" /> <Link href="#">Coments (03)</Link></li>
                                                <li><i className="fal fa-clock" /> <Link href="#">3 min Read</Link></li>
                                            </ul>
                                            <h4><Link href="/blog-details">The whimsically named Egg Canvas brainch </Link></h4>
                                            <p>There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised words which don't look even slight believable. If you are going to use a passage of Lorem Ipsum.</p>
                                            <Link href="/blog-details" className="read-more">Read More <i className="far fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                    <div className="blog-standard-item wow fadeInUp delay-0-2s">
                                        <div className="image">
                                            <Link href="#" className="category">Business</Link>
                                            <img src="/assets/images/blog/blog-standard3.jpg" alt="Blog" />
                                        </div>
                                        <div className="content">
                                            <ul className="blog-meta">
                                                <li><i className="fal fa-user" /> <Link href="#">Mehedii .Ha</Link></li>
                                                <li><i className="fal fa-comments" /> <Link href="#">Coments (03)</Link></li>
                                                <li><i className="fal fa-clock" /> <Link href="#">3 min Read</Link></li>
                                            </ul>
                                            <h4><Link href="/blog-details">The whimsically named Egg Canvas brainch </Link></h4>
                                            <p>There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised words which don't look even slight believable. If you are going to use a passage of Lorem Ipsum.</p>
                                            <Link href="/blog-details" className="read-more">Read More <i className="far fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                    <ul className="pagination flex-wrap justify-content-center wow fadeInUp delay-0-2s">
                                        <li className="page-item disabled">
                                            <span className="page-link"><i className="far fa-long-arrow-left" /></span>
                                        </li>
                                        <li className="page-item active">
                                            <span className="page-link">
                                                1
                                                <span className="sr-only">(current)</span>
                                            </span>
                                        </li>
                                        <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link" href="#"><i className="far fa-long-arrow-right" /></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-4 col-md-7 col-sm-9">
                                    <div className="main-sidebar rmt-65">
                                        <div className="widget widget-author wow fadeInUp delay-0-4s">
                                            <img src="/assets/images/widgets/author.jpg" alt="Author" />
                                            <h6>Rosalina D. Willaim</h6>
                                            <span className="designation">Blogger/Photographer</span>
                                            <p>he whimsically named Egg Canvas is the design director and photographer in New York. Why the nam</p>
                                            <div className="social-style-one">
                                                <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                                <Link href="#"><i className="fab fa-twitter" /></Link>
                                                <Link href="#"><i className="fab fa-instagram" /></Link>
                                                <Link href="#"><i className="fab fa-pinterest-p" /></Link>
                                            </div>
                                        </div>
                                        <div className="widget widget-search wow fadeInUp delay-0-2s">
                                            <h5 className="widget-title">search here</h5>
                                            <form action="#" className="default-search-form">
                                                <input type="text" placeholder="search here..." required />
                                                <button type="submit" className="searchbutton far fa-search" />
                                            </form>
                                        </div>
                                        <div className="widget widget-recent-news wow fadeInUp delay-0-2s">
                                            <h5 className="widget-title">Recent Blog</h5>
                                            <ul>
                                                <li>
                                                    <div className="image">
                                                        <img src="/assets/images/widgets/blog1.jpg" alt="Blog" />
                                                    </div>
                                                    <div className="content">
                                                        <Link className="date" href="#"><i className="far fa-calendar-alt" /> Jun 23,2023</Link>
                                                        <h6><Link href="/blog-details">Budget Issues Force The Our To Become</Link></h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="image">
                                                        <img src="/assets/images/widgets/blog2.jpg" alt="Blog" />
                                                    </div>
                                                    <div className="content">
                                                        <Link className="date" href="#"><i className="far fa-calendar-alt" /> Jun 23,2023</Link>
                                                        <h6><Link href="/blog-details">The Best Products That Shape Fashion</Link></h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="image">
                                                        <img src="/assets/images/widgets/blog3.jpg" alt="Blog" />
                                                    </div>
                                                    <div className="content">
                                                        <Link className="date" href="#"><i className="far fa-calendar-alt" /> Jun 23,2023</Link>
                                                        <h6><Link href="/blog-details">Budget Issues Force The Our To Become</Link></h6>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="widget widget-category wow fadeInUp delay-0-4s">
                                            <h5 className="widget-title">Catagories</h5>
                                            <ul>
                                                <li><Link href="/blog">Graphic Design <span>03</span></Link></li>
                                                <li><Link href="/blog">Web Development <span>03</span></Link></li>
                                                <li><Link href="/blog">Digital Marketing <span>03</span></Link></li>
                                                <li><Link href="/blog">UI/UX Development <span>03</span></Link></li>
                                            </ul>
                                        </div>
                                        <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s">
                                            <h5 className="widget-title">Popular Tags</h5>
                                            <div className="tag-coulds">
                                                <Link href="/blog">Design</Link>
                                                <Link href="/blog">marketing</Link>
                                                <Link href="/blog">search</Link>
                                                <Link href="/blog">branding</Link>
                                                <Link href="/blog">startup</Link>
                                                <Link href="/blog">tech</Link>
                                                <Link href="/blog">landing</Link>
                                                <Link href="/blog">coding</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Blog Page Two Area end */}
                    {/* Lets Talk Area start */}
                    <div className="lets-talk-area text-center pt-120 rpt-90 pb-75 rpb-100">
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
                    {/* Headline Area end */}
                </div>

            </Layout>
        </>
    )
}