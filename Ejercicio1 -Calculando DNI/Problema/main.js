  var numeros=[0,1,2,3,4,5,6,7,8,9,10];
  console.log(numeros);
  numeros.reverse();
  var numero2=[];
<<s                      
  for(var i=0;i <numeros.length;i++)
  {
  if(numeros[i] % 2==0){
  numero2.push(numeros[i]); 
  }
  }
  console.log(numeros2);

  var dni = prompt("Introduce el número del DNI");
  var letra = prompt("Indique la letra en mayusculas");
  var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
  
  // se comprueba que el número está dentro del rango
  while ((dni<0)||(dni>99999999)){
    dni = prompt("El número introducido no es correto (debe estar entre 0 y 99999999), vuelva a digitarlo");
  }  

  // se averigua el cociente del número proporcionado / 23
  var num = dni % 23;
  var letraReal = letras[num];  
  
  // mientras la letra no sea la correcta se seguirá pidiendo la letra correcta
  
  if (letra != letraReal){
    while(letra != letraReal){    
      letra = prompt("La letra es incorrecta, pruebe de nuevo");            
    }
    alert("La letra es correcta");
  }    
  else{
     alert("La letra es correcta");
  } 

  var nombre =["jessica","alondra","javiera","carolina"];
  nombre.push("isabel");
  nombre.push("paula");
  nombre.push("isidora");
  for(var i=0;i<=nombre.length -1; i++){
    console.log(nombre[i]);
  }
 
  //function

  function sumaDos(num1, num2){
    console.log(num1 + num2);
  }
  sumaDos(5,6);

var num1=85
funtion sumaDos(num1,num2)
{
  return(num1+num2);
}
function divideDos(){
  var num1=25

}

var blanca="humano";

function laboratoria()
{
  var blanca="profe";
  return blanca;
}

funtion casa(){
  var blanca="cocinera";
  return blanca;
}
  




