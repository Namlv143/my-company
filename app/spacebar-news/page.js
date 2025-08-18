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
                    title="Spacebar News Platform"
                    imageUrl="/assets/images/success-story-detail/aaa-min-1024x603-min-min.png"
                    height="200px"
                />

                <CartItem
                    options={[
                        "Spacebar is a digital-first Thai news outlet focused on delivering in-depth, data-driven journalism with an innovative twist.",
                        "The platform required a personalized content delivery system",
                        "to align with its editorial mission and engage diverse reader segments."
                    ]}
                />


                <CartOption
                    title={[
                        "Project Overview"
                    ]}
                    content={
                        <>
                            The website <a href="https://spacebar.th/" target="_blank" rel="noopener noreferrer" className="link-highlight">https://spacebar.th/</a>  is a Thai digital news platform that brands itself as "The new dimension of NEWS."
                            <br /><br />
                            It offers in-depth, data-driven journalism across various domains, including politics, society, economy, and culture. With some Personalized Content Delivery features, we deliver personalized content based on user behaviour, location, or profile.
                        </>
                    }
                    imageItems={[
                        "Client: Spacebar News (Thailand)",
                        "Website: https://spacebar.th/",
                        "Technology Stack: Sitecore XP, Personalization Module"

                    ]}
                    imageSrc="/assets/images/success-story-detail/Screenshot 2025-08-16 201516.jpg"
                />
                <Contact
                    buttonText="Contact Us"
                    buttonLink="/contact"
                />

            </main>
        </Layout>
    );
}
