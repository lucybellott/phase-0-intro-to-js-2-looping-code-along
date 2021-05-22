/*const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGifts(gifts); 

const name = ["Lisa", "Kaitlin", "Jan"];
//const surprise = "surprise";

function writeCards(name, surprise) {
    let messageArray =[];
    for (let i = 0; i < name.length; i++) {
      let message =`Thank you, ${name[i]}, for the wonderful ${surprise} gift!`
        messageArray.push(message);
    }
    return messageArray;
    }
   
    function countDown() {
        let i = 10;
        while(i >= 0)
        console.log(i--);
    }  */

    let guests = [ 'Lisa', 'Kaitlin', 'Jan' ];
    let surprise = "surprise"

    function writeCards(name, event){ 
           let array = [];
     for (let i=0; i < name.length; i++ ) {
       let message =`Thank you, ${name[i]}, for the wonderful ${event} gift!`
        array.push(message)
       }
       return array;

 } 
 function countDown (num) {
     let i = num
     while (i >= 0)
     console.log(i--);
 }