//Anem a veure també de quina manera podem cridar a la funció findOne
//de manera recursiva i en paral·lel.

// Tenim la nostra funció findOne que retorna una promesa

const findOne = (list, { key, value }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const element = list.find((element) => element[key] === value);
      element ? resolve(element) : reject({ msg: 'ERROR: Element Not Found' });
    }, 2000);
  });
};

// I tenim una llista de users
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

// Anem a provar en paral·lel de comprovar si som capaços de trobar alguna coincidència
// a la nostra llista d'entre tres usuaris diferents que passarem.

// Per tal de fer aquesta comprovació en paral·lel necessitem Promise.all

// Promise.all rep un array de promeses i retorna una promesa que s'executa quan totes
// les promeses que rep s'han resolt. Només que una de les promeses falli, la promesa
// retornada per Promise.all també fallarà.

async function buscaUsuari() {
  try {
    const user = await Promise.all([
      findOne(users, { key: 'name', value: 'Carlos' }),
      findOne(users, { key: 'name', value: 'Fermin' }),
      findOne(users, { key: 'name', value: 'Ana' }),
    ]);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

//buscaUsuari();

// També existeix promise.allSettled que retorna una promesa que s'executa quan totes
// les promeses que rep s'han resolt, independentment de si han fallat o no.
// Aquesta promesa retorna un array amb els resultats de totes les promeses que ha rebut.

async function buscaUsuari2() {
  try {
    const user = await Promise.allSettled([
      findOne(users, { key: 'name', value: 'Carlos' }),
      findOne(users, { key: 'name', value: 'Fermin' }),
      findOne(users, { key: 'name', value: 'Ana' }),
    ]);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

buscaUsuari2();

//Array que retorna Promise.allsettle
// [
//     { status: 'fulfilled', value: { name: 'Carlos', rol: 'Teacher' } },
//     { status: 'rejected', reason: { msg: 'ERROR: Element Not Found' } },
//     { status: 'fulfilled', value: { name: 'Ana', rol: 'Boss' } }
// ]
