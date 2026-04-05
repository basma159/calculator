
var con = document.querySelectorAll(".container button")
var result = document.getElementById("reslut1")
var clear = document.getElementById("btn-reset1")
var delet = document.getElementById("btn-reset2")
var numbers = document.querySelectorAll("#btn1,#btn2,#btn3,#btn4,#btn5,#btn6,#btn7,#btn8,#btn9,#btn0 ,#btn00 ,#btn")
var re_div = document.getElementById("btn-re-div")
var div = document.getElementById("btn-div")
var mul = document.getElementById("btn-mul")
var sub = document.getElementById("btn-sub")
var sum = document.getElementById("btn-sum")
var equal = document.getElementById("btn-equal")

result.innerText ="0"

for (var i = 0; i <= con.length - 1; i++) {
    con[i].onclick = function calculate() {
        var value = this.innerText
        if (result.innerText ==="0") {
            result.innerText = ""
        }

        if ((!isNaN(value)) || (value === "00") || (value === ".")) {
            result.innerText += value 
        }
        else if ((value === "+") || (value === "-") || (value === "/") || (value === "%") || (value === "*")) {
            result.innerText += value
        }
        else if (value === "=") {
            result.innerText = eval(result.innerText)
        }
        else if (value === "CL") {
            result.innerText = "0"
        }
        else if (value === "DL") {
            result.innerText = result.innerText.slice(0, -1)
            if (result.innerText == "") {
                result.innerText = "0"
            }
        }
    }
}




