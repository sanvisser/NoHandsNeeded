let commands = {
    'show me :color on :area': commandColorArea
};

function init() {

    const left = document.getElementById('div1');
    const middle = document.getElementById('div2');
    const right = document.getElementById('div3');

    //set initial values

    left.style.backgroundColor = '#ff6e6e';
    middle.style.backgroundColor = '#604bff52';
    right.style.backgroundColor = '#42ff6352';

    registerAnnyangCommands();
}

function registerAnnyangCommands(){
    if(annyang) {
        // Add the commands to annyang
        annyang.addCommands(commands);

        // Start listening.
        annyang.start();
    }else {
        console.error("annyang failed to start.");
    }
}

function commandColorArea(color, area){
    switch (area) {
        case "left":
            document.getElementById('div1').style.backgroundColor = color;
            break;
        case "middle":
            document.getElementById('div2').style.backgroundColor = color;
            break;
        case "right":
            document.getElementById('div3').style.backgroundColor = color;
            break;
    }
}

