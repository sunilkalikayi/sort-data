const user = require(user)

var data;
var sorted_data = [];
load = async (college, caste, income, percentage) => {
  await fetch("./content.json")
    .then(async (response) => {
      json = response.json();
      await json.then((info) => {
        data = info;
        // console.log(data);
      });
    })
    .then(() => {
      //   console.log("data[0]", data[0].College_Name);
      for (const iterator of data) {
        if (
          iterator.College_Name == college &&
          iterator.Caste == caste 
         
        ) {
          // console.log("hii");
          if ( percentage >= iterator.Scholorship_Marks) {
            iterator.scheEligible = true
          }
          else {
            iterator.scheEligible = false
            
          }
          console.log(iterator);

        }
        // console.log(iterator);
      }
    });
};


console.log('exported user is ', user);