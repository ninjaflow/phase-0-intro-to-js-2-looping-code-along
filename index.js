/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i =0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
      
    }
    return gifts;
}

wrapGifts(gifts);*/


/*
 OR
 const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  let i = 0; // the initialization moves OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }

  return gifts;
}

wrapGifts(gifts);
*/

const namesArray = ["Guadalupe", "Ollie", "Aki"]
const eventName = 'surprise'
function writeCards(namesArray,eventName){
    const newNames = []
    for (let i=0; i < namesArray.length; i++){
        newNames.push (`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
    }
return newNames
}
writeCards(["Guadalupe", "Ollie", "Aki"],'surprise');

/*function countDown(){
    let countDown = 0;
    while (countDown < 11){
        console.log(countDown++);
    };
}
*/

function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }
