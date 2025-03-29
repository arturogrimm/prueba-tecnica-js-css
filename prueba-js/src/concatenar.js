export default (json) => {
  const capitalizar = (str) => str ?
    str.toLowerCase().replace(/(^|\s)\S/g, (letra) => letra.toUpperCase())
    : "";
  
  const nombresCompletos = json.map((persona) => {
    const nombre = capitalizar(persona.nombre);
    const apellido1 = capitalizar(persona.apellido);
    const apellido2 = capitalizar(persona.apellido2);

    return apellido2 ? 
      `${nombre} ${apellido1} ${apellido2}` :
      `${nombre} ${apellido1}`;
      
  })

  return nombresCompletos;
};
