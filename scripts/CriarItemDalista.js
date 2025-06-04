import gerarDiaDaSemana from "./GerarDiaDaSemana.js";
const InputItem = document.getElementById ("input-item");
let contador = 0

export function criarItemDalista () {
     
    if (InputItem.value === "") {
        alert("Por favor, insira um item!");
        return
    }

    const itemDalista = document.createElement ("li");
    const containerItemDaLista = document.createElement ("div");
    containerItemDaLista.classList.add("lista-item-container"); 
    const inputCheckbox = document.createElement ("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++; 
    const nomeItem = document.createElement("p");
    nomeItem.innerText = InputItem.value; 

inputCheckbox.addEventListener("click", function() {
    if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none";
        }
    }
)

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    itemDalista.appendChild(containerItemDaLista);
    const DataCompleta = gerarDiaDaSemana();
  
    const itemData = document.createElement("p");
    itemData.innerText = DataCompleta;
    itemData.classList.add("texto-data");
    itemDalista.appendChild(itemData);

    return itemDalista;
}