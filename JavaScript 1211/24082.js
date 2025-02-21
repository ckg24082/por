function hantei() {
    let item = document.getElementById("score").value;

    alert(item);

    myScore = item * 1;

    if (myScore >= 90) {
        alert("grade 5");
    }

    if (myScore<=44) {
        alert("grade 1");
    }

    if ((myScore >= 80) && (myScore <= 90)) {
        alert("grade 4");
    }

    if((myScore>=50)&&(myScore<=79)){
        alert("grade 3");
    }

    if((myScore>=44)&&(myScore<=49))
        alert("grade 2");
}