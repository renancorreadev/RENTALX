import { CategoriesRepository } from '../repositories/CategoriesRepository'

interface IRequest {
  name: string
  description: string
}

/*
 * @param {IRequest} request
 * @returns {Promise<void>}
 * [x] Definir o tipo de retorno da função
 * [x] Alterar o retorno de error
 * [x] Acessar o repositorio
 */

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: IRequest) {
    const categoryAlreadyExist = this.categoriesRepository.findByName(name)
    if (categoryAlreadyExist) {
      throw new Error('Category already exist')
    }

    this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryService }
