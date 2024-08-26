
import { gql } from '@/__generated__'

export const COUNTRIES = gql(`
  query Countries {
    countries {
      ...CountryCoreFields
    }
  }
`)
