class Student {
    constructor(rno, fname, lname, age, gender, dob, occupation){
        this.rno = rno;
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.gender = gender;
        this.dob = dob;
        this.occ = occupation;
     }

     setOcc(occp) {
        this.occ = occp;
        console.log(this.occ);
     }
}

var s1 = new Student(1,'Sachin','Tendulkar', 45, 'male', '02-05-1990', "Padai");


function setOccupation() {
    let inputValue = document.getElementById("occ").value;
    s1.setOcc(inputValue);
}

function callStudent() {

    document.getElementById("student").innerHTML = "student details are :"+ "rno:" + s1.rno +"fname:"+s1.fname+"lname:" + s1.lname + "age:" + s1.age + "gender:" + s1.gender + "dob:" + s1.dob + "occupation:" + s1.occ;

}



  
