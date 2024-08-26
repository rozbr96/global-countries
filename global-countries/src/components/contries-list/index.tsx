
import React from 'react'
import { CountryCoreFieldsFragment } from '@/__generated__/graphql'

import EmptyList from './empty'
import List from './list'

export default function CountriesList({
  countries
}: {
  countries?: CountryCoreFieldsFragment[]
}) {
  return (
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
          countries && countries.length > 0
            ? <List countries={countries} />
            : <EmptyList />
        }
      </tbody>
    </table>
  )
}
