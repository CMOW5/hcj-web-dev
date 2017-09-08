function handleClick() {
    document.getElementById("dateTarget2").innerHTML = Date();
}

document.getElementById('dateButton').onclick = handleClick2;

function handleClick2() {
    document.getElementById('dateTarget3').innerHTML = Date();
}

//name identifier
document.getElementById('dateButton').addEventListener('click', handleClick);
function handleClick() {
    document.getElementById('dateTarget').innerHTML = Date();
}

//anonymous function
document.getElementById('dateButton').addEventListener('click', function handleClick() {
    document.getElementById('dateTarget2').innerHTML = Date();
});