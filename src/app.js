var getData = function(){
  console.log("getting data");
  ajax({
    url: 'https://www.kimonolabs.com/api/json/6bipqtfu?apikey=RHMUtKO0hKuANXW8Uqis2wddTbXIQ8RP', 
    type: 'json'
  },
  function(data) {
    console.log("gotdata" + JSON.stringify(data));
    var output = '';
    data.results.collection1.forEach(function(element, index){

      //get  the company title - limited to 10 character
      var companyTitle = element.name.text;
      if(companyTitle.length < 10) companyTitle = companyTitle.substring(0, 10) + '...';
      //append this to the output
      output += companyTitle +'\n' + '\n\n';
    });
    simply.setText({body: output});
 },
 function (error) {
   console.log("Got error: "+JSON.stringify(error));
   simply.title(error.status);
   simply.body(error.error);
 }
);
};

console.log("Loading...");

//Initialize the screen
simply.scrollable(true);
simply.title("India Mag Lite");

// Start getting the data
getData();