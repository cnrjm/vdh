import React, { useEffect} from 'react';
import { useTitle } from './TitleContext';

const PressTable = ({ pressData }) => {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle('PRESS');
    // Optionally, you can reset the title when the component unmounts
    return () => setTitle('');
  }, [setTitle]);
  return (
    <div className="w-full max-w-4xl mx-auto bg-white text-black p-4">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left p-2 font-bold">Company</th>
            <th className="text-left p-2 font-bold">Category</th>
            <th className="text-right p-2 font-bold">Year</th>
          </tr>
        </thead>
        <tbody>
          {pressData.map((item, index) => (
            <tr 
              key={index} 
              className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer transition-colors duration-150"
              onClick={() => window.open(item.link, '_blank')}
            >
              <td className="p-2">{item.company}</td>
              <td className="p-2">{item.category}</td>
              <td className="p-2 text-right">{item.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Press = () => {
  const pressData = [
    { company: 'Audemars Piguet', category: 'Interview', year: 2024, link: 'https://www.youtube.com/watch?v=00BREVuJAIo' },
    { company: 'GQ', category: 'Interview', year: 2023, link: 'https://www.gq-magazine.co.uk/watches/article/nico-leonard-choosing-your-first-watch-interview-2023' },
    { company: 'Strike It Big', category: 'Podcast', year: 2023, link: 'https://www.youtube.com/watch?v=wISPQOFrDHk' },
    { company: 'Oracle Time', category: 'Interview', year: 2023, link: 'https://oracleoftime.com/nico-leonard-interview/' },
    { company: 'Scottish Watches', category: 'Podcast', year: 2023, link: 'https://www.scottishwatches.co.uk/2023/01/05/scottish-watches-podcast-428-the-story-of-nico-leonard-from-pride-and-pinion-plus-the-unicorn-daytona/' },
    { company: 'CEOCAST', category: 'Podcast', year: 2022, link: 'https://www.youtube.com/watch?v=QnqGew11oi8' }
  ];

  return (
    <div className="font-sans">
      <PressTable pressData={pressData} />
    </div>
  );
};

export default Press;