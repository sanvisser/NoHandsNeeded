let commands = {
    'show me :color on :area': commandColorArea,
    'color :number :color': commandColorNumber,
    'toggle': ToggleToolTips
};

let tooltips = {};

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

function registerAnnyangCommands() {
    if (annyang) {
        // Add the commands to annyang
        annyang.addCommands(commands);

        // Start listening.
        annyang.start();
    } else {
        console.error("annyang failed to start.");
    }
}

function commandColorArea(color, area) {
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

function commandColorNumber(number, color){
    console.log(number, color);
    if(number.isNumeric()) {
        let tooltip = tooltips[number];
        tooltip.reference.style.backgroundColor = color;
    }
    console.log("no numeric number found");
}

function ToggleToolTips(){
    for (let key in tooltips) {
        if(tooltips.hasOwnProperty(key)){
            tooltips[key].toggle();
        }
    }
}

window.addEventListener('load', function () {
    let triggers = document.getElementsByClassName("block");
    for (let i = 0; i < triggers.length; i++) {
        tooltips[i] = (new Tooltip(triggers[i], {
            title: "( " + i + " )",
            trigger: 'manual'
        }));
    }
});


