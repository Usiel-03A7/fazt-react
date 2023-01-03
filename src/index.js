import React from "react";
import ReactDOM from "react-dom/client"
const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * 
 * Funcion que regresa un componente el cual
 * tiene un padre y es retornado para ser usado al llamarlo 
 */
function Gretting() {
  return (
     <div>
       <h1>este es un componente</h1>
     </div>
  )
}
/**
 * root es la variable principal que se declaro con el DOM.
 * render es una funcion del root para mostrar lo que se ponga
 * dentro del parentesis ---> (here)
 */
root.render(
  <div>
    <Gretting/>
  </div>
)