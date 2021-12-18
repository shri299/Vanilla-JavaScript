let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes
    val = list.childNodes; //gives a node list that are childs of ul we will also get text node along with li because they represent the line break.
    val = list.childNodes[0];
    val = list.childNodes[0].nodeName;
    val = list.childNodes[3].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// Get children element nodes
    val = list.children; //gives html collection which has only li as child and not text nodes.
    val = list.children[1];
    list.children[1].textContent = 'Hello';

// Children of children
    list.children[3].children[0].id = 'test-link';
    val = list.children[3].children[0];//gives the children of 4th li

// First child
    val = list.firstChild;
    val = list.firstElementChild;

// Last child
    val = list.lastChild;
    val = list.lastElementChild; //last child which is an element

// Count child elements
    val = list.childElementCount;//total children of list

// Get parent node
    val = listItem.parentNode;
    val = listItem.parentElement; //the same as parent node
    val = listItem.parentElement.parentElement; //to find parents of parent

// Get next sibling
    val = listItem.nextSibling;
    val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get prev sibling
    val = listItem.previousSibling;
    val = listItem.previousElementSibling;
    console.log(val);