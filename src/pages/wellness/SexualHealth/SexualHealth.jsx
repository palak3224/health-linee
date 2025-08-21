import React from 'react'
import HealthlineSexualHealthPage from './Sexualhero'
import SexualHealthLandingPage from './SexualHealthlayout'
import SexualHealthNewsletterLayout from './SexualHealthnews'
import { usePost } from '@/context/PostContext'
import ContactPopup from '@/component/ContactPopup'

const SexualHealth = () => {
  const { isContactPopupOpen, handleClosePopup, handleSuccess } = usePost();

  return (
    <div>
          <HealthlineSexualHealthPage/>
          <SexualHealthLandingPage/>
          <SexualHealthNewsletterLayout/>

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

export default SexualHealth
