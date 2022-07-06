import React from 'react'

export const Country = (props) => {


   const country= props.country //props passed by parent
  return (
    <>
    <tr>

        <td>{country.Country}</td>
        <td>{country.NewConfirmed}</td>
        <td>{country.TotalConfirmed}</td>
        <td>{country.NewDeaths}</td>
        <td>{country.TotalDeaths}</td>
        <td>{country.NewRecovered}</td>
        <td>{country.TotalRecovered}</td>
    </tr>
    
    </>
  )
}
