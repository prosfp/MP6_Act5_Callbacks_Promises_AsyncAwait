// Es defineix una funció findOne que rep 3 paràmetres:
// 1) list: llista de valors;
// 2) Un objecte amb els atributs clau/valor per fer un select;
// 3) Un objecte amb dues funcions com a paràmetre que s'executaran quan el resultat sigui correcte o sigui incorrecte
const findOne = (list, { key, value }, { onSuccess, onError }) => {
  setTimeout(() => {
    // S'executarà la funció al passar 2000 milisegons (2 segons); Simulant l'asincronisme
    const element = list.find((element) => element[key] === value); //Es realitza una cerca a l'array passat per clau i valor
    element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' }); //En cas de trobar-se, s'executa la funció onSuccess amb el paràmetre element; En cas de no trobar-se, s'executa la funció onError amb un missatge
  }, 2000);
};

// Es defineixen les callbacks onSuccess i onError
// En aquest cas són callbacks que s'executen en funció del ternari de la funció findOne
const onSuccess = ({ name }) => console.log(`usuari: ${name}`);
const onError = ({ msg }) => console.log(msg);

// La llista de dades sobre la qual es faran les operacions
const usuaris = [
  {
    name: 'Carlos',
    rol: 'Professor',
  },
  {
    name: 'Ana',
    rol: 'Cap',
  },
];

// Primer exemple d'invocació en el qual a la llista es troba el valor cercat i per tant s'executarà
// la funció onSuccess
console.log('findOne success');
findOne(usuaris, { clau: 'name', valor: 'Carlos' }, { onSuccess, onError });

// Segon exemple d'invocació en el qual a la llista no es troba el valor cercat i per tant s'executarà
// la funció onError

console.log('findOne error');
findOne(usuaris, { clau: 'name', valor: 'Fermin' }, { onSuccess, onError });

/*
  findOne success
  findOne error
   //espera 2 segons
  usuari: Carlos
  ERROR: Element Not Found
  */
