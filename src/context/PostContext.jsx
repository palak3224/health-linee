import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [destinationUrl, setDestinationUrl] = useState(null);

  // Function that directly handles post clicks
  const handlePostClick = (url) => {
    const savedData = localStorage.getItem("contactFormData");

    if (savedData) {
      const { timestamp } = JSON.parse(savedData);
      const twoHours = 2 * 60 * 60 * 1000;

      if (Date.now() - timestamp < twoHours) {
        navigate(url);
      } else {
        localStorage.removeItem("contactFormData");
        setDestinationUrl(url);
        setIsContactPopupOpen(true);
      }
    } else {
      setDestinationUrl(url);
      setIsContactPopupOpen(true);
    }
  };

  const handleClosePopup = () => {
    setIsContactPopupOpen(false);
    setDestinationUrl(null);
  };

  const handleSuccess = () => {
    setIsContactPopupOpen(false);
    if (destinationUrl) {
      navigate(destinationUrl);
      setDestinationUrl(null);
    }
  };

  return (
    <PostContext.Provider
      value={{ 
        handlePostClick, 
        isContactPopupOpen, 
        handleClosePopup, 
        handleSuccess,
        destinationUrl 
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePost must be used within a PostProvider');
  }
  return context;
};