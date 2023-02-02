//Add Keyboard Event listener
document.addEventListener("keydown", function(event){
    var soundURL;
    //console.log(event.key);
    switch (event.key) {
        case "w":
            soundURL = "sounds\\tom-1.mp3";
            break;
        case "a":
            soundURL = "sounds\\tom-2.mp3";
            break;
        case "s" : 
            soundURL = "sounds\\tom-3.mp3";
            break;
        case "d" : 
            soundURL = "sounds\\tom-4.mp3";
            break;
        case "j" : 
            soundURL = "sounds\\crash.mp3";
            break;
        case "k" : 
            soundURL = "sounds\\kick-bass.mp3";
            break;
        case "l" : 
            soundURL = "sounds\\snare.mp3";
            break;
        default:
            break;
    }

    var audio = new Audio(soundURL);
    audio.play();
    animateButton(event.key);
})

for(var i=0; i<document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() 
    {
        var soundURL;
        // console.log(this.innerHTML);

        switch (this.innerHTML) {
            case "w":
                soundURL = "sounds\\tom-1.mp3";
                break;
            case "a":
                soundURL = "sounds\\tom-2.mp3";
                break;
            case "s" : 
                soundURL = "sounds\\tom-3.mp3";
                break;
            case "d" : 
                soundURL = "sounds\\tom-4.mp3";
                break;
            case "j" : 
                soundURL = "sounds\\crash.mp3";
                break;
            case "k" : 
                soundURL = "sounds\\kick-bass.mp3";
                break;
            case "l" : 
                soundURL = "sounds\\snare.mp3";
                break;
            default:
                break;
        }

        var audio = new Audio(soundURL);
        audio.play();
        animateButton(this.innerHTML);

    });
}

function animateButton(buttonName)
{
    console.log(buttonName);

    document.querySelector("." + buttonName).classList.add("pressed");
    setTimeout(function()
    {
        document.querySelector("." + buttonName).classList.remove("pressed");
    }, 150);
}

function removeAnimateButton(buttonName)
{
    document.querySelector("." + buttonName).classList.remove("pressed");
}