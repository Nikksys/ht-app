import React from 'react'

function Index(props) {
   let people = props.data
   
   
   function handleDelete(id) {
     
     $.ajax({
       method: 'DELETE',
       url: '/people/' + id,
       success: function(data) {
          
       },
       error: function(xhr, status, error) {
         alert('Cannot delete requested record: ', error);
       }
     });
   }
  
    return(
      <>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Appellido</th>
              <th>Telefono</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            { people.length && people.map( person => 
              (<tr key={person.id}>
                <td> {person.nombre} </td>
                <td> {person.appellido} </td>
                <td> {person.telefono} </td>
                <td> <a href={"people/" + person.id + "/edit"}>  ☑️ </a> </td>
                <td> <a onClick={ () => confirm("Quiere eliminar a " + person.nombre + " ?") === true ?  handleDelete(person.id) : ""}>☑️</a> </td>
              </tr>)
              )
            }
          </tbody>
        </table>
      </>
    )
}
export default Index



