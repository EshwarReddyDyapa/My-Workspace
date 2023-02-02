// alert("Hello World");
// $("button").css("color", "red");

$(document).keydown(function(e)
{
    $("h1").text(e.key);
})

$("h1").on("click", function(e)
{
    console.log("MouseClick");
})