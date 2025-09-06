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
                    title="Custom App Development in Melbourne"
                    imageUrl="https://img1.wsimg.com/isteam/stock/jaqDKmk/:/cr=t:5.93%25,l:0%25,w:88.14%25,h:88.14%25/rs=w:900,m"
                    height="200px"
                />

                <CartItem
                    options={[
                        "A well-designed app offers your company a significant advantage. It might be a customer-facing",
                        "solution for self-service or e-commerce shopping or a mobile utility for employees working in the",
                        "is a priority. Numerous clients rely on IT Supported. You can connect with a trusted team of software",
                        "development at IT Supported."
                    ]}
                />


                <CartOption
                    title="Proven App Developers in Melbourne"
                    content={
                        <>
                            Our team of proven professionals are well-versed in modern development coding languages and SDLC processes. We design and develop web, mobile, and hybrid apps. We enjoy solving problems, overcoming challenges and delivering success for our clients.
                            <br /><br />
                            During a free one-hour consultation, we learn about your business and development goals, share ideas, and lay out your project strategy together. Alongside new development, we can redesign or upgrade existing apps.
                        </>
                    }
                    imageSrc="/assets/images/services/software-development/file3.jpg"
                />
                <CartOptionV2
                    imageSrc="/assets/images/services/software-development/file2.jpg"
                    title="Mobile App Development for Melbourne Companies"
                    content={
                        <>
                            Every project is different. However, we’ve developed a rigorous process to ensure quality and prompt outcomes for our clients. Communication is vital to our team, and we’ll support you throughout the project.
                            <br /><br />
                            Primary steps include:
                        </>
                    }
                    items={[
                        "Assessing the brief for your app to establish and understand expectations.",
                        "Creating a detailed timeline with milestones and deliverables.",
                        "Providing a proof of concept.",
                        "Frequent updates and feedback.",
                        "Extensive bug testing and pre-launch quality control.",
                        "Launch and post-launch support and availability."
                    ]}
                />


                <BannerSection
                    title="Design, Development, and Support — All in One Place"
                    imageUrl="https://img1.wsimg.com/isteam/stock/3166/:/cr=t:8.63%25,l:0%25,w:86.13%25,h:86.13%25/rs=w:767,m"
                    height="200px"
                />
                <Contact
                    description={
                        <>
                            When teaming up with <strong>IT Supported</strong>, your company gains an app development partner in Melbourne who cares about your outcome and delivering exceptional user experiences. We remain flexible and understanding, making changes and upgrades as required with your approval. We also provide support options to help maintain the newly developed app.
                        </>
                    }
                    buttonText="Contact Us"
                    buttonLink="/contact"
                />

            </main>
        </Layout>
    );
}
