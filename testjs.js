

function beginGame() {
    let userName = prompt("Please enter your name:");
    alert("Hello " + userName + ". Welcome to my small puzzlegame.");
    alert("The objective of the game is to find your way out of the cellar.");
    alert("There are items scattered around the cellar to help you on your way.");
    alert("Ready when you are, " + userName + "!");

    alert("You find yourself in the middle of a dimly lit room. You hear water dripping and the distict smell of cellar is impossible to ignore.");
    alert("There are some stairs in front of you leading down. Behind you are some stairs leading up. To your left is another room.");
    let gameMove = prompt("Where would you like to go? Left into the room, forward down the stairs or backwards up the stairs?");
    const convertedAnswer = gameMove.toLowerCase();
    if (convertedAnswer === "room" || convertedAnswer === "left") {
        keyRoom();
    } else if (convertedAnswer === "forward" || convertedAnswer === "down" || convertedAnswer === "stairs") {
        stairsDownNoKey();
    } else if (convertedAnswer === "backward" || convertedAnswer === "backwards" || convertedAnswer === "back") {
        backStairs();
    }
};

// Går bakåt, upp för trappan.
function backStairs() {
    alert("You go back up the stairs. There's a door but there's no keyhole. The door won't budge.");
    alert("You decide to go back down the stairs to the previous room.");
    let gameMove = prompt("Where would you like to go? Left into the room or forward down the stairs?");
    const convertedAnswer = gameMove.toLowerCase();
    if (convertedAnswer === "forwards" || convertedAnswer === "forward" || convertedAnswer === "stairs" || convertedAnswer === "down" || convertedAnswer === "down stairs") {
        stairsDownNoKey();
    } else if (convertedAnswer === "left" || convertedAnswer === "room" || convertedAnswer === "left into room" || convertedAnswer === "left into the room") {
        keyRoom();
    } else {
        backStairs();
    }
};
function backStairsKey() {
    alert("You go back up the stairs. There's a door but there's no keyhole. The door won't budge.");
    alert("You decide to go back down the stairs to the previous room.");
    let gameMove = prompt("Where would you like to go? Left into the room or forward down the stairs?");
    const convertedAnswer = gameMove.toLowerCase();
    if (convertedAnswer === "forwards" || convertedAnswer === "forward" || convertedAnswer === "stairs" || convertedAnswer === "down" || convertedAnswer === "down stairs") {
        stairsDownKey();
    } else if (convertedAnswer === "left" || convertedAnswer === "room" || convertedAnswer === "left into room" || convertedAnswer === "left into the room") {
        keyRoomKeyTaken();
    }
};

function keyRoomKeyTaken() {
    alert("You've already been in there, there's not really any point in going there again");
    alert("Perhaps you shuold try to go down the stairs this time.");
    let gameMove = prompt("Would you like to go down the stairs?");
    const convertedAnswer = gameMove.toLowerCase();
    if (convertedAnswer === "yes" || convertedAnswer === "yes go down" || convertedAnswer === "go down") {
        stairsDownKey();
    } else if (convertedAnswer === "no") { 
        waitForNothing();
    }
};

function waitForNothing() {
    alert("You don't wanna wannwa wait for any longer.");
    stairsDownKey();
};

// Går ner för trappan fast utan nyckel.
function stairsDownNoKey() {
    let gameMove = prompt("You go forward, down the stairs. There appears to be a door. Do you open the door or go back?");
    const convertedAnswer = gameMove.toLowerCase();
    if (convertedAnswer === "yes" || convertedAnswer === "open") {
        openDoorNoKey();
    } else if (convertedAnswer === "no" || convertedAnswer === "dont" || convertedAnswer === "dont open" || convertedAnswer === "leave" ){
        alert("You go back up the stairs and into the previous room.");
        roomOneReturn();
    }
};

function openDoorNoKey() {
    alert("The door is locked and there's no way you can break through it. Perhaps there's a key somewhere.");
    alert("You go back up the stairs and into the previous room.");
    roomOneReturn();
}; 

// Går vänster.
function keyRoom() {
    alert("You go left into the room. There are some shelves filled with junk. However, you notice a small key in the corner of the room.");
    let gameMove = prompt("What do you want to do? Pick up the key or go back into the previous room?");
    const convertedAnswer = gameMove.toLowerCase();
    if (convertedAnswer === "pick" || convertedAnswer === "pick up key" || convertedAnswer === "key") {
        pickUpKey();
    } else if (convertedAnswer === "back" || convertedAnswer === "go back") {
        roomOneReturn();
    }
};

function pickUpKey() {
    let gameMove = prompt("You pick up the key and put in your pocket. There's nothing else to do in this room. Do you want to go back or stay here?");
    const convertedAnswer = gameMove.toLowerCase();
    if (convertedAnswer === "go back" || convertedAnswer === "back") {
        roomOneReturnWithKey();
    } else if  (convertedAnswer === "stay" || convertedAnswer === "stay here")  {
        keyRoomWait();
    }
};

function keyRoomWait() {
    alert("Waiting here will do no good. You decide to return to the previous room.");
    roomOneReturnWithKey();
};

