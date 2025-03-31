import { fetchRecipes } from '@/services/api'
import { useEffect, useState } from 'react'

interface Recipe {
  idMeal: string
  strCategory: string
  strMeal: string
  strMealThumb: string
}

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [filterType, setFilterType] = useState<string>('')
  const [filterValue, setFilterValue] = useState<string>('')

  useEffect(() => {
    const getRecipes = async () => {
      const data = await fetchRecipes(filterType, filterValue)
      setRecipes(data.meals ?? [])
    }
    getRecipes()
  }, [filterType, filterValue])

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Recipes</h1>

      {/* Filters */}
      <div className="mb-6">
        <select className="border p-2" onChange={e => setFilterType(e.target.value)}>
          <option value="">Select Filter</option>
          <option value="ingredient">Filter by Ingredient</option>
          <option value="country">Filter by Country</option>
          <option value="category">Filter by Category</option>
        </select>
        <input className="border p-2 ml-2" onChange={e => setFilterValue(e.target.value)} placeholder="Enter filter value" />
      </div>

      {/* Recipe List */}
      <div className="grid grid-cols-3 gap-4">
        {recipes.map(recipe => (
          <div className="border p-4 cursor-pointer" key={recipe.idMeal} onClick={() => (window.location.href = `/recipes/${recipe.idMeal}`)}>
            <img alt={recipe.strMeal} src={recipe.strMealThumb} />
            <h2 className="text-xl font-bold">{recipe.strMeal}</h2>
            <p>{recipe.strCategory}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
