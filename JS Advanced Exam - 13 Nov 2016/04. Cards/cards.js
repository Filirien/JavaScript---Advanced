function cardDeckBuilder(selector) {
    let container = $(selector);
    return {
        addCard: function (face, suit) {
            let suitCard;
            switch (suit) {
                case 'C':
                    suitCard = '\u2663';
                    break;
                case 'D':
                    suitCard = '\u2666';
                    break;
                case 'H':
                    suitCard = '\u2665';
                    break;
                case 'S':
                    suitCard = '\u2660';
                    break;
            }
            let cardDiv = $(`<div class="card">${face}${suitCard}</div>`);
            cardDiv.on('click', reverseOrder);
            container.append(cardDiv);

            function reverseOrder() {
                let cards = Array.from(container.children());
                container.html('');
                for (let i = cards.length - 1; i >= 0; i--) {
                    container.append($(cards[i]).on('click', reverseOrder));
                }
            }
        }

    }
}