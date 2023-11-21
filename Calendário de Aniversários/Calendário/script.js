document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
    const resultTable = document.querySelector("table");
    const popUp = document.querySelector(".pop-up");
    let editingRow = null;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const birthDate = document.getElementById("birth-date").value;

        if (editingRow) {
            // Se estiver editando, atualiza a linha existente
            updateRow(editingRow, name, birthDate);
            editingRow = null;
        } else {
            // Se não estiver editando, adiciona uma nova linha
            addRow(name, birthDate);
        }

        form.reset();
    });

    function addRow(name, birthDate) {
        const row = resultTable.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.textContent = name;
        cell2.textContent = birthDate;

        const editButton = createButton("Editar", function () {
            editRow(row);
        });

        const deleteButton = createButton("Excluir", function () {
            showPopUp(row);
        });

        cell3.appendChild(editButton);
        cell3.appendChild(deleteButton);
    }

    function editRow(row) {
        editingRow = row;

        const cells = row.getElementsByTagName("td");
        const name = cells[0].textContent;
        const birthDate = cells[1].textContent;

        // Substituir o texto por campos de entrada
        cells[0].innerHTML = `<input type="text" value="${name}" id="edit-name">`;
        cells[1].innerHTML = `<input type="text" value="${birthDate}" id="edit-birth-date">`;

        const saveButton = createButton("Salvar", function () {
            saveRow(row);
        });

        const cancelButton = createButton("Cancelar", function () {
            cancelEdit(row, name, birthDate);
        });

        // Adicionar botões de salvar e cancelar
        cells[2].appendChild(saveButton);
        cells[2].appendChild(cancelButton);
    }

    function saveRow(row) {
        const cells = row.getElementsByTagName("td");
        const newName = document.getElementById("edit-name").value;
        const newBirthDate = document.getElementById("edit-birth-date").value;

        updateRow(row, newName, newBirthDate);
        editingRow = null;
    }

    function cancelEdit(row, name, birthDate) {
        updateRow(row, name, birthDate);
        editingRow = null;
    }

    function updateRow(row, name, birthDate) {
        const cells = row.getElementsByTagName("td");
        cells[0].textContent = name;
        cells[1].textContent = birthDate;

        // Remover campos de entrada e botões de edição
        cells[2].innerHTML = "";
        cells[2].appendChild(createButton("Editar", function () {
            editRow(row);
        }));
        cells[2].appendChild(createButton("Excluir", function () {
            showPopUp(row);
        }));
    }

    function showPopUp(row) {
        popUp.style.display = "block";

        document.getElementById("yes").onclick = function () {
            resultTable.deleteRow(row.rowIndex);
            popUp.style.display = "none";
        };

        document.getElementById("no").onclick = function () {
            popUp.style.display = "none";
        };
    }

    function createButton(text, clickHandler) {
        const button = document.createElement("button");
        button.textContent = text;
        button.onclick = clickHandler;
        return button;
    }
});
