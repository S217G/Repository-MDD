function espera2Segundos() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("pasaron 2 segundos");
      },2000);
    });
  }
 
 async function operacionawait(){
    console.log("se inicio el programa");
    let resultado = await espera2Segundos();
    console.log(resultado);
    console.log("termino el programa");
  }
  
  operacionawait();