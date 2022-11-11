let arr = [-2,2,-2,2,2,2];

let array = arr.reduce((acumulador, valorAtual) => {
  if(valorAtual >0){
    return acumulador + valorAtual 
  }else{
    return acumulador;
  }
}, 0);

console.log (array);