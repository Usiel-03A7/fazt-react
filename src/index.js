import React from "react";
import ReactDOM from "react-dom/client"
const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * 
 * @returns  use the tags fragment or tagEmpty 
 */
function Gretting() {

  const user = {
    firstName: 'Usiel',
    lastName: 'Solano'
  }
  return (
    <> 
      <h1>mi nombre es: {user.firstName}</h1>
      <h2>mi apellido es: {user.lastName}</h2>
    </>
  )
}

root.render(

  <Gretting />

)