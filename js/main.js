var randomArray = ["square-next", "horizontal-rectangle-next", "vertical-rectangle-next", "l-next", "horizontal-zigzag-next", "vertical-zigzag-next"];
var currentRandonNumber;
var nextRandonNumber = Math.floor(Math.random()*6);
// console.log(nextRandonNumber)

var currentRandomId; 
var nextRandomId = "#"+randomArray[nextRandonNumber]; 
nextEle = $(nextRandomId);
nextEle.removeClass("hidden").css({"top":250, "left":885});
// $("#next-block").html(nextEle);
// console.log(nextEle)

var boundaryTop = document.getElementById("boundary").offsetTop;
var boundaryLeft = document.getElementById("boundary").offsetLeft;
var marginTop = $("#boundary").css("margin-top");

var boxWidth = $("#boundary").width();
var boxHeight = $("#boundary").height();

var minX = boundaryLeft+25;
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
var game = true;
document.getElementById("boundary").style.backgroundColor = "grey";

// e = "#"+randomArray[nextRandonNumber];
// $(e).removeClass("hidden")
// el = $(e);
// console.log(e, el)
// // el.removeClass("hidden")
// $("#boundary").html(el)




function generateNextBlock(){
  if(game){
  	currentRandonNumber = nextRandonNumber;
  	nextRandonNumber = Math.floor(Math.random()*6);
  	nextRandomId = "#"+randomArray[nextRandonNumber]; 
  	$("#square-next, #horizontal-rectangle-next, #vertical-rectangle-next, #l-next, #horizontal-zigzag-next, #vertical-zigzag-next").addClass("hidden");
  	$(nextRandomId).removeClass("hidden").css({"top":250, "left":885});
      // $("#next-block").html("");
      // nextEle = $(nextRandomId);
      // $("#next-block").html(nextEle);

      // currentRandonNumber = 3;

  	randomXPos = randomX(currentRandonNumber);

  	createElement(currentRandonNumber);
  	// console.log(randomXPos)
      // $(currentRandomId).removeClass("hidden").css({"top": boundaryTop, "left":randomXPos});
      interval = setInterval(moveDown, 200)
  }  
}

function moveDown(){

    currentTop=childEle4.position().top;
    currentLeft=childEle4.position().left;
    currentTop+=25;
    if(currentTop>=boundaryTop){
      childEle4.css("visibility", "visible");
    }
    z = checkEnd(currentLeft, currentTop);
    if(z==1){return;}
    y = checkBelow(currentLeft, currentTop)
    if(y==1){
               
               clearInterval(interval);
               checkCompleteRow(top);
               checkGameOver();
               generateNextBlock();
      return;}
    childEle4.css("top", currentTop);
    // console.log(currentTop)


    currentTop=childEle3.position().top;
    currentLeft=childEle3.position().left;
    currentTop+=25;
        if(currentTop>=boundaryTop){
      childEle3.css("visibility", "visible");

    }
    y = checkBelow(currentLeft, currentTop)
    if(y==1){
               currentTop4=childEle4.position().top;
               currentTop4-=25;
               childEle4.css("top", currentTop4);

               clearInterval(interval);
               checkCompleteRow(top);
               checkGameOver();
               generateNextBlock();
      return;}
    childEle3.css("top", currentTop);


    currentTop=childEle2.position().top;
    currentLeft=childEle2.position().left;
    currentTop+=25;
        if(currentTop>=boundaryTop){
      childEle2.css("visibility", "visible");
    }
    y = checkBelow(currentLeft, currentTop)
    if(y==1){
               currentTop4=childEle4.position().top;
               currentTop4-=25;
               childEle4.css("top", currentTop4);

               currentTop3=childEle3.position().top;
               currentTop3-=25;
               childEle3.css("top", currentTop3);

               clearInterval(interval);
               checkCompleteRow(top);
               checkGameOver();
               generateNextBlock();
      return;}
    childEle2.css("top", currentTop);

    currentTop=childEle1.position().top;
    currentLeft=childEle1.position().left;
    currentTop+=25;
        if(currentTop>=boundaryTop){
      childEle1.css("visibility", "visible");
    }
    y = checkBelow(currentLeft, currentTop)
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
               
               clearInterval(interval);
               checkCompleteRow(top);
               checkGameOver();
               generateNextBlock();
      return;}
    childEle1.css("top", currentTop);
    


        
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

    currentTop=childEle4.position().top;
    currentLeft=childEle4.position().left;
    currentLeft+=25;
    x = checkRight(currentLeft, currentTop)
    if(x==1){
      
      return;}
    else{
      childEle4.css("left", currentLeft);
    }

    currentTop=childEle3.position().top;
    currentLeft=childEle3.position().left;
    currentLeft+=25;
    x = checkRight(currentLeft, currentTop)
    if(x==1){
      currentLeft4=childEle4.position().left;
      currentLeft4-=25;
      childEle4.css("left", currentLeft4);
      return;
    }
    else{
      childEle3.css("left", currentLeft);
    }

    currentTop=childEle2.position().top;
    currentLeft=childEle2.position().left;
    currentLeft+=25;
    x = checkRight(currentLeft, currentTop)
    if(x==1){
      currentLeft4=childEle4.position().left;
      currentLeft4-=25;
      childEle4.css("left", currentLeft4);

      currentLeft3=childEle3.position().left;
      currentLeft3-=25;
      childEle3.css("left", currentLeft3);
      return;
    }
    else{
      childEle2.css("left", currentLeft);
    }

    currentTop=childEle1.position().top;
    currentLeft=childEle1.position().left;
    currentLeft+=25;
    x = checkRight(currentLeft, currentTop)
    if(x==1){
      currentLeft4=childEle4.position().left;
      currentLeft4-=25;
      childEle4.css("left", currentLeft4);

      currentLeft3=childEle3.position().left;
      currentLeft3-=25;
      childEle3.css("left", currentLeft3);

      currentLeft2=childEle2.position().left;
      currentLeft2-=25;
      childEle2.css("left", currentLeft2);
      return;
    }
    else{
      childEle1.css("left", currentLeft);
    }

}  

