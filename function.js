var data;
 load =async () => {
    await  fetch('./content.json').then(async response => {
        json = response.json()
       await json.then((info) => {
            data = info
            // console.log(data);
        
        })
    })
    //  console.log("below await",data)
}

   // getting values form the user form
   function getValues() {
    var college = document.getElementById("college").value
    console.log("selected college",college); 
    var caste = document.getElementById("caste").value
    console.log("selected  caste -",caste); 
} 

load().then(() => {
// console.log("data is",data);


});
 
