
    $(document).ready(function(){
        $("#add").mouseover(function(){
    $("#add").css({"color":"blue"});
    });
    $("#sub").mouseover(function(){
        $("#sub").css({"color":"red"});
        });
        $("#mul").mouseover(function(){
            $("#mul").css({"color":"biue"});
            });
            $("#div").mouseover(function(){
                $("#div").css({"color":"lime"});
                });
});

$(document).ready(function(){
    $("#add").click(function()
    {
        $("h1").show(200,add());
    });
    $("#sub").click(function()
    {
        $("h1").show(200,sub());
    });
    $("#mul").click(function()
    {
        $("h1").show(200,mul());
    });
    $("#div").click(function()
    {
        $("h1").show(200,div());
    });

});
var a,b;
function add()
{
  a=parseInt(prompt("enter a value:"));
  b=parseInt(prompt("enter a value:"));
  var c=a+b;
  document.write("the addition result is  "+c);
}
function sub()
{
  a=parseInt(prompt("enter a value:"));
  b=parseInt(prompt("enter a value:"));
  var c=a-b;
  document.write("the substraction result is  "+c);
}
function mul()
{
  a=parseInt(prompt("enter a value:"));
  b=parseInt(prompt("enter a value:"));
  var c=a*b;
  document.write("the multiplication  result is  "+c);
}
function div()
{
  a=parseInt(prompt("enter a value:"));
  b=parseInt(prompt("enter a value:"));
  var c=a/b;
  document.write("the division result is  "+c);
}