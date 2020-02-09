// Fecha de inicio: 11/11/2019

function ejercicio1(numero) {
  if ((numero % 10) == 4)
  {
    //document.write("El número termina en 4");
    console.log("El número termina en 4");
  }else
  {
    //document.write("El número no termina en 4");
    console.log("El número NO termina en 4");
  }
}

function ejercicio2(numero) {
  if((numero >= 100 )&&( numero <= 999 ))
  {
    console.log("El número tiene 3 dígitos");
  }else {
    console.log("El número NO tiene 3 dígitos");
  }
}

function ejercicio3(numero){
  if (numero < 0) {
    console.log("El número es negativo");
  }else {
    console.log("El número NO es negativo");
  }
}

function ejercicio4(numero){
  var x = Math.floor(numero/10);
  var y = numero%10;
  var z = x+y;
  console.log("la suma de los digitos es: " + z );
}

function ejercicio5(numero){
  var x = Math.floor(numero/10);
  var y = numero%10;
  if ((x%2 == 0 ) && (y%2 == 0 )) {
    console.log("Ambos dígitos son pares");
  }else {
    console.log("Alguno de los digitos NO es par")
  }
}

function ejercicio5Vo2(numero){
  var x = Math.floor(numero/10);
  var y = numero%10;
  if ((x%2 == 0 ) && (y%2 == 0 )) {
    console.log("Ambos dígitos son pares");
  }else if((x%2 == 0 ) && (y%2 != 0 )){
    console.log("El digito par es: " + x + " pero el dígito: " + y + " NO es par");
  }else if ((x%2 != 0 ) && (y%2 == 0 )) {
    console.log("El digito par es: " + y + " pero el dígito: " + x + " NO es par");
  }else {
    console.log("Ambos digitos son impares");
  }
}

function ejercicio6(numero){
  if (numero <= 20) {
    var numerosprimos = [2,3,5,7,11,13,17,19];
    if (numerosprimos.indexOf(numero) == -1) {
      console.log("NO es un número primo");
    }else {
      console.log("Es un número primo")
    }
  }else {
    console.log("Indicar un número menor a 20");
  }
}

function ejercicio7(numero){
  if ((numero <= 100)&&(numero > 0)) {
    var numerosprimos = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
    if (numerosprimos.indexOf(numero) == -1) {
      console.log("NO es un número primo");
    }else {
      console.log("Es un número primo");
    }
  }else if(numero < 0) {
    console.log("El número es negativo y no es primo");
  }else if (numero > 100) {
    console.log("Digite un número menor a 100");
  }
}

function ejercicio8(numero){
  if((numero > 0) && (numero < 100)){
    var num1 = Math.floor(numero/10);
    var num2 = numero%10;
    var numerosprimos = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
    if ((numerosprimos.indexOf(num1) != -1) && (numerosprimos.indexOf(num2) != -1)) {
        console.log("El número " + num1 + " y el número " + num2 + " Son primos");
        return(true);
      }else if((numerosprimos.indexOf(num1) != -1) && (numerosprimos.indexOf(num2) == -1)){
          console.log("Solo el número " + num1 + " es primo");
          return(false);
        } else if ((numerosprimos.indexOf(num1) == -1) && (numerosprimos.indexOf(num2) != -1)) {
            console.log("Solo el número " + num2 + " es primo");
            return(false);
          } else if ((numerosprimos.indexOf(num1) == -1) && (numerosprimos.indexOf(num2) == -1)) {
              console.log("Los números " + num1 + " y " + num2 + " no son primos");
              return(false);
            }
  } else {
    console.log("Digite un número de dos digitos o mayor a cero");
  }
}

