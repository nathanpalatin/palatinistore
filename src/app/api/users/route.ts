import data from '@/lib/data.json'

export async function POST(req, res) {
  const { login, password } = req.body

  if (isValidCredentials(login, password)) {
    return res.status(200).json(data.users)
  } else {
    return res.status(401).json({ error: 'Credenciais inválidas' })
  }
}

function isValidCredentials(login: string, password: string) {
  const user = data.users.find(
    (user) => user.login === login && user.password === password,
  )
  return !!user
}
