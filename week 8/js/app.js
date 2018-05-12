function sum() {
    var a = document.getElementById("A").value;
    var b = document.getElementById("B").value;

    var c = Number(a) + Number(b) ;

    document.getElementById("C").value = c;

    if (c == 0 ) {
        document.getElementById("C").style.backgroundColor = "red";        
    } else if (c%2 == 0) {
        document.getElementById("C").style.backgroundColor = "lightgreen";
    } else if (c%2 == 1) {
        document.getElementById("C").style.backgroundColor = "lightblue";        
    }
}

function sumNumtoStr() {
    var firstNum = document.getElementById("num").value;
    var res = String(firstNum);
    var res = "'"+res+"'"; 
    document.getElementById("res").value = res;

    var i = "123";
    var j = 7;
    console.log(Number(i) + j);
}