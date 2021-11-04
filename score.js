 class Timer{
    draw(){
    //let millisecond = Number((millis()/14000));
    //console.log(typeof millisecond, typeof score)
    
    score = Number((millis()-startTime)/40)+coins*100
    console.log(coins)
    //console.log(score, startTime)
    text(score.toFixed(0), 5, 40);
    }

}

