import { ReactNode } from 'react'

interface RecipeCardProps {
  children: ReactNode
  isSingleColumn: boolean
}

export const RecipesContainer = ({ children, isSingleColumn }: RecipeCardProps) => {
  return <div className={`grid ${isSingleColumn ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'} gap-4`}>{children}</div>
}
