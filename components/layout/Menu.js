'use client'
import Link from "next/link"
import { useState } from 'react'

export default function Menu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

            <ul className="navigation clearfix">
                <li className="dropdown"
                    onMouseEnter={() => handleClick(1)} onMouseLeave={() => handleClick(1)}>
                    <Link href="/">Home</Link>
                    {/* <ul style={{ display: isActive.key == 1 ? 'block' : 'none' }}>
                        <li><Link href="/">Home One</Link></li>
                        <li><Link href="/index2">Home Two</Link></li>
                        <li><Link href="/index3">Home Three</Link></li>
                    </ul> */}
                </li>
                {/* <li className="dropdown"
                    onMouseEnter={() => handleClick(2)}
                    onMouseLeave={() => handleClick(2)}>
                    <Link href="#">pages</Link>
                    <ul style={{ display: isActive.key == 2 ? 'block' : 'none' }}>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/faqs">faqs</Link></li>
                        <li><Link href="/shop">Products</Link></li>
                        <li><Link href="/product-details">Product Details</Link></li>
                        <li><Link href="/team">Team Members</Link></li>
                        <li><Link href="/team-details">Team Details</Link></li>
                        <li><Link href="/404">404 error</Link></li>
                    </ul>
                </li> */}
                <li className="dropdown"
                    onMouseEnter={() => handleClick(3)}
                    onMouseLeave={() => handleClick(3)}>
                    <Link href="#">Services</Link>
                    <ul style={{ display: isActive.key == 3 ? 'block' : 'none' }}>
                        <li><Link href="/software-development">Software Development</Link></li>
                        <li><Link href="/app-development">App Development</Link></li>
                        <li><Link href="/managed-services">Managed IT Services</Link></li>
                        <li><Link href="/sitecore-development">Sitecore Development</Link></li>
                    </ul>
                </li>
                <li className="dropdown"
                    onMouseEnter={() => handleClick(5)}
                    onMouseLeave={() => handleClick(5)}>
                    <Link href="#">Success Story Detail</Link>
                    <ul style={{ display: isActive.key == 5 ? 'block' : 'none' }}>
                        <li><Link href="/osim-ecommerce-system">OSIM Ecommerce System</Link></li>
                        <li><Link href="/rabbit-group-website">Rabbit Group Website</Link></li>
                        <li><Link href="/spacebar-news">Spacebar News Platform</Link></li>
                        <li><Link href="/toyota-and-lexus">Toyota & Lexus Australia</Link></li>
                        <li><Link href="/caresuper-website">CareSuper Website Personalization</Link></li>
                    </ul>
                </li>
                {/* <li className="dropdown"
                    onMouseEnter={() => handleClick(5)}
                    onMouseLeave={() => handleClick(5)}>
                    <Link href="#">blog</Link>
                    <ul style={{ display: isActive.key == 5 ? 'block' : 'none' }}>
                        <li><Link href="/blog">blog v1</Link></li>
                        <li><Link href="/blog-v2">blog v2</Link></li>
                        <li><Link href="/blog-details">blog details</Link></li>
                    </ul>
                </li> */}
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    )
}
