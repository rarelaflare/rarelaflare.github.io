document.addEventListener('DOMContentLoaded', () => {
   

   // cards selections
    const cardArray = [
    {
        name : 'punk1',
        img : 'images/100punk1.jpg'
    }, 
    {
        name: 'punk1',
        img: 'images/100punk1.jpg'
    }, 
    {
        name: 'punk2',
        img: 'images/100punk2.jpg'
    }, 
    {
        name: 'punk2',
        img: 'images/100punk2.jpg'
    }, 
    {
        name: 'punk3',
        img: 'images/100punk3.jpg'
    }, 
    {
        name: 'punk3',
        img: 'images/100punk3.jpg'
    },
    {
        name: 'punk4',
        img: 'images/100punk4.jpg'
    }, 
    {
        name: 'punk4',
        img: 'images/100punk4.jpg'
    }, 
    {
        name: 'punk5',
        img: 'images/100punk5.jpg'
    }, 
    {
        name: 'punk5',
        img: 'images/100punk5.jpg'
    },
    {
        name: 'punk6',
        img: 'images/100punk6.jpg'
    }, 
    {
        name: 'punk6',
        img: 'images/100punk6.jpg'
    },   
]
// CONSOLE LOG # 1
console.log('randomly sort cards on gameBoard: ', cardArray.sort(() => 0.5 - Math.random()));   


    const grid = document.querySelector('.grid');
    // CONSOLE LOG # 2
    console.log('This section renders game board: ', grid);
    const resultDisplay = document.querySelector('#result');
    console.log('points: ', resultDisplay);
    var cardsChosen = [];
    console.log('cardsChosen data: ', cardsChosen);
    var cardsChosenId = []; 
    var cardsWon = [];



    // CREATE BOARD

function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
       
        var card = document.createElement("img");

        card.setAttribute('src', 'images/100card.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        grid.appendChild(card);
        console.log('card value: ', card[i])
        
    }

}



// check for match
    function CheckForMatch(){
      
      var cards = document.querySelectorAll('img')
      console.log('Cards variable output: ', cards)
      const optionOneId = cardsChosenId[0]
      console.log('card pick 1: ', optionOneId)
      const optionTwoId = cardsChosenId[1]
      console.log('card pick 2: ', optionTwoId)
      
      if (cardsChosen[0] === cardsChosen[1]) {
          alert('You got a match!')
          console.log('bind pick 1: ', cards[optionOneId].setAttribute('src', 'images/empty.jpg'));
          console.log('bind pick 2: ', cards[optionTwoId].setAttribute('src', 'images/empty.jpg'));
          cardsWon.push(cardsChosen)    
      } else {
          console.log('x pick: ', cards[optionOneId].setAttribute('src','images/100card.jpg'));
          console.log('y pick: ', cards[optionTwoId].setAttribute('src','images/100card.jpg'));
          alert('Almost try again!')
      }
     
      console.log('cc array: ', cardsChosen = [])
      console.log('selected array: ',cardsChosenId = [])
      resultDisplay.textContent = cardsWon.length
      'cards picked', cardsChosen
      if (cardsWon.length === cardArray.length/2) {
          resultDisplay.textContent = 'Congratulations you Won!';
      }
    }
   


// flip card

    function flipCard(){
        var cardId = this.getAttribute('data-id');
        console.log('card-id: ', cardId);
       console.log('move card',cardsChosen.push(cardArray[cardId].name));
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(CheckForMatch,400)
        }
    }
    
    createBoard();  
    console.log('cards selected: ', cardsChosen) 
});

