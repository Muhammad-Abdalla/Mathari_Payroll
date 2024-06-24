document.getElementById('payrollForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const employeeName = document.getElementById('employeeName').value;
    const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
    const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);

    const totalPay = hoursWorked * hourlyRate;

    const resultText = `Employee Name: ${employeeName}<br>Total Pay: $${totalPay.toFixed(2)}`;
    document.getElementById('resultText').innerHTML = resultText;
});