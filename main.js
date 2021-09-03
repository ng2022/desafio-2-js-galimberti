// Pedir numero mayor de 1000
let numero = prompt('Ingrese un numero');

if (numero > 1000){
    alert('Es mayor de 1000');
}
else if (numero == 1000){
    alert('Es 1000');
}
else if (numero < 1000){
    alert('Es menor de 1000');
}
else {
    alert('Error');
}


// Pedir un texto mediante prompt
let texto = prompt("Palabra secreta");
if (texto == "Hola"){
    alert("¡Bienvenid@ compañer@!")
}
else {
    alert("Aquí no hay nadie...")
}


// Pedir un numero entre 10 y 50
let numeroEntre = prompt("Ingrese un numero entre 10 y 50");

if ((numeroEntre !='') && ((numeroEntre >=10) && (numeroEntre <=50))){
    alert('¡Ganas!');
}
else {
    alert('!Pierdes!');
}