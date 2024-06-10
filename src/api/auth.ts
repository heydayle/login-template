import api from './index'
interface ILoginForm {
  email: string
  password: string
}
export function login(data: ILoginForm): Promise<any> {
  return api.post('/login',
    data
  )
}