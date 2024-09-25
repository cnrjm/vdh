import React, { useState, useEffect } from 'react';
import { useTitle } from './TitleContext';

const Header = () => {
  const [nirTime, setNirTime] = useState('');
  const { title } = useTitle();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      // NIR time (UTC+1)
      const nirOptions = { timeZone: 'Europe/Belfast', hour: '2-digit', minute: '2-digit' };
      setNirTime(now.toLocaleTimeString('en-GB', nirOptions));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Split the time string into hours and minutes
  const [hours, minutes] = nirTime.split(':');

  return (
    <header className="bg-white text-black p-4 border-b-2 border-gray-200">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl md:text-2xl lg:text-4xl font-serif font-bold tracking-tight text-black capitalize w-1/3">
          {title}
        </h1>
        <div className="text-6xl text-right font-serif flex items-center justify-end w-1/3">
          <span>{hours}</span>
          <span className="text-2xl mx-1">:</span>
          <span>{minutes}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;