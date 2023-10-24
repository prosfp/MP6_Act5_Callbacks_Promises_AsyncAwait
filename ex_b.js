// Amb les Promeses hem de tenir clar d'entrada la sintaxi:
// Ex:
// const promesa = new Promise((resolve, reject) => {
//   // Codi a executar
//   // ...
//   // Si tot va bé:
//   resolve('Tot ha anat bé');
//   // Si hi ha error:
//   reject('Hi ha hagut un error');
// });
//

// En el cas de findOne necessitem igualment la llista i els paràmetres de cerca
// Però la gestió dels errors i dels resultats es fa amb Promeses:

const findOne = (list, { key, value }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const element = list.find((element) => element[key] === value);
      element ? resolve(element) : reject({ msg: 'ERROR: Element Not Found' });
    }, 2000);
  });
};

// Ja tenim la funció creadora de Promeses, però necessitem les callbacks
// Podem aprofitar les funcions onSuccess i onError que ja tenim creades.

const onSuccess = ({ name }) => console.log(`user: ${name}`);
const onError = ({ msg }) => console.log(msg);

const users = [
  {
    name: 'Carlos',
    rol: 'Teacher',
  },
  {
    name: 'Ana',
    rol: 'Boss',
  },
];

// Fins aqui res a modificar, anem a veure la gestió de promeses amb then i catch
console.log('findOne success');
findOne(users, { key: 'name', value: 'Carlos' }).then(onSuccess).catch(onError);

console.log('findOne error');
findOne(users, { key: 'name', value: 'Fermin' }).then(onSuccess).catch(onError);

// La gestió dels callbacks es fa amb then i catch; ja vam veure que això ens permet
// encadenar promeses i fer un codi molt més llegible i mantenible.

/*
  findOne success
  findOne error
   //wait 2 seconds
  user: Carlos
  ERROR: Element Not Found
  */
