import { listCurrency, localesCode } from '~/constants'

interface Params {
  amount: number
  locales?: string
  currency?: string
}
export const formatWithCurrency: (param: Params) => string = ({
  amount = 0,
  locales = localesCode.vi,
  currency = listCurrency.vi,
}) => {
  return `${amount.toLocaleString(locales)} ${currency}`
}
