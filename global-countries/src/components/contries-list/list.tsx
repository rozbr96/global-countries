
import React from 'react'
import { CountryCoreFieldsFragment } from '@/__generated__/graphql'

export default function CountriesList({
  countries
}: {
  countries: CountryCoreFieldsFragment[]
}) {
  return (
    countries.map((country) => {
      return (
        <tr key={country.name}>
          <td>{country.name}</td>
          <td>{country.capital}</td>
          <td>{country.languages.map(l => l.name).join(', ')}</td>
          <td>{country.emoji}</td>
        </tr>
      )
    })
  )
}
