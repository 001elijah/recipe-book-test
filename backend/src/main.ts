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
