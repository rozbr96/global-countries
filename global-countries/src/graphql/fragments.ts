
import { gql } from '@/__generated__'

export const CountryFragment = gql(`
  fragment CountryCoreFields on Country {
    emoji
    name
    capital
    languages {
      name
    }
  }
`)
