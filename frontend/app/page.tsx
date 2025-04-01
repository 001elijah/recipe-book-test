'use client'

import { Filter } from '@/components/Filter'
import { NoReceiptsMessage } from '@/components/NoReceiptsmessage'
import { RecipeCard } from '@/components/RecipeCard'
import { RecipesContainer } from '@/components/RecipesContainer'
import { Spinner } from '@/components/Spinner'
import { fetchRecipes } from '@/services/api'
import { debounce, size } from 'lodash'
import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

interface Recipe {
  idMeal: string
  strCategory: string
  strMeal: string
  strMealThumb: string
}

export default function Home() {
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [filterType, setFilterType] = useState<string>(searchParams.get('filterType') || '')
  const [filterValue, setFilterValue] = useState<string>(searchParams.get('filterValue') || '')
  const [displayFilterType, setDisplayFilterType] = useState<string>('')
  const [displayFilterValue, setDisplayFilterValue] = useState<string>('')

  const debouncedFetchRecipes = useCallback(
    debounce(async (type: string, value: string) => {
      setIsLoading(true)
      const data = await fetchRecipes(type, value)
      setRecipes(data.meals ?? [])
      setDisplayFilterType(type)
      setDisplayFilterValue(value)
      setIsLoading(false)
    }, 500),
    []
  )

  useEffect(() => {
    debouncedFetchRecipes(filterType, filterValue)
    return () => debouncedFetchRecipes.cancel()
  }, [filterType, filterValue, debouncedFetchRecipes])

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        {displayFilterType && displayFilterValue ? `Recipes: ${displayFilterValue} (${displayFilterType})` : 'Recipes'}
      </h1>
      <Filter filterType={filterType} filterValue={filterValue} onFilterTypeChange={setFilterType} onFilterValueChange={setFilterValue} />
      <RecipesContainer isSingleColumn={isLoading || size(recipes) <= 0}>
        {isLoading ? (
          <Spinner />
        ) : size(recipes) > 0 ? (
          recipes.map(recipe => (
            <RecipeCard
              idMeal={recipe.idMeal}
              key={recipe.idMeal}
              strCategory={recipe.strCategory}
              strMeal={recipe.strMeal}
              strMealThumb={recipe.strMealThumb}
            />
          ))
        ) : (
          <NoReceiptsMessage />
        )}
      </RecipesContainer>
    </div>
  )
}
