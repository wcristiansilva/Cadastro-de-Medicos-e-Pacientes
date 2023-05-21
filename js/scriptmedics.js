const tbodyMedic = document.querySelector(".tbody-medics");
const btnListMedics = document.querySelector("#ListMedics");
const btnCadMedics = document.querySelector("#CadMedics");

loadFiles = () => {
    fetch("https://ifsp.ddns.net/webservices/clinicaMedica/medicos")
    .then((files) => {
        if (!files.ok) {
            throw Error("ERROR");
        }
        return files.json();
    })
    .then((files) => {
        createRowMedics(files);
    })
    .catch((error) => {
        console.log(error);
    });
}

loadFiles();


btnListMedics.addEventListener("click", () => {
    let listDisplay = document.querySelector('.list-group-medics-viewer-off');
    let display = getComputedStyle(listDisplay)['display'];
    if (display === 'none'){
        listDisplay.style.display = 'block'
        createRowMedics();
    }
});

const createRowMedics = (medics) => {
    try {
        for (let medic of medics){

            let tr = document.createElement('tr');
            let td;

            // Nome
            td = document.createElement('td');
            td.innerText = medic.nome;
            tr.append(td);

            // Data de Cadastro
            td = document.createElement('td');
            td.innerText = medic.dataCadastro;
            tr.append(td);

            // Especialidade
            td = document.createElement('td');
            td.innerText = medic.especialidade;
            tr.append(td);

            // Botões
            td = document.createElement('td');

            td.innerHTML= `<div _ngcontent-xmo-c24 class="buttons">
                                <button _ngcontent-xmo-c24="" class="button is-primary">
                                    <span _ngcontent-xmo-c24="">Ver consultas</span>
                                </button>
                                <button type="button " class="button is-warning">
                                    <span _ngcontent-xmo-c24="">Editar</span>
                                </button>
                                <button type="button " class="button is-danger">
                                    <span _ngcontent-xmo-c24="">Excluir</span>
                                </button>
                            </div>`

            tr.append(td);
            tbodyMedic.append(tr);

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
