export interface SignIn {
  email?: string
  password?: string | null
}

export interface SignUp extends SignIn {
  name?: string
  gender?: boolean
  phone?: string
}

export interface UserProfile extends SignUp {
  ordersHistory?: []
  facebookId?: string | null
  deleted?: boolean
  avatar?: string
}

export interface SignInResponse extends SignIn {
  accessToken?: string
}

export interface IResponseBase<T> {
  statusCode?: number
  message?: string
  content?: T
}
