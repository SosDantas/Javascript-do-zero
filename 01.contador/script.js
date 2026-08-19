const contador = document.getElementById("contador");
const menos = document.getElementById("menos")
const reset= document.getElementById ("reset")
const mais= document.getElementById ("mais")

console.log(contador);

let numero= 0; 

contador.textContent = numero;

menos.addEventListener("click", function() 
{ numero=numero-1;
  contador.textContent = numero;
}); 
reset.addEventListener("click", function(){ 
  numero = 0;
  contador.textContent= numero;
} );
mais.addEventListener("click", function(){
  numero = numero+1;
  contador.textContent = numero;
});


contador.textContent = numero;