function ejercicio9(numero){
  if ((numero > 0) && (numero < 100)) {
    var num1 = Math.floor(numero/10);
    var num2 = numero%10;
    if ((num1 % num2 == 0) && (num2 % num1 == 0)) {
      console.log("Ambos números son multiplos el uno del otro");
    }else if ((num1 % num2 == 0) && (num2 % num1 != 0)) {
      console.log("El número " + num1 + " es multiplo de " + num2 + ", pero " + num2 + " no es multiplo de "+ num1);
    }else if ((num1 % num2 != 0) && (num2 % num1 == 0)) {
      console.log("El número " + num2 + " es multiplo de " + num1 + ", pero " + num1 + " no es multiplo de " + num2);
    }else if ((num1 % num2 != 0) && (num2 % num1 != 0)) {
      console.log("Ambos números no son multiplos el uno del otro");
    }
  }else {
    console.log("Digite un número de dos digitos mayor a cero");
  }
}

function ejercicio10(numero) {
  if ((numero > 0) && (numero < 100)) {
    var num1 = Math.floor(numero/10);
    var num2 = numero%10;
    if (num1 == num2) {
      console.log("Los digitos son iguales");
    } else {
      console.log("Los digitos no son iguales");
    }
  }else {
    console.log("Digite un número de dos digitos mayor a cero")
  }

}

function ejercicio11(numero1, numero2) {
  if (numero1 > numero2) {
    console.log(numero1 + ">" + numero2);
  }else {
    console.log(numero1 + "<" + numero2);
  }
}

function ejercicio12 (numero1, numero2) {
  if (((numero1 > 0) && (numero1 < 100)) && ((numero2 > 0) && (numero2 < 100))) {

    var dig11 = Math.floor(numero1/10);
    var dig12 = numero1%10;
    var dig21 = Math.floor(numero2/10);
    var dig22 = numero2%10;

    var arraynum1 = [dig11, dig12];
    if ((arraynum1.indexOf(dig21) != -1) && (arraynum1.indexOf(dig22) != -1)) {
      console.log("ambos números tienen digitos comunes");
    }else if ((arraynum1.indexOf(dig21) != -1) && (arraynum1.indexOf(dig22) == -1)) {
      console.log("el digito " + dig21 + " está en ambos números");
    }else if ((arraynum1.indexOf(dig21) == -1) && (arraynum1.indexOf(dig22) != -1)) {
      console.log("el digito " + dig22 + " está en ambos números" );
    }else if ((arraynum1.indexOf(dig21) == -1) && (arraynum1.indexOf(dig22) == -1)) {
      console.log("no hay digitos comunes en ambos números");
    }
  }else {
    console.log("Digite dos numeros de dos digitos mayores a cero");
  }
}

function ejercicio13 (numero1, numero2) {
  if (((numero1 > 0) && (numero1 < 100)) && ((numero2 > 0) && (numero2 < 100))) {
    if( ((numero1+numero2)%2) == 0 ){
      return(true);
    }else {
      return(false);
    }
  }else {
    console.log("Digite dos números de dos digitos mayores a cero");
  }
}

function ejercicio14(numero1,numero2) {
  if (((numero1 > 0) && (numero1 < 100)) && ((numero2 > 0) && (numero2 < 100))) {
    var dig11 = Math.floor(numero1/10);
    var dig12 = numero1%10;
    var dig21 = Math.floor(numero2/10);
    var dig22 = numero2%10;
    var suma = dig11 + dig12 + dig21 + dig22;
    return(suma);
  } else {
    console.log("Digite dos números de dos digitos mayores a cero");
  }
}

function ejercicio15(numero1,numero2) {
  if (((numero1 > 99) && (numero1 < 1000)) && ((numero2 > 99) && (numero2 < 1000))) {
    var dig11 = Math.floor(numero1/100);
    var dig12 = Math.floor((numero1%100)/10);
    var dig13 = numero1%10;
    var dig21 = Math.floor(numero2/100);
    var dig22 = Math.floor((numero2%100)/10);
    var dig23 = numero2%10;

    var suma = dig11 + dig12 + dig13 + dig21 + dig22 + dig23;
    return(suma);
  }else {
    console.log("Digite un número positivo de tres digitos")
  }
}

