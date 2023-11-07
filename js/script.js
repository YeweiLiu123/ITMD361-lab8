function init(){
//add your javascrip between these two lines of code
  var button = document.getElementById('entrybutton');

  function showAlertAndChangeText() {
    var textbox = document.getElementById('entryinput');
    var inputValue = textbox.value;

    
    var alertMessage = "Yewei Liu: " + inputValue;
    alert(alertMessage);

    
    document.getElementById('textoutput').textContent = inputValue;
  }

  
  button.addEventListener('click', showAlertAndChangeText);
}

window.addEventListener('load', init);