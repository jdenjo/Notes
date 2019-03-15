class Deck{

    constructor(){

        this.deck = this.createDeck();

        // for (let key of this.deck){
        //     console.log(key);
        // }
    }

    createDeck() {

        let newDeck = [];

        for (let i = 1; i <= 13; i += 1){

            newDeck.push(new Card(i, "spades") )
        }

        for (let i = 1; i <= 13; i += 1){
            
            newDeck.push(new Card(i, "hearts") )
        }

        for (let i = 1; i <= 13; i += 1){
            
            newDeck.push(new Card(i, "diamonds") )
        }

        for (let i = 1; i <= 13; i += 1){
            
            newDeck.push(new Card(i, "clubs") )
        }

        return newDeck;

    }

    shuffle(){

        this.deck.sort(function() {
            return .5 - Math.random();
          });

        for (let key of this.deck){
            console.log(key);
        }

    }

    reset(){

        this.deck = [];
        this.deck = this.createDeck();
        
        for (let key of this.deck){
             console.log(key);
        }
    }

    draw(){

        console.log(this.deck[51]);

        let topCard = this.deck[51];
        
        this.deck.pop();

        this.deck.unshift(topCard);

        console.log(this.deck[0]);

    }

}


class Card{

    constructor(number, suite){
        this.number = number;
        this.suite = suite; 
    }

    toString(){

        let card = "";

        if (this.number ==1){
            card = "Ace";
        }
        else if (this.number == 11){
            card = "Jack";
        }
        else if (this.number == 12){
            card = "Queens";
        }
        else if (this.number == 13){
            card = "King";
        }
        else{
            card = this.number;
        }

        return (card + " of " + this.suite);

    }   
    
}


const aceOfSpades = new Card(1, 'spades');
const tenOfHearts = new Card(10, 'hearts');
const kingOfDiamonds = new Card(13, 'diamonds');

console.log(aceOfSpades.toString()) // returns 'Card { Ace of Spades }'
console.log(tenOfHearts.toString()) // returns 'Card { 10 of Hearts }'
console.log(kingOfDiamonds.toString()) // returns 'Card { King of Diamonds }'

const newDeck = new Deck();
newDeck.shuffle();
console.log("new shuffle");
newDeck.shuffle();