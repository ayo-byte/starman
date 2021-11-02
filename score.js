 let timer = 5

 class Timer{
    draw(){
    console.log("this is the score")
    var simpleTimer = new Timer(5000, true);
     textSize(30);
     text(timer, width/2, height/2);
         if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
             timer ++;
           }
           
     }
 }