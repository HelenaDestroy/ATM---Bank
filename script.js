class Billete {
  constructor(v, c){
    this.valor = v,
    this.cantidad= c
  }
}

function entregarDinero()
{
for(bi of caja){  
console.log(bi);
} //ir probando lo que haces
}
var caja=[];
caja.push (new Billete(50, 3));  //AGREGAMOS LOS BILLETES, DEBERIAMOS PODER METERLE CUALQUEIR BILLETE.
caja.push (new Billete(20, 2));
caja.push (new Billete(10, 3));

var dinero = 210; //esto vendra del input user luego
var entregado = []  //variable de array que se comporta igual al de caja pero estos son los que entrego al usuario, no los que tengo en caja, se modificará a medida que modifique el algoritmo.
var div = 0;// inicializamos en 0
var papeles = 0; // empieza en cero

//una vez el usuario elige la cantidad de dinero, cuando pone extraer comienza todo.  necesito id boton
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);



// dinero = 
// entregado = 
// papeles =
// div =
// b.valor
// b.cantidad

// for (b of caja){
// if (dinero < 0){ 
//   return false  //ver que carajo retornaa
// }
// if (dinero < 0){
//   div = Math.floor(dinero / b.valor)
// if (div < b.cantidad){
//   papeles = div;}
// if (div > b.cantidad)
// {
//   papeles = b.cantidad;}
// }
// e.push (new Billete (b.valor, papeles))
// dinero = dinero - (b.valor * papeles)
// }



// var billete50 = 50;
// var billete20 = 20;
// var billete10 = 10;

// billetes50_quetengo = 3;


// prompt("INGRESE EL VALOR A EXTRAER");
// var request_user = prompt.value;

// function cajero(){
// cuantos_de_50 = (request_user / billete50);
// //2.xxxx      =       //  110 / 50
// listo50 = request_user - (Math.floor(cuantos50) * billete50);
//   10 =            110    - (2 *                       50)
// listo20 = (listo50 / billete20);
// 0.5           =  10 / 20
// cuantos_de_10 = (listo20 / billete 10)
// request_user - (Math.floor(cuantos50) * billete10);