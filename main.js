/*var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);*/


//event1 txtbox 
function myFunction1(event) {
  var x = event.key;

    if (x == "a" || x == "A") { 
    alert ("Now Type 'b' or 'B' to explore more.");
    document.getElementById("title").style.display = "none";
    document.getElementById("title2").style.display = "block";
    document.getElementById("body").style.background = "none";
    document.getElementById("cat").style.display = "none";
    document.getElementById("laugh").muted = true;
  }

    if (x == "b" || x == "B") { 
    document.getElementById("title2").style.display = "none";
    document.getElementById("title3").style.display = "block";
    document.getElementById("cat").style.display = "none";
    document.getElementById("movingcat").style.display = "block";
  } 

    if (x == "c" || x == "C") { 
    alert ("Why are you still doing this? Type duh in the box");
    document.getElementById("cat").style.display = "block";
    document.getElementById("movingcat").style.display = "none";
    document.getElementById("title3").style.display = "none";
    document.getElementById("title4").style.display = "block";
  }

    if (x == "d" || x == "D") { 
    alert ("Quiz Time");
    document.getElementById("cat").style.display = "none";
    document.getElementById("title4").style.display = "none";
    document.getElementById("title5").style.display = "block";
  }
    if (x == "e" || x == "E") { 
    document.getElementById("keys1").style.display = "block";
  }

    if (x == "1" || x == "3" || x == "4") { 
    alert ("Wrong. You are STUPID");
    document.getElementById("title4").style.display = "none";
    document.getElementById("title5").style.display = "block";
  }

    if (x == "2") { 
    alert ("Seems like you are a bright one.");
    document.getElementById("title5").style.display = "none";
    document.getElementById("title6").style.display = "block";
  }

    if (x == "5" || x == "6" || x == "7") { 
    alert ("Try Again.");
    document.getElementById("title5").style.display = "none";
    document.getElementById("title6").style.display = "block";
  }

    if (x == "8") { 
    alert ("Lucky Guess.");
    document.getElementById("title6").style.display = "none";
    document.getElementById("title7").style.display = "block";
  }

    if (x == "Backspace") { 
    document.getElementById("backspace").style.display = "block";
  }

    if (x == "Enter") { 
    document.getElementById("backspace").style.display = "none";
  }



    if (x == "f" || x == "F") { 
    document.getElementById("keys2").style.display = "block";
  }
    if (x == "g" || x == "G") { 
    document.getElementById("keys3").style.display = "block";
  }

   if (x == "h" || x == "H") { 
    document.getElementById("keys4").style.display = "block";
  }

   if (x == "i" || x == "I") { 
    document.getElementById("keys5").style.display = "block";
  }

   if (x == "j" || x == "J") { 
    document.getElementById("keys6").style.display = "block";
  }

   if (x == "k" || x == "K") { 
    document.getElementById("keys7").style.display = "block";
  }

   if (x == "l" || x == "L") { 
    document.getElementById("keys8").style.display = "block";
  }

   if (x == "m" || x == "M") { 
    document.getElementById("keys9").style.display = "block";
  }

   if (x == "n" || x == "N") { 
    document.getElementById("keys10").style.display = "block";
  }

   if (x == "o" || x == "O") { 
    document.getElementById("keys11").style.display = "block";
  }

   if (x == "p" || x == "P") { 
    document.getElementById("keys12").style.display = "block";
  }

   if (x == "q" || x == "Q") { 
    document.getElementById("keys13").style.display = "block";
  }

   if (x == "r" || x == "R") { 
    document.getElementById("keys14").style.display = "block";
  }

   if (x == "s" || x == "S") { 
    document.getElementById("keys15").style.display = "block";
  }

   if (x == "t" || x == "T") { 
    document.getElementById("keys16").style.display = "block";
  }

   if (x == "u" || x == "U") { 
    document.getElementById("keys17").style.display = "block";
  }

   if (x == "v" || x == "V") { 
    document.getElementById("keys18").style.display = "block";
  }

   if (x == "w" || x == "W") { 
    document.getElementById("keys19").style.display = "block";
  }

   if (x == "x" || x == "X") { 
    document.getElementById("keys20").style.display = "block";
  }

   if (x == "y" || x == "Y") { 
    document.getElementById("keys21").style.display = "block";
  }

   if (x == "z" || x == "Z") { 
    document.getElementById("keys22").style.display = "block";
  }

   if (x == "Escape") { 
    document.getElementById("keys1").style.display = "none";
    document.getElementById("keys2").style.display = "none";
    document.getElementById("keys3").style.display = "none";
    document.getElementById("keys4").style.display = "none";
    document.getElementById("keys5").style.display = "none";
    document.getElementById("keys6").style.display = "none";
    document.getElementById("keys7").style.display = "none";
    document.getElementById("keys8").style.display = "none";
    document.getElementById("keys9").style.display = "none";
    document.getElementById("keys10").style.display = "none";
    document.getElementById("keys11").style.display = "none";
    document.getElementById("keys12").style.display = "none";
    document.getElementById("keys13").style.display = "none";
    document.getElementById("keys14").style.display = "none";
    document.getElementById("keys15").style.display = "none";
    document.getElementById("keys16").style.display = "none";
    document.getElementById("keys17").style.display = "none";
    document.getElementById("keys18").style.display = "none";
    document.getElementById("keys19").style.display = "none";
    document.getElementById("keys20").style.display = "none";
    document.getElementById("keys21").style.display = "none";
    document.getElementById("keys22").style.display = "none";
  }


}
//event1 txtbox end



/*function myFunction2(event) {
  var x = event.key;

    if (x == "a" || x == "A") { 
    alert ("I said Stop.");
    //this is where the bg color changes
    document.getElementById("typebar2").style.backgroundColor = "red";
    document.getElementById("title").style.color = "red";
  }
}*/
//event2 txtbox end




const log = document.getElementById('log');
document.addEventListener('keydown', logKey);
function logKey(e) {
  log.textContent += ` ${e.code}`;
  //use = instead of += to get rid of the previous things you've typed
}
//key log end


/*document.addEventListener('keydown', (event) => {
  if (event.key === "a"){
     console.log('helloA') 
    $('#background1').toggle();
  }
   if (event.key === "b"){
    $('#shape1').toggle();
  }
})*/
//keydown event



