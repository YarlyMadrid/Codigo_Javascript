// EJEMPLOS fecha de inicio: 10/12/2019

// lee un número entero y determina cuántos digitos tiene
function ejemplo1for(numero) {
  let cuenta_dig = 0;
  for (var i = 0; numero != 0; i++) {
    numero = Math.floor(numero/10);
    cuenta_dig = cuenta_dig + 1;
  }
  return cuenta_dig;
}

function ejemplo1while(numero) {
  let cuenta_dig = 0;
  let n = 0;
  while (numero != 0) {
    numero = Math.floor(numero/10);
    cuenta_dig = cuenta_dig + 1;
    n = n + 1;
  }
  return cuenta_dig;
}

function ejemplo1dowhile(numero) {
  let cuenta_dig = 0;
  let s = 0;
  do {
    numero = Math.floor(numero/10);
    cuenta_dig = cuenta_dig + 1;
    s = s + 1;
  } while (numero != 0);
  return cuenta_dig
}

function ejemplo2for(numero1,numero2) {
  for (var i = Math.min(numero1,numero2); i <= Math.max(numero1,numero2); i++) {
    console.log(i);
  }
}

function ejemplo2while(numero1, numero2) {
  let n = Math.min(numero1,numero2);
  while (n <= Math.max(numero1,numero2)) {
    console.log(n);
    n = n + 1;
  }
}

function ejemplo2dowhile(numero1, numero2) {
  let s = Math.min(numero1,numero2);
  do {
    console.log(s);
    s = s + 1;
  } while (s <= Math.max(numero1,numero2));
}

function ejemplo3for(numero1,numero2) {

 function contar_digitos(numero) {
   let cuenta_dig = 0;
   for (var i = 0; numero != 0; i++) {
     numero = Math.floor(numero/10);
     cuenta_dig = cuenta_dig + 1;
   }
   return cuenta_dig;
 }

 let dig_num1 = contar_digitos(numero1);
 let dig_num2 = contar_digitos(numero2);

 if (dig_num1 == dig_num2) {
   return "Tienen la misma cantidad de digitos";
 }else if (dig_num1 > dig_num2) {
   return numero1 + " tiene más digitos";
 }else {
   return numero2 + " tiene más digitos";
 }
}

function ejemplo4() {
  let acumulado = 0, conteo = 0, promedio = 0;
  let numero = [];
  numero[0] = parseInt(prompt("Introduzca un numero, y termina dando 0","numeros"));

   while (numero[conteo] != 0) {
     if (numero[conteo] > 0) {
       acumulado = acumulado + numero[conteo];
       conteo = conteo + 1;
     }
     numero[conteo] = parseInt(prompt("Introduzca un numero, y termina dando 0","numeros"));
  }
  promedio = acumulado/conteo;
  console.log(promedio);
}

//sacar el factorial
function ejemplo5(numero) {
  let factorial = 1;
  for (var i = numero; i != 0; i--) {
    factorial = factorial * i;
  }
  return factorial;
}

//calcular el valor de un número elevado a un exponente

function ejemplo6(base,exponente) {
  let resultado = 1;
  for (var i = 1; i <= exponente; i++) {
    resultado = resultado * base;
  }
  return resultado;
}

//EJERCICIOS los empecé el 11/12/2019

function ejercicio1(numero) {
  for (var i = 1; i <= numero; i++) {
    console.log(i);
  }
}

function ejercicio2(numero) {
  for (var i = 0; i <= numero; i=i+2) {
    console.log(i);
  }
}

function ejercicio3(numero) {
  for (var i = 0; i <= numero; i++) {
    if (numero % i == 0) {
      console.log(i);
    }
  }
}

function ejercicio4(numero1,numero2) {
  for (var i = Math.min(numero1,numero2); i <= Math.max(numero1,numero2); i++) {
    console.log(i);
  }
}

function ejercicio5(numero1,numero2) {
    for (var i = Math.min(numero1,numero2); i <= Math.max(numero1,numero2); i++) {
      if (i%10 == 4) {
        console.log(i);
      }
    }
}

function ejercicio6(numero) {
  if ((numero > 99)&&(numero < 1000)) {
    let a,b,c;
    a = Math.floor((numero/100));
    b = Math.floor((numero%100)/10);
    c = numero%10;

    for (var i = 1; i <= a; i++) {
      console.log(i);
    }
    console.log("Segundo ciclo");
    for (var i = 1; i <= b; i++) {
      console.log(i);
    }
    console.log("Tercer ciclo");
    for (var i = 1; i <= c; i++) {
      console.log(i);
    }

  }else {
    return "Digite un numero entero de 3 digitos";
  }
}

function ejercicio7() {
  for (var i = 1; i <= 100; i++) {
    console.log(i);
  }
}

