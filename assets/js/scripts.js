const btnBuscar = document.getElementById("btnBuscar"); 


function modalAlerta()
{
   Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Por favor, preencha o campo para buscar o cep!!",
});
}


function validarEnviar()
 {
const cep = document.getElementById("cep").value;
    if(cep === ''){
       
      modalAlerta();
        
    } else{
        
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
     .then(response => response.text())
        .then(data => {
          
          alert(data);
        })
        .catch(error => {
          console.error('Erro: 404', error);
        }); 
    }
 }

btnBuscar.addEventListener("click", ()=> {  
   
    validarEnviar();


});