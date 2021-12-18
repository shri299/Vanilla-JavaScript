//listen for the submit button

document.getElementById('loan-form').addEventListener('submit',function(e){
        //hide results
        document.getElementById('results').style.display = 'none';

        //show loader
        document.getElementById('loading').style.display = 'none';

        setTimeout(calculateResults,2000);


        


    e.preventDefault();
});

//calculateResults

function calculateResults(){

    //console.log('calculating...');

    //UI variables

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value)/100/12;
    const calculatedPayment = parseFloat(years.value)*12;

    //monthly payments

    const x = Math.pow(1+calculatedInterest,calculatedPayment);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    //to check that monthly is a finite number

    if(isFinite(monthly)){

        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly*calculatedPayment).toFixed(2);
        totalInterest.value = ((monthly*calculatedPayment)-principal).toFixed(2);
        //show results
        document.getElementById('results').style.display = 'block';
        //hide loader
        document.getElementById('loading').style.display = 'none';


    }
    else{
        // console.log('please check inputs');
        showError('please check your inputs');

        

    }




    
}

//show error

function showError(error){
    //create a div
    const errorDiv = document.createElement('div');

    //get element
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //add classes
    errorDiv.className = 'alert alert-danger';

    //create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    //insert error above heading
    card.insertBefore(errorDiv,heading);

    //clear error after 3 seconds
    setTimeout(clearError,2000);

    function clearError(){
        document.querySelector('.alert').remove();
    }

}