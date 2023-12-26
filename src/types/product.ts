import { User } from './user'

export interface ProductProps {
  id?: number
  title: string
  slug: string
  price: number
  image: string
  owner: User
  description?: string
  featured?: boolean
}
