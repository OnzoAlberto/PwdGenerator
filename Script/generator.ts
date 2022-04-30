
class PwdGenerator {
    constructor() {
        var numbers               = '0123456789';
        var lowercharacters       = 'abcdefghijklmnopqrstuvwxyz';
        var uppercharacters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var symbols               = '!£$%&/()=?^ìéè*+òçà°ù§{}@#<>\|€';

        const generatorButton = document.getElementById("generatorButton");
        const copyButton      = document.getElementById("copyButton");      
        
        generatorButton.addEventListener("click", () => {
        let passwordLenght    = document.getElementById("passwordLenght").value;
        let numberCheckBox    = document.getElementById("numberCheckBox").checked; 
        let lowerCharCheckBox = document.getElementById("lowerCharCheckBox").checked;
        let UpperCharCheckBox = document.getElementById("UpperCharCheckBox").checked; 
        let symbolsCheckBox   = document.getElementById("symbolsCheckBox").checked;
        let outputTextArea    = document.getElementById("outputTextArea");

        var result = ""
        var passwordList = ""

        if(passwordLenght < 2 || passwordLenght > 100)
        console.log("Value not correct")
        else
        {
            numberCheckBox    ? passwordList += numbers         : null
            lowerCharCheckBox ? passwordList += lowercharacters : null
            UpperCharCheckBox ? passwordList += uppercharacters : null
            symbolsCheckBox   ? passwordList += symbols         : null

            for ( var i = 0; i < passwordLenght; i++ )
            {result += passwordList.charAt(Math.random() * passwordList.length);}
            outputTextArea.value = result;
            document.getElementById("result").style.display ="flex"

        }
    });
    
    copyButton.addEventListener("click", () =>{
    let outputTextArea = document.getElementById("outputTextArea");

    outputTextArea.select();
    outputTextArea.setSelectionRange(0, 99999); 

    navigator.clipboard.writeText(outputTextArea.value);
    copyButton.setAttribute("tooltip", "Copied! ✅");
    });

    copyButton.addEventListener("mouseover", () => {
        copyButton.setAttribute("tooltip", "Copy to clipboard");
    });
  }

}
 
  new PwdGenerator();


