import React from 'react'
import BreastCancerApp from './BreastCancerApp'
import BreastCancerResources from './BreastCancerResources'
import CompleteHealthNewsletterLayout from './CompleteHealthNewsletterLayout'
import ContactPopup from '@/component/ContactPopup'
import { usePost } from '@/context/PostContext'

const BreastCancer = () => {

    const { isContactPopupOpen, handleClosePopup, handleSuccess } = usePost();
  

  return (
    <div>
      <BreastCancerApp />
      <BreastCancerResources />
      <CompleteHealthNewsletterLayout />
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

export default BreastCancer