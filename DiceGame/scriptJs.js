function play()
{
    let player1, player2;
    let file1, file2;
    player1 = 1 + Math.floor(Math.random() * 6);
    player2 = 1 + Math.floor(Math.random() * 6);

    file1 = "images/" + player1 + ".png";
    file2 = "images/" + player2 + ".png";

    document.getElementById("player1Image").src = file1;
    document.getElementById("player2Image").src = file2;

    if(player1 > player2)
    {
        document.querySelector(".mainHeading").innerHTML = "Player 1 Wins";
    }
    if(player1 < player2)
    {
        document.querySelector(".mainHeading").innerHTML = "Player 2 Wins";
    }
    if(player1 === player2)
    {
        document.querySelector(".mainHeading").innerHTML = "Draw";
    }
}