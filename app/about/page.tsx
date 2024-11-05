import React from 'react';
import MainHeader from '@/components/navigators/MainHeader';
import MobileHeader from '@/components/navigators/MobileHeader';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <>
      <MobileHeader />
      {/* Mobile navigation */}
      <MainHeader />

      <Footer />
    </>
  );
};

export default AboutPage;
