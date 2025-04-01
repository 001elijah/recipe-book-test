import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface RecipeDetailsSectionProps {
  recipe: {
    strArea: string
    strCategory: string
    strInstructions: string
    strMeal: string
    strMealThumb: string
  }
}

export const RecipeDetailsSection = ({ recipe }: RecipeDetailsSectionProps) => {
  const router = useRouter()

  return (
    <div className="flex">
      <div>
        <Image alt={recipe.strMeal} className="rounded" height={200} src={recipe.strMealThumb} width={300} />
      </div>

      <div className="ml-8">
        <h1 className="text-3xl font-bold">{recipe.strMeal}</h1>
        <p className="italic mb-2">
          Country:{' '}
          <span className="text-blue-500 cursor-pointer" onClick={() => router.push(`/?filterType=country&filterValue=${recipe.strArea}`)}>
            {recipe.strArea}
          </span>
        </p>
        <p>
          <strong>Category:</strong>{' '}
          <span className="text-blue-500 cursor-pointer" onClick={() => router.push(`/?filterType=category&filterValue=${recipe.strCategory}`)}>
            {recipe.strCategory}
          </span>
        </p>
        <p className="mt-4">
          <strong>Instructions:</strong>
        </p>
        <p className="whitespace-pre-line">{recipe.strInstructions}</p>
      </div>
    </div>
  )
}
