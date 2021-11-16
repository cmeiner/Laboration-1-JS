function beginGame() {
    let userName = prompt("Please enter your name:");
    alert("Hello " + userName + ". Welcome to my small puzzlegame.");
    alert("The objective of the game is to find your way out of the cellar.");
    alert("There are items scattered around the cellar to help you on your way.");
    alert("Ready when you are, " + userName + "!");

    alert("You find yourself in the middle of a dimly lit room. You hear water dripping and the distict smell of cellar is impossible to ignore.");
    alert("There are some stairs in front of leading down. Behind you are some stairs leading up. To your left is another room and to your right is a hallway.");
    let firstMove = prompt("Where would you like to go? Left into the room, right down the hallway, forward down the stairs or backwards up the stairs?");
    console.log(firstMove);
    
}
// Går bakåt.
alert("You go back up the stairs. There's a door but there's no keyhole. The door won't budge.");
alert("You decide to go back down the stairs to the previous room.");
prompt("Where would you like to go? Left into the room, right down the hallway, forward down the stairs or backwards up the stairs?");

// Går vänster.
alert("You go left into the room. There are some shelves filled with junk. However, you notice a small key in the corner of the room.");
prompt("What do you want to do? Pick up the key or go back into the previous room?");
prompt("You pick up the key and put in your pocket. There's nothing else to do in this room. Do you want to go back or stay here?");
alert("Waiting here will do no good. You decide to return to the previous room.");
prompt("Where would you like to go? Left into the room, right down the hallway, forward down the stairs or backwards up the stairs?");

// Går framåt utan nyckel.
prompt("You go forward, down the stairs. There appears to be a door. Do you open the door or go back?");
alert("The door is locked and there's no way you can break through it. Perhaps there's a key somewhere.");
alert("You go back up the stairs and into the previous room.");

// Går höger.
prompt("You go right into the hallway. There's a room to your left. Do you want to continue down the hallway or take a left into the room?");
// Går höger -> vänster.
alert("You go left into the room. The room is filled with old and empty crates. One of them contains a crowbar.");
prompt("What do you want to do? Pick up the crowbar or go back into the previous room?");
alert("You pick up the crowbar, there's nothing else to do in this room.");
alert("You decide to go back into the hallway.");
prompt("Where do you want to go? Further down the hallway or back into the first room?");

alert("You go further down the hallway, you take a left turn and the hallway continues.");
prompt("There's a door in front of you and a room to your right. Where do you want to go?");

// Går höger in i rummet. 
alert("You take a right into the room. There's a worn down couch and an empty table.");
prompt("There's a broken bottle laying on the couch. Do you want to pick it up?");
alert("You pick up the broken bottle. You wonder if it'll come in handy or not.");
alert("You decide not to pick up the bottle.")
alert("You go back into the hallway.");
prompt("There's a door in front of you and a room to your right. Where do you want to go?");
alert("You go to the door, it's barricaded but you can easily break through it using the crowbar.");
prompt("Do you want to try to open it using the crowbar?");
// Om ja.
alert("You bend off the plank blocking the door, using the crowbar. You are now free to pass through.")
alert("You go through the door and down a small set of stairs. You find yourself in a pitch black room.");
alert("The only way you can go right now is to the left, down a dimly lit hallway.");
alert("This particular room contains nothing but a furnace. However there is something laying in the ashes of the furnace.");

// Om nej.
alert("You decide to not use the crowbar, but now you're just standing here contemplating your decision.");

//Går vidare i hallen utan gått vänster.
prompt("Where do you want to go? Further down the hallway or back into the first room?");
alert("You go further down the hallway, you take a left turn and the hallway continues.");
prompt("There's a door in front of you and a room to your right. Where do you want to go?");
alert("You take a right into the room. There's a worn down couch and an empty table.");
prompt("There's a broken bottle laying on the couch. Do you want to pick it up?");


// Om ja.
alert("You pick up the broken bottle. You wonder if it'll ever come in handy or not.");
// Om nej.
alert("You decide not to pick up the bottle.");
alert("You go back into the hallway.");
prompt("There's a door in front of you and a room to your right. Where do you want to go?");
alert("You go to the door, it's barricaded and you have no way of bending the plank off.");
alert("Perhaps if you had a tool of some sort to help you.");
alert("You decide to go back to the first part of the hallway.");




