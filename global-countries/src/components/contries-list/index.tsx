
import React from 'react'
import { CountriesQuery } from '@/__generated__/graphql'

import EmptyList from './empty'
import List from './list'

export default function CountriesList({ queryResult }: { queryResult?: CountriesQuery }) {
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
          queryResult && queryResult.countries.length > 0
            ? <List countries={queryResult.countries}/>
            : <EmptyList/>
        }
      </tbody>
    </table>
  )
}
