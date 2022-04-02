var data;
 load =async () => {
    await  fetch('./content.json').then(async response => {
        json = response.json()
       await json.then((info) => {
            data = info
            // console.log(data);
        
        })
    })
     console.log("below await",data)
}

load().then(() => {
console.log(data);     
});
 

function getValues() {
    var college = document.getElementById("college").value
    console.log("selected option",college); 
}