function roomOneReturn() {
    alert("You return to the first room.")
    let gameMove = prompt("Where would you like to go? Left into the room, forward down the stairs or backwards up the stairs?");
    const convertedAnswer = gameMove.toLowerCase();
    if (convertedAnswer === "room" || convertedAnswer === "left") {
        keyRoom();
    } else if (convertedAnswer === "forward" || convertedAnswer === "down" || convertedAnswer === "stairs") {
        stairsDownNoKey();
    } else if (convertedAnswer === "backward" || convertedAnswer === "backwards" || convertedAnswer === "back") {
        backStairs();
    } 
}; 

function roomOneReturnWithKey() {
    alert("You return to the first room.")
    let gameMove = prompt("Where would you like to go? Left into the room, forward down the stairs or backwards up the stairs?");
    const convertedAnswer = gameMove.toLowerCase();
    if (convertedAnswer === "room" || convertedAnswer === "left") {
        keyRoomKeyTaken();
    } else if (convertedAnswer === "forward" || convertedAnswer === "down" || convertedAnswer === "stairs") {
        stairsDownKey();
    } else if (convertedAnswer === "backward" || convertedAnswer === "backwards" || convertedAnswer === "back") {
        backStairsKey();
    } 
}; 
// Går ner för trappan fast med nyckel.
function stairsDownKey() {
    let gameMove = prompt("You go forward, down the stairs. There appears to be a door. Do you open the door?");
    const convertedAnswer = gameMove.toLowerCase();
    if ( convertedAnswer === "yes" || convertedAnswer === "open" || convertedAnswer === "open door" || convertedAnswer === "open the door") {
        openDoor();
    } else if (convertedAnswer === "no" || convertedAnswer === "dont" || convertedAnswer === "dont open") {
        alert("You go back up the stairs and into the previous room.");
        roomOneReturnWithKey();
    } 
}; 

function openDoor() {
    alert("You use the key you found earlier and open the door. You go through it.");
    furnaceRoom();
};

// Rum med vedspis.
function furnaceRoom() {
    alert("You once again find yourself in a strange room. There's a hallway leading to the right.");
    alert("This particular room contains nothing but a furnace. However there is something laying in the ashes of the furnace.");
    let gameMove = prompt("What do you want to do? Go right down the hallway or investigate the furnace?");
    const convertedAnswer = gameMove.toLowerCase();
    if ( convertedAnswer === "go" || convertedAnswer === "go right" || convertedAnswer === "hallway") {
        hallwayBeforeNote();
    } else if (convertedAnswer === "furnace" || convertedAnswer === "investigate" || convertedAnswer === "investigate furnace") {
        investigateFurnace();
    }    
};

function hallwayBeforeNote() {
    alert("You're filled with a strange feeling that you're maybe missing something.");
    alert("Perhaps you should investigate the room a little more before moving on.");
};
// Kolla närmare på vedspisen.
function investigateFurnace() {
    alert("You take a closer look at the furnace and see that there's a burnt note among the ashes.");
    alert("You read the note, it says 8851. Perhaps these numbers can be important later on.");
    alert("There's no reason to linger in this room. You decide to move into the hallway to your right.")
    hallwayAfterNote();
}


/*
let gameMove =
const convertedAnswer = gameMove.toLowerCase();
if ( convertedAnswer === " " || convertedAnswer === " ") {

} else if (convertedAnswer === " " || convertedAnswer === " ") {
    
}


// Går vidare genom hallen in i ett rum med spiraltrappa, går också upp för den.
function smallRoom() {
    alert("You go up the spiral staircase, you find yourself in a room with nothing but a small staircase.");
    prompt("What do you want to do now? Go up the small staircase or go back down again?");
}
// Går upp för trappan fram till dörren med kodlås.
function smallRoomStaircase() {
    alert("You go up the small staircase.");
    alert("It leads to a door. The door is locked with a combinationlock");
    alert("Good thing you remember those numbers written on the wall.");
    prompt("Enter the code:");
}
// Koden är fel.
function combinationLockWrong() {
    alert("It appears that this is not the right code. Try again or leave the lock for now.");
}
// Koden stämmer, man går vidare upp genom dörren och in i en hall i ett hus.
function combinationLockRight() {
    alert("The code was correct, you open the door and find yourself in lit up hallway of a house.");
    alert("There's a kitchen to your left and a living room to your right.");
    prompt("Where do you go? Left into the kitchen or righ into the living room?");
}
// Går vänster in i köket.
function kitchenRoom() {
    alert("You enter the kitchen. There's a knife on the counter and the only way to go is forward through a door.");
    prompt("Do you want to pick up the knife or go through the door?");
}
// Går höger in i vardagsrummet.
function livingRoom() {
    alert("You go right in the hallway. It leads into the living room.")
    prompt("There's only one way to go now. A door that seems to lead you outside, to the front of the house. Do you go through it?");
}
// Man står i vardagsrummet men väljer att inte gå vidare av oklar anledning.
function livingRoomNoLeave() {
    alert("You just stand here now, in the living room of a house you do not know. Perhaps it's best if you leave anyways.");
    prompt("Have you changed your mind and want to go through the door?");
}
// Sista dörren innan man går ut från huset.
function doorFinal() {
    alert("You go through the door leading outside. You find yourself in front of the house, free to leave as you wish.");
}
// Slut på spelet.
function endGame() {
    alert("Congratualtions" + userName + " you navigated through my small puzzlegame.");
} */