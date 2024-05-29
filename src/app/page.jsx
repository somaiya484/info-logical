import React from 'react';
import Banner from './components/Banner';
import Company from './components/Company';
import ConsumerData from './components/ConsumerData';
import Strategic from './components/Strategic';
import MarketDetails from './components/MarketDetails';
import CompanyGrowth from './components/CompanyGrowth';
import OurPackage from './components/OurPackage';
import ContactEmail from './components/ContactEmail';
import Testimonial from './components/Testimonial';
import Message from './components/Message';
import ClickPinnacle from './components/ClickPinnacle';
import AboutUs from './components/AboutUs';
import Service from './components/Service';
import WhyChooseUs from './components/WhyChooseUs';

const Home = () => {
  return (
    <div className='bg-white text-black font-sans '>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Service></Service>
      <Message></Message>
      <WhyChooseUs></WhyChooseUs>
      <Company></Company>
      <ContactEmail></ContactEmail>
      <Testimonial></Testimonial>
      {/* <ConsumerData></ConsumerData> */}
      {/* <ClickPinnacle></ClickPinnacle> */}
      {/* <CompanyGrowth></CompanyGrowth> */}
      {/* <Strategic></Strategic> */}
      {/* <Message></Message> */}
      {/* <MarketDetails></MarketDetails> */}
      {/* <OurPackage></OurPackage> */}
     
      </div>
  );
};

export default Home;