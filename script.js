


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
    getKelvin(document.getElementById('inputDegrees').value); 
}

/*
function validateForm() {
    console.log(document.getElementById('time'));

     if (!validateDate(document.getElementById('date'))) {
        alert("Please enter a valid date");
        return false; 
    }
}
*/
//calculateTemp(15); 

