alert('testing');


// function to display value
function dis(val) {
    document.getElementById('result').value += val;
}

//function to evaluate the digit and return result function solve()
function solve() {
    var x = document.getElementById('result').value;
    var y = eval(x);
    document.getElementById('result').value = y;
}

// function to clear display
function clr() {
    document.getElementById('result').value = '';
}