function moveLeft(){

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
		childEle1.css({"left": randomXPos, "top":boundaryTop, "background-color":"red"});
		$("body").append(childEle2);
		randomXPos+=25;
		childEle2.css({"left": randomXPos, "top":boundaryTop, "background-color":"red"});
		$("body").append(childEle3);
		randomXPos-=25;boundaryTop+=25;
		childEle3.css({"left": randomXPos, "top":boundaryTop, "background-color":"red"});
		$("body").append(childEle4);
		randomXPos+=25;
		childEle4.css({"left": randomXPos, "top":boundaryTop, "background-color":"red"});

   	}
	else if(random == 1){
		 // $ele = $("<div>", {id: "horizontal-rectangle"});
		 childEle1 = $("<div>", {id: "horizontal-rectangle1", class:"horizontal-rectangle1 brick"});
		 childEle2 = $("<div>", {id: "horizontal-rectangle2", class:"horizontal-rectangle2 brick"});
		 childEle3 = $("<div>", {id: "horizontal-rectangle3", class:"horizontal-rectangle3 brick"});
		 childEle4 = $("<div>", {id: "horizontal-rectangle4", class:"horizontal-rectangle4 brick"});
    boundaryTop-=25;
    $("body").append(childEle1);
		childEle1.css({"left": randomXPos, "top":boundaryTop, "background-color":"green"});
		$("body").append(childEle2);
		randomXPos+=25;
		childEle2.css({"left": randomXPos, "top":boundaryTop, "background-color":"green"});
		$("body").append(childEle3);
		randomXPos+=25;
		childEle3.css({"left": randomXPos, "top":boundaryTop, "background-color":"green"});
		$("body").append(childEle4);
		randomXPos+=25;
		childEle4.css({"left": randomXPos, "top":boundaryTop, "background-color":"green"});

	}
	else if(random == 2){
		 // $ele = $("<div>", {id: "vertical-rectangle"});
		 childEle1 = $("<div>", {id: "vertical-rectangle1", class:"vertical-rectangle1 brick"});
		 childEle2 = $("<div>", {id: "vertical-rectangle2", class:"vertical-rectangle2 brick"});
		 childEle3 = $("<div>", {id: "vertical-rectangle3", class:"vertical-rectangle3 brick"});
		 childEle4 = $("<div>", {id: "vertical-rectangle4", class:"vertical-rectangle4 brick"});
    boundaryTop-=100;
    
    $("body").append(childEle1);
		childEle1.css({"left": randomXPos, "top":boundaryTop, "background-color":"yellow"});
		$("body").append(childEle2);
		boundaryTop+=25;
		childEle2.css({"left": randomXPos, "top":boundaryTop, "background-color":"yellow"});
		$("body").append(childEle3);
		boundaryTop+=25;
		childEle3.css({"left": randomXPos, "top":boundaryTop, "background-color":"yellow"});
		$("body").append(childEle4);
		boundaryTop+=25;
		childEle4.css({"left": randomXPos, "top":boundaryTop, "background-color":"yellow"});
	}
		else if(random == 3){
		 // $ele = $("<div>", {id: "l"});
		 childEle1 = $("<div>", {id: "l1", class:"l1 brick"});
		 childEle2 = $("<div>", {id: "l2", class:"l2 brick"});
		 childEle3 = $("<div>", {id: "l3", class:"l3 brick"});
		 childEle4 = $("<div>", {id: "l4", class:"l4 brick"});
    boundaryTop-=75;
		
    $("body").append(childEle1);
		childEle1.css({"left": randomXPos, "top":boundaryTop, "background-color":"magenta"});
		$("body").append(childEle2);
		boundaryTop+=25;
		childEle2.css({"left": randomXPos, "top":boundaryTop, "background-color":"magenta"});
		$("body").append(childEle3);
		boundaryTop+=25;
		childEle3.css({"left": randomXPos, "top":boundaryTop, "background-color":"magenta"});
		$("body").append(childEle4);
		randomXPos+=25;
		childEle4.css({"left": randomXPos, "top":boundaryTop, "background-color":"magenta"});


	}
		else if(random == 4){
		 // $ele = $("<div>", {id: "horizontal-zigzag"});
		 childEle1 = $("<div>", {id: "horizontal-zigzag1", class:"horizontal-zigzag1 brick"});
		 childEle2 = $("<div>", {id: "horizontal-zigzag2", class:"horizontal-zigzag2 brick"});
		 childEle3 = $("<div>", {id: "horizontal-zigzag3", class:"horizontal-zigzag3 brick"});
		 childEle4 = $("<div>", {id: "horizontal-zigzag4", class:"horizontal-zigzag4 brick"});
    boundaryTop-=50;
		
    $("body").append(childEle1);
		childEle1.css({"left": randomXPos, "top":boundaryTop, "background-color":"blue"});
		$("body").append(childEle2);
		randomXPos+=25;
		childEle2.css({"left": randomXPos, "top":boundaryTop, "background-color":"blue"});
		$("body").append(childEle3);
		boundaryTop+=25;
		childEle3.css({"left": randomXPos, "top":boundaryTop, "background-color":"blue"});
		$("body").append(childEle4);
		randomXPos+=25;
		childEle4.css({"left": randomXPos, "top":boundaryTop, "background-color":"blue"});

	}
		else if(random == 5){
		 // $ele = $("<div>", {id: "vertical-zigzag"});
		 childEle1 = $("<div>", {id: "vertical-zigzag1", class:"vertical-zigzag1 brick"});
		 childEle2 = $("<div>", {id: "vertical-zigzag2", class:"vertical-zigzag2 brick"});
		 childEle3 = $("<div>", {id: "vertical-zigzag3", class:"vertical-zigzag3 brick"});
		 childEle4 = $("<div>", {id: "vertical-zigzag4", class:"vertical-zigzag4 brick"});
    boundaryTop-=75;
		
    $("body").append(childEle1);
		childEle1.css({"left": randomXPos, "top":boundaryTop, "background-color":"orange"});
		$("body").append(childEle2);
		boundaryTop+=25;
		childEle2.css({"left": randomXPos, "top":boundaryTop, "background-color":"orange"});
		$("body").append(childEle3);
		randomXPos+=25;
		childEle3.css({"left": randomXPos, "top":boundaryTop, "background-color":"orange"});
		$("body").append(childEle4);
		boundaryTop+=25;
		childEle4.css({"left": randomXPos, "top":boundaryTop, "background-color":"orange"});

	}

