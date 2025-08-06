const btnBuscar = document.getElementById("btnBuscar"); 


function modalAlerta()
{
   Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Por favor, preencha o campo para buscar o cep!!",
});
}

function modalErro404(error) {
  Swal.fire({
    icon: "error",
    title: "Erro: 404",
    text: error.message || "Recurso não encontrado",
  });
}

function imprimirDados(data){
     
        Swal.fire({
        text: data,
        imageUrl: 'assets/img/Logo/Logo.svg',
        imageWidth: 90,
        confirmButtonText: 'Voltar'
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
       
          imprimirDados(data);
        
        })
        .catch(error => {
          modalErro404(error);
        }); 
    }
 }

btnBuscar.addEventListener("click", ()=> {  
   
    validarEnviar();


});