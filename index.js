// Code your solutions in this file

//   for ([initilization]; [condition]; [iteration]) {
//     [loop body]
//   }


for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"]

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
    }


    return gifts;
}

wrapGifts(gifts);


//assignment: for loop

function writeCards(guestNames, eventType) {
    const firstMessage = []
    const secondMessage = []
    for (let i = 0; i < guestNames.length; i++) {
        firstMessage.push(`Happy ${eventType}, ${guestNames[i]}!`)
        secondMessage.push(`Thank you, ${guestNames[i]}, for the wonderful ${eventType} gift!`)
    }
    console.log(firstMessage)
    console.log(secondMessage)

 return firstMessage, secondMessage
 

}

writeCards(["Guadalupe","Ollie","Aki"], "surprise") 



// while ([condition]) {
//   [loop body]


function countDown(x) {
    let startingNumber = x
    while (startingNumber > -1 ) {
      console.log(startingNumber--)
    }
    return startingNumber    
 
}

countDown(10)