// document.getElementsByClassName("brick").style.backgroundColor = "red";
    
	// $("body").append($ele)
    // $ele.css({"top": boundaryTop, "left":randomXPos});
    // currentBlockWidth = $ele.width();
	// currentBlockHeight = $ele.height();
    // console.log(currentRandomId,nextRandomId, boundaryTop, randomXPos)

}
generateNextBlock();

$(document).keydown(function(e){
	if(e.keyCode == '40'){
    moveDown();
  }
	
	else if(e.keyCode == '39'){
    moveRight();
		// currentLeft = $ele.position().left;
  //       currentLeft+=25;
  //       if(currentLeft+currentBlockWidth-25>=boundaryLeft+boxWidth){

  //       }
  //       else{
  //         $ele.css("left", currentLeft); 
  //       }
	}
	else if(e.keyCode == '37'){
    moveLeft();
		// currentLeft = $ele.position().left;
  //       currentLeft-=25;
  //       if(currentLeft<=boundaryLeft){

  //       }
  //       else{
  //         $ele.css("left", currentLeft); 
  //       }
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
       maxX = maxX-25;
       
	}
	else if(random == 3){
       maxX = maxX-50;
       
	}
	else if(random == 4){
       maxX = maxX-75;

	}
	else if(random == 5){
       maxX = maxX-50;

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
            if(bg=="red"||bg=="green"||bg=="magenta"||bg=="yellow"||bg=="orange"||bg=="blue"){
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
            console.log(bg)

            if(bg=="red"||bg=="green"||bg=="magenta"||bg=="yellow"||bg=="orange"||bg=="blue"||left>maxX){
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
            if(bg=="red"||bg=="green"||bg=="magenta"||bg=="yellow"||bg=="orange"||bg=="blue"||left<minX){
               // clearInterval(interval);
               // generateNextBlock();
               return 1;
          }
}         

function checkEnd(currentLeft, currentTop){
  if(currentRandonNumber == 0){
         if((currentTop) >= (boundaryTop+boxHeight)){
          clearInterval(interval);
          checkCompleteRow(currentTop);
          generateNextBlock();
          return 1;
          }
    }
  else if(currentRandonNumber == 1){
       if((currentTop) >= (boundaryTop+boxHeight)){
          clearInterval(interval);
          checkCompleteRow(currentTop);

          generateNextBlock();
          return 1;
          }
       
  }
  else if(currentRandonNumber == 2){
       if((currentTop) >= (boundaryTop+boxHeight)){
          clearInterval(interval);
          checkCompleteRow(currentTop);

          generateNextBlock();
          return 1;
          }
       
  }
  else if(currentRandonNumber == 3){
       if((currentTop) >= (boundaryTop+boxHeight)){
          clearInterval(interval);
          checkCompleteRow(currentTop);

          generateNextBlock();
          return 1;
          }
       
  }
  else if(currentRandonNumber == 4){
       if((currentTop) >= (boundaryTop+boxHeight)){
          clearInterval(interval);
          checkCompleteRow(currentTop);

          generateNextBlock();
          return 1;
          }

  }
  else if(currentRandonNumber == 5){
       if((currentTop) >= (boundaryTop+boxHeight)){
          clearInterval(interval);
          checkCompleteRow(currentTop);

          generateNextBlock();
          return 1;
          }

  } 
}

function checkCompleteRow(top){
  // console.log("gg")
  for(j=top-100;j<=top-25;j=j+25){
      count=0
      for(i=375;i<=700;i=i+25){
        // console.log(i, j)
         checkele = document.elementFromPoint(i, j);
         checkbg = checkele.style.backgroundColor;
         if(checkbg=="red"||checkbg=="green"||checkbg=="magenta"||checkbg=="yellow"||checkbg=="orange"||checkbg=="blue"){
            count++;
         }
         else if(checkbg == "grey"){
          break;
         }
      }
      // console.log(count)
      if(count==14){
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


console.log(boundaryTop)
  // console.log(j)
  for(i=j-25;i>=boundaryTop;i=i-25){
     console.log("ll")
    for(k=375;k<=700;k=k+25){
         console.log(k, i)
         checkelem = document.elementFromPoint(k, i);
         checkbg = checkelem.style.backgroundColor;
         if(checkbg=="grey"){
            console.log("grey")
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
}  

function checkGameOver(){
  topend = $("#boundary").css("margin-top")
  blockTop = childEle1.position().top;
  // blockTop += "px";
  topend = topend.split("px")
  console.log(blockTop, topend[0])
  if(blockTop<=(topend[0])){
    console.log("game over")
    game = false;
  }
}
// generateNextBlock();

//  interval = setInterval(moveDown, 250);

// elem = document.elementFromPoint(boundaryLeft, boundaryTop);
// elem.style.backgroundColor = 'blue';
// b = elem.style.backgroundColor;


// console.log(randonNumber, randomArray[randonNumber], randomId, boundaryTop, boundaryLeft, elem, b);

