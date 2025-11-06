function hacerTarea(callback: (mensaje: string) => void) {
  console.log("Estoy haciendo la tarea...");
  setTimeout(function() {
    console.log("Ya terminé la tarea!");
    callback("¡Mamá, ya terminé!"); // <-- le pasamos el mensaje
  }, 2000);
}

function avisarMama(mensaje: string) {
  console.log(mensaje); // ahora recibe y muestra el mensaje
}

hacerTarea(avisarMama);


const hacerTarea2 = (callback: (mensaje: string) => void) => {
  console.log("Estoy haciendo la tarea...");
  setTimeout(() => {
    console.log("Ya terminé la tarea!");
    callback("¡Mamá, ya terminé!");
  }, 2000);
};

hacerTarea2((mensaje) => console.log(mensaje));



    function hacerTarea3(callback: (mensaje: string) => void) {
  console.log("Estoy haciendo la tarea...");

  setTimeout(function() {
    console.log("Ya terminé la tarea!");
    callback("¡Mamá, ya terminé!"); // aquí llamo al callback
  }, 2000);
}

function avisarMama2(mensaje: string) {
  console.log(mensaje);
}

hacerTarea3(avisarMama2);
