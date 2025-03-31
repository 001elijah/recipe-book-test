import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL

const api = axios.create({
  baseURL: API_URL
})

export const fetchRecipes = async (filterType?: string, filterValue?: string) => {
  let url = '/recipes'
  if (filterType && filterValue) {
    url += `?filterType=${filterType}&filterValue=${filterValue}`
  }
  const response = await api.get(url)
  return response.data
}

export const fetchRecipeDetails = async (id: string) => {
  const response = await api.get(`/recipes/${id}`)
  return response.data
}

export default api
