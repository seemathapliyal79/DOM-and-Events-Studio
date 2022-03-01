// Write your JavaScript code here.
// Remember to pay attention to page loading!
//1. Use the window load event to ensure all elements have loaded before attaching event handlers.
window.addEventListener('load', function(){

    //When the "Take off" button is clicked, the following should happen:
    // a. A window confirm should let the user know "Confirm that the shuttle is ready for takeoff.
    //" If the shuttle is ready for liftoff, then add parts b-d.
    let takeOffBtn = document.getElementById('takeoff');
    takeOffBtn.addEventListener('click', function(){
    let isReady = window.confirm("Confirm that the shuttle is ready for takeoff");
   //b. The flight status should change to "Shuttle in flight."
        if (isReady === true){
            let flightStatus = document.getElementById('flightStatus');
            flightStatus.innerText = "Shuttle in flight."
    //c. The background color of the shuttle flight screen should change from green to blue.
    let shuttleFlightScreen = document.getElementById('shuttleBackground');
    shuttleFlightScreen.setAttribute("style", "background-color: blue");
    //The shuttle height should increase by 10,000 miles.
    let shuttleHeight = document.getElementById('spaceShuttleHeight');
    shuttleHeight.innerText = 10000;
        }
    })

    //3. When the "Land" button is clicked, the following should happen:
    //a. A window alert should let the user know "The shuttle is landing. Landing gear engaged."

    let landBtn = document.getElementById('landing');
    landBtn.addEventListener('click', function(){
    window.alert("The shuttle is landing. Landing gear engaged.");
    //b. The flight status should change to "The shuttle has landed."
    let flightStatus = document.getElementById('flightStatus');
    flightStatus.innerText = "The shuttle has landed."

    //c. The background color of the shuttle flight screen should change from blue to green.
    let shuttleFlightScreen = document.getElementById('shuttleBackground');
    shuttleFlightScreen.setAttribute("style", "background-color: green");

    //d. The shuttle height should go down to 0.
    let shuttleHeight = document.getElementById('spaceShuttleHeight');
    shuttleHeight.innerText = 0;
    //bonus mission: Return the rocket to its original position on the background when it has been landed or the mission was aborted.
    let shuttleBackground=document.getElementById('shuttleBackground')
    let leftOffset = shuttleBackground.offsetWidth /2 - 37.5;
    document.getElementById('rocket').style.left = leftOffset +"px";
    })

    //4. When the "Abort Mission" button is clicked, the following should happen:
    //a. A window confirm should let the user know "Confirm that you want to abort the mission." 
    //If the user wants to abort the mission, then add parts b-d.
    //b. The flight status should change to "Mission aborted."
    let abortBtn = document.getElementById('missionAbort');
    abortBtn.addEventListener('click', function(){
    let isAbort = window.confirm("Confirm that you want to abort the mission.");
        if (isAbort === true){
            let flightStatus = document.getElementById('flightStatus');
            flightStatus.innerText = "Mission aborted.";
    //c. The background color of the shuttle flight screen should change from blue to green.
    let shuttleFlightScreen = document.getElementById('shuttleBackground');
    shuttleFlightScreen.setAttribute("style", "background-color: green");
    //d. The shuttle height should go down to 0.
        let shuttleHeight = document.getElementById('spaceShuttleHeight');
        shuttleHeight.innerText = 0;
        }

    //bonus mission: Return the rocket to its original position on the background when it has been landed or the mission was aborted.
    let shuttleBackground=document.getElementById('shuttleBackground')
    let leftOffset = shuttleBackground.offsetWidth /2 - 37.5;
    document.getElementById('rocket').style.left = leftOffset +"px";
    })
    // When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
    //a. The rocket image should move 10 px in the direction of the button that was clicked
    //b.         If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
    let top = 0;
    let bottom = 0;
    let left = 0;
    let right = 0;

    let upBtn = document.getElementById('up');
    upBtn.addEventListener('click', function(){
        let shuttleBackground=document.getElementById('shuttleBackground')
        let shuttleHeight = document.getElementById('spaceShuttleHeight');
        let shuttleHeightAmount = Number(shuttleHeight.innerText);
        shuttleHeightAmount += 10000;
        shuttleHeight.innerText = shuttleHeightAmount;
        top -= 10;
        if (top < 0){
            top = 0;
        }
        document.getElementById('rocket').style.top = (top-10) +"px";
    });
    let downBtn = document.getElementById('down');
    downBtn.addEventListener('click', function(){
        let shuttleBackground=document.getElementById('shuttleBackground')
        let shuttleHeight = document.getElementById('spaceShuttleHeight');
        let shuttleHeightAmount = Number(shuttleHeight.innerText);
        shuttleHeightAmount -= 10000;
        shuttleHeight.innerText = shuttleHeightAmount;

        let heightOfBox = shuttleBackground.offsetHeight -75;
        //Keep the rocket from flying off of the background.
        if (heightOfBox < top){
            top = heightOgBox;
        }
        top += 10;
        document.getElementById('rocket').style.top = (top-10) +"px";

    });

    let leftBtn = document.getElementById('left');
    leftBtn.addEventListener('click', function(){
        left -= 10;
        //Keep the rocket from flying off of the background.
        if (left <0){
            left = 0;
        }
        document.getElementById('rocket').style.left = (left-10) +"px";
    });
    let rightBtn = document.getElementById('right');
    rightBtn.addEventListener('click', function(){
        left += 10;
        //Keep the rocket from flying off of the background.
        let widthOfBox = shuttleBackground.offsetWidth - 75;
        if (widthOfBox < left){
            left = widthOfBox;
        }
        document.getElementById('rocket').style.left = (left-10) +"px";

    });

});
