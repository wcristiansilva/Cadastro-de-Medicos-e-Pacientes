const tbody = document.querySelector("tbody");
const btnListPatient = document.querySelector("#ListPacientes");

btnListPatient.addEventListener("click", listPatient)

function listPatient (){  
    let listDisplay = document.querySelector('.list-group-patients-viewer-off');
    let display = getComputedStyle(listDisplay)['display'];
    if (display === 'none'){
        listDisplay.style.display = 'block'
    }
}


// mostra na página
const createRow=(patients)=> {
    const newRow = document.createElement("tr")
    newRow.innerHTML = `
        <td>${patients.nome}</td>
        <td>${patients.dataNascimento}</td>
        <td>${patients.dataCadastro}</td>
        <td>
            <button type="button " class="button green">visualizar</button>
            <button type="button " class="button green">editar</button>
            <button type="button " class="button red">excluir</button>
        </td>
    `
    tbody.appendChild(newRow);
}

const loadPatients = (patients) => {
    patients.forEach(createRow);
}


$(document).ready(function() {
    $.getJSON("https://tiagoifsp.ddns.net/clinicaMedica/medicos.php", loadPatients);

});