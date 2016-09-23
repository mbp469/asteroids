(function gameSetup() {
    'use strict';

    /* creates link to the ship ID element in the HTML */
    var shipElem = document.getElementById('ship');
    /* determines how many numbers to change when key is hit.
        this number is fed into the move object for processing. */
    var incrementVelocity = 0.5;
    var incrementAngle = 3;
    //console.log(ship.HtmlObject);
    var ship = {
      HtmlObject: shipElem.style, /* HtmlObject is the object where we change to CSS-friendly values. */
      velocity: 0,
      angle: 0,
      positionX: 0,
      positionY: 0
    }
    // Create your "ship" object and any other variables you might need...
    // getShipMovement(100, 100);
    console.log("Ship: " + ship);

    // var shipStyles = document.getElementById("ship");
    // console.log("shipStyles:\n" + shipStyles);
    // shipStyles.setAttribute("style", "top: 300px; right: 300px");

    var allAsteroids = [];
    shipElem.addEventListener('asteroidDetected', function (event) {
        // You can detect when a new asteroid appears with this event.
        // The new asteroid's HTML element will be in:  event.detail

        // What might you need/want to do in here?

    });

    /**
     * Use this function to handle when a key is pressed. Which key? Use the
     * event.keyCode property to know:
     *
     * 37 = left
     * 38 = up
     * 39 = right
     * 40 = down
     *
     * @param  {Event} event   The "keyup" event object with a bunch of data in it
     * @return {void}          In other words, no need to return anything
     */
    function handleKeys(event) {
        console.log(event.keyCode);

        /* match event.keyCode to a change within the ship object */
        switch (event.keyCode) {
          case 37:
            ship.angle -= incrementAngle;
            ship.HtmlObject.transform="rotate(" + (ship.angle - incrementAngle) +  "deg)";
            console.log("ship.angle: " + ship.angle);
            break;
          case 38:
            ship.velocity += incrementVelocity;
            ship.HtmlObject.transform="rotate(" + (ship.angle - incrementAngle) + "deg)";
            console.log("ship.velocity: " + ship.velocity);
            break;
          case 39:
            ship.angle += incrementAngle;
            console.log("ship.angle: " + ship.angle);
            ship.HtmlObject.transform="rotate(" + (ship.angle +  incrementAngle) + "deg)";
            break;
          case 40:
          /* make sure velocity doesn't go below 0 */
            if (ship.velocity - incrementVelocity <= 0) {
              ship.velocity = 0;
            } else {
            /* if not negative, go ahead and adjust velocity down */
            ship.velocity -= incrementVelocity;
            console.log("ship.velocity: " + ship.velocity);
            ship.HtmlObject.transform="rotate(" + (ship.angle + incrementAngle) + "deg)";
            break;
            }
          default:
          console.log("ship.HtmlObject.top: " + ship.HtmlObject.top);
          console.log("ship.HtmlObject.left: " + ship.HtmlObject.left);
            break;
        }

        // Implement me!

    }
    document.querySelector('body').addEventListener('keyup', handleKeys);

    /**
     * This is the primary "game loop"... in traditional game development, things
     * happen in a loop like this. This function will execute every 20 milliseconds
     * in order to do various things. For example, this is when all game entities
     * (ships, etc) should be moved, and also when things like hit detection happen.
     *
     * @return {void}
     */
    function gameLoop() {
        // This function for getting ship movement is given to you (at the bottom).
        // NOTE: you will need to change these arguments to match your ship object!
        // What does this function return? What will be in the `move` variable?
        // Read the documentation!
        var move = getShipMovement(ship.velocity, ship.angle);
          /* change the positionX in the ship by processing through
            the function in the move object. Add to original positionX value. */
          ship.positionX += move.left;
          /* change the positionY in the ship by processing through
            the function in the move object. Add to original position value. */
          ship.positionY += move.top;
          /* concatinate newly calclulated positionX to make CSS-friendly.
              add to the left value in the ship object. */
          ship.HtmlObject.left = (ship.positionX + "px");
        /* concatinate newly calculated positionY to make CSS-friendly.
            add to the top value in the ship object. */
          ship.HtmlObject.top = (ship.positionY + "px");

        // Move the ship here!

        // Time to check for any collisions (see below)...
        checkForCollisions();
    }

    /**
     * This function checks for any collisions between asteroids and the ship.
     * If a collision is detected, the crash method should be called with the
     * asteroid that was hit:
     *    crash(someAsteroidElement);
     *
     * You can get the bounding box of an element using:
     *    someElement.getBoundingClientRect();
     *
     * A bounding box is an object with top, left, width, and height properties
     * that you can use to detect whether one box is on top of another.
     *
     * @return void
     */
    function checkForCollisions() {

        // Implement me!

    }


    /**
     * This event handler will execute when a crash occurs
     *
     * return {void}
     */
    document.querySelector('main').addEventListener('crash', function () {
        console.log('A crash occurred!');

        // What might you need/want to do in here?

    });



    /** ************************************************************************
     *             These functions and code are given to you.
     *
     *                   !!! DO NOT EDIT BELOW HERE !!!
     ** ************************************************************************/

     var loopHandle = setInterval(gameLoop, 20);

     /**
      * Executes the code required when a crash has occurred. You should call
      * this function when a collision has been detected with the asteroid that
      * was hit as the only argument.
      *
      * @param  {HTMLElement} asteroidHit The HTML element of the hit asteroid
      * @return {void}
      */
    function crash(asteroidHit) {
        document.querySelector('body').removeEventListener('keyup', handleKeys);
        asteroidHit.classList.add('hit');
        document.querySelector('#ship').classList.add('crash');

        var event = new CustomEvent('crash', { detail: asteroidHit });
        document.querySelector('main').dispatchEvent(event);
    }

    /**
     * Get the change in ship position (movement) given the current velocity
     * and angle the ship is pointing.
     *
     * @param  {Number} velocity The current speed of the ship (no units)
     * @param  {Number} angle    The angle the ship is pointing (no units)
     * @return {Object}          The amount to move the ship by with regard to left and top position (object with two properties)
     */
    function getShipMovement(velocity, angle) {
        return {
            left: (velocity * Math.sin(angle * Math.PI / 180)),
            top: (velocity * Math.cos(angle * Math.PI / 180))
        };
    }

})();
