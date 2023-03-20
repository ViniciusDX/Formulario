const input = document.getElementById("pwd");
const button = document.querySelector("#togglePass");
button.addEventListener('click', togglePass);

function togglePass() {
  if (input.type == "password") {
    input.type = "text";
    button.textContent = "🤩";
  } else {
    input.type = "password";
    button.textContent = "😣";
  }
}

window.onload = function(){
  var hoje = new Date().toISOString().split("T")[0]
  document.getElementsByName("birthDate")[0].setAttribute("max", hoje)
}

document.querySelector("#photo").addEventListener("change", (event)=> {
  console.log(event);
  var arquivo = event.target.files[0]
  var tipoAceito = ["image/jpeg", "image/png"]

  if (arquivo && tipoAceito.indexOf(arquivo.type) === -1) {
    alert("Formato de arquivo não aceito")
    event.target.value = ''
  }
})
