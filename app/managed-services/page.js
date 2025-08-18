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
                    title="Managed IT Services in Melbourne"
                    imageUrl="https://img1.wsimg.com/isteam/stock/oANb51Q/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:900,m"
                    height="200px"
                />

                <CartItem
                    options={[
                        "Information Technology (IT) is the backbone of most modern business. Yet its complexity continues",
                        "to expand. Even experienced business owners can run into complications with modern technology.",
                        "However, there is a better way to approach managing this critical resource with managed IT services.",
                        "In Melbourne, IT Supported is at your service. "
                    ]}
                />


                <CartOption
                    title="IT Managed Services for Melbourne Operations"
                    content={
                        <>
                            Managed services incorporate IT solutions provided and administered by a third party - ideal for growing companies or those with extensive, complex requirements. Shift the burden from internal teams to outside professionals for capable support of ideal outcomes:

                        </>
                    }
                    items={[
                        "Spend more time on your core business mission and less on IT administration.",
                        "Improve uptime and operational efficiency with well-configured systems.",
                        "Take advantage of the latest technology to improve your operations.",
                        "Find opportunities for savings and efficiency improvements in business processes."
                    ]}
                    imageSrc="/assets/images/services/managed-services/file1.jpg"
                />
                <CartOptionV2
                    imageSrc="/assets/images/services/software-development/file2.jpg"
                    title="An Excellent Managed IT Service Provider in Melbourne"
                    content={
                        <>
                            We understand that organisations have different IT requirements. Hence, we take the time to grasp how to best serve you by offering our considerable skills and capabilities. Our managed services can include some or all of the following services:
                        </>
                    }
                    items={[
                        "Integrating business applications into your IT environment.",
                        "Supporting your work with cloud services and business software.",
                        "Optimising and upgrading your existing IT applications and infrastructure.",
                        "Managing your software and liaising with vendors on your behalf.",
                    ]}
                />


                <BannerSection
                    title="Scaled Services to Meet Your Needs"
                    imageUrl="https://img1.wsimg.com/isteam/stock/59695/:/rs=w:900,m"
                    height="200px"
                />
                <Contact
                    buttonText="Contact Us"
                    buttonLink="/contact"
                />

            </main>
        </Layout>
    );
}
