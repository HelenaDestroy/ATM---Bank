class Billete 
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
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
              entregado.push (new Billete (bi.valor, papeles) );  
              dinero = dinero - (bi.valor * papeles);
          }
        }     
      document.write("Usted retiró:");  
      if (dinero > 0)  
        {
          for (var e of entregado)
          {
         
          document.write("<br/>" + e.cantidad + " Billetes de $" + e.valor + ".<br/>")
        
        }
          document.write("<hr/>Bien... Usted pidió " + parseInt(t.value) + " pesos. Pero tiene que considerar que le cobramos intereses... <br/>Por lo tanto los " + dinero + " pesos que faltan nos los quedamos nosotros pa' la birra. Gracias!" ); 
          
        }
    else 
      {  
        for (var e of entregado)
          {
            document.write ("<hr/>" + e.cantidad + " billetes de $" + e.valor + "<br/>"); 
          } 
          
      }
  
}
var caja=[];
var entregado = [];  
caja.push (new Billete (50, 20) );
caja.push (new Billete (20, 30) );
caja.push (new Billete (10, 10) );

var dinero = 0;  
var div = 0;
var papeles = 0;

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);







