function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }

    let checkBox = document.forms["myForm"]["gender"];
    let check = false;
    for (let i = 0; i < checkBox.length; i++) {
        if (checkBox[i].checked) {
            check = true;
        }
    }

    if (!check) {
        alert("one CheckBox must be checked out");
        return false;
    }

    var branch = document.forms["myForm"]["branch"];
    if (branch.value == "") {
        alert("Please select an option!");
        return false;
    }

    var email = document.forms["myForm"]["email"]
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value))) {
        alert("You have entered an invalid email address!");
        return false;
    }
    

    console.log("{"+
           "Name:" +x+","+
           "gender:"+checkBox.value+","+
           "branch:"+ branch.value+","+
           "email:"+ email.value+
        "}"
    )
    return true;
}