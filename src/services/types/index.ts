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
  avatar?: string | null
}

export interface IResponseBase {
  statusCode?: number
  message?: string
}

export interface SignUpResponse extends IResponseBase {
  content?: SignUp
}
