import React from 'react'

function Index(props) {
   let people = props.data
   
   
   function handleDelete(e) {
     e.preventDefault();
     $.ajax({
       method: 'DELETE',
       url: '/people/' + props.id,
       success: function(data) {
         alert('deleted ok');
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
                <td> <a onClick={ handleDelete }>☑️</a> </td>
              </tr>)
              )
            }
          </tbody>
        </table>
      </>
    )
}
export default Index



