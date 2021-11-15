function beginGame() {
    let userName = prompt("Please enter your name:");
    alert("Hello " + userName + ". Welcome to my small puzzlegame.");
    alert("The objective of the game is to find your way out of the cellar.");
    alert("There are items scattered around the cellar to help you on your way.");
    alert("Ready when you are, " + userName + "!");

    alert("You find yourself in the middle of a dimly lit room. You hear water dripping and the distict smell of cellar is impossible to ignore.");
    alert("There are some stairs in front of leading down. Behind you are some stairs leading up. To your left is another room and to your right is a hallway.");
    let firstMove = prompt("Where would you like to go? Left into the room, right down the hallway, forward down the stairs or backward up the stairs?");
    console.log(firstMove);
    
}