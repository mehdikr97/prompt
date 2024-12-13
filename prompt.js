
const prompt = require('prompt-sync')();

for (let i = 0; i < 900; i++) {
    const operateur = prompt("Entrez un opérateur (+, -, *, /, ^, <,!) : ");
    
    
    
    switch (operateur) {
        case '+':
             num1 = prompt("Entrez un nombre : ");
           num2 = prompt("Entrez un autre nombre : ");
    add = parseFloat(num1)+parseFloat(num2);
            console.log(`Résultat : ${add}`);
            break;
        
        case '-': 
             num1 = prompt("Entrez un nombre : ");
    num2 = prompt("Entrez un autre nombre : ");
            console.log(`Résultat : ${num1 - num2}`);
            break;
        
        case '*':
               num1 = prompt("Entrez un nombre : ");
    num2 = prompt("Entrez un autre nombre : ");
            console.log(`Résultat : ${num1 * num2}`);
            break;
        
        case '/':
          num1 = prompt("Entrez un nombre : ");
     num2 = prompt("Entrez un autre nombre : ");
            if (num2 === 0) {
                console.log("Erreur : Division par zéro.");
            } else {
                console.log(`Résultat : ${num1 / num2}`);
            }
            break;
    
        case '^':
                 num1 = prompt("Entrez un nombre : ");
     num2 = prompt("Entrez un autre nombre : ");
            console.log(`Résultat : ${Math.pow(num1, num2)}`);
            break;
        
        case '<': 
          num1 = prompt("Entrez un nombre : ");
            if (num1 < 0) {
                console.log("Erreur ");
            } else {
                console.log(`Résultat : ${Math.sqrt(num1)}`);
            }
            break;
            case '!': 
    num1 = prompt("Entrez un nombre : ");
    num1 = parseInt(num1);
        console.log(`Résultat : ${factoriel(num1)}`); V  
    break;
        default:
            console.log("Opérateur invalide !");
    }
    }