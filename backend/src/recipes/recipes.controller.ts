import { Controller, Get, Param, Query } from '@nestjs/common'
import { RecipesService } from './recipes.service'

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  async getAvailableRecipes(@Query('filterType') filterType?: string, @Query('filterValue') filterValue?: string): Promise<any> {
    return this.recipesService.getAvailableRecipes(filterType, filterValue)
  }

  @Get(':id')
  async getRecipeDetails(@Param('id') id: string): Promise<any> {
    return this.recipesService.getRecipeDetails(id)
  }
}
