import React from 'react'
import HealthlineSleepHealthPage from './SleepHealthhero'
import SleepHealthLandingPage from './Sleeplanding'
import SleepHealthNewsletterLayout from './Sleepnewslayout'
import { usePost } from '@/context/PostContext'
import ContactPopup from '@/component/ContactPopup'

const SleepHealth = () => {
  const { isContactPopupOpen, handleClosePopup, handleSuccess } = usePost();

  return (
    <div>
            <HealthlineSleepHealthPage/>
            <SleepHealthLandingPage/>
            <SleepHealthNewsletterLayout/>

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

export default SleepHealth