function ejercicio16(numero) {
  if ((numero > 99) && (numero < 1000)) {
    var dig11 = Math.floor(numero/100);
    var dig12 = Math.floor((numero%100)/10);
    var dig13 = numero%10;
    if ((dig11 == dig12) || (dig11 == dig13) || (dig12 == dig13)) {
      console.log("Al menos dos de sus tres digitos son iguales");
      return(true);s
    }else {
      console.log("No hay digitos iguales");
      return(false);
    }
  }else {
    console.log("digite un número positivo de tres digitos")
  }
}

function ejercicio17(numero) {
  if ((numero>99) && (numero<1000)) {
    var dig11 = Math.floor(numero/100);
    var dig12 = Math.floor((numero%100)/10);
    var dig13 = numero%10;
    var arraynumeros = [dig11,dig12,dig13];
    var mayor = Math.max.apply(null,arraynumeros);
    var posicion = arraynumeros.indexOf(mayor);
    return(posicion + 1);
  }else {
    console.log("Digitar un número positivo de tres digitos");
  }
}

function ejercicio18(numero) {
  if ((numero>99) && (numero<1000)) {
    var a = Math.floor(numero/100);
    var b = Math.floor((numero%100)/10);
    var c = numero%10;
    if ((a%b == 0) || (a%c == 0) || (b%c == 0) || (b%a == 0) || (c%a == 0) || (c%b == 0)) {
      return(true);
    }else {
      return(false);
    }
  }else {
    console.log("Digital un número positivo de tres digitos");
  }
}

function ejercicio19(num1,num2,num3) {
    if ((num1>=0) && (num2>=0) && (num3>=0)) {
      var mayor = Math.max(num1,num2,num3);
      return(mayor);
    }else {
      console.log("Digite un numero entero mayor a cero");
}
}

function ejercicio20 (num1,num2,num3){
  if ((num1>=0) && (num2>=0) && (num3>=0)) {
    var numeros = [num1,num2,num3];
    var ordenados = numeros.sort();
    return(ordenados);
  }else {
    console.log("Digite un numero entero mayor a cero");
}
}

function ejercicio21(numero1,numero2,numero3) {
  if (((numero1>9) && (numero1<100)) && ((numero2>9) && (numero2<100)) && ((numero3>9)&&(numero3<100))) {
    var a = Math.floor(numero1/10);
    var b = numero1%10;
    var c = Math.floor(numero2/10);
    var d = numero2%10;
    var e = Math.floor(numero3/10);
    var f = numero3%10;

    var mayor = Math.max(a,b,c,d,e,f);

    if((mayor == a) || (mayor == b)){
      return(numero1);
    } else if((mayor == c)|| (mayor == d)){
      return(numero2);
    } else if((mayor == e) || (mayor == f)){
      return(numero3);
    }
  }else {
    console.log("Digite un tres numeros enteros de dos digitos");
}
}

function ejercicio22(numero) {
  if ((numero > 99) && (numero < 1000)) {
    var a = Math.floor(numero/100);
    var b = Math.floor((numero%100)/10);
    var c = numero%10;

    if (a==c) {
      return(true);
    } else {
      return(false);
    }
  }else {
    console.log("Digitar un número entero de tres digitos");
  }
}

function ejercicio23(numero) {
  if ((numero>99) && (numero<1000)) {
    var primos = [2,3,5,7];
    var a = Math.floor(numero/100);
    var b = Math.floor((numero%100)/10);
    var c = numero%10;

    if ((primos.indexOf(a) != -1) && (primos.indexOf(b) != -1) && (primos.indexOf(c) != -1)) {
      return(3);
    }else if ((primos.indexOf(a) == -1) && (primos.indexOf(b) == -1) && (primos.indexOf(c) == -1)) {
      return(0);
    } else if ((primos.indexOf(a) != -1) || (primos.indexOf(b) != -1) || (primos.indexOf(c) != -1)) {
      var suma = 0;
      primos.indexOf(a) != -1 ? suma = suma + 1: suma = suma;
      primos.indexOf(b) != -1 ? suma = suma +1: suma = suma;
      primos.indexOf(c) != -1 ? suma = suma +1: suma = suma;
      return(suma);
    }
  }else {
    console.log("Digitar un numero entero de tres digitos");
  }
}

