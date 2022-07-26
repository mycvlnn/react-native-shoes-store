// Nguồn validate password : https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
// Nguồn 2: https://stackoverflow.com/questions/49502436/password-validation-with-yup-and-formik

import * as yup from 'yup'
import { messageAuthen } from '~/constants'

const { requirePassword, requirePasswordConfirmation } = messageAuthen

export const emailPattern = yup
  .string()
  .email('Please enter valid email')
  .required('Email Address is Required')

export const passwordPattern = yup
  .string()
  .min(8, ({ min }) => `Password is too short - should be ${min} chars minimum.`)
  .max(20, ({ max }) => `Password is too long - should be ${max} chars maximum.`)
  .required(requirePassword)
// .matches(
//   /^(?=.*\d)(?=.*[a-zA-Z]).{8,20}$/,
//   'Password must contain at least 1 letters, 1 upper case letter, 1 number and 1 special character',
// ), // Sử dụng trong trường hợp muốn validate kỹ

export const passwordConfirmPattern = yup
  .string()
  .oneOf([yup.ref('password')], messageAuthen.passwordConfirmation)
  .required(requirePasswordConfirmation)

export const nameUserPattern = yup
  .string()
  .trim()
  .min(1, messageAuthen.nameUser)
  .max(20, messageAuthen.nameUser)
  .required(messageAuthen.required)

export const signInValidation = yup.object().shape({
  email: emailPattern,
  password: passwordPattern,
})

export const signUpValidation = yup.object().shape({
  email: emailPattern,
  password: passwordPattern,
  passwordConfirmation: passwordConfirmPattern,
  name: nameUserPattern,
  gender: yup.boolean().required(messageAuthen.gender),
})
