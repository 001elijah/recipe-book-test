import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import axios from 'axios'

@Injectable()
export class RecipesService {
  private readonly mealDbBaseUrl = process.env.MEALDB_BASE_URL

  async getAvailableRecipes(filterType?: string, filterValue?: string): Promise<any> {
    try {
      let url = `${this.mealDbBaseUrl}/search.php?s=`

      if (filterType && filterValue) {
        switch (filterType) {
          case 'category':
            url = `${this.mealDbBaseUrl}/filter.php?c=${filterValue}`
            break
          case 'country':
            url = `${this.mealDbBaseUrl}/filter.php?a=${filterValue}`
            break
          case 'ingredient':
            url = `${this.mealDbBaseUrl}/filter.php?i=${filterValue}`
            break
        }
      }

      const response = await axios.get(url)
      return response.data
    } catch {
      throw new HttpException('Failed to fetch recipes', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async getRecipeDetails(id: string): Promise<any> {
    try {
      const url = `${this.mealDbBaseUrl}/lookup.php?i=${id}`
      const response = await axios.get(url)
      return response.data
    } catch {
      throw new HttpException('Failed to fetch recipe details', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
