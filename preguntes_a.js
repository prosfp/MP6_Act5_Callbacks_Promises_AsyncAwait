// Recapitulem sobre callbacks, promeses i async/await

// Anem a suposar que estem en un restaurant-pizzeria i que necessitem els següents passos:
// 1) Demanar la comanda (1 segon)
// 2) Preparar la pizza (6 segons)
// 2.1) Preparar la massa (2 segon)
// 2.2) Preparar els ingredients (2 segon)
// 2.3) Posar al forn (2 segon)
// Podem servir les begudes mentre es prepara la pizza
// 3) Servir les begudes (1 segon)
// 4) Servir la comanda (1 segon)
// 5) Cobrar (1 segon)

//Amb callbacks

/* 

const demanarComanda = (callback) => {
  setTimeout(() => {
    callback();
  }, 1000);
};

const prepararPizza = (callback) => {
  setTimeout(() => {
    callback();
  }, 6000);
};

const prepararMassa = (callback) => {
  setTimeout(() => {
    callback();
  }, 2000);
};

const prepararIngredients = (callback) => {
  setTimeout(() => {
    callback();
  }, 2000);
};

const posarAlForn = (callback) => {
  setTimeout(() => {
    callback();
  }, 2000);
};

const servirBegudes = (callback) => {
  setTimeout(() => {
    callback();
  }, 1000);
};

const servirComanda = (callback) => {
  setTimeout(() => {
    callback();
  }, 1000);
};

const cobrar = (callback) => {
  setTimeout(() => {
    callback();
  }, 1000);
};

// Function to check if pizza and drinks have been eaten together
const checkPizzaAndDrinks = (pizzaEaten, drinksEaten) => {
  if (pizzaEaten && drinksEaten) {
    console.log('Pizza and drinks have been eaten together!');
  } else {
    console.log('Pizza and drinks have not been eaten together yet.');
  }
};

// Ja tenim les funcions creades, ara les executem en ordre
const elMeuRestaurant = () => {
  let dinarServit = false;
  let begudesServides = false;

  demanarComanda(() => {
    console.log('Comanda demanada');
    prepararPizza(() => {
      console.log('Rebem comanda Pizza');
      prepararMassa(() => {
        console.log('Massa preparada');
        prepararIngredients(() => {
          console.log('Ingredients preparats');
          posarAlForn(() => {
            console.log('Pizza al forn');
            servirComanda(() => {
              console.log('Comanda servida');
              dinarServit = true;
              check(dinarServit, begudesServides);
              cobrar(() => {
                console.log('Preparar compte');
              });
            });
          });
        });
      });
    });
  });
  servirBegudes(() => {
    begudesServides = true;
    console.log('Begudes servides');
  });
};

elMeuRestaurant(); 

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// AMB PROMESES
/* 
const demanarComanda = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Comanda demanada');
    }, 1000);
  });
};

const prepararPizza = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Promise.all([prepararMassa(), prepararIngredients(), posarAlForn()])
        .then(() => {
          resolve('Pizza preparada');
        })
        .catch((error) => {
          reject(error);
        });
    }, 6000);
  });
};

const prepararMassa = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Massa preparada');
    }, 2000);
  });
};

const prepararIngredients = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Ingredients preparats');
    }, 2000);
  });
};

const posarAlForn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Pizza al forn');
    }, 2000);
  });
};

const servirBegudes = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Begudes servides');
    }, 1000);
  });
};

const servirComanda = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Comanda servida');
    }, 1000);
  });
};

const cobrar = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Compte preparat');
    }, 1000);
  });
};

// Ja tenim les funcions creades, ara les executem en ordre
const elMeuRestaurant = () => {
  let dinarServit = false;
  let begudesServides = false;

  demanarComanda()
    .then((result) => {
      console.log(result);
      return prepararPizza();
    })
    .then((result) => {
      console.log(result);
      return servirComanda();
    })
    .then((result) => {
      console.log(result);
      dinarServit = true;
      checkPizzaAndDrinks(dinarServit, begudesServides);
      return cobrar();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });

  servirBegudes()
    .then((result) => {
      console.log(result);
      begudesServides = true;
    })
    .catch((error) => {
      console.log(error);
    });
}; 

elMeuRestaurant();
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// AMB ASYNC/AWAIT

// Fent servir les Promeses anteriorment creades, ara les exectuem amb la lògica de async/await

// Totes les

const demanarComanda = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Comanda demanada');
    }, 1000);
  });
};

const prepararPizza = () => {
  return new Promise((resolve, reject) => {
    prepararMassa()
      .then(() => prepararIngredients())
      .then(() => posarAlForn())
      .then(() => {
        resolve('Pizza preparada');
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const prepararMassa = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Massa preparada');
    }, 2000);
  });
};

const prepararIngredients = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Ingredients preparats');
    }, 2000);
  });
};

const posarAlForn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Pizza al forn');
    }, 2000);
  });
};

const servirBegudes = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Begudes servides');
    }, 1000);
  });
};

const servirComanda = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Comanda servida');
    }, 1000);
  });
};

const cobrar = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Preparar compte');
    }, 1000);
  });
};

const elMeuRestaurant = async () => {
  let dinarServit = false;
  let begudesServides = false;

  try {
    const comanda = await demanarComanda();
    console.log(comanda);

    const begudes = await servirBegudes();
    console.log(begudes);

    const pizzaPreparada = await prepararPizza();

    console.log(pizzaPreparada);

    const comandaServida = await servirComanda();
    console.log(comandaServida);

    dinarServit = true;

    const pagament = await cobrar();
    console.log(pagament);

    begudesServides = true;
  } catch (error) {
    console.log(error);
  }
};

elMeuRestaurant();
