const name = 'john';
const age = '30';
const job = 'web developer';
const city = 'miami';

//withought tempelate strings(es5)

    //html = '<ul><li>name: ' + name + '</li><li>age: ' + age + '</li><li>job: '+ job + '</li><li>city: '+ city +'</li></ul>';

    

    html = '<ul>' + 
                '<li>name: ' + name + '</li>' +
                '<li>age: ' + age + '</li>' +
                '<li>job: ' + job + '</li>' +
                '<li>city: ' + city + '</li>' + '</ul>' ;
    
                document.body.innerHTML = html;

//with tempelate literals(es6)


    function hello(){
        return 'hello';
    }

    html = `
    <ul>
        <li>name: ${name}</li>
        <li>age: ${age}</li>
        <li>job: ${job}</li>
        <li>city: ${city}</li>
        <li>kya hai bhai: ${2+2}</li>
        <li>neend aa rhi bhai: ${hello()}</li>
        <li>${age>30?'over 30':'under 30'}</li>
    </ul>
        `;

        document.body.innerHTML = html;


    