import React, { useEffect } from 'react';
import { useTitle } from './TitleContext';

const About = () => {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle(('HOME'));
  }, [setTitle]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img
            src="/nico.webp"
            alt="About Us"
            className="max-w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 md:pl-2">
          <h2 className="text-6xl font-bold">NICO LEONARD</h2>
          <p className="text-2xl mb-4">VAN DER HORST</p>
          <p className="text-lg mb-4">
            Nico Leonard is a luxury watch dealer and internet personality. Born in 1987, Nico grew up in Amsterdam, Netherlands and later moved to Northern Ireland in 2013. 
          </p>
          <p className="text-lg mb-4">
            His passion for watches ignited with his first timepiece at a young age and in 2019 Nico founded Watches NI <span className='italic'>(later Pride & Pinion)</span>. He began scaling the business and it has since become one of the largest pre-owned luxury watch dealerships in the market.
          </p>
          <p className="text-lg mb-4">
          Committed to helping enthusiasts find their perfect watch at a fair price, working to make the watch industry more accessible and fostering a community of passionate collectors who share our love for horology, Nico has continously strived to improve the watch industry and break down the barriers of the luxury market.
          </p>
          <p className="text-lg mb-4">
          In 2019 Nico started his youtube channel to provide educational content around watches. His informal tone and bold attitude around such a professional industry resonated with fans and the channel has since grown to over 1.7 million subscribers and one of the largest watch channels in the world.
          </p>
          <p className="text-lg">
            Outside of watches, Nico loves spending time with his two children, wife, and dogs. He has a passion for supercars and golf, both of which he is notoriously terrible at.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;