function ejercicio23Vo2(numero) {
  if ((numero>99) && (numero<1000)) {
    var primos = [2,3,5,7];
    var a = Math.floor(numero/100);
    var b = Math.floor((numero%100)/10);
    var c = numero%10;

    var suma = 0;
    primos.indexOf(a) != -1 ? (suma = suma + 1): (suma = suma);
    primos.indexOf(b) != -1 ? (suma = suma + 1): (suma = suma);
    primos.indexOf(c) != -1 ? (suma = suma + 1): (suma = suma);
    return(suma);

  }else {
    console.log("Digitar un numero entero de tres digitos");
  }
}

function ejercicio24(numero) {
  if ((numero>99)&&(numero<1000)) {
    var a = Math.floor(numero/100);
    var b = Math.floor((numero%100)/10);
    var c = numero%10;
    var suma = 0;

    a%2 == 0 ? suma = suma + 1 : suma = suma;
    b%2 == 0 ? suma = suma + 1 : suma = suma;
    c%2 == 0 ? suma = suma + 1 : suma = suma;

    return(suma);

  }else {
    console.log("Digite un número entero de tres digitos");
  }

}

function ejercicio25(numero) {
  if ((numero>99)&&(numero<1000)) {
    var a = Math.floor(numero/100);
    var b = Math.floor((numero%100)/10);
    var c = numero%10;
    var resultado;

    a == b + c ? resultado = "Los digitos: " + b + " y " + c + " son iguales a: " + a : resultado = resultado;
    b == a + c ? resultado = " " + a + " y " + c + " son iguales a: " + b: resultado = resultado;
    c == a + b ? resultado = " " + a + " y " + b + " son iguales a: " + c: resultado = resultado;

    return(resultado);

  }else {
    console.log("Digite un número entero de tres digitos");
  }
}

function ejercicio26(numero){
  if ((numero>999)&&(numero<10000)) {
    var a = Math.floor(numero/1000);
    var b = Math.floor((numero%1000)/100);
    var c = Math.floor((numero%100)/10);
    var d = numero%10;

    var suma = a + b + c + d;
    return(suma);

  }else {
    console.log("Digite un número entero de cuatro digitos");
  }

}

function ejercicio27(numero) {

  if ((numero>999)&&(numero<10000)) {
    var a = Math.floor(numero/1000);
    var b = Math.floor((numero%1000)/100);
    var c = Math.floor((numero%100)/10);
    var d = numero%10;

    var suma = 0;

    a%2 == 0 ? suma = suma + 1 : suma = suma;
    b%2 == 0 ? suma = suma + 1 : suma = suma;
    c%2 == 0 ? suma = suma + 1 : suma = suma;
    d%2 == 0 ? suma = suma + 1 : suma = suma;

    return(suma);

  }else {
    console.log("Digite un número entero de cuatro digitos");
  }
}


function ejercicio28(numero) {
  if ((numero>1)&&(numero<51)) {
    var numerosprimos = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
    var resultado;
    numerosprimos.indexOf(numero) != -1 ? resultado = true : resultado = false;
    return(resultado);
  }else {
    console.log("Digite un numero entero menor que 50 y positivo");
  }
}

// 19/11/2019

function ejercicio29(numero) {
  if ((numero>9999)&&(numero<100000)) {
    var a = Math.floor(numero/10000);
    var b = Math.floor((numero%10000)/1000);
    var c = Math.floor((numero%1000)/100);
    var d = Math.floor((numero%100)/10);
    var e = numero%10;
    var resultado;

    if (a == e) {
       resultado = true;
       b == d ? resultado = true : resultado = false;
    } else {
      resultado = false;
    }

    return(resultado);

  }else {
    console.log("Digite un numero entero de cinco digitos")
  }
}

function ejercicio30(numero) {
  if ((numero>999)&&(numero<10000)) {
    var b = Math.floor((numero%1000)/100);
    var c = Math.floor((numero%100)/10);
    var resultado;
    b == c ? resultado=true : resultado=false;
    return(resultado);
  }else {
    console.log("Digite un numero entero positivo de cuatro digitos")
  }
}

