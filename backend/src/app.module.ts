import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { RecipesModule } from './recipes/recipes.module'

@Module({
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    RecipesModule
  ],
  providers: [AppService]
})
export class AppModule {}
