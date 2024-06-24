document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.container');
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });
        });
    });

    document.getElementById('payrollForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const employeeName = document.getElementById('employeeName').value;
        const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
        const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);

        const totalPay = hoursWorked * hourlyRate;
        const resultText = `Employee Name: ${employeeName}<br>Total Pay: $${totalPay.toFixed(2)}`;
        document.getElementById('resultText').innerHTML = resultText;

        addReport(employeeName, hoursWorked, hourlyRate, totalPay);
    });

    function addReport(name, hours, rate, total) {
        const reportList = document.getElementById('reportList');
        const listItem = document.createElement('li');
        listItem.innerHTML = `Name: ${name}, Hours Worked: ${hours}, Hourly Rate: $${rate}, Total Pay: $${total.toFixed(2)}`;
        reportList.appendChild(listItem);
    }

    window.printReports = function() {
        const printContent = document.getElementById('reportContent').innerHTML;
        const originalContent = document.body.innerHTML;

        document.body.innerHTML = printContent;
        window.print();
        document.body.innerHTML = originalContent;
    };