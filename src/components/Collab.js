import React, { useEffect} from 'react';
import { useTitle } from './TitleContext';

const CollabItem = ({ src, alt, client, industry, shotOn, date }) => {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle('COLLABORATIONS');
    // Optionally, you can reset the title when the component unmounts
    return () => setTitle('');
  }, [setTitle]);
  
  return (
    <div className="mb-24">
      <div className="flex flex-col lg:flex-row lg:items-center gap-8">
        <div className="w-full lg:w-2/3">
          <div className="h-[50vh] bg-white">
            <img 
              src={src} 
              alt={alt} 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:flex-shrink-0">
          <div className="font-sans grid grid-cols-2 gap-x-4 gap-y-6">
            <div>
              <p className="text-sm text-gray-500 uppercase mb-1">Client</p>
              <p>{client}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase mb-1">Industry</p>
              <p>{industry}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase mb-1">Shot on</p>
              <p>{shotOn}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase mb-1">Date</p>
              <p>{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Collaborations = () => {
  const collabData = [
    {
      id: 1,
      src: "/collabs/ap.jpg",
      alt: "Audemars Piguet Collaboration",
      client: "Audemars Piguet",
      industry: "Luxury Watches",
      shotOn: "Canon EOS R5",
      date: "2023",
    },
    {
      id: 2,
      src: "/collabs/ferrari.jpg",
      alt: "Ferrari Collaboration",
      client: "Ferrari",
      industry: "Supercars",
      shotOn: "Sony A7III",
      date: "2022",
    },
    {
      id: 3,
      src: "/collabs/ulysse.jpg",
      alt: "Ulysse Nardin Collaboration",
      client: "Ulysse Nardin",
      industry: "Luxury Watches",
      shotOn: "Sony A7III",
      date: "2022",
    },
    {
      id: 4,
      src: "/collabs/lws.jpg",
      alt: "London Watch Show Collaboration",
      client: "London Watch Show",
      industry: "Luxury Watches",
      shotOn: "Sony A7III",
      date: "2022",
    },
    {
      id: 5,
      src: "/collabs/schulz.jpeg",
      alt: "Andrew Schulz Collaboration",
      client: "Andrew Schulz",
      industry: "Comedy / Luxury Watches",
      shotOn: "Sony A7III",
      date: "2022",
    },
    {
      id: 6,
      src: "/collabs/combs.jpeg",
      alt: "Luke Combs Collaboration",
      client: "Luke Combs",
      industry: "Music / Luxury Watches",
      shotOn: "Sony A7III",
      date: "2022",
    },
  ];

  return (
    <div className="px-6 py-8 font-serif">
      {collabData.map((item) => (
        <CollabItem 
          key={item.id}
          src={item.src} 
          alt={item.alt} 
          client={item.client}
          industry={item.industry}
          shotOn={item.shotOn}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default Collaborations;