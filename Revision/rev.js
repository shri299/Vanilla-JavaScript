const form = document.querySelector('form');
const taskinput = document.getElementById('task');
const heading = document.querySelector('h5');
taskinput.value = '';
//form.addEventListener('submit',run);

// taskinput.addEventListener('keydown',run);

// taskinput.addEventListener('keyup',run);

// taskinput.addEventListener('keypress',run);

// taskinput.addEventListener('focus',run);

// taskinput.addEventListener('blur',run);

// taskinput.addEventListener('cut',run);

// taskinput.addEventListener('paste',run);

// taskinput.addEventListener('input',run);



function run(e) {
    console.log(`event type: ${e.type}`);
    // console.log(e.target.value);
    // heading.innerText = e.target.value;
    // console.log("hello there");
    // console.log(taskinput.value);
    // e.preventDefault();
}