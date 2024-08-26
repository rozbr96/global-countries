
import { CountriesQuery } from '@/__generated__/graphql'


export const BRAZIL = {
  emoji: "🇧🇷",
  name: "Brazil",
  capital: "Brasília",
  languages: [
    {
      name: "Portuguese",
      native: "Português",
      code: "pt",
      rtl: false
    }
  ]
}


export const JAPAN = {
  emoji: "🇯🇵",
  name: "Japan",
  capital: "Tokyo",
  languages: [
    {
      name: "Japanese",
      native: "日本語",
      code: "ja",
      rtl: false
    }
  ]
}


export const queryResult: CountriesQuery = {
  countries: [BRAZIL, JAPAN]
}
