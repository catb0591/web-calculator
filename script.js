function calculate() {
    const firstValue = document.getElementById('First Value').value
    const secondValue = document.getElementById('Second Value').value
    const math = document.getElementById('math').value

    switch (math) {
        case "+":
            answer.innerHTML = Number(firstValue) + Number(secondValue)
            break;
        case "-":
            answer.innerHTML = Number(firstValue) - Number(secondValue)
            break;
        case "*":
            answer.innerHTML = Number(firstValue) * Number(secondValue)
            break;
        case "/":
            answer.innerHTML = Number(firstValue) / Number(secondValue)
            break;
    }
}