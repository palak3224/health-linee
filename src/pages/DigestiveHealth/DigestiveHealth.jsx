import React from 'react'
import DigestiveHealthApp from './DigestiveHealthApp'
import DigestiveHealthResources from './DigestiveHealthResources'
import DigestiveHealthNewsletterLayout from './DigestiveHealthNewsletterLayout'
import { usePost } from '@/context/PostContext'
import ContactPopup from '@/component/ContactPopup'

const DigestiveHealth = () => {

      const { isContactPopupOpen, handleClosePopup, handleSuccess } = usePost();
  

  return (
    <div>
      <DigestiveHealthApp/>
      <DigestiveHealthResources/>
      <DigestiveHealthNewsletterLayout/>
      
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

export default DigestiveHealth