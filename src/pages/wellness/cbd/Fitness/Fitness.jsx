import React from 'react'
import HealthlineFitnessPage from './Fitnesshero'
import FitnessLandingPage from './FinessLandingPage'
import FitnessNewsletterLayout from './FitnessNewslayout'
import { usePost } from '@/context/PostContext'
import ContactPopup from '@/component/ContactPopup'

const Fitness = () => {

    const { isContactPopupOpen, handleClosePopup, handleSuccess } = usePost();
  

  return (
    <div>
      <HealthlineFitnessPage/>
      <FitnessLandingPage/>
      <FitnessNewsletterLayout/>

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

export default Fitness
