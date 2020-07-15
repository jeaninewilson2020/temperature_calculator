


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
    // Calls the function above with the value from inputDegrees as its value 
    const outputKelvin = getKelvin(document.getElementById('inputDegrees').value);
    //Gets the output but doesn't stay on the DOM 
    sessionStorage.setItem("outputElement", outputKelvin); 
    document.getElementById('output').innerHTML = sessionStorage.getItem("outputElement"); 
    
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
*/

}



