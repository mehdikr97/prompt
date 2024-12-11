const prompt = require('prompt-sync')();
for (let i = 0; i < 90; i++) {
const num1 = prompt("Entrez un nombre : ");

const operateur = prompt("Entrez un opérateur (+, -, *, /, ^, √) : ");

const num2 = prompt("Entrez un autre nombre : ");

switch (operateur) {
    case '+':
        console.log(`Résultat : ${num1 + num2}`);
        break;
    
    case '-':
        console.log(`Résultat : ${num1 - num2}`);
        break;
    
    case '*':
        console.log(`Résultat : ${num1 * num2}`);
        break;
    
    case '/':
        if (num2 === 0) {
            console.log("Erreur : Division par zéro.");
        } else {
            console.log(`Résultat : ${num1 / num2}`);
        }
        break;

    case '^':
        console.log(`Résultat : ${Math.pow(num1, num2)}`);
        break;
    
    case '√': 
        if (num1 < 0) {
            console.log("Erreur ");
        } else {
            console.log(`Résultat : ${Math.sqrt(num1)}`);
        }
        break;

    default:
        console.log("Opérateur invalide !");
}
}