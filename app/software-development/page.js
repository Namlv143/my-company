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
                    title="Innovate With a Software Developer in Melbourne"
                    imageUrl="https://img1.wsimg.com/isteam/stock/uNBblPAx4dfWNEVr9/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:2046,m"
                    height="200px"
                />

                <CartItem
                    options={[
                        "Solving your unique business problems often requires more than an off-the-shelf solution. Partnering",
                        "with a software developer in Melbourne is the next logical step when your operation requires custom",
                        "tools. We offer decades of experience and a contemporary understanding of business software",
                        "development at IT Supported."
                    ]}
                />


                <CartOption
                    title="Options for Software Development in Melbourne"
                    content="We provide many software development services. We create bespoke solutions to align with our client’s requirements and commit to a process that delivers results on time and within budget. Our service options include:"
                    items={[
                        "Software planning and design to initiate the project",
                        "Full-cycle app development with optional post-launch support",
                        "Integration design and development services to connect software to your platform",
                        "Cloud application development to enable practical remote work",
                        "Automation and optimisation through tailored software"
                    ]}
                    imageSrc="/assets/images/services/software-development/file3.jpg"
                />
                <CartOptionV2
                    imageSrc="/assets/images/services/software-development/file2.jpg"
                    title="Working With Our Software Developers is Easy"
                    content={
                        <>
                            Smart investments in technology are central to the operational strategies of modern business –we
                            understand its importance. Our developers are well-versed in today’s best software development
                            practices and tools. We offer development services across a range of programming languages
                            available to support diverse objectives.
                            <br /><br />
                            We put our client’s vision first. A key part to delivering an outstanding solution for a client is listening,
                            understanding their business challenges and offering innovative design and development options for
                            guided consideration.
                        </>
                    }
                />


                <BannerSection
                    title="Take the First Steps"
                    imageUrl="https://img1.wsimg.com/isteam/stock/3166/:/cr=t:8.63%25,l:0%25,w:86.13%25,h:86.13%25/rs=w:767,m"
                    height="200px"
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
