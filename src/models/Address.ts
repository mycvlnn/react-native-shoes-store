export type typeIconAddress = 'clock' | 'home' | 'work' | 'friends' | 'currentLocation' | undefined

export interface IAddressItem {
  id?: number | string
  title?: string
  description?: string
  lat?: number | null
  long?: number | null
  icon?: typeIconAddress
  note?: string
}
