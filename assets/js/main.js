//---------------------------------
//JS Vertiefung - String Methods
// lev1_1: length

let firstName = "Markus"
let lastName = "Schiller"
let fullName = firstName + lastName


console.log(firstName.length);
console.log(lastName.length);
console.log(fullName.length);  

console.log("-------------------");
// lev1_3: search

var txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."

console.log(txt2.search(";"));
console.log(txt2.search("2"));
console.log(txt2.search("blue"));


console.log("--------------------");
//lev1_2: indexOf

const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean."

console.log(txt.indexOf("h"));
console.log(txt.indexOf("Earth"));
console.log(txt.indexOf("Moon"));

console.log("---------------------");
//lev1_7: replace


const baustein = "Sam is good at codingschool";
const newtext = baustein.replace("good", "bad");
const newertext = newtext.replace("codingschool", "school")

document.write(newertext + "<br>");

const susi = newertext.replace("Sam", "Susi");
const goodsusi = susi.replace("bad", "good");

document.write(goodsusi + "<br>");

const goodT = baustein.replace("codingschool", "tennis");
document.write(goodT + "<br>"); // gehen auch mehrere umtausche?


//lev1_8: toLowerCase-toUpperCase


const satz = "Sam is going to codingschool";
const satz1 = satz.replace("codingschool", "school");
const newerSatz = satz.replace("to", "at").replace("codingschool", "school");
const satz3 = satz.replace("Sam", "SAM").replace("codingschool", "SCHOOL");
const Four = satz.replace("Sam", "sam").replace("is","IS").replace("going","GOING").replace("to","TO").replace("codingschool", "school");
const five = satz.replace("is","Is").replace("going","Going").replace("to","To").replace("codingschool","School")

document.write(satz1.toUpperCase() + "<br>");
document.write(newerSatz.toLowerCase() + "<br>");
document.write(satz3 + "<br>");
document.write(Four + "<br>");
document.write(five + "<br>");






