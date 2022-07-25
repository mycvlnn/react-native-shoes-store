// Nguồn validate password : https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
// Nguồn 2: https://stackoverflow.com/questions/49502436/password-validation-with-yup-and-formik

import * as yup from 'yup'

export const emailPattern = yup
  .string()
  .email('Please enter valid email')
  .required('Email Address is Required')

export const authenValidation = yup.object().shape({
  email: emailPattern,
  password: yup
    .string()
    .min(8, ({ min }) => `Password is too short - should be ${min} chars minimum.`)
    .max(20, ({ max }) => `Password is too long - should be ${max} chars maximum.`)
    .required('Password is required'),
  // .matches(
  //   /^(?=.*\d)(?=.*[a-zA-Z]).{8,20}$/,
  //   'Password must contain at least 1 letters, 1 upper case letter, 1 number and 1 special character',
  // ), // Sử dụng trong trường hợp muốn validate kỹ
})