function ejercicio8() {
  for (var i = 20; i <= 200; i++) {
    if (i%2 == 0) {
      console.log(i);
    }
  }
}

function ejercicio9() {
  for (var i = 25; i <= 205; i++) {
    if (i%10 == 6) {
      console.log(i);
    }
  }
}

function ejercicio10(numero){
  let suma = 0;
  for (var i = 1; i <= numero; i++) {
    suma = suma + i;
  }
  return suma;
}

function ejercicio11(numero) {
  if ((numero > 9)&&(numero < 100)) {
    let a,b;
    a = Math.floor((numero/10));
    b = numero%10;

    for (var i = Math.min(a,b); i <= Math.max(a,b); i++) {
      console.log(i);
    }

  }else {
    return "Digite un número entero de dos digitos";
  }
}

function ejercicio12(numero) {
  if ((numero > 99)&&(numero <1000)) {
    let a,b,c;
    a = Math.floor((numero/100));
    b = Math.floor((numero%100)/10);
    c = numero%10;

    let contador = 0;
    let num = [a,b,c];
    for (var i = 0; i <= num.length; i++) {
      if (num[i]==1) {
        contador = contador + 1;
      }
    }

    if (contador >= 1) {
      return "Tiene el digito 1";
    }else {
      return "NO tiene el digito 1";
    }

  }else {
    return "Digite un número entero de tres digitos";
  }
}

function ejercicio13(numero) {
  for (var i = 1; i <= numero; i++) {
    if (i%5 == 0) {
      console.log(i);
    }
  }
}

function ejercicio14() {
  let conteo = 0;
  for (var i = 1; conteo != 20; i++) {
    if (i%3 == 0) {
      console.log(i);
      conteo = conteo + 1;
    }
  }
}

function ejercicio15() {
  let conteo = 0, suma = 0;
  for (var i = 1; conteo != 20; i++) {
    if (i%3 == 0) {
      suma = suma + i;
      conteo = conteo + 1;
    }
  }
  return suma;
}

function ejercicio16(n) {
  let conteo = 0, suma = 0, promedio;
  for (var i = 1; conteo != n; i++) {
    if (i%3 == 0) {
      suma = suma + i;
      conteo = conteo + 1;
    }
  }
  promedio = suma / n;
  return promedio;
}

//continuación 12/12/2019

function ejercicio17(x,y) {

  let conteox = 0, sumax = 0, promediox, conteoy = 0, sumay = 0, promedioy;

  for (let i = 1; conteox != x; i++) {
    if (i%2 == 0) {
      sumax = sumax + i;
      conteox = conteox + 1;
    }
  }
  promediox = sumax / x;

  for (let i = 1; conteoy != y; i++) {
    if (i%5 == 0) {
      sumay = sumay + i;
      conteoy = conteoy + 1;
    }
  }
  promedioy = sumay / y;

  if (promediox > promedioy) {
    return promediox + " es mayor";
  }else if (promediox < promedioy) {
    return promedioy + " es mayor";
  }else {
    return "son iguales los promedios";
  }

}

function ejercicio18(num1,num2) {
  for (let i = Math.min(num1,num2); i <= Math.max(num1,num2); i++) {
    if (i%5 == 0) {
      console.log(i);
    }
  }
}

// saber si un número es primo: ejercicio 19
function numeroPrimo(numero) {
    let contador = 0;

    if (numero == 1) {
      return false;
    }else {
      for (let i = 2; i <= Math.ceil(numero/2); i++) {
        if (numero%i != 0) {
          //console.log(i);
        }else {
          //console.log(i);
          contador = contador + 1;
        }
      }
      if (contador == 0) {
        return true;
      }else {
        return false;
      }
    }
}

// contar digitos de un numero: ejercicio 20
function contarDigitos(numero) {
  let cuenta_dig = 0;
  for (var i = 0; numero != 0; i++) {
    numero = Math.floor(numero/10);
    cuenta_dig = cuenta_dig + 1;
  }
  return cuenta_dig;
}

// sumar los digitos de un número entero: ejercicio 21
function sumarDigitos(numero) {
  let digitosnum = numero.toString();
  let suma = 0;

  for (let i = 0; i < digitosnum.length; i++) {
    suma = suma + parseInt(digitosnum[i]);
  }
  return suma;
}

function ejercicio22(numero) {
  let digitosnum = numero.toString();
  let suma = 0;

  for (let i = 0; i < digitosnum.length; i++) {
    if (parseInt(digitosnum[i])==1) {
        suma = suma + 1;
    }
  }
  return suma;
}

function ejercicio23(numero) {
  let suma = sumarDigitos(numero);
  let sumaPrimo = numeroPrimo(suma);

  if (sumaPrimo == true) {
    return "La suma de los digitos es un número primo";
  }else {
    return "La suma de los digitos NO es un número primo";
  }
}

