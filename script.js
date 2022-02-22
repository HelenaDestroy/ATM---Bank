class Billete 
{
  constructor(n, v, c)
  {
    this.nombre = n;
    this.valor = v;
    this.cantidad = c;
    this.image = new Image();   
    this.image.src= image[this.nombre]
  }
}

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
              entregado.push (new Billete (bi.imagen, bi.valor, papeles) );  
              dinero = dinero - (bi.valor * papeles);
          }
        }     
if (dinero > 0)  
    {resultado.innerHTML = resultado.innerHTML + "Usted retiró:<br/>" 
      for (var e of entregado)
        { if (e.cantidad > 0)
          {
              resultado.innerHTML = resultado.innerHTML + e.cantidad + "de billetes de:" + body.appendChild(this.imagen) + ".</br>";
          }  
        }
      resultado.innerHTML = resultado.innerHTML + "<hr/>Usted pidió " + parseInt(t.value) + " pesos. Pero como le cobramos intereses, por lo tanto los " + dinero + " pesos que faltan son nuestros. Gracias!<br/>" + "Usted recibió:" + document.body.appendChild(this.imagen);
    }
    else 
      {  
        for (var e of entregado)
        {
          resultado.innerHTML = resultado.innerHTML + "Usted retiró: " +  e.cantidad + " billetes de $" + e.valor + ".<br/>"; 
        } 
      }
}

var caja=[];
caja.push (new Billete ("cincuenta", 50, 20) );
caja.push (new Billete ("veinte", 20, 30) );
caja.push (new Billete ("diez", 10, 10) );
var dinero = 0;  
var div = 0;
var papeles = 0;
var entregado = [];

var image ;
image("cincuenta") = "50.png";
image("veinte") = "20.png";
image("diez") = "10.png";

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
resultado = document.getElementById("parrafojs");