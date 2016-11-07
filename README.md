# asteroids
The beginnings of the Asteroids game for use in teaching JavaScript at The Iron Yard  
[Link to asteroids game in GitHub Pages](https://mbp469.github.io/asteroids/)
### Learning Objectives

 to get some experience working with variables, functions, control flow, iteration, and complex problem solving.  
 The assignment was given as follows:

####Your Mission

 The goal of the game is to move the ship around and avoid the asteroids as long as possible. Your mission is to code the rest of the game.

####What was been done already

 All of the HTML and CSS is complete, you must not change those!
 The JavaScript to create the asteroids and fling them around is done (asteroid-setup.js).
 There is a function in the main game.js file for determining movement based on velocity and angle of the ship (getShipMovement(shipVelocity, shipAngle)).
 This function returns an object with two properties (top and left) which represent the required changes in the top and left css position for the ship.
 There is a function in the main game.js file that handles the majority of the actions needed when a crash occurs (crash(asteroidElementThatWasHit)).
You can find all of this code on GitHub.

####What you must do

Create a ship object that contains the HTML element and keeps track of the velocity and angle
Implement the functionality to handle when keys are pressed:
When the up key is pressed, velocity increases
When the down key is pressed, velocity decreases (but not below zero)
When the right key is pressed, angle increases
Don't forget to rotate the ship at the same time! You can assign a CSS property in JavaScript using the HTML element object. All elements have a style property which is also an object. You can then assigned the transform property of the style object (the value would be rotate(Xdeg) value - replacing "X" with the current angle). For example: someElement.style.transform = 'rotate(25deg)';
When the left key is pressed, angle decreases
(Same note as when the angle increases!)
In the game loop...
Move the ship according to the getShipMovement(...) function (see above)
You'll need to adjust the top and left style properties USING JAVASCRIPT (not in the CSS file).
When you get the existing top and left values from that style object on the element you'll need to convert it to a number, but the Number() function won't work since the string has px in it (for example, "149px"). Instead, use parseInt(theString, 10) to extract the integer number value from the string.
Check for any collisions with asteroids (using the checkForCollisions() function which you must implement!)
If a collision has occurred, call the crash(asteroidHit) function with the asteroid element that was hit
Other considerations...

If a crash event occurs... what should your game do?
How will you be able to loop through all asteroids to check for collisions? Where will you get the list of asteroids from?
EPIC Mode

Make the ship "wrap" from one edge of the screen to the other.

