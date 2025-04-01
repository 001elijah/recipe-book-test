import { useRouter } from 'next/navigation'

interface IngredientsListProps {
  recipe: { [key: string]: string }
}

export const IngredientsList = ({ recipe }: IngredientsListProps) => {
  const router = useRouter()

  const getIngredients = () => {
    const ingredients: string[] = []
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`]
      const measure = recipe[`strMeasure${i}`]
      if (ingredient) {
        ingredients.push(`${ingredient} (${measure})`)
      }
    }
    return ingredients
  }

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold">Ingredients</h2>
      <ul className="list-disc list-inside mt-2">
        {getIngredients().map((ingredient, idx) => (
          <li className="cursor-pointer text-blue-500" key={idx} onClick={() => router.push(`/?filterType=ingredient&filterValue=${ingredient.split(' ')[0]}`)}>
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  )
}
