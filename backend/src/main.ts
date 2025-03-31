//TODO: pagination support
//TODO: improve error handling
//TODO: input validation for query params and route params
//TODO: unit tests
//TODO: swagger/readme
//TODO: logger
//TODO: rate limiting to prevent MealDB API abuse
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  const port = process.env.PORT || 3001
  await app.listen(port)
  console.log(`Backend is running on http://localhost:${port}`)
}
bootstrap().catch(error => {
  console.error('Error occurred during bootstrap:', error)
})
