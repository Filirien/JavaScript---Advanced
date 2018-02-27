let createBook = (function () {
    let id = 1;
    return function (selector,title, author, isbn) {
        $(selector).append(
            $(`<div id="book${id++}">`).append(),
                $(`<p class="title">${title}</p>`),
                $(`<p class="author">${author}</p>`),
                $(`<p class="isbn">${isbn}</p>`),
                $(`<button>`).text('Select').on('click', function () {
                    $(this).parent().css('border','2px solid blue');
                }),
                $(`<button>`).text('Deselect').on('click', function () {
                    $(this).parent().css('border','none');
                })
        )
    }
}());
let createBookWithFragment = (function () {
    let id = 1;
    return function (selector,title, author, isbn) {
        let container = $(selector);
        let fragment = document.createDocumentFragment();
        $(fragment).append(
            $(`<div id="book${id++}">`).append(
                $(`<p class="title">${title}</p>`),
                $(`<p class="author">${author}</p>`),
                $(`<p class="isbn">${isbn}</p>`),
                $(`<button>`).text('Select').on('click', function () {
                    $(this).parent().css('border', '2px solid blue');
                }),
                $(`<button>`).text('Deselect').on('click', function () {
                $(this).parent().css('border', 'none');
            })
        ));
        container.append(fragment)
    }
}());

function createBookWithout_IIFE(selector, title, author, isbn) {

    let container = $(selector);
    let existingBooks = container
        .find('[id^="book"]'); // ^= (starts with)
    container.append(
        $(`<div id="book${existingBooks.length + 1}">`).append(
            $(`<p class="title">${title}</p>`),
            $(`<p class="author">${author}</p>`),
            $(`<p class="isbn">${isbn}</p>`),
            $('<button>').text('Select').click(select),
            $('<button>').text('Deselect').click(deselect)
        ));

    function select() {
        $(this).parent().css('border', '2px solid blue');
    }

    function deselect() {
        $(this).parent().css('border', 'none');
    }
}