let result =(function () {
    let Suits = {
        SPADES : "\u2663",
     HEARTS : "\u2666",
     DIAMONDS : "\u2665",
     CLUBS : "\u2660"
    }
    let Faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    class Card{
        constructor(face, suit){
            this.face = face;
            this.suit = suit;
        }
        set face(f){
            if(!Faces.includes(f)){
                throw new TypeError('Invalid card face: ' + f);
            }
            this._face = f
        }
        get face(){
            return this._face;
        }
        set suit(s){
            if(!Object.keys(Suits).map(k => k = Suits[k]).includes(s)){
                throw new TypeError('Invalid card suit: ' + s);
            }
            this._suit = s
        }
        get suit(){
            return this._suit;
        }
    }
    return {Suits, Card}
})();