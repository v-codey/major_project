
var openMenuBar=()=>{
   document.querySelector(".feat-show").style.display= 'block';
}

document.querySelector(".feat-btn").addEventListener("click",()=>{
   openMenuBar();
});

var openUploadSection=()=>{
   document.querySelector(".uploadSection").style.display = 'none';
}   

document.querySelector(".uploadDetails").addEventListener("click",()=>{
   openUploadSection();
});


var openTableSection=()=>{
   document.querySelector(".bTechContainer").classList.toggle("displayToggle");
   document.querySelector(".mTechContainer").classList.toggle("displayToggle");
   // document.querySelector(".mTechContainer").style.display = 'block';
}   

document.querySelector("#bTech").addEventListener("click",()=>{
   openTableSection();
});
document.querySelector("#mTech").addEventListener("click",()=>{
   openTableSection();
});


