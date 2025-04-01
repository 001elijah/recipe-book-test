'use client'

import { IngredientsList } from '@/components/IngredientsList'
import { RecipeDetailsSection } from '@/components/RecipeDetailsSection'
import { RelatedRecipes } from '@/components/RelatedRecipes'
import { Spinner } from '@/components/Spinner'
import { fetchRecipeDetails, fetchRecipes } from '@/services/api'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface RecipeDetails {
  [key: string]: string
  idMeal: string
  strArea: string
  strCategory: string
  strInstructions: string
  strMeal: string
  strMealThumb: string
  strYoutube: string
}

export default function RecipeInfo() {
  const router = useRouter()
  const { id } = useParams()
  const [relatedLoading, setRelatedLoading] = useState<boolean>(false)
  const [detailsLoading, setDetailsLoading] = useState<boolean>(false)
  const [recipe, setRecipe] = useState<null | RecipeDetails>(null)
  const [relatedRecipes, setRelatedRecipes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        setDetailsLoading(true)
        const recipeDetails = await fetchRecipeDetails(id as string)
        const recipe = recipeDetails.meals[0]
        setRecipe(recipe)
        setDetailsLoading(false)

        setRelatedLoading(true)
        const categoryRecipes = await fetchRecipes('category', recipe.strCategory)
        setRelatedRecipes(categoryRecipes.meals ?? [])
        setRelatedLoading(false)
      }
    }
    fetchData()
  }, [id])

  if (!recipe) {
    return <Spinner />
  }

  return (
    <div className="flex">
      <div className="w-3/4 p-6">
        <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer" onClick={() => router.back()} type="button">
          Back
        </button>

        {detailsLoading ? <Spinner /> : <RecipeDetailsSection recipe={recipe} />}
        <IngredientsList recipe={recipe} />
      </div>

      <div className="w-1/4">
        <RelatedRecipes category={recipe.strCategory} relatedLoading={relatedLoading} relatedRecipes={relatedRecipes} />
      </div>
    </div>
  )
}
