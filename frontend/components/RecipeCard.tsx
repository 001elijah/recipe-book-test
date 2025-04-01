import Image from 'next/image'

interface RecipeCardProps {
  idMeal: string
  strCategory: string
  strMeal: string
  strMealThumb: string
}

export const RecipeCard = ({ idMeal, strCategory, strMeal, strMealThumb }: RecipeCardProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center border p-4 cursor-pointer"
      key={idMeal}
      onClick={() => (window.location.href = `/recipes/${idMeal}`)}
    >
      <Image alt={strMeal} className="object-cover rounded" height={200} src={strMealThumb} width={300} />
      <h2 className="text-xl font-bold">{strMeal}</h2>
      <p>{strCategory}</p>
    </div>
  )
}
