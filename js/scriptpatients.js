const tbody = document.querySelector(".tbody-patients");
const btnListPatient = document.querySelector("#ListPacientes");
const btnCadPatient = document.querySelector("#CadPacientes");

loadFiles = () => {
    fetch("https://ifsp.ddns.net/webservices/clinicaMedica/pacientes.php")
    .then((files) => {
        if (!files.ok) {
            throw Error("ERROR");
        }
        return files.json();
    })
    .then((files) => {
        createRow(files);
    })
    .catch((error) => {
        console.log(error);
    });
}

loadFiles();

btnListPatient.addEventListener("click", () => {
    let listDisplay = document.querySelector('.list-group-patients-viewer-off');
    let display = getComputedStyle(listDisplay)['display'];
    if (display === 'none'){
        listDisplay.style.display = 'block'
        createRow();
    }
});


// mostra na página
const createRow = (patients) => {
    try {
        for (let patient of patients){

            let tr = document.createElement('tr');
            let td;

            // Nome
            td = document.createElement('td');
            td.innerText = patient.nome;
            tr.append(td);

            // Data de Nascimento
            td = document.createElement('td');
            td.innerText = patient.dataNascimento;
            tr.append(td);

            // Data de Cadastro
            td = document.createElement('td');
            td.innerText = patient.dataCadastro;
            tr.append(td);

            // Botões
            td = document.createElement('td');

            td.innerHTML= `<div _ngcontent-xmo-c24="" class="buttons">
                                <button _ngcontent-xmo-c24="" type="button" class="button is-primary">
                                    <span _ngcontent-xmo-c24="">Ver consultas</span>
                                </button>
                                <button _ngcontent-xmo-c24="" type="button" class="button is-warning">
                                    <span _ngcontent-xmo-c24="">Editar</span>
                                </button>
                                <button _ngcontent-xmo-c24="" type="button" class="button is-danger">
                                    <span _ngcontent-xmo-c24="">Excluir</span>
                                </button>
                            </div>`

            tr.append(td);
            tbody.append(tr);

            /* const newRow = document.createElement("tr")
            newRow.classList.add("ng_star_inserted");
            newRow.innerHTML = `
                <td _ngcontent-xmo-c24 >${patients.nome}</td>
                <td _ngcontent-xmo-c24 >${patients.dataNascimento}</td>
                <td _ngcontent-xmo-c24 >${patients.dataCadastro}</td>
                <td _ngcontent-xmo-c24 >
                    <div _ngcontent-xmo-c24 class"buttons">
                        <button type="button " class="button green">visualizar</button>
                        <button type="button " class="button green">editar</button>
                        <button type="button " class="button red">excluir</button>
                    </div>
                </td>
            `
        tbody.appendChild(newRow); */
        }
    } catch (error) {
        return error;
    }
}
