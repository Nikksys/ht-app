import React from 'react'

function Index(props) {
   let people = props.data
    return(
      <>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Appellido</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody>
            { people.length && people.map( person => 
              (<tr key={person.id}>
                <td> {person.nombre} </td>
                <td> {person.appellido} </td>
                <td> {person.telefono} </td>
              </tr>)
              )
            }
          </tbody>
        </table>
      </>
    )
}
export default Index