// Går framåt med nyckel. 
prompt("You go forward, down the stairs. There appears to be a door. Do you open the door or go back?");
// Om gå tillbaka.
alert("You decide to go back up the stairs to the previous room.");
// Om dörr.
alert("You use the key you found earlier and open the door.");
alert("You once again find yourself in a strange room. There's a hallway leading to the right and a room to your left.");
alert("This particular room contains nothing but a furnace. However there is something laying in the ashes of the furnace.");
prompt("What do you want to do? Go left into the room, go right down the hallway or investigate the furnace?");

// Om furnace.
alert("You take a closer look at the furnace and see that there's a fuse among the ashes.");
alert("You decide to pick the fuse up and put it in your pocket.");
prompt("Where do you want to go now? Left into the room or right down the hallway?");

// Om höger.
alert("You decide to go right, down the hallway. I leads into a pitch black room.");
alert("You can't make your way through it without any kind of light.");
alert("Perhaps there's a way to turn the light on in this room.");
alert("You decide to go back into the room with the furnace.");

// Om vänster.
alert("You go into the room to your left, there's a few papers scattered around the floor. The walls containt nothing but a fusebox.");
prompt("Do you want to put the fuse you picked up earlier into the box or do you want to return to the previous room?");

// Om box. 
alert("You put the fuse into the socket of the box and noticed that the light turns on in the hallway across the previous room.");
alert("You decide to go back into the room with the furnace.");
alert("Since there's only one way that you haven't gone yet, you decide to go into the hallway to your right.");
alert("It leads into a room that was previously pitch black. There's something written on the wall.");
alert("There's a small staircase leading up to a door to your right and a hallway in front of you.");
prompt("What do you want to do? Investigate the wall, go up the small staircase or continue forward into the hallway?");

// Om staircase.
alert("You go up the small staircase and feel the door, it won't budge. You go back down the stairs again.");
prompt("What do you want to do? Investigate the wall or continue forward into the hallway?");

// Om investigate.
alert("You investigate the wall, there's a number written on it. It says: 8851. Perhaps this could be good to remember.");
alert("You decide to go forwards into the hallway.");
alert("It leads into a room with a spiral staircase.");
prompt("Where do you want to go? Up the stairs or down the stairs?");

// Om down spiral stair. 
alert("You go down the spiral staircase and you find yourself in an old storage room, there's nothing if interest here.");
alert("You go back up the spiral staircase, this time you decide to go up, instead of down.");

// Om up spiral stair.
alert("You go up the spiral staircase, you find yourself in a room with nothing but a small staircase.");
prompt("What do you want to do now? Go up the small staircase or go back down again?");

// Om back down.
alert("You think of going back down but what good would it do?");
alert("You decide against it and instead you go up the staircase.");

// Om up small stairs.
alert("It leads to a door. The door is locked with a combinationlock");
alert("Good thing you remember those numbers written on the wall.");
prompt("Enter the code:");

// Om inte 8851.
alert("It appears that this is not the right code. Try again or leave the lock for now.");

// Om 8851.
alert("The code was correct, you open the door and find yourself in lit up hallway of a house.");
alert("There's a kitchen to your left and a living room to your right.");
prompt("Where do you go? Left into the kitchen or righ into the living room?");

// Om left into kitchen.
alert("You enter the kitchen. There's a knife on the counter and the only way to go is forward through a door.");
prompt("Do you want to pick up the knife or go through the door?");

// Om pick up knife. 
alert("You pick up the knife, although you feel like there's nothing you will use it for.");
prompt("What do you do next? Go through the door or go back into the hallway?");

// Om through the door.
alert("You decide to go through the door, it leads into a garden. However there's no way to go, it's all enclosed.");
alert("You decide to go back into the kitchen.");

// Om back.
alert("You go back through the hallway, past the door which you came up from and into what appears to be a living room.");
prompt("There's only one way to go now. A door that seems to lead you outside, to the front of the house. Do you go through it?");

// Om nej.
alert("You just stand here now, in the living room of a house you do not know. Perhaps it's best if you leave anyways.");
prompt("Have you changed your mind and want to go through the door?");

// Om ja.
alert("You go through the door leading outside. You find yourself in front of the house, free to leave as you wish.");

alert("Congratualtions" + userName + " you navigated through my small puzzlegame.");



prompt("");
alert("");