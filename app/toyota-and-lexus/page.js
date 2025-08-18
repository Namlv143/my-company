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
                    title="Toyota & Lexus Australia Digital Platform"
                    imageUrl="/assets/images/success-story-detail/aaa-min-1024x603-min-min.png"
                    height="200px"
                />

                <CartItem
                    options={[
                        "Toyota and Lexus Australia aimed to unify their digital presence across all dealerships and national landing pages.",
                        "ver a 12-month period, we launched more than 20 dealer-specific websites and national landing pages,",
                        "experience for customers."
                    ]}
                />


                <CartOption
                    title={[
                        "Client: Toyota & Lexus Australia\n\nIndustry: Automotive Retail\n\nTechnology Stack:"
                    ]}
                    items={[
                        "Sitecore XP 10.4",
                        "Sitecore JSS with Next.js",
                        "Azure App Service",
                        "Sitecore Discover",
                        "Sitecore OrderCloud (Catalog Sync Only)"
                    ]}
                    imageSrc="/assets/images/success-story-detail/Screenshot 2025-08-16 201552.jpg"
                />
                <Contact
                    buttonText="Contact Us"
                    buttonLink="/contact"
                />

            </main>
        </Layout>
    );
}
