
let currentDisplay = ``;
document.querySelector(`#display`).value = currentDisplay;
function getFinalResult(num) {
    currentDisplay = currentDisplay + (`${num}`);
    document.querySelector(`#display`).value = currentDisplay;
}
function calculat() {
    if (currentDisplay.includes(`%`)) {
        parts = currentDisplay.split('%');
        currentDisplay = (parseFloat(parts[0]) / 100) * parseFloat(parts[1]);
        document.querySelector(`#display`).value = currentDisplay;
    }
    else {
        let result = eval(currentDisplay);
        currentDisplay = result;
        document.querySelector(`#display`).value = currentDisplay;
    }
}
function clearInput() {
    currentDisplay = ``;
    document.querySelector(`#display`).value = currentDisplay;
}
function backButton(){
   currentDisplay= currentDisplay.slice(0,-1)||`0`;
    document.querySelector(`#display`).value = currentDisplay;
}