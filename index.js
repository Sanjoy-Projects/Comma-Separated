function changeText(){
    let textInput = document.getElementById("textbox1").value;
    let lineOfText = textInput.split('\n');
    let array = lineOfText.map(lineOfText => lineOfText.trim()).join(', ');
    let textOutput = document.getElementById("textbox2");
    textOutput.textContent = array;
}