class input {
    constructor(param) {
        this.input = param;
    }
    calculateLength() {
        console.log("length is:" + this.input.length);
        return this.input.length;
    };
    getUpperCase() {
        console.log("upperCase is:" + this.input.toUpperCase());
        return this.input.toUpperCase();
    };
    getLowerCase() {
        console.log("lowerCase is:" + this.input.toLowerCase());
        return this.input.toLowerCase();
    };
    saperateVowelAndConsonent() {
        let strConsonants = "";
        let strVowels = "";
        let i;
        let s = this.input;

        for (i in s) {
            if (s.charAt(i) == "a" || s.charAt(i) == "e" || s.charAt(i) == "i" || 
        s.charAt(i) == "o" || s.charAt(i) == "u") {
                strVowels += s.charAt(i);
            }
            else if (s.charAt(i) != "a" || s.charAt(i) != "e" || s.charAt(i) != "i" 
        || s.charAt(i) != "o" || s.charAt(i) != "u") {
                strConsonants += s.charAt(i);
            }
        }

        console.log("Vowels are: " + strVowels);

        console.log("consonents are : " + strConsonants);

        return "Vowels are: " + strVowels + " consonents are : " + strConsonants;
    }

    checkNumber() {

        try{
            let regex = new RegExp("[0-9]+");  
            if(regex.test(this.input) == true) {
                console.log("There is a number present in string");
                throw new Error("There is a number present in string");
            }
        }
        catch(e) {
            alert("Error :"+e);
        }
        
    }
}

function callFunction() {
    var inputValue = document.getElementById("inputTxt").value;
    let inputObject = new input(inputValue);
    document.getElementById("lengthOp").innerHTML = inputObject.calculateLength();
    document.getElementById("ucOp").innerHTML = inputObject.getUpperCase();
    document.getElementById("lcOp").innerHTML = inputObject.getLowerCase();
    document.getElementById("sapVC").innerHTML = inputObject.saperateVowelAndConsonent();
    inputObject.checkNumber();


}