import { v4 as uuidV4 } from 'uuid'

class Category {
  id?: string
  name: string
  description: string
  create_at: Date

  constructor() {
    //if not exist id create new id
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Category }
