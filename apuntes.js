"use strict"

//Variable (var) para almacenamiento de valores
  var nombre="Héctor";
  //Scope es el espacio que va a alcanzar una variable (global o local)
  var a = 1;
  function global() {
   console.log(a);
  }
  global();
  console.log(a); //En este caso, a es una variable global ya que se puede acceder a ella desde cualquier punto del documento
  
  function local() {
  var a = 2;
  console.log(a);
  }
  local();
  console.log(a); //En este caso, a es una variable local ya que la hemos establecido dentro de una función local
  //Constantes mantienen persistente el dato que contienen
  const nombre="Héctor";

//Diferentes tipos de datos
  //Numéricos
  var numero=36; //Valor numérico
  var numero1="36"; //Valor texto
  var numero2=number(numero1); //Conversión de texto a número
  //Texto o String
  var texto = "Hola";
  var texto1= 'Hola'; //Es indiferente el uso de comillas simples o dobles, pero si se comienza con un tipo hay que acabar con el mismo
  var num=36;
  var numtxt=string(num); //Conversión de número a texto
  //Booleanos TRUE or FALSE
  var boo=true;
  var estado=boolean(100 < 100); //La función boolean te dará un resultado FALSE ya que lo que se encuentra dentro del paréntesis no es correcto
  //Fechas
  var fecha=new Date(); //Actualización de la fecha cada vez que establezcamos la función
  fecha.getDay(); //Valor numérico del día de la semana en el que se enucuentre
  fecha.getDate(); //Valor numérico del día del mes en el que se encuentre
  fecha.getHours(); //Hora de establecimiento de la fecha 
  fecha.setDate(6); //Seleccionar una fecha generandote un valor numérico
  //Simbolos
  var simbolo=symbol(); //Cada simbolo presenta un valor intríseco que nos ayudará a identificarlo

//Diferentes tipos de operadores
  //Atitméticos (siempre obtendremos unn valor numérico)
  var d1=5;
  var d2=10;
    //Suma
    var suma = d1+d2;
    //Resta
    var resta=d1-d2;
    //Multiplicación
    var multi=d1*d2;
    //División
    var div=d1/d2;
    //Resto
    var rest=d1%d2;
    //Incremento
    var incre=d1;
    incremento++;
    //Decremento
    var decre=d1;
    decremento--;
  //Relacionales (siempre obtendremos un valor booleano)
    //Mayor que
    var mayor=d1>d2;
    //Menor que
    var menor=d1<d2;
    //Mayor o igual que
    var mayigual=d1>=d2;
    //Menor o igual que
    var menigual=d1<=d2;
    //Igual que
    var igual=d1==d2;
    //No es igual que o es diferente que
    var dif=d1!=d2;
  //Lógicos
  //Asignación
  //Negativo
  //Concatenación
  //Condicional
  //Tipo de datos
