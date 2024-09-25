import React from 'react';
import Header from './Header';
import SideBanner from './SideBanner';

const AppLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* SideBanner */}
      <SideBanner />

      {/* Main content area */}
      <div className="flex flex-col flex-1 ml-40"> {/* ml-40 to account for the 160px (w-40) wide SideBanner */}
        {/* Header */}
        <Header />

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;