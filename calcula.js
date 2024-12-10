const readline = require('readline');
const rl = readline.createInterface(
  process.stdin,
  process.stdout,
);
let num1;
let num2;
function calculatrice(){

    rl.question('Entrez un opérateur (+, -, *, /,^,√) : ', (operateur) =>{
    
rl.question('Entrez un nombre : ', (num1) => {

    rl.question('Entrez un deuxième nombre : ', (num2) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      const add =  a+b ;
      const sub =  a-b ;
      const multi = a*b;
      const div =  a/b ;
      const puiss = Math.pow(a,b) ;


      switch (operateur) {
        case '+':
            console.log("resultat :" + add + '.');
        //  console.log(`Résultat : ${a + b}`);
        
       break;
        case '-':
            console.log("resultat :" + sub + '.');

        //  console.log(`Résultat : ${a - b}`);
          break;
        case '*':
            console.log("resultat :" + multi + '.');

         // console.log(`Résultat : ${a * b}`);
          break;
        case '/':
          if(b==0){
            console.log("errorrrrr yah");
          }else
          console.log("resultat :" + div + '.');

           // console.log(`Résultat : ${a / b}`);
          break;
          case '^':
            console.log("resultat :" + puiss + '.');

            //console.log(`Résultat : ${Math.pow(a, b)}`) ;
          break;
          case '√':console.log(`Résultat : ${Math.sqrt(a, b)}`) ;
          break;


        default:
          console.log("Opérateur invalide !");
      }
      calculatrice();
    });
  });
});}
calculatrice();