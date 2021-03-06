angular.module('tetris',['ngMaterial'])
  .controller('mainController', function($scope, $mdDialog){
 
date = new Date();
year = date.getFullYear();
$("#footer #year").html(year);

$scope.instructions = function(ev) {
             clearInterval(interval)
             game = false;
             $mdDialog.show({
                 controller: InstructionsController,
                 templateUrl: 'instructions.html',
                 parent: angular.element(document.body),
                 targetEvent: ev,
                 clickOutsideToClose:true// Only for -xs, -sm breakpoints.
             });

     };

$scope.gameOverMessage = function(ev) {
             wid = (($(window).width())/2)+500;
             $mdDialog.show({
                 controller: gameOverMessageController,
                 templateUrl: 'gameover.html',
                 parent: angular.element(document.body),
                 targetEvent: ev,
                 clickOutsideToClose:true,// Only for -xs, -sm breakpoints.
                 openFrom:{
                     top: 0,
                     width: wid,
                     height: 10
                 },
                 closeTo:{
                     top:0
                 }
             });

     };     

function InstructionsController($scope, $mdDialog) {
             $scope.close = function() {
                 interval = setInterval(moveDown, speed);
                 game=true;
                 $mdDialog.cancel();
             };
             $scope.cancel = function() {
                 interval = setInterval(moveDown, speed);
                 game=true;
                 $mdDialog.cancel();
             };
             
        };

function gameOverMessageController($scope, $mdDialog) {
             $scope.close = function() {
                 score = 0;
                  $("#score").html(score);
                  level = 1;
                  $("#level span").html(level);
                 $(".square1,.square2,.square3,.square4,.horizontal-rectangle1,.horizontal-rectangle2,.horizontal-rectangle3,.horizontal-rectangle4,.l1,.l2,.l3,.l4,.inverted-l1,.inverted-l2,.inverted-l3,.inverted-l4,.horizontal-zigzag1,.horizontal-zigzag2,.horizontal-zigzag3,.horizontal-zigzag4,.inverted-horizontal-zigzag1,.inverted-horizontal-zigzag2,.inverted-horizontal-zigzag3,.inverted-horizontal-zigzag4,.t1,.t2,.t3,.t4").remove();
                 $("#tetris-game").removeClass("hidden");

                 $mdDialog.cancel();
             };
             $scope.cancel = function() {
                 score = 0;
                  $("#score").html(score);
                  level = 1;
                  $("#level span").html(level);
                 $(".square1,.square2,.square3,.square4,.horizontal-rectangle1,.horizontal-rectangle2,.horizontal-rectangle3,.horizontal-rectangle4,.l1,.l2,.l3,.l4,.inverted-l1,.inverted-l2,.inverted-l3,.inverted-l4,.horizontal-zigzag1,.horizontal-zigzag2,.horizontal-zigzag3,.horizontal-zigzag4,.inverted-horizontal-zigzag1,.inverted-horizontal-zigzag2,.inverted-horizontal-zigzag3,.inverted-horizontal-zigzag4,.t1,.t2,.t3,.t4").remove();
                 $("#tetris-game").removeClass("hidden");

                 $mdDialog.cancel();
             };
             $scope.confirm = function(){
                 score = 0;
                  $("#score").html(score);
                  level = 1;
                  $("#level span").html(level);
                 $(".square1,.square2,.square3,.square4,.horizontal-rectangle1,.horizontal-rectangle2,.horizontal-rectangle3,.horizontal-rectangle4,.l1,.l2,.l3,.l4,.inverted-l1,.inverted-l2,.inverted-l3,.inverted-l4,.horizontal-zigzag1,.horizontal-zigzag2,.horizontal-zigzag3,.horizontal-zigzag4,.inverted-horizontal-zigzag1,.inverted-horizontal-zigzag2,.inverted-horizontal-zigzag3,.inverted-horizontal-zigzag4,.t1,.t2,.t3,.t4").remove();
                 $("#tetris-game").removeClass("hidden");
                 $mdDialog.cancel();

             }
             
        };


$scope.startGame =  function(){
  $("#tetris-game").css("animation", "").addClass("hidden");
  game = true;
  nextRandonNumber = Math.floor(Math.random()*7);
  nextRandomId = "#"+randomArray[nextRandonNumber]; 
  nextEle = $(nextRandomId);
  generateNextBlock();
  $("#buttons").addClass("hidden");
  $("#buttons2").removeClass("hidden");
} 

$scope.pauseGame = function(){
  if(game){
    clearInterval(interval);
    game = false;
    $(".pause").html("Resume");
  }
  else{
    interval = setInterval(moveDown, speed);
    game = true;
    $(".pause").html("Pause");

  }  
}

$scope.restartGame = function(){
  game = false;
  clearInterval(interval)
  score = 0;
  $("#score").html(score);
  level = 1;
  $("#level span").html(level);
  $("#buttons2").addClass("hidden");
  $("#buttons").removeClass("hidden");
  
  $("#square-next, #horizontal-rectangle-next, #vertical-rectangle-next, #l-next, #inverted-l-next, #horizontal-zigzag-next, #inverted-horizontal-zigzag-next, #vertical-zigzag-next, #t-next").addClass("hidden");
  nextRandonNumber = Math.floor(Math.random()*7);
  nextRandomId = "#"+randomArray[nextRandonNumber]; 
  nextEle = $(nextRandomId);
  s = boundaryTop+boxHeight;
  // for(i=s;i>boundaryTop;i=i-25){
  //    for(k=425;k<=750;k=k+25){
  //        // console.log(k, i)
  //        checkelem = document.elementFromPoint(k, i);
  //        checkelem.style.backgroundColor = "grey";
  //        checkelem.style.border="none";
  //        $("#boundary").css({"border-style":"solid", "border-width":"5px", "border-color":"black"})

  //   }
  // }
  $(".square1,.square2,.square3,.square4,.horizontal-rectangle1,.horizontal-rectangle2,.horizontal-rectangle3,.horizontal-rectangle4,.l1,.l2,.l3,.l4,.inverted-l1,.inverted-l2,.inverted-l3,.inverted-l4,.horizontal-zigzag1,.horizontal-zigzag2,.horizontal-zigzag3,.horizontal-zigzag4,.inverted-horizontal-zigzag1,.inverted-horizontal-zigzag2,.inverted-horizontal-zigzag3,.inverted-horizontal-zigzag4,.t1,.t2,.t3,.t4").remove();
  $("#tetris-game").removeClass("hidden");
  // game =true;
  // generateNextBlock();
}



var randomArray = ["square-next", "horizontal-rectangle-next", "l-next", "horizontal-zigzag-next", "inverted-l-next", "inverted-horizontal-zigzag-next", "t-next"];
var currentRandonNumber;
var nextRandonNumber ;
// console.log(nextRandonNumber)

var currentRandomId; 
var nextRandomId ; 
var nextEle;
// $("#next-block").html(nextEle);
// console.log(nextEle)

var boundaryTop = document.getElementById("boundary").offsetTop;
var boundaryLeft = document.getElementById("boundary").offsetLeft;
var marginTop = $("#boundary").css("margin-top");

var boxWidth = $("#boundary").width();
var boxHeight = $("#boundary").height();

var minX = boundaryLeft+50;
var maxX = boundaryLeft + boxWidth;
var randomXPos;
var currentBlockWidth;
var currentBlockHeight;
var $ele;
var childEle1
var childEle2;
var childEle3;
var childEle4;
var interval;
var children;
var game = false;
var score = 0;
var level = 1;
var speed = 300;
document.getElementById("boundary").style.backgroundColor = "grey";

// e = "#"+randomArray[nextRandonNumber];
// $(e).removeClass("hidden")
// el = $(e);
// console.log(e, el)
// // el.removeClass("hidden")
// $("#boundary").html(el)

var color;

function blockColor(){
   if(currentRandonNumber == 0){
      color = "red";
   }
   else if(currentRandonNumber == 1){
      color = "green";
   }
   else if(currentRandonNumber == 2){
      color = "magenta";
   }
   else if(currentRandonNumber == 3){
      color = "blue";
   }
   else if(currentRandonNumber == 4){
      color = "orange";
   }
   else if(currentRandonNumber == 5){
      color = "yellow";
   }
   else if(currentRandonNumber == 6){
      color = "aqua";
   }
};



function generateNextBlock(){
  if(game){
    nextEle.removeClass("hidden").css({"top":200, "left":1000});
  	currentRandonNumber = nextRandonNumber;
  	nextRandonNumber = Math.floor(Math.random()*7);
  	nextRandomId = "#"+randomArray[nextRandonNumber]; 
  	$("#square-next, #horizontal-rectangle-next, #vertical-rectangle-next, #l-next, #inverted-l-next, #horizontal-zigzag-next, #inverted-horizontal-zigzag-next, #vertical-zigzag-next, #t-next").addClass("hidden");
  	$(nextRandomId).removeClass("hidden").css({"top":200, "left":1000});
      // $("#next-block").html("");
      // nextEle = $(nextRandomId);
      // $("#next-block").html(nextEle);

      // currentRandonNumber = 1;
    blockColor();  

  	randomXPos = randomX(currentRandonNumber);

  	createElement(currentRandonNumber);
  	// console.log(randomXPos)
      // $(currentRandomId).removeClass("hidden").css({"top": boundaryTop, "left":randomXPos});
      
      interval = setInterval(moveDown, speed)
  }  
}

function moveDown(){

    currentTo4=childEle4.position().top;
    currentLef4=childEle4.position().left;
    currentTo4+=25;
    if(currentTo4>=boundaryTop){
      childEle4.css("visibility", "visible");
    }
    z = checkEnd(currentLef4, currentTo4);
    if(z==1){  
              score+=10;
               $("#score").html(score);
               increaseLevel();
               return;
             }
    y = checkBelow(currentLef4, currentTo4)
    if(y==1){
               clearInterval(interval);
               score+=10;
               $("#score").html(score);
               increaseLevel();

               to4 = currentTo4
               checkCompleteRow(to4);
               checkGameOver();
               generateNextBlock();
      return;}
    childEle4.css("top", currentTo4);
      // childEle4.css({"background-color":"grey"})
    // console.log(currentTop)


    currentTo3=childEle3.position().top;
    currentLef3=childEle3.position().left;
    currentTo3+=25;
        if(currentTo3>=boundaryTop){
      childEle3.css("visibility", "visible");

    }
    y = checkBelow(currentLef3, currentTo3)
    if(y==1){
               currentTop4=childEle4.position().top;
               currentTop4-=25;
               childEle4.css("top", currentTop4);

               // childEle4.css({"background-color":color})

               clearInterval(interval);
               to4 = currentTo4
               score+=10;
               $("#score").html(score);
               increaseLevel();

               checkCompleteRow(to4);
               checkGameOver();
               generateNextBlock();
      return;}
    childEle3.css("top", currentTo3);

      // childEle3.css({"background-color":"grey"})
      

    currentTo2=childEle2.position().top;
    currentLef2=childEle2.position().left;
    currentTo2+=25;
        if(currentTo2>=boundaryTop){
      childEle2.css("visibility", "visible");
    }
    y = checkBelow(currentLef2, currentTo2)
    if(y==1){
               currentTop4=childEle4.position().top;
               currentTop4-=25;
               childEle4.css("top", currentTop4);

               currentTop3=childEle3.position().top;
               currentTop3-=25;
               childEle3.css("top", currentTop3);

               // childEle4.css({"background-color":color})
               // childEle3.css({"background-color":color})
 
               clearInterval(interval);
               to4 = currentTo4
               score+=10;
               $("#score").html(score);
               increaseLevel();

               checkCompleteRow(to4);
               checkGameOver();
               generateNextBlock();
      return;}
    childEle2.css("top", currentTo2);

      // childEle2.css({"background-color":"grey"})


    currentTo1=childEle1.position().top;
    currentLef1=childEle1.position().left;
    currentTo1+=25;
        if(currentTo1>=boundaryTop){
      childEle1.css("visibility", "visible");
    }
    y = checkBelow(currentLef1, currentTo1)
    if(y==1){
               currentTop4=childEle4.position().top;
               currentTop4-=25;
               childEle4.css("top", currentTop4);

               currentTop3=childEle3.position().top;
               currentTop3-=25;
               childEle3.css("top", currentTop3);

               currentTop2=childEle2.position().top;
               currentTop2-=25;
               childEle2.css("top", currentTop2);

               // childEle4.css({"background-color":color})
               // childEle3.css({"background-color":color})
               // childEle2.css({"background-color":color})
               
               clearInterval(interval);
               to4 = currentTo4
               score+=10;
               $("#score").html(score);
               increaseLevel();

               checkCompleteRow(to4);
               checkGameOver();
               generateNextBlock();
      return;}
    childEle1.css("top", currentTo1);

      // childEle1.css({"background-color":"grey"})


    // childEle4.css("top", currentTo4);
    // childEle4.css({"background-color":color})

    // childEle3.css("top", currentTo3);
    // childEle3.css({"background-color":color})
    
    // childEle2.css("top", currentTo2);
    // childEle2.css({"background-color":color})

    // childEle1.css("top", currentTo1);
    // childEle1.css({"background-color":color})

    


        
	// 
	// currentTop = $ele.position().top;
	// currentLeft = $ele.position().left;
 //    currentTop+=25;
 //    c = checkBelow(currentLeft, currentTop);
 //    if(c==1){
 //    	return;
 //    }
 //    $ele.css("top", currentTop); 
 //    // a1 = currentTop+30+currentBlockHeight;
 //    // a2 = boundaryTop+boxHeight;
 //    // console.log(currentBlockHeight, a1, a2)
 //    if((currentTop+currentBlockHeight) >= (boundaryTop+boxHeight)){
 //        clearInterval(interval);
 //    	generateNextBlock();
 //    } 


}

function moveRight(){

    if((currentRandonNumber == 4)||(currentRandonNumber == 5 && state=="horizontal")||(currentRandonNumber == 3 && state=="vertical")){
            currentTop=childEle1.position().top;
            currentLeft=childEle1.position().left;
            currentLeft+=25;
            w = checkRight(currentLeft, currentTop)
            if(w==1){
              return;
            }
            else{
              childEle1.css("left", currentLeft);
            }

            currentTop=childEle2.position().top;
            currentLeft=childEle2.position().left;
            currentLeft+=25;
            w = checkRight(currentLeft, currentTop)
            if(w==1){
              currentLeft1=childEle1.position().left;
              currentLeft1-=25;
              childEle1.css("left", currentLeft1);
              return;
            }
            else{
              childEle2.css("left", currentLeft);
            }

            currentTop=childEle3.position().top;
            currentLeft=childEle3.position().left;
            currentLeft+=25;
            w = checkRight(currentLeft, currentTop)
            if(w==1){
              currentLeft1=childEle1.position().left;
              currentLeft1-=25;
              childEle1.css("left", currentLeft1);

              currentLeft2=childEle2.position().left;
              currentLeft2-=25;
              childEle2.css("left", currentLeft2);
              return;
            }
            else{
              childEle3.css("left", currentLeft);
            }

            currentTop=childEle4.position().top;
            currentLeft=childEle4.position().left;
            currentLeft+=25;
            w = checkRight(currentLeft, currentTop)
            if(w==1){
              currentLeft1=childEle1.position().left;
              currentLeft1-=25;
              childEle1.css("left", currentLeft1);

              currentLeft2=childEle2.position().left;
              currentLeft2-=25;
              childEle2.css("left", currentLeft2);

              currentLeft3=childEle3.position().left;
              currentLeft3-=25;
              childEle3.css("left", currentLeft3);
              return;
              return;}
            else{
              childEle4.css("left", currentLeft);
            }
    }


    currentTo4=childEle4.position().top;
    currentLef4=childEle4.position().left;
    currentLef4+=25;
    x = checkRight(currentLef4, currentTo4)
    if(x==1){

      return;
    }
    childEle4.css({"background-color":"grey"})

    // else{
    //   childEle4.css("left", currentLef4);
    // }

    currentTo3=childEle3.position().top;
    currentLef3=childEle3.position().left;
    currentLef3+=25;
    x = checkRight(currentLef3, currentTo3)
    if(x==1){
      // currentLeft4=childEle4.position().left;
      // currentLeft4-=25;
      // childEle4.css("left", currentLeft4);

      childEle4.css({"background-color":color})
      return;
    }
      childEle3.css({"background-color":"grey"})

    // else{
    //   childEle3.css("left", currentLef3);
    // }

    currentTo2=childEle2.position().top;
    currentLef2=childEle2.position().left;
    currentLef2+=25;
    x = checkRight(currentLef2, currentTo2)
    if(x==1){
      // currentLeft4=childEle4.position().left;
      // currentLeft4-=25;
      // childEle4.css("left", currentLeft4);

      // currentLeft3=childEle3.position().left;
      // currentLeft3-=25;
      // childEle3.css("left", currentLeft3);

      childEle4.css({"background-color":color})
      childEle3.css({"background-color":color})
      return;
    }
      childEle2.css({"background-color":"grey"})

    // else{
    //   childEle2.css("left", currentLef2);
    // }

    currentTo1=childEle1.position().top;
    currentLef1=childEle1.position().left;
    currentLef1+=25;
    x = checkRight(currentLef1, currentTo1)
    if(x==1){
      // currentLeft4=childEle4.position().left;
      // currentLeft4-=25;
      // childEle4.css("left", currentLeft4);

      // currentLeft3=childEle3.position().left;
      // currentLeft3-=25;
      // childEle3.css("left", currentLeft3);

      // currentLeft2=childEle2.position().left;
      // currentLeft2-=25;
      // childEle2.css("left", currentLeft2);

      childEle4.css({"background-color":color})
      childEle3.css({"background-color":color})
      childEle2.css({"background-color":color})
      return;
    }
      childEle1.css({"background-color":"grey"})

    // else{
    //   childEle1.css("left", currentLef1);
    // }

    childEle4.css("left", currentLef4);
    childEle4.css({"background-color":color})

    childEle3.css("left", currentLef3);
    childEle3.css({"background-color":color})

    childEle2.css("left", currentLef2);
    childEle2.css({"background-color":color})

    childEle1.css("left", currentLef1);
    childEle1.css({"background-color":color})


}  

function moveLeft(){

    if((currentRandonNumber == 4)||(currentRandonNumber == 5 && state=="horizontal")||(currentRandonNumber == 3 && state=="vertical")){
            currentTop=childEle4.position().top;
            currentLeft=childEle4.position().left;
            currentLeft-=25;
            x = checkLeft(currentLeft, currentTop)
            if(x==1){
              
              return;}
            else{
              childEle4.css("left", currentLeft);
            }

            currentTop=childEle3.position().top;
            currentLeft=childEle3.position().left;
            currentLeft-=25;
            x = checkLeft(currentLeft, currentTop)
            if(x==1){
              currentLeft4=childEle4.position().left;
              currentLeft4+=25;
              childEle4.css("left", currentLeft4);
              return;
            }
            else{
              childEle3.css("left", currentLeft);
            }

            currentTop=childEle2.position().top;
            currentLeft=childEle2.position().left;
            currentLeft-=25;
            x = checkLeft(currentLeft, currentTop)
            if(x==1){
              currentLeft4=childEle4.position().left;
              currentLeft4+=25;
              childEle4.css("left", currentLeft4);

              currentLeft3=childEle3.position().left;
              currentLeft3+=25;
              childEle3.css("left", currentLeft3);
              return;
            }
            else{
              childEle2.css("left", currentLeft);
            }

            currentTop=childEle1.position().top;
            currentLeft=childEle1.position().left;
            currentLeft-=25;
            x = checkLeft(currentLeft, currentTop)
            if(x==1){
              currentLeft4=childEle4.position().left;
              currentLeft4+=25;
              childEle4.css("left", currentLeft4);

              currentLeft3=childEle3.position().left;
              currentLeft3+=25;
              childEle3.css("left", currentLeft3);

              currentLeft2=childEle2.position().left;
              currentLeft2+=25;
              childEle2.css("left", currentLeft2);
              return;
            }
            else{
              childEle1.css("left", currentLeft);
            }
    }

    currentTop=childEle1.position().top;
    currentLeft=childEle1.position().left;
    currentLeft-=25;
    w = checkLeft(currentLeft, currentTop)
    if(w==1){
      return;
    }
    else{
      childEle1.css("left", currentLeft);
    }

    currentTop=childEle2.position().top;
    currentLeft=childEle2.position().left;
    currentLeft-=25;
    w = checkLeft(currentLeft, currentTop)
    if(w==1){
      currentLeft1=childEle1.position().left;
      currentLeft1+=25;
      childEle1.css("left", currentLeft1);
      return;
    }
    else{
      childEle2.css("left", currentLeft);
    }

    currentTop=childEle3.position().top;
    currentLeft=childEle3.position().left;
    currentLeft-=25;
    w = checkLeft(currentLeft, currentTop)
    if(w==1){
      currentLeft1=childEle1.position().left;
      currentLeft1+=25;
      childEle1.css("left", currentLeft1);

      currentLeft2=childEle2.position().left;
      currentLeft2+=25;
      childEle2.css("left", currentLeft2);
      return;
    }
    else{
      childEle3.css("left", currentLeft);
    }

    currentTop=childEle4.position().top;
    currentLeft=childEle4.position().left;
    currentLeft-=25;
    w = checkLeft(currentLeft, currentTop)
    if(w==1){
      currentLeft1=childEle1.position().left;
      currentLeft1+=25;
      childEle1.css("left", currentLeft1);

      currentLeft2=childEle2.position().left;
      currentLeft2+=25;
      childEle2.css("left", currentLeft2);

      currentLeft3=childEle3.position().left;
      currentLeft3+=25;
      childEle3.css("left", currentLeft3);
      return;
      return;}
    else{
      childEle4.css("left", currentLeft);
    }

}    



function createElement(random){
	boundaryTop = document.getElementById("boundary").offsetTop;
	if(random == 0){
		 // $ele = $("<div>", {id: "square"});
		 childEle1 = $("<div>", {id: "square1", class:"square1 brick"});
		 childEle2 = $("<div>", {id: "square2", class:"square2 brick"});
		 childEle3 = $("<div>", {id: "square3", class:"square3 brick"});
		 childEle4 = $("<div>", {id: "square4", class:"square4 brick"});
    
    boundaryTop-=50;

		$("body").append(childEle1);
		childEle1.css({"left": randomXPos, "top":boundaryTop, "background-color":color});
		$("body").append(childEle2);
		randomXPos+=25;
		childEle2.css({"left": randomXPos, "top":boundaryTop, "background-color":color});
		$("body").append(childEle3);
		randomXPos-=25;boundaryTop+=25;
		childEle3.css({"left": randomXPos, "top":boundaryTop, "background-color":color});
		$("body").append(childEle4);
		randomXPos+=25;
		childEle4.css({"left": randomXPos, "top":boundaryTop, "background-color":color});

   	}
	else if(random == 1){
		 // $ele = $("<div>", {id: "horizontal-rectangle"});
		 childEle1 = $("<div>", {id: "horizontal-rectangle1", class:"horizontal-rectangle1 brick"});
		 childEle2 = $("<div>", {id: "horizontal-rectangle2", class:"horizontal-rectangle2 brick"});
		 childEle3 = $("<div>", {id: "horizontal-rectangle3", class:"horizontal-rectangle3 brick"});
		 childEle4 = $("<div>", {id: "horizontal-rectangle4", class:"horizontal-rectangle4 brick"});
    boundaryTop-=25;
    $("body").append(childEle1);
		childEle1.css({"left": randomXPos, "top":boundaryTop, "background-color":color});
		$("body").append(childEle2);
		randomXPos+=25;
		childEle2.css({"left": randomXPos, "top":boundaryTop, "background-color":color});
		$("body").append(childEle3);
		randomXPos+=25;
		childEle3.css({"left": randomXPos, "top":boundaryTop, "background-color":color});
		$("body").append(childEle4);
		randomXPos+=25;
		childEle4.css({"left": randomXPos, "top":boundaryTop, "background-color":color});
    state = "horizontal";

	}
	// else if(random == 2){
	// 	 // $ele = $("<div>", {id: "vertical-rectangle"});
	// 	 childEle1 = $("<div>", {id: "vertical-rectangle1", class:"vertical-rectangle1 brick"});
	// 	 childEle2 = $("<div>", {id: "vertical-rectangle2", class:"vertical-rectangle2 brick"});
	// 	 childEle3 = $("<div>", {id: "vertical-rectangle3", class:"vertical-rectangle3 brick"});
	// 	 childEle4 = $("<div>", {id: "vertical-rectangle4", class:"vertical-rectangle4 brick"});
 //    boundaryTop-=100;
    
 //    $("body").append(childEle1);
	// 	childEle1.css({"left": randomXPos, "top":boundaryTop, "background-color":"yellow"});
	// 	$("body").append(childEle2);
	// 	boundaryTop+=25;
	// 	childEle2.css({"left": randomXPos, "top":boundaryTop, "background-color":"yellow"});
	// 	$("body").append(childEle3);
	// 	boundaryTop+=25;
	// 	childEle3.css({"left": randomXPos, "top":boundaryTop, "background-color":"yellow"});
	// 	$("body").append(childEle4);
	// 	boundaryTop+=25;
	// 	childEle4.css({"left": randomXPos, "top":boundaryTop, "background-color":"yellow"});
	// }
		else if(random == 2){
		 // $ele = $("<div>", {id: "l"});
		 childEle1 = $("<div>", {id: "l1", class:"l1 brick"});
		 childEle2 = $("<div>", {id: "l2", class:"l2 brick"});
		 childEle3 = $("<div>", {id: "l3", class:"l3 brick"});
		 childEle4 = $("<div>", {id: "l4", class:"l4 brick"});
    boundaryTop-=50;
    // randomXPos+=50;
		
    $("body").append(childEle1);
		childEle1.css({"left": randomXPos, "top":boundaryTop, "background-color":color});
		$("body").append(childEle2);
		randomXPos+=25;
		childEle2.css({"left": randomXPos, "top":boundaryTop, "background-color":color});
		$("body").append(childEle3);
		randomXPos+=25;
		childEle3.css({"left": randomXPos, "top":boundaryTop, "background-color":color});
		$("body").append(childEle4);
		boundaryTop+=25;
    randomXPos-=50;
		childEle4.css({"left": randomXPos, "top":boundaryTop, "background-color":color});
    state = "vertical2";

	}
		else if(random == 3){
		 // $ele = $("<div>", {id: "horizontal-zigzag"});
		 childEle1 = $("<div>", {id: "horizontal-zigzag1", class:"horizontal-zigzag1 brick"});
		 childEle2 = $("<div>", {id: "horizontal-zigzag2", class:"horizontal-zigzag2 brick"});
		 childEle3 = $("<div>", {id: "horizontal-zigzag3", class:"horizontal-zigzag3 brick"});
		 childEle4 = $("<div>", {id: "horizontal-zigzag4", class:"horizontal-zigzag4 brick"});
    boundaryTop-=50;
		
    $("body").append(childEle1);
		childEle1.css({"left": randomXPos, "top":boundaryTop, "background-color":color});
		$("body").append(childEle2);
		randomXPos+=25;
		childEle2.css({"left": randomXPos, "top":boundaryTop, "background-color":color});
		$("body").append(childEle3);
		boundaryTop+=25;
		childEle3.css({"left": randomXPos, "top":boundaryTop, "background-color":color});
		$("body").append(childEle4);
		randomXPos+=25;
		childEle4.css({"left": randomXPos, "top":boundaryTop, "background-color":color});
    
    state = "horizontal";
	}
	// 	else if(random == 5){
	// 	 // $ele = $("<div>", {id: "vertical-zigzag"});
	// 	 childEle1 = $("<div>", {id: "vertical-zigzag1", class:"vertical-zigzag1 brick"});
	// 	 childEle2 = $("<div>", {id: "vertical-zigzag2", class:"vertical-zigzag2 brick"});
	// 	 childEle3 = $("<div>", {id: "vertical-zigzag3", class:"vertical-zigzag3 brick"});
	// 	 childEle4 = $("<div>", {id: "vertical-zigzag4", class:"vertical-zigzag4 brick"});
 //    boundaryTop-=75;
		
 //    $("body").append(childEle1);
	// 	childEle1.css({"left": randomXPos, "top":boundaryTop, "background-color":"orange"});
	// 	$("body").append(childEle2);
	// 	boundaryTop+=25;
	// 	childEle2.css({"left": randomXPos, "top":boundaryTop, "background-color":"orange"});
	// 	$("body").append(childEle3);
	// 	randomXPos+=25;
	// 	childEle3.css({"left": randomXPos, "top":boundaryTop, "background-color":"orange"});
	// 	$("body").append(childEle4);
	// 	boundaryTop+=25;
	// 	childEle4.css({"left": randomXPos, "top":boundaryTop, "background-color":"orange"});

	// }
  else if(random == 4){
     // $e = $("<div>", {id: "inverted-l"});
     childEle1 = $("<div>", {id: "inverted-l1", class:"inverted-l1 brick"});
     childEle2 = $("<div>", {id: "inverted-l2", class:"inverted-l2 brick"});
     childEle3 = $("<div>", {id: "inverted-l3", class:"inverted-l3 brick"});
     childEle4 = $("<div>", {id: "inverted-l4", class:"inverted-l4 brick"});
    boundaryTop-=50;
    randomXPos+=50;
    
    $("body").append(childEle1);
    childEle1.css({"left": randomXPos, "top":boundaryTop, "background-color":color});
    $("body").append(childEle2);
    // boundaryTop+=25;
    randomXPos-=25;
    childEle2.css({"left": randomXPos, "top":boundaryTop, "background-color":color});
    $("body").append(childEle3);
    randomXPos-=25;
    childEle3.css({"left": randomXPos, "top":boundaryTop, "background-color":color});
    $("body").append(childEle4);
    boundaryTop+=25;
    randomXPos+=50;
    childEle4.css({"left": randomXPos, "top":boundaryTop, "background-color":color});
    // $("body").append($e);
    // $e.css({"left": randomXPos, "top":boundaryTop, "background-color":"blue"});
    state = "vertical2";

  }

  else if(random == 5){
     // $ele = $("<div>", {id: "horizontal-zigzag"});
     childEle1 = $("<div>", {id: "inverted-horizontal-zigzag1", class:"inverted-horizontal-zigzag1 brick"});
     childEle2 = $("<div>", {id: "inverted-horizontal-zigzag2", class:"inverted-horizontal-zigzag2 brick"});
     childEle3 = $("<div>", {id: "inverted-horizontal-zigzag3", class:"inverted-horizontal-zigzag3 brick"});
     childEle4 = $("<div>", {id: "inverted-horizontal-zigzag4", class:"inverted-horizontal-zigzag4 brick"});
    boundaryTop-=50;
    randomXPos+=75;
    
    $("body").append(childEle1);
    childEle1.css({"left": randomXPos, "top":boundaryTop, "background-color":color});
    $("body").append(childEle2);
    randomXPos-=25;
    childEle2.css({"left": randomXPos, "top":boundaryTop, "background-color":color});
    $("body").append(childEle3);
    boundaryTop+=25;
    childEle3.css({"left": randomXPos, "top":boundaryTop, "background-color":color});
    $("body").append(childEle4);
    randomXPos-=25;
    childEle4.css({"left": randomXPos, "top":boundaryTop, "background-color":color});
    
    state = "horizontal";
}
    else if(random == 6){
     // $ele = $("<div>", {id: "l"});
     childEle1 = $("<div>", {id: "t1", class:"t1 brick"});
     childEle2 = $("<div>", {id: "t2", class:"t2 brick"});
     childEle3 = $("<div>", {id: "t3", class:"t3 brick"});
     childEle4 = $("<div>", {id: "t4", class:"t4 brick"});
    boundaryTop-=50;
    
    $("body").append(childEle1);
    childEle1.css({"left": randomXPos, "top":boundaryTop, "background-color":color});
    $("body").append(childEle2);
    randomXPos+=25;
    childEle2.css({"left": randomXPos, "top":boundaryTop, "background-color":color});
    $("body").append(childEle3);
    randomXPos+=25;
    childEle3.css({"left": randomXPos, "top":boundaryTop, "background-color":color});
    $("body").append(childEle4);
    randomXPos-=25;
    boundaryTop+=25;
    childEle4.css({"left": randomXPos, "top":boundaryTop, "background-color":color});
    state = "horizontal1";

  }

  
// document.getElementsByClassName("brick").style.backgroundColor = "red";
    
	// $("body").append($ele)
    // $ele.css({"top": boundaryTop, "left":randomXPos});
    // currentBlockWidth = $ele.width();
	// currentBlockHeight = $ele.height();
    // console.log(currentRandomId,nextRandomId, boundaryTop, randomXPos)

}

$(document).keydown(function(e){
	if(e.keyCode == '40' && (game)){
    moveDown();
  }
	
	else if(e.keyCode == '39' && (game)){
    moveRight();
		// currentLeft = $ele.position().left;
  //       currentLeft+=25;
  //       if(currentLeft+currentBlockWidth-25>=boundaryLeft+boxWidth){

  //       }
  //       else{
  //         $ele.css("left", currentLeft); 
  //       }
	}
	else if(e.keyCode == '37' && (game)){
    moveLeft();
		// currentLeft = $ele.position().left;
  //       currentLeft-=25;
  //       if(currentLeft<=boundaryLeft){

  //       }
  //       else{
  //         $ele.css("left", currentLeft); 
  //       }
	}
  else if(e.keyCode == '38' && (game)){
    rotate();
  }
  else if(e.keyCode == '32'){
    $(".pause").click();
  //  if(game){
  //   clearInterval(interval);
  //   game = false;
  //   $(".pause").html("Resume");
  //  }
  // else{
  //   interval = setInterval(moveDown, speed);
  //   game = true;
  //   $(".pause").html("Pause");
  //   }  
  }
});

function randomX(random){
maxX = boundaryLeft + boxWidth;

	if(random == 0){
       maxX = maxX-50;
   	}
	else if(random == 1){
       maxX = maxX-100;
       
	}
	else if(random == 2){
       maxX = maxX-50;
       
	}
	else if(random == 3){
       maxX = maxX-75;
       
	}
	else if(random == 4){
       maxX = maxX-100;

	}
	else if(random == 5){
       maxX = maxX-150;

	}
  else if(random == 6){
       maxX = maxX-75;    
  }
    xpos =  (Math.floor((Math.random()*(maxX-minX+1)+minX)/25)*25);
    return xpos;

}
// function randomX(){
//     xpos =  (Math.floor((Math.random()*(maxX-minX+1)+minX)/25)*25);
//     console.log(xpos, $ele.width(), boundaryLeft, boxWidth )
//     if((xpos+$ele.width())>(boundaryLeft+boxWidth)){
//     	randomX();
//     	console.log("hh")
//     }
//     else{
//     	return xpos;
//     }
// }

function checkBelow(left, top){
    // if(currentRandonNumber == 0){
  boundaryTop = document.getElementById("boundary").offsetTop;

            if(top>boundaryTop){
            elem = document.elementFromPoint(left, top);
            bg = elem.style.backgroundColor;
            if(bg=="red"||bg=="green"||bg=="magenta"||bg=="yellow"||bg=="orange"||bg=="blue"||bg=="aqua"){
       	       // clearInterval(interval);
               // checkCompleteRow(top);
       	       // generateNextBlock();
       	       return 1;
    	    }
         } 
      // }
    // else if(currentRandonNumber == 1){
    // 	// top+=25;
    //         elem = document.elementFromPoint(left, top);
    //         bg = elem.style.backgroundColor;
    //         console.log(elem, bg)

    //         if(bg==""){
    //         	console.log("hh")
    //    	       clearInterval(interval);
    //    	       generateNextBlock();
    //    	       return 1;

    // 	    }
    // 	    left+=25;
    //    }
    // }
    // else if(currentRandonNumber == 2){
    // 	top+=75;
    // 	for(i=1;i<2;i++){
    //         elem = document.elementFromPoint(left, top);
    //         bg = elem.style.backgroundColor;
    //         console.log(elem, bg)

    //         if(bg==""){
    //         	console.log("hh")
    //    	       clearInterval(interval);
    //    	       generateNextBlock();
    //    	       return 1;

    // 	    }
    // 	    // left+=25;
    //    }
    // }
    // else if(currentRandonNumber == 3){
    // 	top+=50;
    // 	for(i=1;i<3;i++){
    //         elem = document.elementFromPoint(left, top);
    //         bg = elem.style.backgroundColor;
    //         console.log(elem, bg)

    //         if(bg==""){
    //         	console.log("hh")
    //    	       clearInterval(interval);
    //    	       generateNextBlock();
    //    	       return 1;

    // 	    }
    // 	    left+=25;
    //    }
    // }
    // else if(currentRandonNumber == 4){
    // 	// top+=25;
    // 	for(i=1;i<2;i++){
    //         elem = document.elementFromPoint(left, top);
    //         bg = elem.style.backgroundColor;
    //         console.log(elem, bg)

    //         if(bg==""){
    //         	console.log("hh")
    //    	       clearInterval(interval);
    //    	       generateNextBlock();
    //    	       return 1;

    // 	    }

    //     }
    //     left+=25;
    // 	top+=25;
    // 	for(i=1;i<3;i++){
	   //          elem = document.elementFromPoint(left, top);
	   //          bg = elem.style.backgroundColor;
	   //          console.log(elem, bg)

	   //          if(bg==""){
	   //          	console.log("hh")
	   //     	       clearInterval(interval);
	   //     	       generateNextBlock();
	   //     	       return 1;

    // 	    }
    // 	    left+=25;
    //     }

    
    // }
}

function checkRight(left, top){
    // if(currentRandonNumber == 0){
            boundaryLeft = document.getElementById("boundary").offsetLeft;
            boxWidth = $("#boundary").width();
            maxX = boundaryLeft + boxWidth;
            elem = document.elementFromPoint(left, top);
            bg = elem.style.backgroundColor;
            // console.log(bg)

            if(bg=="red"||bg=="green"||bg=="magenta"||bg=="yellow"||bg=="orange"||bg=="blue"||bg=="aqua"||left>maxX){
               // clearInterval(interval);
               // generateNextBlock();
               return 1;
            }
} 

function checkLeft(left, top){
    // if(currentRandonNumber == 0){
            boundaryLeft = document.getElementById("boundary").offsetLeft;
            minX = boundaryLeft;
            elem = document.elementFromPoint(left, top);
            bg = elem.style.backgroundColor;
            if(bg=="red"||bg=="green"||bg=="magenta"||bg=="yellow"||bg=="orange"||bg=="blue"||bg=="aqua"||left<minX){
               // clearInterval(interval);
               // generateNextBlock();
               return 1;
          }
}         

function checkEnd(currentLeft, currentTop){

         if((currentTop) >= (boundaryTop+boxHeight)){
          clearInterval(interval);
          checkCompleteRow(currentTop);
          generateNextBlock();
          return 1;
          }

  // if(currentRandonNumber == 0){
  //        if((currentTop) >= (boundaryTop+boxHeight)){
  //         clearInterval(interval);
  //         checkCompleteRow(currentTop);
  //         generateNextBlock();
  //         return 1;
  //         }
  //   }
  // else if(currentRandonNumber == 1){
  //      if((currentTop) >= (boundaryTop+boxHeight)){
  //         clearInterval(interval);
  //         checkCompleteRow(currentTop);

  //         generateNextBlock();
  //         return 1;
  //         }
       
  // }
  // else if(currentRandonNumber == 2){
  //      if((currentTop) >= (boundaryTop+boxHeight)){
  //         clearInterval(interval);
  //         checkCompleteRow(currentTop);

  //         generateNextBlock();
  //         return 1;
  //         }
       
  // }
  // else if(currentRandonNumber == 3){
  //      if((currentTop) >= (boundaryTop+boxHeight)){
  //         clearInterval(interval);
  //         checkCompleteRow(currentTop);

  //         generateNextBlock();
  //         return 1;
  //         }
       
  // }
  // else if(currentRandonNumber == 4){
  //      if((currentTop) >= (boundaryTop+boxHeight)){
  //         clearInterval(interval);
  //         checkCompleteRow(currentTop);

  //         generateNextBlock();
  //         return 1;
  //         }

  // }
  // else if(currentRandonNumber == 5){
  //      if((currentTop) >= (boundaryTop+boxHeight)){
  //         clearInterval(interval);
  //         checkCompleteRow(currentTop);

  //         generateNextBlock();
  //         return 1;
  //         }

  // } 
  // else if(currentRandonNumber == 6){
  //      if((currentTop) >= (boundaryTop+boxHeight)){
  //         clearInterval(interval);
  //         checkCompleteRow(currentTop);

  //         generateNextBlock();
  //         return 1;
  //         }
       
  // }
  // else if(currentRandonNumber == 7){
  //      if((currentTop) >= (boundaryTop+boxHeight)){
  //         clearInterval(interval);
  //         checkCompleteRow(currentTop);

  //         generateNextBlock();
  //         return 1;
  //         }
       
  // }
}

function checkCompleteRow(top){
  fullRow = 0;
  // console.log("gg")
  for(j=top-100;j<=top-25;j=j+25){
      count=0
      for(i=425;i<=750;i=i+25){
        // console.log(i, j)
         checkele = document.elementFromPoint(i, j);
         checkbg = checkele.style.backgroundColor;
         // console.log(checkbg);
         if(checkbg=="red"||checkbg=="green"||checkbg=="magenta"||checkbg=="yellow"||checkbg=="orange"||checkbg=="blue"||checkbg=="aqua"){
            count++;
            // console.log(count)
         }
         else if(checkbg == "grey"){
          break;
         }
      }
      // console.log(count)
      if(count==14){
        fullRow++;
        // console.log("hh");
        completeRow(j)
      }
    }
  }

function completeRow(j){
  
  // for(i=375;i<=700;i++){
  //     checkele = document.elementFromPoint(i, j);
  //     checkele.style.backgroundColor="grey";
  //     checkele.style.border="none";
  // }


// console.log(boundaryTop)
  // console.log(j)
  for(i=j-25;i>=boundaryTop;i=i-25){
     // console.log("ll")
    for(k=425;k<=750;k=k+25){
         console.log(k, i)
         checkelem = document.elementFromPoint(k, i);
         checkbg = checkelem.style.backgroundColor;
         if(checkbg=="grey"){
            mv=i+25;
            checkelem = document.elementFromPoint(k, mv);
            checkelem.style.backgroundColor="grey";
            checkelem.style.border="none";
            $("#boundary").css({"border-style":"solid", "border-width":"5px", "border-color":"black"})
         }
         else{

            mv=i+25;
            mv = mv+"px";
            // console.log(mv)
            checkelem.style.top=mv;
        }    
    }
  }
  for(v=0;v<10;v++){
    score+=10;
    increaseLevel();
   } 
  $("#score").html(score);
  

  if(fullRow==4){
    for(v=0;v<40;v++){
    score+=10;
    increaseLevel();
     }
    $("#score").html(score);


  }
}  

function checkGameOver(){
  topend = $("#boundary").css("margin-top")
  blockTop = childEle1.position().top;
  // blockTop += "px";
  topend = topend.split("px")
  // console.log(blockTop, topend[0])
  if(blockTop<=(topend[0])){
    // console.log("game over")
    gameOver();
  }
}

function gameOver(){
  game = false;
  clearInterval(interval)
  $("#buttons2").addClass("hidden");
  $("#buttons").removeClass("hidden");
  
  $("#square-next, #horizontal-rectangle-next, #vertical-rectangle-next, #l-next, #inverted-l-next, #horizontal-zigzag-next, #inverted-horizontal-zigzag-next, #vertical-zigzag-next, #t-next").addClass("hidden");
  // $("#tetris-game").removeClass("hidden");
  // game =true;
  // generateNextBlock();

  $scope.gameOverMessage();
}

function rotate(){
  if(currentRandonNumber == 1){
    if(state == "horizontal"){
      topPos1 = childEle1.position().top;
      leftPos1 = childEle1.position().left;
      topPos1-=75;
      // leftPos2-=75;
      childEle1.css({"top":topPos1, "left":leftPos1});

      topPos2 = childEle2.position().top;
      leftPos2 = childEle2.position().left;
      topPos2-=50;
      leftPos2-=25;
      childEle2.css({"top":topPos2, "left":leftPos2});

      topPos3 = childEle3.position().top;
      leftPos3 = childEle3.position().left;
      topPos3-=25;
      leftPos3-=50;
      childEle3.css({"top":topPos3, "left":leftPos3});

      topPos4 = childEle4.position().top;
      leftPos4 = childEle4.position().left;
      // topPos4-=75;
      leftPos4-=75;
      childEle4.css({"top":topPos4, "left":leftPos4});

      state = "vertical";
    }
    else if(state == "vertical"){
      topPos1 = childEle1.position().top;
      leftPos1 = childEle1.position().left;
      topPos1+=75;
      // leftPos1+=75;
      childEle1.css({"top":topPos1, "left":leftPos1});

      topPos2 = childEle2.position().top;
      leftPos2 = childEle2.position().left;
      topPos2+=50;
      leftPos2+=25;
      childEle2.css({"top":topPos2, "left":leftPos2});

      topPos3 = childEle3.position().top;
      leftPos3 = childEle3.position().left;
      topPos3+=25;
      leftPos3+=50;
      childEle3.css({"top":topPos3, "left":leftPos3});

      topPos4 = childEle4.position().top;
      leftPos4 = childEle4.position().left;
      // topPos4+=75;
      leftPos4+=75;
      childEle4.css({"top":topPos4, "left":leftPos4});

      state = "horizontal";
    }
  }

  else if(currentRandonNumber == 3){
    if(state == "horizontal"){
      topPos1 = childEle1.position().top;
      leftPos1 = childEle1.position().left;
      topPos1-=50;
      leftPos1+=25;
      childEle1.css({"top":topPos1, "left":leftPos1});

      topPos2 = childEle2.position().top;
      leftPos2 = childEle2.position().left;
      topPos2-=25;
      // leftPos2+=50;
      childEle2.css({"top":topPos2, "left":leftPos2});

      topPos3 = childEle3.position().top;
      leftPos3 = childEle3.position().left;
      topPos3-=50;
      leftPos3-=25;
      childEle3.css({"top":topPos3, "left":leftPos3});

      topPos4 = childEle4.position().top;
      leftPos4 = childEle4.position().left;
      topPos4-=25;
      leftPos4-=50;
      childEle4.css({"top":topPos4, "left":leftPos4});

      state = "vertical";
    }
    else if(state == "vertical"){
      topPos1 = childEle1.position().top;
      leftPos1 = childEle1.position().left;
      topPos1+=50;
      leftPos1-=25;
      childEle1.css({"top":topPos1, "left":leftPos1});

      topPos2 = childEle2.position().top;
      leftPos2 = childEle2.position().left;
      topPos2+=25;
      // leftPos2+=50;
      childEle2.css({"top":topPos2, "left":leftPos2});

      topPos3 = childEle3.position().top;
      leftPos3 = childEle3.position().left;
      topPos3+=50;
      leftPos3+=25;
      childEle3.css({"top":topPos3, "left":leftPos3});

      topPos4 = childEle4.position().top;
      leftPos4 = childEle4.position().left;
      topPos4+=25;
      leftPos4+=50;
      childEle4.css({"top":topPos4, "left":leftPos4});

      state = "horizontal";
    }
  }
  else if(currentRandonNumber == 5){
    if(state == "horizontal"){
      topPos1 = childEle1.position().top;
      leftPos1 = childEle1.position().left;
      topPos1-=50;
      leftPos1-=50;
      childEle1.css({"top":topPos1, "left":leftPos1});

      topPos2 = childEle2.position().top;
      leftPos2 = childEle2.position().left;
      topPos2-=25;
      leftPos2-=25;
      childEle2.css({"top":topPos2, "left":leftPos2});

      topPos3 = childEle3.position().top;
      leftPos3 = childEle3.position().left;
      topPos3-=50;
      // leftPos3+=25;
      childEle3.css({"top":topPos3, "left":leftPos3});

      topPos4 = childEle4.position().top;
      leftPos4 = childEle4.position().left;
      topPos4-=25;
      leftPos4+=25;
      childEle4.css({"top":topPos4, "left":leftPos4});

      state = "vertical";
    }
    else if(state == "vertical"){
      topPos1 = childEle1.position().top;
      leftPos1 = childEle1.position().left;
      topPos1+=50;
      leftPos1+=50;
      childEle1.css({"top":topPos1, "left":leftPos1});

      topPos2 = childEle2.position().top;
      leftPos2 = childEle2.position().left;
      topPos2+=25;
      leftPos2+=25;
      childEle2.css({"top":topPos2, "left":leftPos2});

      topPos3 = childEle3.position().top;
      leftPos3 = childEle3.position().left;
      topPos3+=50;
      // leftPos3-=25;
      childEle3.css({"top":topPos3, "left":leftPos3});

      topPos4 = childEle4.position().top;
      leftPos4 = childEle4.position().left;
      topPos4+=25;
      leftPos4-=25;
      childEle4.css({"top":topPos4, "left":leftPos4});

      state = "horizontal";
    }
  }

  else if(currentRandonNumber == 6){
    if(state == "horizontal1"){
      topPos1 = childEle1.position().top;
      leftPos1 = childEle1.position().left;
      topPos1-=25;
      // leftPos1-=25;
      childEle1.css({"top":topPos1, "left":leftPos1});

      topPos2 = childEle2.position().top;
      leftPos2 = childEle2.position().left;
      // topPos2-=25;
      leftPos2-=25;
      childEle2.css({"top":topPos2, "left":leftPos2});

      topPos3 = childEle3.position().top;
      leftPos3 = childEle3.position().left;
      // topPos3+=25;
      leftPos3-=25;
      childEle3.css({"top":topPos3, "left":leftPos3});

      topPos4 = childEle4.position().top;
      leftPos4 = childEle4.position().left;
      // topPos4-=25;
      leftPos4-=25;
      childEle4.css({"top":topPos4, "left":leftPos4});

      state = "vertical1";
    }
    else if(state == "vertical1"){
      topPos1 = childEle1.position().top;
      leftPos1 = childEle1.position().left;
      // topPos1+=50;
      leftPos1+=25;
      childEle1.css({"top":topPos1, "left":leftPos1});

      topPos2 = childEle2.position().top;
      leftPos2 = childEle2.position().left;
      // topPos2+=25;
      // leftPos2+=25;
      childEle2.css({"top":topPos2, "left":leftPos2});

      topPos3 = childEle3.position().top;
      leftPos3 = childEle3.position().left;
      // topPos3+=50;
      // leftPos3+=25;
      childEle3.css({"top":topPos3, "left":leftPos3});

      topPos4 = childEle4.position().top;
      leftPos4 = childEle4.position().left;
      topPos4-=25;
      leftPos4+=50;
      childEle4.css({"top":topPos4, "left":leftPos4});

      state = "horizontal2";
    }
    else if(state == "horizontal2"){
      topPos1 = childEle1.position().top;
      leftPos1 = childEle1.position().left;
      // topPos1+=25;
      leftPos1-=25;
      childEle1.css({"top":topPos1, "left":leftPos1});

      topPos2 = childEle2.position().top;
      leftPos2 = childEle2.position().left;
      topPos2-=50;
      leftPos2+=25;
      childEle2.css({"top":topPos2, "left":leftPos2});

      topPos3 = childEle3.position().top;
      leftPos3 = childEle3.position().left;
      topPos3-=25;
      // leftPos3+=25;
      childEle3.css({"top":topPos3, "left":leftPos3});

      topPos4 = childEle4.position().top;
      leftPos4 = childEle4.position().left;
      // topPos4+=25;
      leftPos4-=25;
      childEle4.css({"top":topPos4, "left":leftPos4});

      state = "vertical2";
    }
    else if(state == "vertical2"){
      topPos1 = childEle1.position().top;
      leftPos1 = childEle1.position().left;
      // topPos1+=25;
      // leftPos1-=25;
      childEle1.css({"top":topPos1, "left":leftPos1});

      topPos2 = childEle2.position().top;
      leftPos2 = childEle2.position().left;
      topPos2+=25;
      // leftPos2+=25;
      childEle2.css({"top":topPos2, "left":leftPos2});

      topPos3 = childEle3.position().top;
      leftPos3 = childEle3.position().left;
      // topPos3-=25;
      leftPos3+=25;
      childEle3.css({"top":topPos3, "left":leftPos3});

      topPos4 = childEle4.position().top;
      leftPos4 = childEle4.position().left;
      // topPos4+=25;
      // leftPos4-=25;
      childEle4.css({"top":topPos4, "left":leftPos4});

      state = "horizontal1";
    }
  }
  else if(currentRandonNumber == 2){
    if(state == "horizontal1"){
      topPos1 = childEle1.position().top;
      leftPos1 = childEle1.position().left;
      topPos1+=25;
      leftPos1+=50;
      childEle1.css({"top":topPos1, "left":leftPos1});

      topPos2 = childEle2.position().top;
      leftPos2 = childEle2.position().left;
      topPos2+=25;
      // leftPos2-=25;
      childEle2.css({"top":topPos2, "left":leftPos2});

      topPos3 = childEle3.position().top;
      leftPos3 = childEle3.position().left;
      // topPos3+=25;
      leftPos3+=25;
      childEle3.css({"top":topPos3, "left":leftPos3});

      topPos4 = childEle4.position().top;
      leftPos4 = childEle4.position().left;
      // topPos4-=25;
      leftPos4+=25;
      childEle4.css({"top":topPos4, "left":leftPos4});

      state = "vertical1";
    }
    else if(state == "vertical1"){
      topPos1 = childEle1.position().top;
      leftPos1 = childEle1.position().left;
      topPos1+=25;
      leftPos1-=50;
      childEle1.css({"top":topPos1, "left":leftPos1});

      topPos2 = childEle2.position().top;
      leftPos2 = childEle2.position().left;
      // topPos2+=50;
      leftPos2+=25;
      childEle2.css({"top":topPos2, "left":leftPos2});

      topPos3 = childEle3.position().top;
      leftPos3 = childEle3.position().left;
      topPos3+=25;
      // leftPos3+=25;
      childEle3.css({"top":topPos3, "left":leftPos3});

      topPos4 = childEle4.position().top;
      leftPos4 = childEle4.position().left;
      topPos4+=50;
      leftPos4-=25;
      childEle4.css({"top":topPos4, "left":leftPos4});

      state = "horizontal2";
    }
    else if(state == "horizontal2"){
      topPos1 = childEle1.position().top;
      leftPos1 = childEle1.position().left;
      topPos1+=25;
      // leftPos1+=50;
      childEle1.css({"top":topPos1, "left":leftPos1});

      topPos2 = childEle2.position().top;
      leftPos2 = childEle2.position().left;
      topPos2+=25;
      // leftPos2+=25;
      childEle2.css({"top":topPos2, "left":leftPos2});

      topPos3 = childEle3.position().top;
      leftPos3 = childEle3.position().left;
      // topPos3-=25;
      leftPos3+=25;
      childEle3.css({"top":topPos3, "left":leftPos3});

      topPos4 = childEle4.position().top;
      leftPos4 = childEle4.position().left;
      // topPos4+=25;
      leftPos4-=25;
      childEle4.css({"top":topPos4, "left":leftPos4});

      state = "vertical2";
    }
    else if(state == "vertical2"){
      topPos1 = childEle1.position().top;
      leftPos1 = childEle1.position().left;
      topPos1-=25;
      // leftPos1-=50;
      childEle1.css({"top":topPos1, "left":leftPos1});

      topPos2 = childEle2.position().top;
      leftPos2 = childEle2.position().left;
      // topPos2-=25;
      leftPos2-=25;
      childEle2.css({"top":topPos2, "left":leftPos2});

      topPos3 = childEle3.position().top;
      leftPos3 = childEle3.position().left;
      topPos3+=25;
      leftPos3-=50;
      childEle3.css({"top":topPos3, "left":leftPos3});

      topPos4 = childEle4.position().top;
      leftPos4 = childEle4.position().left;
      // topPos4+=25;
      leftPos4+=25;
      childEle4.css({"top":topPos4, "left":leftPos4});

      state = "horizontal1";
    }
  }
  else if(currentRandonNumber == 4){
    if(state == "horizontal1"){
      topPos1 = childEle1.position().top;
      leftPos1 = childEle1.position().left;
      topPos1+=25;
      leftPos1-=25;
      childEle1.css({"top":topPos1, "left":leftPos1});

      topPos2 = childEle2.position().top;
      leftPos2 = childEle2.position().left;
      topPos2+=50;
      leftPos2+=50;
      childEle2.css({"top":topPos2, "left":leftPos2});

      topPos3 = childEle3.position().top;
      leftPos3 = childEle3.position().left;
      topPos3+=25;
      leftPos3+=25;
      childEle3.css({"top":topPos3, "left":leftPos3});

      topPos4 = childEle4.position().top;
      leftPos4 = childEle4.position().left;
      // topPos4-=25;
      // leftPos4+=25;
      childEle4.css({"top":topPos4, "left":leftPos4});

      state = "vertical1";
    }
    else if(state == "vertical1"){
      topPos1 = childEle1.position().top;
      leftPos1 = childEle1.position().left;
      topPos1-=25;
      leftPos1+=25;
      childEle1.css({"top":topPos1, "left":leftPos1});

      topPos2 = childEle2.position().top;
      leftPos2 = childEle2.position().left;
      topPos2-=25;
      leftPos2-=25;
      childEle2.css({"top":topPos2, "left":leftPos2});

      topPos3 = childEle3.position().top;
      leftPos3 = childEle3.position().left;
      // topPos3-=25;
      // leftPos3-=25;
      childEle3.css({"top":topPos3, "left":leftPos3});

      topPos4 = childEle4.position().top;
      leftPos4 = childEle4.position().left;
      // topPos4+=50;
      // leftPos4-=25;
      childEle4.css({"top":topPos4, "left":leftPos4});

      state = "horizontal2";
    }
    else if(state == "horizontal2"){
      topPos1 = childEle1.position().top;
      leftPos1 = childEle1.position().left;
      topPos1+=25;
      leftPos1+=25;
      childEle1.css({"top":topPos1, "left":leftPos1});

      topPos2 = childEle2.position().top;
      leftPos2 = childEle2.position().left;
      // topPos2+=25;
      // leftPos2+=25;
      childEle2.css({"top":topPos2, "left":leftPos2});

      topPos3 = childEle3.position().top;
      leftPos3 = childEle3.position().left;
      topPos3-=25;
      leftPos3-=25;
      childEle3.css({"top":topPos3, "left":leftPos3});

      topPos4 = childEle4.position().top;
      leftPos4 = childEle4.position().left;
      // topPos4+=25;
      leftPos4+=50;
      childEle4.css({"top":topPos4, "left":leftPos4});

      state = "vertical2";
    }
    else if(state == "vertical2"){
      topPos1 = childEle1.position().top;
      leftPos1 = childEle1.position().left;
      topPos1-=25;
      leftPos1-=25;
      childEle1.css({"top":topPos1, "left":leftPos1});

      topPos2 = childEle2.position().top;
      leftPos2 = childEle2.position().left;
      topPos2-=25;
      leftPos2-=25;
      childEle2.css({"top":topPos2, "left":leftPos2});

      topPos3 = childEle3.position().top;
      leftPos3 = childEle3.position().left;
      // topPos3+=50;
      // leftPos3+=25;
      childEle3.css({"top":topPos3, "left":leftPos3});

      topPos4 = childEle4.position().top;
      leftPos4 = childEle4.position().left;
      // topPos4+=25;
      leftPos4-=50;
      childEle4.css({"top":topPos4, "left":leftPos4});

      state = "horizontal1";
    }
  }
}

function increaseLevel(){
  if((score%500) == 0){
    level++;
    $("#level").fadeOut();
    setTimeout(function(){$("#level").fadeIn();$("#level span").html(level);}, 250);
    

    if(speed>100){
      speed -=25;
    }
  }
}


});
// generateNextBlock();

//  interval = setInterval(moveDown, 250);

// elem = document.elementFromPoint(boundaryLeft, boundaryTop);
// elem.style.backgroundColor = 'blue';
// b = elem.style.backgroundColor;


// console.log(randonNumber, randomArray[randonNumber], randomId, boundaryTop, boundaryLeft, elem, b);

