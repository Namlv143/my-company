import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/Banner";
import CartItem from "@/components/sections/CartItem";
import CartOption from "@/components/sections/CartOption";
import CartOptionV2 from "@/components/sections/CartoptionV2";
import BannerSection from "@/components/sections/BannerSection";
import Contact from "@/components/sections/ContactUsSection";

export default function SoftwareDevelopment() {
    return (
        <Layout>
            <main>
                <Banner
                    title="OSIM Ecommerce System"
                    imageUrl="/assets/images/success-story-detail/aaa-min-1024x603-min-min.png"
                    height="200px"
                />

                <CartItem
                    options={[
                        "OSIM is Asia’s leading brand in massage chairs and wellness products.",
                        "The project involved building a scalable e-commerce ecosystem to serve their multi-country digital strategy. ",
                        "tools. We offer decades of experience and a contemporary understanding of business software."
                    ]}
                />


                <CartOption
                    title="Project Overview"
                    content={
                        <>
                            Sitecore is a gold-standard DXP built for modularity and scalability in a low-code environment. Packed with tools for customer outreach and analysis, it is currently one of the best ways for mid to large corporates to manage content channels and digital experiences.
                            <br /><br />
                            Support business not only Singapore but multiple countries:
                            <a href="https://vn.osim.com/" target="_blank" rel="noopener noreferrer" className="link-highlight">https://vn.osim.com/</a> and
                            <a href="https://www.osim.com.my/" target="_blank" rel="noopener noreferrer" className="link-highlight">https://www.osim.com.my/</a> and specially
                            <a href="https://www.osim.co.th/" target="_blank" rel="noopener noreferrer" className="link-highlight">https://www.osim.co.th/</a>
                            <br /><br />
                            During a free one-hour consultation, we learn about your business and development goals, share ideas, and lay out your project strategy together. Alongside new development, we can redesign or upgrade existing apps.
                        </>
                    }
                    items={[
                        "Manages customer appointments",
                        "Retrieves customer profiles and purchase history.",
                        "Displays and explains product information.",
                        "Offers personalized recommendations.",
                        "All data is synced from Sitecore CMS"
                    ]}
                    imageItems={[
                        "Client: OSIM International",
                        "Industry: Retail—Health & Wellness",
                        "Technology Stack: Sitecore XP 10.0, Sitecore XC 10.0, JSS, SXA, ReactJS, Azure App Service, http-proxy"

                    ]}
                    imageSrc="/assets/images/success-story-detail/aaa-min-1024x603-min-min.png"
                />
                <Contact
                    buttonText="Contact Us"
                    buttonLink="/contact"
                />

            </main>
        </Layout>
    );
}
