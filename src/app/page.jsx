import Banner from "../components/Banner";
import AboutUs from "../components/AboutUs";
import Service from "../components/Service";
import Message from "../components/Message";
import WhyChooseUs from "../components/WhyChooseUs";
import Company from "../components/Company";
import ContactEmail from "../components/ContactEmail";
import Testimonial from "../components/Testimonial";
import FaqComponent from "../components/FaqComponent";

const Home = () => {
  return (
    <div className='bg-white text-black font-sans  max-w-screen'>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Service></Service>
      <Message></Message>
      <WhyChooseUs></WhyChooseUs>
      <Company></Company>
      <ContactEmail></ContactEmail>
      <Testimonial></Testimonial>
      <FaqComponent></FaqComponent>
    </div>
  );
};

export default Home;