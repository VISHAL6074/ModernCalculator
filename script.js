function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let current = document.getElementById('display').value;
    document.getElementById('display').value = current.slice(0, -1);
}

function appendCharacter(char) {
    document.getElementById('display').value += char;
}

function calculateResult() {
    let current = document.getElementById('display').value;
    if (current) {
        try {
            document.getElementById('display').value = eval(current);
        } catch (e) {
            alert("Invalid expression");
        }
    }
}
