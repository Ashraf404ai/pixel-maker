       // Select color input
      //Select size input
     //I can also use "querySelector" instead of "getElementById", but I will add #
    //Project variables pixel art

    var inputHeight = document.querySelector('#inputHeight');
    var sizePicker = document.querySelector('#sizePicker');
    var inputWidth = document.querySelector('#inputWidth');
    var pixelCanvas = document.querySelector('#pixelCanvas');
    var FunctionOnClick = function(event) {
      event.preventDefault();
 makeGrid();
   };
 // When size is submitted by the user, call makeGrid()

   var myFunction = function (event) {
    var color = document.querySelector('#colorPicker');
      event.target.style.backgroundColor = color.value;
         }
  //Submit button
   function makeGrid() {  
 //Your code goes here!
 pixelCanvas.innerHTML = '';

 for (let f = 0; f < inputHeight.value; f++) {
   var pxTr = document.createElement('tr');
   pixelCanvas.appendChild(pxTr)
  //Aplying color to td's background
    for (var i = 0; i < inputWidth.value; i++) {
      var pxTd = document.createElement('td');
  pxTr.appendChild(pxTd);
   pxTd.addEventListener('click' , myFunction)
     }
   }
 }
 sizePicker.addEventListener('submit',FunctionOnClick );
  //I searched a lot to make this code on (w3school,MDN,Jquery) and I ask some frieds on slack;
 //JavaScript code end

