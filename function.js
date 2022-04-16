
// getting values form the user form
export var user = {
  college : '',
  caste :'',
  income:'',
  percentage :''
  
} ;
function getValues(e) {
  //   e.preventDefault();
  user.college = document.getElementById("college").value;
    // console.log("selected college", user.college);
  user.caste = document.getElementById("caste").value;
    // console.log("selected  caste -", user.caste);
  user.income = document.getElementById("income").value;
    // console.log("family income -", user.income);
  user.percentage = document.getElementById("percentage").value;
    // console.log(" 12th percentage is -", user.percentage);
  // load(college, caste, income, percentage);

}
// console.log("college is ", user)

