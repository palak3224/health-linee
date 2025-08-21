import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from './Components/Hero';
import PopularCategories from './Components/PopularCategories';
import TrendingBlogs from './Components/TrendingBlogs';
import LatestBlog from './Components/LatestBlog';
import FAQAccordion from './Components/FAQAccordion';
import ContactPopup from '../../component/ContactPopup';
import { usePost } from '@/context/PostContext';

function Home() {
  const trendingRef = useRef(null);
  const navigate = useNavigate();
  // const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [destinationUrl, setDestinationUrl] = useState(null);

  const { isContactPopupOpen, handleClosePopup, handleSuccess } = usePost();

  const scrollToTrending = () => {
    trendingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <HeroSection onStartReadingClick={scrollToTrending} />
      {/* <PopularCategories /> */}
      <div ref={trendingRef}>
        <TrendingBlogs  />
      </div>
      <LatestBlog />
      <FAQAccordion />
      <ContactPopup
        isOpen={isContactPopupOpen}
        onClose={handleClosePopup}
        onSuccess={handleSuccess}
      />
    </div>
  );
}

export default Home;