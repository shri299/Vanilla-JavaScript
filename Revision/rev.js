document.getElementById('button1').addEventListener('click',loadCustomer);
document.getElementById('button2').addEventListener('click',loadCustomers);

function loadCustomer(e) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET","rev1.json",true);

    xhr.onload = function () {
        if(this.status===200)
        {
            //document.getElementById('customer').innerText = this.responseText;
            const customer = JSON.parse(this.responseText);

            const output = `<ul>
            <li>ID: ${customer.id}</li>
            <li>NAME: ${customer.name}</li>
            <li>COMPANY: ${customer.company}</li>
            <li>PHONE: ${customer.phone}</li></ul>`

            document.getElementById('customer').innerHTML = output;
        }
    }

    xhr.send();
}


function loadCustomers(e) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET","rev2.json",true);

    xhr.onload = function () {
        if(this.status===200)
        {
            //document.getElementById('customer').innerText = this.responseText;
            const customers = JSON.parse(this.responseText);
            let output = '';
            customers.forEach(function(customer){
                output += `<ul>
                <li>ID: ${customer.id}</li>
                <li>NAME: ${customer.name}</li>
                <li>COMPANY: ${customer.company}</li>
                <li>PHONE: ${customer.phone}</li></ul>`
            });
            

            document.getElementById('Customers').innerHTML = output;
        }
    }

    xhr.send();
}