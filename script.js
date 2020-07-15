
const inputCelsius = document.getElementById('inputDegrees').value; 

function getKelvin (input) {
   const celsius = Math.floor(input); 
   console.log(celsius); 
   const kelvin = celsius + 273.15; 
   console.log(kelvin); 
   const output = Math.floor(kelvin); 
   console.log(output); 
   return output; 

}

function calculateTemp() {
   // Generates a new row of data each time the calculate button is clicked 
   const tableBody = document.getElementById("tbody"); 
   const row = tableBody.insertRow(0);
   const cell1 = row.insertCell(0);
   const cell2 = row.insertCell(1);
   const cell3 = row.insertCell(2); 

   cell1.innerHTML = document.getElementById('inputDegrees').value;
   cell2.innerHTML = getKelvin(document.getElementById('inputDegrees').value);
   cell3.innerHTML = "Weather Symbol"; 

   // Prevents auto refresh on the page 
   const form = document.getElementById("form"); 
    function handleForm(event) {
       event.preventDefault(); 
    }
    form.addEventListener('submit', handleForm); 
}

/*
 function calculateTemp() {
    generateData(); 
    // Calls the function above with the value from inputDegrees as its value 
    const outputKelvin = getKelvin(document.getElementById('inputDegrees').value);
    //Gets the output and displays it at the bottom of the page 
    sessionStorage.setItem("outputElement", outputKelvin); 
    document.getElementById('output').innerHTML = sessionStorage.getItem("outputElement"); 

    //Gets the input and displays it at the bottom of the page
    //Set inputDegrees to our inputCelsius variable 
    //const inputCelsius = document.getElementById('inputDegrees').value; 
    sessionStorage.setItem("inputElement", inputCelsius); 
    document.getElementById("input").innerHTML = sessionStorage.getItem("inputElement"); 
    
    // Prevent auto refreshing of the form 
    const form = document.getElementById("form"); 
    function handleForm(event) {
       event.preventDefault(); 
    }
    form.addEventListener('submit', handleForm); 
    
    /*
    //Get the text in the field we're going to track 
    const finalOutput = document.getElementById('output'); 
    //See if we have an autosave value (this will happen only if the page is accidentally refreshed) 
    if (sessionStorage.getItem("autosave")) {
       //Restore the contents of the text field 
      finalOutput.value = sessionStorage.getItem("autosave"); 
   }
   //Listen for changes in the text field 
   finalOutput.addEventListener("change", function() {
      // And save the results into the session storage object 
       sessionStorage.setItem("autosave", finalOutput.value); 
      
   }); 
}
*/