function ejercicio31(numero) {
  var resultado;
  numero == 10 ? resultado=true : resultado=false;
  return(resultado);
}

function ejercicio32(numero) {
  var resultado;
  numero%7 == 0  ? resultado=true : resultado=false;
  return(resultado);
}

function ejercicio33(numero) {
  var a = numero%10;
  var resultado;
  (a == 7) || (a == -7) ? resultado=true : resultado=false;
  return(resultado);
}

function ejercicio34(numero) {
  if ((numero>=0)&&(numero<1000)) {
    var resultado;
    if ((numero>99)&&(numero<1000)) {
      resultado = 3;
    }else if ((numero>9)&&(numero<100)) {
      resultado = 2;
    }else if ((numero>=0)&&(numero<10)) {
      resultado = 1;
    }
    return(resultado);
  }else {
    console.log("Digite un numero entero positivo menor que 1000");
  }
}

function ejercicio35(numero) {
  if ((numero>9)&&(numero<100)) {
    var a = Math.floor(numero/10);
    var b = numero%10;
    var resultado = [a,b];
    return(resultado);
  }else {
    console.log("Digite un numero entero de dos digitos");
  }
}

function ejercicio36(numero) {
  if ((numero>999)&&(numero<10000)) {
    var a = Math.floor(numero/1000);
    var b = Math.floor((numero%1000)/100);
    var c = Math.floor((numero%100)/10);
    var d = numero%10;

    var pares = 0, impares = 0, resultado;

    a%2 == 0 ? pares = 1 : impares = 1;
    b%2 == 0 ? pares = pares + 1: impares = impares + 1;
    c%2 == 0 ? pares = pares + 1: impares = impares + 1;
    d%2 == 0 ? pares = pares + 1: impares = impares + 1;

    if (pares == impares) {
      resultado = "tienen la misma cantidad de pares e impares";
    }else if (pares > impares) {
      resultado = "tiene mas pares: " + pares;
    }else if (pares < impares) {
      resultado = "tiene mas impares: " + impares;
    }
    return(resultado);
  } else {
    console.log("Digite un numero entero de 4 digitos");
  }
}

// continuación 20/11/2019
function ejercicio37(numero1,numero2) {
  var resultado;
  numero1%numero2 == 0 ? resultado = numero1 + " es multiplo de " + numero2:((numero2%numero1 == 0) ? resultado = numero2 + " es multiplo de " + numero1: resultado = "no son multiplos");
  return(resultado);
}

function ejercicio38(numero1,numero2,numero3) {
  var a = numero1%10;
  var b = numero2%10;
  var c = numero3%10;
  var resultado = [a,b,c];
  ((a == b) && (b == c)) ? resultado = true : resultado = false;
  return(resultado);
}

function ejercicio39(numero1,numero2,numero3) {
  if (((numero1>99)&&(numero1<1000))&&((numero2>99)&&(numero2<1000)) && ((numero3>99)&&(numero3<1000))) {
    var a = Math.floor((numero1%100)/10);
    var b = Math.floor((numero2%100)/10);
    var c = Math.floor((numero3%100)/10);
    var resultado;

    if ((a == b)&&(b == c)) {
      resultado = true;
    }else {
      resultado = false;
    }
    return(resultado);

  } else {
    console.log("Digite tres numeros enteros positivos de tres digitos");
  }
}

function ejercicio40(numero1,numero2) {
  if (((numero1-numero2) > 0) || ((numero1-numero2) >= 10)) {
    for (var i = Math.min(numero1,numero2); i <= Math.max(numero1,numero2); i++) {
      console.log(i);
    }
  }else {
    console.log("Digite dos numeros tales que la resta de menor a 10");
  }
}

function ejercicio41(numero1,numero2) {
  if (((numero1>9)&&(numero1<100)) && ((numero1>9)&&(numero1<100))) {
    var numerosprimos = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
    if (numerosprimos.indexOf(Math.abs(numero1-numero2)) != -1) {
      console.log("La diferencia es un numero primo");
    } else {
      console.log("La diferencia NO es un numero primo");
    }
  }else {
    console.log("Digite dos numeros enteros positivos de dos digitos");
  }
}

