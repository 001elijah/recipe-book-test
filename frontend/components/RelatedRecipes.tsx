import { NoReceiptsMessage } from '@/components/NoReceiptsmessage'
import { RecipeCard } from '@/components/RecipeCard'
import { RecipesContainer } from '@/components/RecipesContainer'
import { Spinner } from '@/components/Spinner'
import { size } from 'lodash'

interface RelatedRecipesProps {
  category: string
  relatedLoading: boolean
  relatedRecipes: Array<{
    idMeal: string
    strCategory: string
    strMeal: string
    strMealThumb: string
  }>
}

export const RelatedRecipes = ({ category, relatedLoading, relatedRecipes }: RelatedRecipesProps) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Recipes in {category}</h2>
      <RecipesContainer isSingleColumn={'list'}>
        {relatedLoading ? (
          <Spinner />
        ) : size(relatedRecipes) > 0 ? (
          relatedRecipes.map(relatedRecipe => (
            <RecipeCard
              idMeal={relatedRecipe.idMeal}
              key={relatedRecipe.idMeal}
              strCategory={relatedRecipe.strCategory}
              strMeal={relatedRecipe.strMeal}
              strMealThumb={relatedRecipe.strMealThumb}
            />
          ))
        ) : (
          <NoReceiptsMessage />
        )}
      </RecipesContainer>
    </div>
  )
}
