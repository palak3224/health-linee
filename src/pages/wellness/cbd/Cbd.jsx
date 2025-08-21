import React from 'react'

import CBDLayout from './Cbdhero'
import WellnessLandingPage from './Cbdlanding'
import CBDNewsletterLayout from './CBDnewsLetterLayout'
import { usePost } from '@/context/PostContext'
import ContactPopup from '@/component/ContactPopup'

const Cbd = () => {
  const { isContactPopupOpen, handleClosePopup, handleSuccess } = usePost();

  return (
    <div>
        <CBDLayout/>
        <WellnessLandingPage/>
        <CBDNewsletterLayout/>

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

export default Cbd
