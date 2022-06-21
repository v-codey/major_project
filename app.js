
var allStudentDetails = {
    mtech: [],
    btech: [],
    mca: [],
    bca: []
}

class StudentData {
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
        updateTable();
    }
;
}



document.querySelector("#sub_btn").addEventListener('click', () => {
    var newStud1 = new StudentData();
    newStud1.readDetails();
});

var uploadBtn = document.querySelector('#uploadDataBtn');

uploadBtn.addEventListener('click', ()=>{
    var uploadDataSection = document.querySelector(".uploadContainer");
    uploadDataSection.classList.toggle("hide");
    if(uploadDataSection.classList.contains("hide")){
        uploadBtn.value = "Upload Student Data";
    }else{
        uploadBtn.value = "Hide Upload Data";
    }
});


var updateTable = ()=>{
    var tableBody = document.querySelector('.divTableBody');
    var tableRow = document.createElement('div');
    tableRow.setAttribute("class", "divTableRow");
    tableBody.appendChild(tableRow);
    var tableCell = document.createElement('div');
    tableCell.setAttribute("class", "divTableCell");
    var temp = document.querySelector(".divTableRow")
    temp.appendChild(tableCell);
    tableCell.innerText = '1';
    for(key in allStudentDetails.mtech[0]){
        var tableCell = document.createElement('div');
        tableCell.setAttribute('class', "divTableCell");
        document.querySelector('.divTableRow').append(tableCell); 
        tableCell.innerHTML = allStudentDetails.mtech[0][key];
    }
    console.log(tableRow);
}



