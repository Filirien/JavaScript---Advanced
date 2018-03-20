function attachEvents() {
    let deleteInput = $('#townName');
    let allTowns = $('#towns');
    let btnDelete = $('#btnDelete');
    let resultDiv = $('#result');
    btnDelete.on('click', removeTown);

    function removeTown() {
        let towns = allTowns.children();
        let townToDelete = deleteInput.val();
        let isDeleted = false;

        for (let town of towns) {
            if (town.textContent === townToDelete) {
                isDeleted = true;
                $(town).remove();
            }
        }

        let result = '';
        if (isDeleted) {
            result = `${townToDelete} deleted.`
        } else {
            result = `${townToDelete} not found.`
        }
        deleteInput.val('');
        resultDiv.text(result)
    };
}