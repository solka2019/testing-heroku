var express = require('express');

var PORT = process.env.PORT || 3000;
var app = express();

app.get("/:operation/:firstNum/:secondNum", function(req, res){
    var operation = req.params.operation;
    var firstNum = parseInt(req.params.firstNum);
    var secondNum = parseInt(req.params.secondNum);
    var result;
    switch (operation) {
        case "add":
            // case "+": 
            result = firstNum + secondNum;
            break;

        case "subtract":
            case "-": 
            result = firstNum - secondNum;
            break;

            case "multiply":
                case "*":
                    result = firstNum * secondNum;
                    break;

                    case "divide":
                        case "/":
                            result = firstNum / secondNum;
                            break;
                            default: 
                            result = "Sorry! The only valid operations are add, subtract, multiply, and divide."
    }
res.send(result.toString());
});

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost: "  +  PORT);
});