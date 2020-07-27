let name = document.getElementById("name");
let error = document.getElementById('error')

name.addEventlistener('keyup', lengthTester);

function lengthTester() {
    document.getElementById('error').innerHTML = "";
    try { 
        if(typeof(number) === 'number') throw "not a string.";
        if(name.value.length < 5)  throw "too low.";
        if(name.value.length > 12)   throw "too high.";
    }
    catch(error) {
        document.getElementById('error').innerHTML = "Input is " + error;
        console.log('log');
    }
  }