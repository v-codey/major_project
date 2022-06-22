
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
    var num = allStudentDetails.mtech.length;
    console.log(num);
    var tableBody = document.querySelector('#tableBody');
    var createRow = document.createElement('div');
    createRow.setAttribute("class", "divTableRow");
    var rowId = "rowId"+(num+1);
    createRow.setAttribute("id", rowId);
    tableBody.appendChild(createRow);

    var serialCell = document.createElement('div');
    serialCell.setAttribute("class", "divTableCell");

    var serialNum = document.querySelector("#"+rowId);
    serialNum.appendChild(serialCell);
    serialCell.innerText = num;
    for(key in allStudentDetails.mtech[0]){
        var serialCell = document.createElement('div');
        serialCell.setAttribute('class', "divTableCell");
        document.querySelector('#'+rowId).append(serialCell); 
        serialCell.innerHTML = allStudentDetails.mtech[0][key];
    }
    resetTable();
}

var resetTable = ()=>{
    document.querySelector("#sName").value = '';
    document.querySelector("#sRoll").value = '';
    document.querySelector("#sAge").value = '';
    document.querySelector("input[name=gender]:checked").value = 'Male';
    document.querySelector("#sCourse").value = "MTech";
}


