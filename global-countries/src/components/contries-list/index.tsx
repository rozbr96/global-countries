
import React, { useState } from 'react'
import { CountryCoreFieldsFragment } from '@/__generated__/graphql'

import EmptyList from './empty'
import List from './list'


function filteredCountries( countries: CountryCoreFieldsFragment[], filter: string) {
  if (!filter) return countries

  const filterRE = new RegExp(filter, 'i')

  return countries.filter((country) => {
    return country.name.match(filterRE) || country.capital?.match(filterRE)
  })
}


export default function CountriesList({
  countries
}: {
  countries?: CountryCoreFieldsFragment[]
}) {
  const [filter, setFilter] = useState('')

  const _countries = filteredCountries(countries || [], filter)

  return (
    <>
      <input id='filter' onChange={(e) => { setFilter(e.target.value) }} />

      <table>
        <thead>
          <tr>
            <th colSpan={4}>Countries List</th>
          </tr>

          <tr>
            <th>Country</th>
            <th>Capital</th>
            <th>Language</th>
            <th>Flag</th>
          </tr>
        </thead>

        <tbody>
          {
            _countries.length > 0
              ? <List countries={_countries} />
              : <EmptyList />
          }
        </tbody>

        <tfoot>
          <tr>
            <th colSpan={4}>{filter}</th>
          </tr>
        </tfoot>
      </table>
    </>
  )
}
