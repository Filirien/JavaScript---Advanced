function tableBuilder(selector) {
    let conteiner = $(selector);

    return {
        createTable: function (columnNames) {
            conteiner.empty();
            let headerRow = $('<tr>');
            let table = $(`<table>`);

            for (let thName of columnNames) {
                headerRow.append($(`<th>${thName}</th>`));
            }

            headerRow.append($(`<th>Action</th>`));
            table.append(headerRow);
            conteiner.append(table);
        },
        fillData: function (dataRows) {
            for (let data of dataRows) {
                let tableRow = $('<tr>');
                for (let col of data) {
                    tableRow.append($(`<td>${col}</td>`));
                }
                let table = conteiner.find('table');
                tableRow.append($('<td><button>Delete</button></td>').on('click', function () {
                    $(this).parent().remove();
                }));

                table.append(tableRow);
            }
        }
    }
}
