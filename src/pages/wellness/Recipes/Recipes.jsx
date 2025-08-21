import React from 'react'
import HealthlineRecipesPage from './Recipeshero'
import RecipesLandingPage from './RecipeLanding'
import RecipesNewsletterLayout from './RecipeNewslayout'
import { usePost } from '@/context/PostContext'
import ContactPopup from '@/component/ContactPopup'

const Recipes = () => {
  const { isContactPopupOpen, handleClosePopup, handleSuccess } = usePost();

  return (
    <div>
      <HealthlineRecipesPage/>
      <RecipesLandingPage/>
      <RecipesNewsletterLayout/>

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

export default Recipes
