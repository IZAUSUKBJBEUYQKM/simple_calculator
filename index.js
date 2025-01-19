var expression="";
$("button").click(function(event){
    var y=$(this).text()
    
  if(y==="="){
  	var result= eval(expression);
  	$(".display").text(result);
  	 expression = result.toString();
  }
  else if (y === "C") {
        expression = "";
        $(".display").text("");
    }

    else if (y === "<3") {
        $(".display").text("♥"); 
        expression = "";
    }
  else{
  	expression +=y;
 $(".display").text(expression);

  }
  
}); 

$(document).keypress(function(event) {
    var key = event.key;  // Get the key pressed

    // Allow only numbers, operators, or enter key
    if (/[0-9+\-*/=]/.test(key)) {
        if (key === "=") {
            var result = eval(expression);
            $(".display").text(result);
            expression = result.toString();
        } else {
            expression += key;
            $(".display").text(expression);
        }
    } 
    else if (key === "c" || key === "C") {  // Clear the display on 'c' or 'C'
        expression = "";
        $(".display").text("");
    } 
    else if (key === "<" || key === "3") { 
        $(".display").text("♥");
        expression = "";
    }
});

$(document).keydown(function(event) {
    if (event.key === "Backspace") {
        expression = expression.slice(0, -1);
        $(".display").text(expression);
    }
});







