let i = 0;
let count = 1;
function Increment() {
    i = i + count;
    document.getElementById("points").innerHTML = "Counter: " + i;
    console.log(i); // Debugging
}

function growIncrementation(num) {
    count += num;
    document.getElementById("incrementation").innerHTML = "Incrementation: " + count;
}

function reset() {
    i = 0;
    document.getElementById("points").innerHTML = "Counter: " + i;
}

function resetIncrementation() {
    count = 1;
    document.getElementById("incrementation").innerHTML = "Incrementation: " + count;
}

function save() {
    localStorage.setItem("counter", i);
    localStorage.setItem("incrementation", count);
    console.log("Progress saved"); // Debugging
}

function load() {
    i = parseInt(localStorage.getItem("counter"));
    document.getElementById("points").innerHTML = "Counter: " + i;
    count = parseInt(localStorage.getItem("incrementation"));
    document.getElementById("incrementation").innerHTML = "Incrementation: " + count;
}