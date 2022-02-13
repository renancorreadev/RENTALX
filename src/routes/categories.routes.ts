import { Router } from 'express'
import { v4 as uuidV4 } from 'uuid'
import { Category } from '../model/Category'

const CategoriesRoutes = Router()

const categories: Category[] = [] // array of categories

CategoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body

  const category = new Category()

  Object.assign(category, {
    name,
    description,
    create_at: new Date(),
  })

  categories.push(category)

  return response.status(201).json({ category })
})

export { CategoriesRoutes }
