//Criando a Função
function positions(firstPlace, secondPlace, lastPlace){

 //Difinindo Array com as Posições (firstPlace = Primeiro Colocado, secondPlace = Segundo Colocado, lastPlace = Terceiro Colocado)
 let array = [firstPlace, secondPlace, lastPlace];

    //If com todas as possibilidade
    if (firstPlace == "Daniel"){
        return console.log("1ª - Colocado: ", firstPlace), console.log("2ª - Colocado: ", secondPlace), console.log("3ª - Colocado: ", lastPlace); 
    }
    if (secondPlace == "Daniel"){
         firstPlace = array[1];
         secondPlace = array[0];
         lastPlace = array[2];
        return console.log("1ª - Colocado: ", firstPlace), console.log("2ª - Colocado: ", secondPlace), console.log("3ª - Colocado: ", lastPlace); 
    }
    if (lastPlace == "Daniel"){
        firstPlace = array[0];
        secondPlace = array[2];
        lastPlace = array[1];
       return console.log("1ª - Colocado: ", firstPlace), console.log("2ª - Colocado: ", secondPlace), console.log("3ª - Colocado: ", lastPlace); 
   }

}

//Chamando a Função
//Exemplo positions("Rafael", "Manoel", "Daniel");
positions();


// Versão do Codigo Para debug
//Criando a Função
/*
function positions(firstPlace, secondPlace, lastPlace){

    //Difinindo Array com as Posições (firstPlace = Primeiro Colocado, secondPlace = Segundo Colocado, lastPlace = Terceiro Colocado)
    let array = [firstPlace, secondPlace, lastPlace];
   
       //If com todas as possibilidade
       if (firstPlace == "Daniel"){
           return console.log("IF 1"),console.log(array) ,console.log("1° Colocado: ", firstPlace), console.log("2° Colocado: ", secondPlace), console.log("3° Colocado: ", lastPlace); 
       }
       if (secondPlace == "Daniel"){
            firstPlace = array[1];
            secondPlace = array[0];
            lastPlace = array[2];
           return console.log("IF 2"),console.log(array) ,console.log("1° Colocado: ", firstPlace), console.log("2° Colocado: ", secondPlace), console.log("3° Colocado: ", lastPlace); 
       }
       if (lastPlace == "Daniel"){
           firstPlace = array[0];
           secondPlace = array[2];
           lastPlace = array[1];
          return console.log("IF 3"),console.log(array) ,console.log("1° Colocado: ", firstPlace), console.log("2° Colocado: ", secondPlace), console.log("3° Colocado: ", lastPlace); 
      }
   
   }
*/