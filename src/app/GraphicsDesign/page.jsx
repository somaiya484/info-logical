"use client"
import { useState } from 'react';
import {
    MdOutlineAppRegistration,
    MdOutlineAssessment,
    MdHourglassFull,
    MdOutlineCollectionsBookmark,
    MdTipsAndUpdates,
} from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import Message from "../../components/Message";
import Link from "next/link";

const GraphicsDesign = () => {

    const sections = [
        {
            id: 1,
            img: "/adContentDesign.jpg",
            title: "Ad Content Design",
            description:
                "Capture attention and drive action with our expertly designed ad content. We create visually compelling ads for online and offline platforms, ensuring your message stands out in a crowded marketplace.",
            link: "/contact",
        },
        {
            id: 2,
            img: "/socialmediaad.png",
            title: "Social Media Graphics",
            description:
                "Enhance your social media presence with stunning graphics that engage and attract your audience. From Instagram posts to Facebook banners, we design visuals that boost your brand’s online profile.",
            link: "/contact",
        },
        {
            id: 3,
            img: "/PrintedMarketingMaterials.jpg",
            title: "Print Materials",
            description:
                "Make a lasting impression with high-quality print designs. We create everything from business cards and brochures to posters and flyers, ensuring your printed materials are as impactful as your digital ones.",
            link: "/contact",
        },
        {
            id: 4,
            img: "/brandIdentity.PNG",
            title: "Brand Identity",
            description:
                "Develop a cohesive and memorable brand identity with our comprehensive design services. We create logos, color schemes, and brand guidelines that reflect your business’s values and vision.",
            link: "/contact",
        }
    ];

    const processSteps = [
        {
            id: 1,
            icon: MdOutlineCollectionsBookmark,
            title: "1. Concept & Brainstorming",
            description:
                " We begin with a brainstorming session to understand your vision and goals. This helps us develop creative concepts that align with your brand.",
        },
        {
            id: 2,
            icon: MdOutlineAppRegistration,
            title: "2. Design Creation",
            description:
                "Our designers bring the concepts to life using advanced design tools and techniques. We focus on creating visually appealing and impactful designs.",
        },
        {
            id: 3,
            icon: MdHourglassFull,
            title: "3. Feedback & Revisions",
            description:
                "We present the initial designs for your feedback and make necessary revisions until you are completely satisfied with the outcome.",
        },
        {
            id: 4,
            icon: FaHandsHelping,
            title: "4. Final Delivery",
            description:
                "Once approved, we deliver the final designs in the required formats, ready for use in your marketing campaigns.",
        }
    ];

    const workSamples = [
        {
            id: 1,
            img: "https://cratosai-backend.itechnolabs.tech/images/17105094850.png",
            title: "Google Ads - Light",
            icon: MdOutlineAssessment,
        },
        {
            id: 2,
            img: "https://cratosai-backend.itechnolabs.tech/images/17105094850.png",
            title: "Google Ads - Light",
            icon: MdOutlineAssessment,
        },
        {
            id: 3,
            img: "https://cratosai-backend.itechnolabs.tech/images/17105094850.png",
            title: "Google Ads - Light",
            icon: MdOutlineAssessment,
        },
    ];

    const faqs = [
        {
            question: 'What services do you offer?',
            answer: 'We offer a wide range of marketing services, including website design and development (WordPress, Shopify, Wix, custom-coded), graphics design (ads content design and others without video editing), SEO, SEM (Google ads), Facebook ads, web analytics (Google Tag Manager, Conversion API, Pixel Installation, Google Analytics), and data analytics (Looker Studio, Power BI).',
        },
        {
            question: 'Do you provide custom website development?',
            answer: 'Yes, we offer custom-coded website development to meet your specific business needs.',
        },
        {
            question: 'Can you help with SEO and SEM?',
            answer: 'Absolutely! We specialize in SEO and SEM, including Google ads, to help improve your website\'s visibility and drive traffic.',
        },
        {
            question: 'What platforms do you design websites for?',
            answer: 'We design websites for WordPress, Shopify, Wix, and also offer custom-coded solutions.',
        },
        {
            question: 'Do you offer graphic design services?',
            answer: 'Yes, we provide graphic design services focused on ads content design and other graphic needs, excluding video editing.',
        },
        {
            question: 'Can you manage my Facebook ads?',
            answer: 'Yes, we offer comprehensive Facebook ads management to help you reach your target audience effectively.',
        },
        {
            question: 'What web analytics services do you provide?',
            answer: 'We offer web analytics services including Google Tag Manager, Conversion API, Pixel Installation, and Google Analytics.',
        },
        {
            question: 'Do you provide data analytics services?',
            answer: 'Yes, we provide data analytics services using Looker Studio and Power BI to help you make informed business decisions.',
        },
        {
            question: 'How can I get started with your services?',
            answer: 'You can get started by contacting us through our website. We\'ll discuss your needs and create a customized plan for you.',
        },
        {
            question: 'What is your pricing model?',
            answer: 'Our pricing model varies depending on the service and scope of the project. Please contact us for a detailed quote.',
        },
    ];


    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className="bg-white text-black">
            <div className="bg-fixed bg-[url('https://i.ibb.co/CQPDZv7/marvin-meyer-SYTO3xs06f-U-unsplash.jpg')] h-[600px] w-full flex justify-center items-center relative overflow-auto">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="text-center relative z-10 text-white">
                    <h1 className="font-semibold">Graphics Design</h1>
                    <h2 className="text-5xl my-8 font-semibold leading-[60px]">
                        Captivate Your Audience with Eye-Catching  {" "} <br />
                        <span className="text-gradient font-bold ">Graphic Design</span>
                    </h2>
                    <p>
                        Our graphic design services are tailored to create visually striking content that captures attention<br /> and communicates your brand's message effectively. From ad content to marketing materials,<br /> our designs are crafted to resonate with your audience.
                    </p>
                </div>
            </div>


            <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4">
            <button
              className="w-full text-left flex justify-between items-center focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>



            {/* Choose Yours one - 2nd section */}
            <h1 className="text-gradient font-bold text-center text-6xl mt-32 mb-10">
                Choose Yours one
            </h1>
            <div className="grid md:grid-cols-2 mx-6 md:mx-24 gap-16 mt-16">
                {sections.map((section) => (
                    <div key={section.id} className="shadow-xl rounded px-6 py-7">
                        <img
                            src={section.img}
                            alt={section.title}
                            className="h-[370px] w-full bg-orange-300"
                        />
                        <h2 className="text-4xl my-5">{section.title}</h2>
                        <p>{section.description}</p>
                        <Link href={section.link}>
                            <button className="secondary-button mt-5 hover:scale-100">
                                Reach us
                            </button>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Our Visualization Process - 3rd section */}

            <h1 className="text-gradient font-bold text-center text-6xl mt-32 mb-10">
                Our Design Process
            </h1>
            <p className="text-center">
                Do you dream of exploring the furthest reaches of outer space? <br />
                Do you live for bringing brands to life and finding new ways to tell exciting
                brand stories? <br />
                If so, you may have just found your people.
            </p>

            <div className="flex flex-col md:flex-row md:mx-14 mt-5  gap-7">
                <div className="md:w-1/2">
                    {processSteps
                        .filter((_, index) => index % 2 === 0)
                        .map((step) => (
                            <div key={step.id} className="flex items-center gap-7 mt-16">
                                <step.icon className="bg-orange-600 p-2 w-[100px] rounded-full text-5xl text-white" />
                                <div>
                                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                </div>
                <div className="md:w-1/2">
                    {processSteps
                        .filter((_, index) => index % 2 !== 0)
                        .map((step) => (
                            <div key={step.id} className="flex items-center gap-7 mt-16">
                                <step.icon className="bg-orange-600 p-2 w-[100px] text-center rounded-full text-5xl text-white" />
                                <div>
                                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            <Message />

            <h1 className="text-gradient font-bold text-center text-6xl mt-32 mb-10">
                Work Samples
            </h1>

            {[0, 1, 2].map((row) => (
                <div
                    key={row}
                    className={`md:flex items-center gap-10 md:mx-14 py-7 ${row !== 0 ? "-mt-7" : ""
                        }`}
                >
                    {workSamples.map((sample) => (
                        <div key={sample.id} className="shadow-lg py-7 px-4 rounded-lg">
                            <img className="rounded" src={sample.img} alt={sample.title} />
                            <div className="flex items-center gap-4 mt-5">
                                <sample.icon className="bg-orange-600 p-2 rounded-full text-5xl text-white" />
                                <h3 className="text-2xl">{sample.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            ))}

            {/* 4th section */}
            <div className="w-2/4 mx-auto py-32">
                <h1 className="text-gradient font-bold text-6xl mb-10">
                    Let's Talk <br /> about Graphics
                </h1>
                <p>
                    We thrive on innovation and turning brilliant ideas into reality. Our goal is
                    to create exceptional experiences through meticulous execution. If you share
                    our passion, don't hesitate to reach out via phone or email to begin your
                    journey with us.
                </p>
                <Link href="/contact">
                    <button className="primary-button mt-5">
                        Contact Us <IoMdCall className="text-xl ml-2" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default GraphicsDesign;