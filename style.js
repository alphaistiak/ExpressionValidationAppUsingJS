function validateExpression() {
    // Get selected expression type
    const expressionType = document.getElementById('expressionType').value;

    // Get user input
    const userInput = document.getElementById('inputField').value;

    // Define regular expressions
    let regex;
    switch (expressionType) {
        case 'email':
            regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            break;
        case 'phoneNumber':
            regex = /^\d{11}$/;
            break;
        case 'postCode':
            regex = /^\d{4}$/;
            break;
        default:
            break;
    }

    // Validate input using the selected regular expression
    const isValid = regex.test(userInput);

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = isValid ? 'Valid Expression' : 'Invalid Expression';
}
