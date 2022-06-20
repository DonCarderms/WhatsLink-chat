

document.addEventListener("DOMContentLoaded", function() {


document.getElementById('#btn').addEventListener("click", function gerarLink(numero) {
   const message = "copiar o link do lado e colar no teu navegador  "
   const api = "https://api.whatsapp.com/send?phone="
   const apiText = "&text="
    
    
    numero = document.getElementById("entrada").value
    const text = document.getElementById("text").value
    if (numero.length < 11 ){     
        alert("informe um número valido")
           
    }else{
        
        document.getElementById("link").value = (api + numero + apiText + text)
    }  
    document.getElementById("entrada").value = " "
    
})




}

) ();


































