import React from "react";
const HolaMundo = () => {
  const Hello = "Hola Mundo";
  const isTrue=true;
  return (
    <div className="holaMundo">
      <h1>{Hello}</h1>
      <h2>Curso Esencial de React</h2>
      <img src="https://arepa.s3.amazonaws.com/react.png" alt="React"/>
      {isTrue ? <h4>Esto es verdadero</h4> : <h5>Esto es falso</h5> }
      {isTrue && <h4>Esto es verdadero con </h4>}
    </div>
  );
};
export default HolaMundo;
