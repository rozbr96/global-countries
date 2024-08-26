
import { CountryCoreFieldsFragment } from '@/__generated__/graphql'


export const BRAZIL: CountryCoreFieldsFragment = {
  emoji: "🇧🇷",
  name: "Brazil",
  capital: "Brasília",
  languages: [
    {
      name: "Portuguese",
    }
  ]
}


export const JAPAN: CountryCoreFieldsFragment = {
  emoji: "🇯🇵",
  name: "Japan",
  capital: "Tokyo",
  languages: [
    {
      name: "Japanese",
    }
  ]
}


export const COUNTRIES = [BRAZIL, JAPAN]


export default COUNTRIES

