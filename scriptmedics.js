const tbody = document.querySelector("tbody");
const btnListMedics = document.querySelector("#ListMedics");

btnListMedics.addEventListener("click", listMedic)

function listMedic (){
    let listDisplay = document.querySelector('.list-group-medics-viewer-off');
    let display = getComputedStyle(listDisplay)['display'];
    if (display === 'none'){
        listDisplay.style.display = 'block'
    }
}


//     "nome": "Doctor Who 2",
//     "dataCadastro": "2022-06-11",
//     "idEspecialidade": 4
//


// mostra na página
const createRow=(medics)=> {
    const newRow = document.createElement("tr")
    newRow.innerHTML = `
        <td>${medics.nome}</td>
        <td>${medics.dataCadastro}</td>
        <td>${medics.idEspecialidade}</td>
        <td>
            <button type="button " class="button green">visualizar</button>
            <button type="button " class="button green">editar</button>
            <button type="button " class="button red">excluir</button>
        </td>
    `
    tbody.appendChild(newRow);
}

const loadMedics = (medics) => {
    medics.forEach(createRow);
}


$(document).ready(function() {
    $.getJSON("https://tiagoifsp.ddns.net/clinicaMedica/medicos.php", loadMedics);

});