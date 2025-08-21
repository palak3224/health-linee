import React from 'react'
import MentalHealthApp from './MentalHealthApp'
import MentalHealthResources from './MentalHealthResources'
import MentalHealthNewsletterLayout from './MentalHealthNewsletterLayout'
import { usePost } from '@/context/PostContext'
import ContactPopup from '@/component/ContactPopup'

const MentalHealth = () => {
  const { isContactPopupOpen, handleClosePopup, handleSuccess } = usePost();

  return (
    <div>
      <MentalHealthApp/>
      <MentalHealthResources/>
      <MentalHealthNewsletterLayout/>

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

export default MentalHealth