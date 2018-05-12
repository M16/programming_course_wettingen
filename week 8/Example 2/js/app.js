function sum() {
    //sum the numbers;
    var a = document.getElementById("A").value;
    var b = document.getElementById("B").value;
    var c = Number(a) + Number(b) ;

    document.getElementById("C").value = c;

    //Check if the sum is odd or even;
    var res;
    if (c == 0 ) {
        document.getElementById("C").style.backgroundColor = "red";
        res="0";
    } else if (c%2 == 0) {
        document.getElementById("C").style.backgroundColor = "lightgreen";
        res="Even";
    } else if (c%2 == 1) {
        document.getElementById("C").style.backgroundColor = "lightblue";
        res="Odd";
    }
    console.log(res);
}
