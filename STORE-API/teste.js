const texto = "Reflorestamento, EsgotoTratado"

let arr = texto.split(', ')

const list = {
    Reflorestamento: "Feito",
    EsgotoTratado: "Em progresso",
    EmissaoDeCarbono: "Não feito",
    EnergiaSustentavel: "Em progresso",
};

const findItem = (object, index) => Object.keys(object).filter(item => item.toString() == index);

for (let i = 0; i < arr.length; i++){
    let coisa = arr[i]
    if (findItem(list, coisa)){        
        imprime(list[coisa]);
    }
}

function imprime(coisa){
  if (coisa === "Feito"){
    console.log("Não multar");
    } else if (coisa === "Em progresso"){
    console.log("Avaliação de progresso")
    } else if (coisa === "Não Feito"){
    console.log("Multa")
    }
}