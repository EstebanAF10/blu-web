import React from 'react';
import Hero from '../components/hero';
import Navbar from '@/components/navBar';
import Discover from '@/components/discover';

const Index = () => {
  return (
    <div>
      {/* Other components or content */}
      <Navbar/>
      <Hero />
      <Discover/>
      {/* Other components or content */}
    </div>
  );
};

export default Index;