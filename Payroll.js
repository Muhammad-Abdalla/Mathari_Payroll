function sal()
{
    var basic, ha, ta, hza, tax, np;

    basic = document.getElementById('bs').value;

    ha = basic * 30/100;
    ta = basic * 20/100; 
    hza = basic * 15/100;
    tax = basic * 5/100;

// Research on the parseInt function
//Research on the Net pay term. the Gross Pay and Basic Salary

np = parseInt(basic) + parseInt(ha) + parseInt(ta) + parseInt(hza) + parseInt(tax);

// Research on the .value method in the Document Object Model

    document.getElementById('ha').value = ha;
    document.getElementById('ta').value = ta;
    document.getElementById('hza').value = hza;
    document.getElementById('tax').value = tax;
    document.getElementById('np').value = np;

gp = parseInt(basic) + parseInt(ha) + parseInt(ta) + parseInt(hza);

    document.getElementById('ha').value = ha;
    document.getElementById('ta').value = ta;
    document.getElementById('hza').value = hza;
    document.getElementById('gp').value = gp;

}

function prt()
{
    window.print();
}