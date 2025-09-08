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
                    title="Rabbit Group Website"
                    imageUrl="/assets/images/success-story-detail/aaa-min-1024x603-min-min.png"
                    height="200px"
                />

                <CartItem
                    options={[
                        "Rabbit.co.th is the official digital presence of Rabbit Group — a leading Thai fintech enterprise",
                        "delivering lifestyle and financial solutions. In 2018, we implemented a centralized content management system using ",
                        "Sitecore v8 to power the group’s content ecosystem."
                    ]}
                />


                <CartOption
                    title="Project Overview"
                    content={
                        <>
                            The website <a href="https://vn.osim.com/" target="_blank" rel="noopener noreferrer" className="link-highlight">https://www.rabbit.co.th/ </a> serves as the central hub for Rabbit Group, a Thai fintech company offering a suite of digital financial services designed to simplify daily life.
                            <br /><br />
                            We build the CMS part for this website in 2018—powered by Sitecore version 8. It helps the management team write content once and reuse it across web, mobile, email, and even apps.
                            <br /><br />
                            In addition, the system can schedule posts for future publishing, set expiration dates, or send to translation queues; manage content for multiple languages and sites in one backend.
                        </>
                    }
                    imageItems={[
                        "Client: Rabbit Group (Thailand)",
                        "Website: https://www.rabbit.co.th/",
                        "Technology Stack: Sitecore 8, .NET Framework"

                    ]}
                    imageSrc="/assets/images/success-story-detail/Screenshot 2025-08-16 201639.jpg"
                />
                <Contact
                    buttonText="Contact Us"
                    buttonLink="/contact"
                />

            </main>
        </Layout>
    );
}
