
var allStudentDetails = {
    mtech: [],
    btech: [],
    mca: [],
    bca: []
}

class StudentData  {
    readDetails() {
        this.name = document.querySelector("#sName").value;
        this.roll = document.querySelector("#sRoll").value;
        this.age = document.querySelector("#sAge").value;
        this.gender = document.querySelector("input[name=gender]:checked").value;
        this.course = document.querySelector("#sCourse").value;
        this.course = this.course.toLowerCase();
        
        this.addStudentDetailInObject(this.course);
    }


    addStudentDetailInObject(crs) {
        var newStu = {
            name : this.name,
            roll : this.roll,
            age : this.age,
            gender : this.gender,
        }

        switch(crs){
            case "mtech":
                allStudentDetails.mtech.push(newStu);
                break;
            case "btech":
                allStudentDetails.btech.push(newStu);
                break;
        }        
        console.log(allStudentDetails);
    }

}

document.querySelector("#sub_btn").addEventListener('click', () => {
    var newStud1 = new StudentData();
    newStud1.readDetails();
});


