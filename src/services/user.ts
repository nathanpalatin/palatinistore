import { api } from '@/data/api'
import { UserAuth } from '@/types/user'

export async function authUser(
  login: string,
  password: string,
): Promise<UserAuth> {
  try {
    const response = await api('/users', { login, password })

    if (!response.ok) {
      throw new Error('Autenticação falhou')
    }

    const user = await response.json()
    return user.token
  } catch (error) {
    console.error('Erro durante a autenticação:', error)
    throw new Error('Ocorreu um erro durante a autenticação')
  }
}
