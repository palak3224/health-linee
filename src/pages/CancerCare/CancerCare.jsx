import React from 'react'
import CancerCareApp from './CancerCareApp'
import CancerCareResources from './CancerCareResources'
import CompleteHealthNewsletterLayout from './CompleteHealthNewsletterLayout'
import { usePost } from '@/context/PostContext'
import ContactPopup from '@/component/ContactPopup'


const CancerCare = () => {

  const { isContactPopupOpen, handleClosePopup, handleSuccess } = usePost();

  return (
    <div>
      <CancerCareApp />
      <CancerCareResources />
      <CompleteHealthNewsletterLayout/>
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

export default CancerCare