//properties of document object
//dom is an structured representation of html document
//javascript to manipulate the dom elements or tags or nodes
// JavaScript can change all the HTML elements in the page
// JavaScript can change all the HTML attributes in the page
// JavaScript can change all the CSS styles in the page
// JavaScript can remove existing HTML elements and attributes
// JavaScript can add new HTML elements and attributes
// JavaScript can react to all existing HTML events in the page
// JavaScript can create new HTML events in the page
//the document object is created by the browser and is used to manipulate or bring changes to the html page.

let val;

val = document; //gives the entire html document
val = document.all; //gives html collection(like an array but not an array)(we cant use foreach on them)
val = document.all[2]; 
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;//gives an html collection of all forms
val = document.forms[0];
val = document.forms[0].id; //gives the id associate with that form
val = document.forms[0].method; //gives method like get or post
val = document.forms[0].action; //gives the action associate with that form

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className; //string of classes
val = document.links[0].classList;//gives collection of classes(dom token list)
val = document.links[0].classList[0]; //gives specific class
val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

//convert this html collection into array then apply foreach

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);