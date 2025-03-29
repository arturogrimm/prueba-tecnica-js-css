export default (json) => {
   
  const edades = json.map(persona => persona.edad)
  const media = edades.reduce((acc, val) => acc + val, 0) / edades.length;

    return media;
  };
  