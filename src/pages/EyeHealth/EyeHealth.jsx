import React from 'react'
import EyeHealthApp from './EyeHealthApp'
import EyeHealthResources from './EyeHealthResources'
import EyeHealthNewsletterLayout from './EyeHealthNewsletterLayout'
import { usePost } from '@/context/PostContext'
import ContactPopup from '@/component/ContactPopup'

const EyeHealth = () => {
  const { isContactPopupOpen, handleClosePopup, handleSuccess } = usePost();

  return (
    <div>
      <EyeHealthApp />
      <EyeHealthResources/>
      <EyeHealthNewsletterLayout/>
      
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

export default EyeHealth