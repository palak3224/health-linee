import React from 'react'
import HealthlineSkincardPage from './Skincarehero'
import SkincareLandingPage from './Skincarelanding'
import SkincareNewsletterLayout from './SkincareLayout'
import { usePost } from '@/context/PostContext'
import ContactPopup from '@/component/ContactPopup'

const SkinCare = () => {
  const { isContactPopupOpen, handleClosePopup, handleSuccess } = usePost();

  return (
    <div>
            <HealthlineSkincardPage/>
            <SkincareLandingPage/>
            <SkincareNewsletterLayout/>

            {isContactPopupOpen && (
        <ContactPopup
          isOpen={isContactPopupOpen}
          onClose={handleClosePopup}
          onSuccess={handleSuccess}
        />
      )}
    </div>
  )
}

export default SkinCare