function ejercicio24(numero) {
  let digitos = numero.toString();
  let suma = 0;

  for (let i = 0; i < digitos.length; i++) {
    if (parseInt(digitos[i])%2 == 0) {
      //console.log(i);
      suma = suma + parseInt(digitos[i]);
    }
  }
  return suma;
}

//fecha de continuación: 14/12/2019

function ejercicio25(numero) {
  let digitos = numero.toString();
  let suma = 0, promedio;

  for (let i = 0; i < digitos.length; i++) {
    suma = suma + parseInt(digitos[i]);
  }
  promedio = suma / digitos.length;
  return promedio;
}

function ejercicio26(numero) {
  let digitos = numero.toString();
  let digitos_separados = [];

  for (let i = 0; i < digitos.length; i++) {
    digitos_separados[i] = parseInt(digitos[i]);
  }
  return Math.max.apply(null, digitos_separados);
}

function ejercicio27(numero1,numero2) {
  let dig_num1 = numero1.toString(), dig_num2 = numero2.toString();

  if (dig_num1.length == dig_num2.length) {
    return "Los numeros tienen la misma cantidad de digitos";
  }else if (dig_num1.length > dig_num2.length) {
    return "El número 1 tiene mayor cantidad de digitos que el número 2";
  }else{
    return "El número 2 tiene mayor cantidad de digitos que el número 1";
  }
}

function ejercicio28(numero1,numero2) {
  let dig_num1 = numero1.toString(), dig_num2 = numero2.toString();
  let suma_num1 = 0, suma_num2 = 0;

  for (let i = 0; i < dig_num1.length; i++) {
    if (numeroPrimo(parseInt(dig_num1[i]))) {
      //console.log(i);
      suma_num1 = suma_num1 + 1;
    }
  }

  for (let i = 0; i < dig_num2.length; i++) {
    if (numeroPrimo(parseInt(dig_num2[i]))) {
      //console.log(i);
      suma_num2 = suma_num2 + 1;
    }
  }

  if (suma_num1 == suma_num2) {
    return "Ambos numeros tiene la misma cantidad de digitos primos";
  }else if (suma_num1 > suma_num2) {
    return "El número 1 tiene más digitos primos";
  }else {
    return "El número 2 tiene más digitos primos";
  }
}

// retome ejercicios el 15/12/2019
function ejercicio29(numero) {
  let digitos = numero.toString();
  return parseInt(digitos[0]);
}

function ejercicio30(numero) {
  let numeros_multi = [];
  for (let i = 1; i < 100; i++) {
    if (numero%i == 0) {
      numeros_multi.push(i);
    }
  }
  return numeros_multi;
}

function ejercicio31() {
  let suma = 0, conteo = 0, promedio = 0, i = 0;
  let numeros ;

  numeros = parseInt(prompt("Digita un número y para digitando cero","Número"));

  while (numeros != 0) {
    if (numeros%10 == 5) {
      suma = suma + numeros;
      //console.log(i);
      conteo = conteo + 1;
    }
    numeros = parseInt(prompt("Digita un número y para digitando cero","Número"));
  }
  promedio = suma / conteo;
  return promedio;
}

function ejercicio31for() {
  let suma = 0, conteo = 0, promedio = 0;
  let numeros = [];

  numeros[0] = parseInt(prompt("Digita un número y para digitando cero","Número"));

  for (let i = 0; numeros[i] != 0; i++) {
    if (numeros[i]%10 == 5) {
      suma = suma + numeros[i];
      console.log(i);
      conteo = conteo + 1;
    }
    numeros[i+1] = parseInt(prompt("Digita un número y para digitando cero","Número"));
  }
  promedio = suma / conteo;
  return promedio;
}

// retomo ejercicios. 21/12/2019

function ejercicio32() {
  let suma = 0, conteo = 0, promedio;
  let numeros = [];

  numeros[0] = parseInt(prompt("Digita un número y para digitando cero", "Numero"));

  for (let i = 0; numeros[i] != 0; i++) {
    if (numeroPrimo(numeros[i])) {
      suma = suma + numeros[i];
      conteo = conteo + 1;
    }
    numeros[i+1] = parseInt(prompt("Digita un número y para digitando cero", "Número"));
  }
  promedio = suma / conteo;
  return promedio;
}

function ejercicio33(numero) {
    let conteo = numero;
    for (let i = numero; numeroPrimo(i) == false; i--) {
      if (numeroPrimo(i) == false) {
        //console.log(i);
        conteo = conteo - 1;
      }
    }
    return conteo;
}

function ejercicio34() {
    let x;
    for (let i = 10; i >= 1; i--) {
      x = 10 - (i-1);
      console.log(x);
    }
}

