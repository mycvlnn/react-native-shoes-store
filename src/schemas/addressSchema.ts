import * as yup from 'yup'
import { MAX_NAME_ADDRESS, MAX_NOTE_ADDRESS, messageAddress, messageAuthen } from '~/constants'

export const addressSchema = yup.object().shape({
  address: yup.string().required(messageAuthen.required),
  name: yup.string().max(MAX_NAME_ADDRESS, messageAddress.name),
  note: yup.string().max(MAX_NOTE_ADDRESS, messageAddress.note),
})
