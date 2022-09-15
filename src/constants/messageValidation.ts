import { MAX_NAME_ADDRESS, MAX_NOTE_ADDRESS } from './address'

export const messageAuthen = {
  password: 'Use between 8 and 20 characters for your password',
  passwordConfirmation: "The entered passwords don't match. Try again",
  requirePassword: 'Password is required',
  requirePasswordConfirmation: 'Password confirmation is required',
  required: 'Please enter this field',
  email: 'Please enter your email address in the correct format',
  nameUser: 'Use between 1 and 20 characters for your name',
  gender: 'Please select your gender',
}

export const messageAddress = {
  name: `The maximum value of this field is ${MAX_NAME_ADDRESS}`,
  note: `The maximum value of this field is ${MAX_NOTE_ADDRESS}`,
  hasNoLatLong: 'This address has no lat long. Please try again',
}
