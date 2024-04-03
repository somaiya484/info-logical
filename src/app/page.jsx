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
import WhyChooseUs from './components/WhyChooseUs';

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Company></Company>
      {/* <ConsumerData></ConsumerData> */}
      <ClickPinnacle></ClickPinnacle>
      <WhyChooseUs></WhyChooseUs>
      <CompanyGrowth></CompanyGrowth>
      {/* <Strategic></Strategic> */}
      <Message></Message>
      {/* <MarketDetails></MarketDetails> */}
      <OurPackage></OurPackage>
      <Testimonial></Testimonial>
      <ContactEmail></ContactEmail>
    </>
  );
};

export default Home;