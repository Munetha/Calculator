function calculate() {

	var operand1 = parseFloat(document.getElementById("out1").value)
	var operator = document.getElementById("operator").value
	var operand2 = parseInt(document.getElementById("out2").value)
	var result;


	console.log(operand1);
	console.log(operand2);
	console.log(operator);



	switch (operator) {
		case "+":
			result = add(operand1, operand2)
			break;
		case "-":
			result = sub(operand1, operand2)
			break;
		case "*":
			result = mul(operand1, operand2)
			break;
		case "/":
			result = div(operand1, operand2)
			break;
		case "%":
			result = mod(operand1, operand2)
			break;
		default:
			result = "Not Available"
	}
	document.getElementById("rst").value = result;
}


function add(a, b) {
	return (a + b);

}

function sub(a, b) {
	return (a - b);
}

function mul(a, b) {
	return (a * b);
}

function div(a, b) {
	if (b = 0) {
		return "Not possible"
	} else
		return (a / b);
}
function mod(a, b) {
	return (a % b);
}


