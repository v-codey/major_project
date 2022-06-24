//Saving all student details in form of a JSON which contains array and inside array single student JSON
var allStudentDetails = {
    mtech: [],
    btech: [],
    mca: [],
    bca: []
}

class StudentData {
    // Reading data from input
    readDetails() {
        this.name = document.querySelector("#sName").value;
        this.roll = document.querySelector("#sRoll").value;
        this.age = document.querySelector("#sAge").value;
        this.gender = document.querySelector("input[name=gender]:checked").value;
        this.course = document.querySelector("#sCourse").value;
        this.course = this.course.toLowerCase();
        this.addStudentDetailInObject(this.course);
    }

    // Checking data to be stored in which array of course and Adding data inside it 
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
}


// event handling done for submit button of the upload student table
document.querySelector("#sub_btn").addEventListener('click', () => {
    var newStud1 = new StudentData();
    newStud1.readDetails();
});

// event handling for button in left bar to show and hide upload student table
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

// updating the row and column of table
var updateTable = ()=>{
    var num = allStudentDetails.mtech.length;
    console.log(num);
    var tableBody = document.querySelector('#tableBody');
    // Creating a new row which is children of tableBody
    var createRow = document.createElement('div');
    createRow.setAttribute("class", "divTableRow");
    var rowId = "rowId"+(num+1);
    createRow.setAttribute("id", rowId);
    tableBody.appendChild(createRow);

    // creating cell for serial number as its required to run only once per table query
    var serialCell = document.createElement('div');
    serialCell.setAttribute("class", "divTableCell");
    var serialNum = document.querySelector("#"+rowId);
    serialNum.appendChild(serialCell);
    serialCell.innerText = num;

    // adding data of student grabbed from readDetails()
    for(key in allStudentDetails.mtech[num-1]){
        var serialCell = document.createElement('div');
        serialCell.setAttribute('class', "divTableCell");
        document.querySelector('#'+rowId).append(serialCell); 
        serialCell.innerHTML = allStudentDetails.mtech[num-1][key];
    }
    resetTable();
}

// setting the upload section to its default state
var resetTable = ()=>{
    document.querySelector("#sName").value = '';
    document.querySelector("#sRoll").value = '';
    document.querySelector("#sAge").value = '';
    document.querySelector("input[name=gender]").value = 'Male';
    document.querySelector("#sCourse").value = "MTech";
}


