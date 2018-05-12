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

    //conditionals
    var a = 5;
    var b = 7;

    var c = (a == b);
    console.log(c);
    c = (a != b);    
    console.log(c);
    c = (a == a);    
    console.log(c);
    c = (a > b);    
    console.log(c);
    c = (a <= b);    
    console.log(c);

    a=b;
    c = (a <= b);    
    console.log(c);
    c = (a < b);    
    console.log(c);
    c = (a == b);    
    console.log(c);
}