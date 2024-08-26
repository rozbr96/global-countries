
import React from 'react'

export default function CountriesList() {
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
        <tr>
          <td colSpan={4}>
            No countries could be found!
          </td>
        </tr>
      </tbody>
    </table>
  )
}
