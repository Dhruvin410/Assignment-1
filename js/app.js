// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object

var randomize = document.querySelector(".ran1");
var randomize = document.querySelector(".ran2");
var randomize = document.querySelector(".ran3");
var randomize = document.querySelector(".ran4");
var randomize = document.querySelector(".ran5");

var randomstory = document.querySelector(".story");

var synth = window.speechSynthesis;

var textToSpeak1 = ["the turkey","Mom","Dad","The dog","My teacher","the elephent","the cat"];
// textToSpeak1=shuffle(textToSpeak1);
var speakButton1 = document.querySelector('#btn1');

var textToSpeak2 = ["sat on","ate","danced with","saw","does not like","kissed"];
var speakButton2 = document.querySelector('#btn2');

var textToSpeak3 = ["the funny","a scary","a goofy","a slimy","a barking","a fat"];
var speakButton3 = document.querySelector('#btn3');

var textToSpeak4 = ["goat","monkey","fish","cow","frog","bug","worm"];
var speakButton4 = document.querySelector('#btn4');

var textToSpeak5 = ["on the moon","on the chair","in my spaghetti","in my soup","on the grass","in my shoes"];
var speakButton5 = document.querySelector('#btn5');



function randomValueFromArray(array){
	return array[Math.floor(Math.random()*array.length)];
}

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}


/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
function result(){

var arr1 = randomValueFromArray(textToSpeak1);
speakButton1.onclick = function() {
	speakNow(arr1);
}

var arr2 = randomValueFromArray(textToSpeak2);
speakButton2.onclick = function() {
	speakNow(arr2);
}

var arr3 = randomValueFromArray(textToSpeak3);
speakButton3.onclick = function() {
	speakNow(arr3);
}

var arr4 = randomValueFromArray(textToSpeak4);
speakButton4.onclick = function() {
	speakNow(arr4);
}

var arr5 = randomValueFromArray(textToSpeak5);
speakButton5.onclick = function() {
	speakNow(arr5);
}

var textToSpeak6 = (arr1.concat(arr2,arr3,arr4,arr5));
var speakButton6 = document.querySelector('#story');

speakButton6.onclick = function() {
	speakNow(textToSpeak6);
	var story="";
}

}
				function newFunction() {
				document.getElementById("story").reset();
     }


// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

randomize.addEventListener('click', result);

var story="";
