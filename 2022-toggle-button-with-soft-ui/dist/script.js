const toggleElem = document.querySelector("#toggle");
const toggleParent= document.querySelector(".wrap__toggle")
toggleElem.addEventListener("change", () =>{
  
  toggleParent.classList.toggle("active");    
  
});