// retomo de actividades: 27/12/2019

// terminar ejercicio
function ejercicio35(numero1, numero2) {

}

function ejercicio36() {
  for (let i = 1; i <= 10; i++) {
    console.log("5 x "+ i + " = "+i*5);
  }
}

// ejercicio 38
function tablas(numero) {
  for (let i = 1; i < 10; i++) {
    console.log(numero+" x "+ i + " = "+ i*numero);
  }
}

function ejercicio37() {
    for(let i = 1; i <= 10; i++){
        for (let j = 1; j <= 10; j++) {
          document.write(i + " x " + j + " = "+ i*j + "<br />");
        }
        document.write("<br />"+ "<br />");
    }
}

function ejercicio39() {
  let serie = [0,1];
  for (let i = 1; serie[i] < 10000; i++) {
    serie.push((serie[i]+serie[i-1]));
  }
  serie.pop();
  document.write(serie);
  console.log(serie.length);
}

function ejercicio40(numero) {
  let serie = [0,1];
  for(let i = 1; serie[i] < numero; i++){
    serie.push((serie[i]+serie[i-1]));
  }
  if (serie.indexOf(numero) != -1) {
    console.log("El número hace parte de la serie fibonacci");
  }else {
    console.log("El número NO hace parte de la serie fibonacci");
  }
}

function ejercicio41() {
    let serie = [0,1];
    let suma = 1;
    for (let i = 1; serie.length < 100; i++) {
      serie.push((serie[i]+serie[i-1]));
      //console.log(serie);
      suma = suma + serie[i+1];
    }
    return(suma);
}

function ejercicio42(numero) {
  let suma = 1, promedio, contador = 2;
  let serie = [0,1];
  for(let i = 1; serie.length < numero; i++){
    serie.push((serie[i] + serie[i-1]));
    //console.log(serie);
    suma = suma + serie[i+1];
    //console.log(suma);
    contador = contador + 1;
    //console.log(contador);
  }
  promedio = suma / contador;
  return promedio;
}

function ejercicio43a() {
  let contador = 2;
  let serie = [0,1];
  for (let i = 1; serie[i] < 2000; i++) {
    serie.push((serie[i]+serie[i-1]));
    //console.log(serie);
    contador = contador + 1;
    //console.log(contador);
  }
  if (serie[contador-1] > 2000) {
    serie.splice(contador-1,1);
    return serie;
  }else {
    return serie;
  }
}

function ejercicio43b() {
  let contador = 0;
  let serie = [0,1];
  for (let i = 1; serie[i] < 2000; i++) {
    serie.push((serie[i]+serie[i-1]));
    if ((serie[i]>1000)&&(serie[i]<2000)) {
      contador = contador + 1;
    }
  }
  return contador;
}

//ejercicio 44
function factorial(numero) {
  let factorial = 1;
  for (let i = 1; i <= numero; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

// retomo de ejercicios 04/01/2020
function ejercicio45(numero) {
  let factorial = 1, factorialext = [];
  for (let i = 1; i <= numero; i++) {
    for (let j = 1; j <= i; j++) {
      factorial = factorial * j;
    }
    factorialext.push(factorial);
    factorial = 1;
  }
  return factorialext;
}

function ejercicio45Vo2(numero) {
  let factoriales = [];
  for (let i = 1; i <= numero; i++) {
    factoriales.push(factorial(i));
  }
  return factoriales;
}

function ejercicio46(numero) {
  let suma = 0, promedio;
  for (let i = 1; i <= numero; i++) {
    suma = suma + factorial(i);
    console.log(suma);
  }
  promedio = suma / numero;
  return promedio;
}

function ejercicio47(numero) {
  let suma = 0;
  for (let i = 1; i <= numero; i++) {
    suma = suma + factorial(i);
  }
  return suma;
}

function ejercicio48() {
  let contador = 0;
  for (let j = 1; j <= 5; i++) {
    for (let i = 0; i <= 9; i++) {
      document.write(contador + " " + j + "<br />");
      contador = contador + 1;
    }
  }
}

function ejercicio48Bueno(){
  let contador1=1;

    for(let j = 0; j<=9;){
      for(let i = 1; i<=2;i++,j++){
        document.write(j + " " + contador1 + "<br/>");
      }
      contador1++;
  }
}

function ejercicio49() {
  let contador = 1;
  for (let i = 1; i <= 9;) {
    for (let j = 1; j <= 3; i++, j++) {
      document.write(i + " "+ contador + " " + j + "<br/>");
    }
    contador++;
  }
}

function ejercicio50() {
  let contador = 1;
  for (let i = 0; i <= 7;) {
    for (let j = 1; j <= 4; i++, j++) {
      document.write(i + " " + contador + "<br/>")
    }
    contador++;
  }
}
