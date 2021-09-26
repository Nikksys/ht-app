import React from 'react';
function PeopleForm (props) {

  const [nombre, setNombre] = React.useState(props.person.nombre || "");
  const [appellido, setAppellido] = React.useState(props.person.appellido || "");
  const [telefono, setTelefono] = React.useState(props.person.telefono || "");
  var csrfToken = document.querySelector('meta[name=csrf-token]').getAttribute('content');
  console.log(props.action, props.method) 
      return(
        <>
        <form action={props.action} method='POST'>
        <input type='hidden' name='authenticity_token' value={csrfToken} />
        <input type="hidden" name="_method" value={ props.method } />
          <div className="field">
            <label>Nombre:
              <br />
              <input name='person[nombre]' type="text" value={ nombre } onChange={ event => setNombre(event.target.value)}/>
            </label>
          </div>
        
          <div className="field">
            <label>apellido:
              <br />
              <input name='person[appellido]' type="text" value={ appellido } onChange={ event => setAppellido(event.target.value) }/>
            </label>
          </div>
        
          <div className="field">
            <label>telefono:
              <br />
              <input name='person[telefono]' type="text" value={ telefono } onChange={ event => setTelefono(event.target.value) }/>
            </label>
          </div>
          <br />
          <br />
          
          
        
          <div className="actions">
            <input type='submit' value='Enviar'/>
          </div>
        
        </form>
        </>
      )
    
}

export default PeopleForm



