function rpsGame(Yourchoice) {
    gameState = 'play';
    var humanChoice, botChoice;
    humanChoice = Yourchoice.id;
    botChoice= numToChoice(random());
    //console.log(botChoice);
    result = decidetheWinner(humanChoice,botChoice);
    //console.log(result);
    message= finalMessage(result);
    console.log('comp:',comp);
    console.log('hum:',hum);
    document.getElementById('score').innerHTML = '<h4 style="color: rgb(240, 32, 32);font-weight: bold;" > Player: '+hum +'</h4><br><h4 style= "color: rgb(240, 32, 32) ;font-weight: bold;" > Computer:'+ comp+ '</h4>';
    //console.log(message);
    end= rpsFrontEnd(Yourchoice.id,botChoice,message);

}

function random(){
    return Math.floor(Math.random() * 3);
}

function numToChoice(number){
    return ['rock','paper','scissors'][number];
}

function decidetheWinner(yourchoice,computerChoice){
    var database = {
        'rock': {'scissors': 1 ,'rock':  0.5, 'paper': 0 },
        'paper': {'rock': 1 ,'paper':  0.5, 'scissors': 0 },
        'scissors': {'paper': 1 ,'scissors':  0.5, 'rock': 0 }
    };
    var YourScore = database[yourchoice][computerChoice];
    var ComputerScore = database[computerChoice][yourchoice];
    return [YourScore,ComputerScore];
}
var  comp=0,hum=0;
function finalMessage([YourScore , ComputerScore]){
   
    
    if (YourScore===0){
        comp++;
        
        return{'message': 'You lost!','color': 'red' };
        

    }
    else if (YourScore===0.5){
        return{'message':'You Tied!','color':'blue'};
    }
    else{
        hum++;
       
        return{'message':'You Won!', 'color': 'green'};
        
    }
}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    
    var humandiv= document.createElement('div');
    var botdiv = document.createElement('div');
    var messagediv= document.createElement('div');

    humandiv.setAttribute('id','human');
    botdiv.setAttribute('id','bot');
    messagediv.setAttribute('id','message');

    humandiv.innerHTML = "<img src='"+ imageDatabase[humanImageChoice]+"' width= 150 height= 150 style= 'box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    messagediv.innerHTML = "<h1 style= 'color:"+finalMessage['color'] + ";font-size: 60px; padding: 30px;'>"+ finalMessage['message'] +"</h1>"
    botdiv.innerHTML = "<img src='"+ imageDatabase[botImageChoice]+"' width= 150 height= 150 style= 'box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"
    
    document.getElementById('flex-box-rps-div').appendChild(humandiv);
    document.getElementById('flex-box-rps-div').appendChild(messagediv);
    document.getElementById('flex-box-rps-div').appendChild(botdiv);

}
function earlystate(){
     document.getElementById("flex-box-rps-div").innerHTML =   '<img src="https://storage.needpix.com/rsynced_images/rock-576669_1280.png" height=150 width=150 alt="stone"id="rock"onclick="rpsGame(this)">'+
     '<img src="http://clipart-library.com/img/1788589.png"alt="paper" height=150 width=150 id="paper"onclick="rpsGame(this)">'+
     '<img src="https://www.seekpng.com/png/detail/414-4146875_quizs-tambin-le-interese-animated-scissors-cutting-png.png" alt="scissors" height=200 width=200 id="scissors"onclick="rpsGame(this)">'



}
var gameState = 'notPlayed'
function reset(){
    if (gameState === 'notPlayed')
    {
        return;
    }
    document.getElementById('human').remove();
    document.getElementById('bot').remove();
    document.getElementById('message').remove();
    earlystate();


    
}