function prepararMasa(){
    console.log('1. Preparar masa');
}

function agregarIngredientes(){
    // console.log('2. Agregar ingredientes');

    // function agregarIngredientes(){
    //     console.log('2. Agregar ingredientes');
    // }
    // setTimeout(agregarIngredientes,1000)

    let promesaEntregaIngredientes = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Aquí esta tu pedido');
            reject('Lo siento se me averió');
        },1000)
    }) 

    promesaEntregaIngredientes
        .then(() => {
            console.log('2. Agregar ingredientes');
        })
        .catch((error)=>{
            console.log(error);
        });
}

function hornear(){
    console.log('3. Hornear');
}

function servir(){
    console.log('4. Servir');
}

prepararMasa();
agregarIngredientes();
hornear();
servir();