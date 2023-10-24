// Anem a veure com resoldre el mateix problema amb async/await:
// Async/Await NO SUBSTITUEIX LES PROMESES, sinó que és una forma de gestionar-les

// La funció findOne, és la funció on es construeix la promesa, la funció asíncrona.
// Aquí no modifiquem res, només afegim la paraula async davant de la funció:

const findOne = (list, { key, value }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const element = list.find((element) => element[key] === value);
      element ? resolve(element) : reject({ msg: 'ERROR: Element Not Found' });
    }, 2000);
  });
};

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

// Canviem la gestió de les promeses amb then i catch per async/await i l'ús de try/catch
// La funció findOne retorna una promesa, per tant, la podem gestionar amb async/await
// findOne ja és una funció async per defecte ja que retorna una promesa.
// Podem crearnos una variable que cridi a la funció findOne i que definir aquesta com async
console.log('findOne success');
let findUser = async () => {
  try {
    const user = await findOne(users, { key: 'name', value: 'Carlos' });
    onSuccess(user);
  } catch (error) {
    onError(error);
  }
};

// O com que la funció findOne ja és async, podem cridar-la directament
console.log('findOne error');
try {
  const user = await findOne(users, { key: 'name', value: 'Fermin' });
  onSuccess(user);
} catch (error) {
  onError(error);
}

// La gestió dels callbacks es fa amb then i catch; ja vam veure que això ens permet
// encadenar promeses i fer un codi molt més llegible i mantenible.

/*
  findOne success
  findOne error
   //wait 2 seconds
  user: Carlos
  ERROR: Element Not Found
  */

// La principal raó per utilitzar async/await és que el codi queda molt més llegible i mantenible
// Això és especialment important quan tenim molts nivells de promeses encadenades
// Ex:
// // Promeses encadenades
// promesa1()
//   .then((resultat1) => {
//     return promesa2(resultat1);
//   })
//   .then((resultat2) => {
//     return promesa3(resultat2);
//   })
//   .then((resultat3) => {
//     return promesa4(resultat3);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//
// // Async/Await
// const resultat1 = await promesa1();
// const resultat2 = await promesa2(resultat1);
// const resultat3 = await promesa3(resultat2);
// const resultat4 = await promesa4(resultat3);
//
