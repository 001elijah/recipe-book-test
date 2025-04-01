import axios from 'axios'
import { toast } from 'react-toastify'

const API_URL = process.env.NEXT_PUBLIC_API_URL

const api = axios.create({
  baseURL: API_URL
})

export const fetchRecipes = async (filterType?: string, filterValue?: string) => {
  let url = '/recipes'
  if (filterType && filterValue) {
    url += `?filterType=${filterType}&filterValue=${filterValue}`
  }
  try {
    const response = await api.get(url)
    return response.data
  } catch (error) {
    const errorMessage = getErrorMessage(error)
    toast.error(`Error fetching recipes: ${errorMessage}`)
    throw new Error('Could not fetch recipes. Please check your connection or try again later.')
  }
}

export const fetchRecipeDetails = async (id: string) => {
  try {
    const response = await api.get(`/recipes/${id}`)
    return response.data
  } catch (error) {
    const errorMessage = getErrorMessage(error)
    toast.error(`Error fetching recipe details for ID ${id}: ${errorMessage}`)
    throw new Error('Could not fetch recipe details. Please check your connection or try again later.')
  }
}

const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message
  }
  return 'An unknown error occurred'
}
