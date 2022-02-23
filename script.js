class Billete 
{
  constructor(nombre, valor, cantidad, fuente)
   {this.nombre = nombre;
    this.valor = valor;
    this.cantidad = cantidad;
    this.imagen = new Image();
    this.imagen.src = fuente;
     }
} 
var caja=[];
caja.push (new Billete ("cincuenta", 50, 20, "50.png") );
caja.push (new Billete ("veinte", 20, 30, "20.png") );
caja.push (new Billete ("diez", 10, 10, "10.png") );

function entregarDinero()
{ 
  var t = document.getElementById("usuario");
  dinero = parseInt(t.value);
          for(var bi of caja)  
        {  
          if (dinero > 0)         
          { 
            div = Math.floor(dinero / bi.valor);
            if   (div > bi.cantidad)
              {
                papeles = bi.cantidad;
              }
             else 
              {
                papeles = div; 
              }  
              entregado.push (new Billete (bi.nombre, bi.valor, papeles, bi.imagen.src) );  
              dinero = dinero - (bi.valor * papeles);
          }
        }     
if (dinero > 0)  
    {resultado.innerHTML = resultado.innerHTML + "Usted retiró:<br/>" 
      for (var e of entregado)
        { if (e.cantidad > 0)
          {
              resultado.innerHTML = resultado.innerHTML + e.cantidad + "de billetes de:" + document.body.appendChild(e.imagen) + ".</br>";
          }  
        }
      resultado.innerHTML = resultado.innerHTML + "<hr/>Usted pidió " + parseInt(t.value) + " pesos. Pero como le cobramos intereses, por lo tanto los " + dinero + " pesos que faltan son nuestros. Gracias!<br/>" + "Usted recibió:" + document.body.appendChild(e.imagen);
    }
    else 
      {  
        for (var e of entregado)
        {
          resultado.innerHTML = resultado.innerHTML + "Usted retiró: " +  e.cantidad + " billetes de $" + e.valor + ".<br/>"; 
        } 
      }
}


var dinero = 0;  
var div = 0;
var papeles = 0;
var entregado = [];

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
resultado = document.getElementById("parrafojs");