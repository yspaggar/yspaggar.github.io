let i = 0;
let count = 1;
function Increment() {
    i = i + count;
    document.getElementById("points").innerHTML = "Points: " + i;
    console.log(i);
}

function growIncrementation(num) {
    count += num;
    document.getElementById("incrementation").innerHTML = "Incrementation: " + count;
}