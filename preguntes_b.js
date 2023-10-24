// Exemple de promesa amb then i catch; podem resoldre la promesa
// dins del propi constructor de la promesa...

const getUser = (userId, api) => {
  return new Promise((resolve, reject) => {
    // Make API call to get user data
    api
      .getUser(userId)
      .then((userData) => {
        // Process user data
        const user = processUserData(userData);
        // Resolve with user object
        resolve(user);
      })
      .catch((error) => {
        // Handle error
        console.error('Error getting user:', error);
        // Reject with error object
        reject(error);
      });
  });
};

// Use getUser with different APIs
const user1 = getUser(123, api1);
const user2 = getUser(456, api2);

// ... o bé gestionar-ho des de fora.

// Per exemple una funció makeRquest que rep una url i retorna una promesa
// Si rebem les dades retornem aquestes
// Si no rebem les dades retornem un error

const makeRequest = (url) => {
  return new Promise((resolve, reject) => {
    // fem la request a l'API per obtenir les dades
    const data = request(url);
    // Si rebem les dades resolem la promesa amb les dades
    if (data) {
      resolve(data);
    } else {
      // Si no rebem les dades rebutjem la promesa amb un error
      reject('Error getting data');
    }
  });
};

// Fem la crida a la funció makeRequest
const data = makeRequest('laMevaApi.com')
  .then((data) => {
    // Fem el que vulguem amb les dades
    console.log(data);
  })
  .catch((error) => {
    // Fem el que vulguem amb l'error
    console.log(error);
  });
