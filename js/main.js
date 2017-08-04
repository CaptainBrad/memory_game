 console.log("Up and running!");

   var cards = ["queen", "queen", "king", "king"];
   var cardsInPlay = [];
   var CardOne = [0];
   cardsInPlay.push(CardOne);
   console.log("User flipped queen");
   var cardFour = [3];
   cardsInPlay.push(cardFour);
   console.log("User flipped king");
   if(cardsInPlay.length === 3 && cardsInPlay[0] === cardsInPlay[3]){
   	alert("You have found a match");
   }
   else
   {
   	alert("soz, try again");
   }



     //testy test