function ejercicio42(numero1,numero2) {
  if ((Math.abs(numero1-numero2) % 2) == 0) {
    console.log("La diferencia es un numero par");
  }else {
    console.log("La diferencia NO es un numero par");
  }
}

function ejercicio43(numero1,numero2) {
  var a = Math.abs(numero1-numero2);
  if (((numero1%a) == 0) || ((numero2%a) == 0)) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function ejercicio44(numero) {
  if((numero>999)&&(numero<10000)){
    var a = Math.floor((numero/1000));
    var b = Math.floor((numero%1000)/100);
    var c = Math.floor((numero%100)/10);
    var d = numero%10;

    var resultado;

    if (((a%b) == 0)||((a%c) == 0)||((a%d) == 0)) {
      resultado = true;
    }else {
      resultado = false;
    }
    return(resultado);
  }else {
    console.log("Digite un numero entero positivo de 4 digitos")
  }
}

function ejercicio45(numero) {
  if ((numero>9)&&(numero<100)) {
    var a = Math.floor(numero/10);
    var b = numero%10;
    var resultado;
    if ((numero%2) == 0) {
      resultado = a + b;
    } else if (((numero%5)== 0) && (numero<30)) {
      resultado = a
    }else {
      resultado = "No pasa nada";
    }
    return(resultado);
  } else {
    console.log("Digite un numero entero positivo de dos cifras");
  }
}

function ejercicio46(numero) {
  if ((numero>9)&&(numero<100)) {
    var a = Math.floor(numero/10);
    var b = numero%10
    var resultado;

    if (b == 1) {
      resultado = a;
    }else if (b == 2) {
      resultado = a + b;
    }else if (b == 3) {
      resultado = a * b;
    }else {
      resultado = "No pasa nada"
    }
    return(resultado);
  }else {
    console.log("Digite un numero entero positivo de dos cifras");
  }
}

function ejercicio47(numero1,numero2) {
  if (((numero1>9)&&(numero1<100)) && (numero2>9)&&(numero2<100) ) {
    var a = Math.floor(numero1/10);
    var b = numero1%10;
    var c = Math.floor(numero2/10);
    var d = numero2%10;
    var primos = [2,3,5,7];
    var resultado;

    if ((Math.abs(numero1-numero2) % 2) == 0) {
      resultado = a + b + c + d;
    }else if (primos.indexOf(Math.abs(numero1-numero2)) != -1) {
      resultado = a * b * c * d;
    }else if (((numero1-numero2)%10) == 4) {
      resultado = [a,b,c,d];
    }else {
      resultado = "No pasa nada";
    }
    return(resultado);

  }else {
    console.log("Digite dos numeros enteros positivos de dos digitos cada uno");
  }
}

function ejercicio48(numero) {
  if ((numero>0)&&(numero<100)) {
    var numerosprimos = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
    var resultado;

    numerosprimos.indexOf(numero) != -1 ? resultado = true : resultado = false;
    return(resultado);

  }else {
    console.log("Digite un numero entero menor a 100");
  }
}

function ejercicio49(numero) {
  var numerosprimos = [2,3,5,7];
  var a = numero%10;
  var resultado;
  if ((numero % 4) == 0) {
    numerosprimos.indexOf(a) != -1 ? resultado = true : resultado = false;
  }else {
    console.log("No es multiplo de 4");
  }
  return(resultado);
}

function ejercicio50(numero) {
  if ((numero<100)) {
    var resultado;
    if((numero % 4) == 0){
      resultado = numero/2;
    }else if ((numero % 5) == 0) {
      resultado = Math.pow(numero,2);
    }else if ((numero % 6) == 0) {
      resultado = Math.floor(numero/10);
    }else {
      resultado = "No pasa nada";
    }
    return(resultado);
  }else {
    console.log("Digitar un numero menor que 100")
  }


}
