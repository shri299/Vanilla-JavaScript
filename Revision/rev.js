const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// clearBtn.addEventListener('click',runevent);

// clearBtn.addEventListener('dblclick',runevent);

// clearBtn.addEventListener('mousedown',runevent);

// clearBtn.addEventListener('mouseup',runevent);

// clearBtn.addEventListener('mouseenter',runevent);

// clearBtn.addEventListener('mouseleave',runevent);

// clearBtn.addEventListener('mouseover',runevent);
// clearBtn.addEventListener('mouseout',runevent);

card.addEventListener('mousemove',runevent);

function runevent(e) {
    // console.log(`EVENT TYPE: ${e.type}`);
    // heading.textContent = `${e.offsetX} and ${e.offsetY}`;
    // document.body.style.background = `rgb(${e.offsetX},${e.offsetY},40)`;
    e.preventDefault();
}