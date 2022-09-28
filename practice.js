
//VARIABLES 

var squNumb = 6;
var colors = cols(squNumb);
var pickedColor = pickCols();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#display");

colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("#top");
var msg = document.querySelector("#tryAgain");
var rstBtn = document.querySelector("#rstBtn");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");









  //RESET BUTTON
  
  rstBtn.addEventListener("click", function() {
   
  colors = cols(squNumb);
  pickedColor = pickCols();
  colorDisplay.textContent = pickedColor;
  h1.style.background = "steelblue";
  msg.textContent = " ";
  rstBtn.textContent = "New Colors";
  for (var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
  }
  
  });
  
  
  
  //EASY BUTTON
  
  easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    h1.style.background = "steelblue";
    msg.textContent = " ";
    rstBtn.textContent = "New Colors";
    
    squNumb = 3;
    colors = cols(squNumb);
    pickedColor = pickCols();
    colorDisplay.textContent = pickedColor;
    for (let x = 0; x < squares.length; x++) {
      if (colors[x]) {
        squares[x].style.background = colors[x];
      } else {
        squares[x].style.display = "none";
      }
    }
  });
  
  //HARD BUTTON 
  
  hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    h1.style.background = "steelblue";
    msg.textContent = " ";
    rstBtn.textContent = "New Colors";
    
    squNumb = 6;
    colors = cols(squNumb);
    pickedColor = pickCols();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
      squares[i].style.background =colors[i];
      squares[i].style.display ="block";
    }
  });
  
  
  //GENERAL FUNCTION
  
  for (var i = 0; i < squares.length; i++) {
  
  squares[i].style.background = colors[i];
    
    //Squares Event Listeners
  
   squares[i].addEventListener("click", function () {
    
      var clickedColor = this.style.background;
    
   if (clickedColor === pickedColor) {
      
     allSquares(clickedColor);
     h1.style.background = clickedColor;
     msg.textContent = "CORRECT";
     msg.style.color ="green";
     rstBtn.textContent = "Play Again?";
    } else {
      this.style.background = "#232323";
      msg.textContent = "TRY AGAIN";
      msg.style.color ="red";
    } 
    
  }); 
  
  }
  
  
  // COLOR PICKING FOR ALL squares
  
  function allSquares(winn) {
    for (let i = 0; i < squares.length; i++) {
      squares[i].style.background = winn;
    }
  }
  
  
  // COLOR PICKING FOR DISPLAY
  
  function pickCols() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
  }
  
  
  // RANDOM COLOR NUMBER GENERATOR 
  
  function picNum() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
  
  
  function cols(num) {
    var arr = [];
    
    for (let i = 0; i < num; i++) {
      arr.push(picNum());
    }
    return arr;
  }