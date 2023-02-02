var gameSeq = [];
var playerSeq = [];
var gameOver = false;
var randNumber;
var level = 1;
var timeleft = 10;
$(document).keypress(playGame);

function playAudio(buttonId)
{
    var audio = new Audio("sounds/" + buttonId + ".mp3");
    audio.play();
}

function timerFunc()
{
    clearInterval(gameTimer);
    var gameTimer = setInterval(function()
    {
        if(timeleft <= 0)
        {
            clearInterval(gameTimer);
            $("#countdown").show().text("Gameover");
        }
        else
        {
            $("#countdown").show().text(timeleft + " Seconds");
            console.log(timeleft);
        }
        timeleft--;
    }, 1000);
}
function generateSeq()
{
    level++;
    randNumber = 4 * Math.random();
    randNumber = Math.floor(randNumber);
    switch (randNumber) {
        case 0:
            gameSeq.push("green");
            break;
        case 1:
            gameSeq.push("red");
            break;
        case 2:
            gameSeq.push("yellow");
            break;
        case 3:
            gameSeq.push("blue");
            break;
        default:
            break;
    }
}
function displayGameSeq()
{
    for(let i=0; i<gameSeq.length;i++)
    {
        setTimeout(function(){
            //TURN -> Computer
            $('#' + gameSeq[i]).fadeOut(100).fadeIn(100);
            playAudio(gameSeq[i]);
        }, 1000*i);
    }
    playerSeq=[];
}
function playGame()
{
    $("#playButton").hide();
    $("#level-title").show().text("Level- " + level);
    generateSeq();
    displayGameSeq();
}
function endGame()
{
    var endText = "GAME OVER!! You reached level: " + (level-1);
    playAudio("wrong");
    $("#level-title").text(endText);
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    setTimeout(function () {
    $("body").removeClass("game-over");
    }, 200);
    $("#turnId").show().text("Press any key to reset");
    $(document).keypress(function(){        
        location.reload();
    });
}
var json1,json2;
function ButtonPress(buttonId)
{
    playAudio(buttonId);
    $("#" + buttonId).addClass("pressed");
    setTimeout(function () {
        $("#" + buttonId).removeClass("pressed");
    }, 100)
    playerSeq.push(buttonId);
    if(playerSeq.length === level-1)
    {
        json1 = JSON.stringify(gameSeq);
        json2 = JSON.stringify(playerSeq);
        if(json1 == json2)
        {
            playGame();
        }
        else
        {
            endGame();
        }
    }
}