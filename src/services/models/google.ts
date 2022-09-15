interface IItemPredictions {
  description: string
  place_id: string
  matched_substrings: {
    length: number
    offset: number
  }[]
  reference: string
  structured_formatting: {
    main_text: string
    main_text_matched_substrings: {
      length: number
      offset: number
    }[]
    secondary_text: string
  }
  terms: {
    offset: number
    value: string
  }[]
  types: string[]
}

export interface IGoogleAutoCompleteAddress {
  predictions: IItemPredictions[]
}

export interface IGoogleGeometryLocate {
  results: [
    {
      address_components: {
        long_name: string
        short_name: string
        types: string[]
      }[]
      formatted_address: string
      geometry: {
        bounds: {
          northeast: {
            lat: number
            lng: number
          }
          southwest: {
            lat: number
            lng: number
          }
        }
        location: {
          lat: number
          lng: number
        }
        location_type: string
        viewport: {
          northeast: {
            lat: number
            lng: number
          }
          southwest: {
            lat: number
            lng: number
          }
        }
      }
      place_id: string
      types: string[]
    },
  ]
  status: 'OK'
}
