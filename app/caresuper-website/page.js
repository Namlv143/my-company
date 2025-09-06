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
                    title="CareSuper Website Personalization"
                    imageUrl="/assets/images/success-story-detail/aaa-min-1024x603-min-min.png"
                    height="200px"
                />

                <CartItem
                    options={[
                        "CareSuper sought to enhance member engagement through personalized digital experiences.",
                        "The project involved revamping their content website and integrating ",
                        "personalization features to deliver tailored content to users."
                    ]}
                />


                <CartOption
                    title={[
                        "Client: CareSuper\n\nIndustry: Financial Services – Superannuation\n\nTechnology Stack:"
                    ]}
                    items={[
                        "Sitecore XP 10.4",
                        "Sitecore Personalize",
                        "Sitecore Send"
                    ]}
                    imageSrc="/assets/images/success-story-detail/Screenshot 2025-08-16 201620.jpg"
                />
                <Contact
                    description="With a proven process and extensive skills across programming languages and app frameworks, IT Supported, your software developer in Melbourne, can deliver practical solutions for your needs. Let us collaborate and find the ideal software solutions for your business goals today."
                    buttonText="Contact Us"
                    buttonLink="/contact"
                />

            </main>
        </Layout>
    );
}
