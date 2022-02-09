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

//kürzere Lösung?


console.log("---------------------------------");

//JS Vertiefung - Template Literals
//lev1_1 

let vorname1 = "Markus"
let nachname1 = "Schiller"
let alter = 29
let ort = "Treuchtlingen"
let größe = "185cm"
let gewicht = "85kg"

let filler = document.getElementById('fillMe')


console.log("Mein Vorname ist: " + vorname1 + " mein Nachname lautet: " + nachname1 + " ich bin " + alter + " Jahre alt und komme aus " + ort + "<br>");
document.write("Mein Vorname ist: " + vorname1 + "<br>" + " Mein Nachname lautet: " + nachname1 + "<br> Ich bin " + alter + " Jahre alt und komme aus " + ort);

console.log(`Ich bin ${alter} Jahre alt, und wiege um die ${gewicht} bin aber dafür ${größe} groß.`)

filler.innerHTML = `<br>Ich bin ${alter} Jahre alt, und wiege um die ${gewicht} bin aber dafür ${größe} groß.`;

// document.write(`<br>Ich bin ${alter} Jahre alt, und wiege um die ${gewicht} bin aber dafür ${größe} groß.`)


console.log("-------------------------------");
// lev1_2: template-literals


// Brain Damage Songtext
// The lunatic is on the grass
// The lunatic is on the grass
// Remembering games and daisy chains and laughs
// Got to keep the loonies on the path

// The lunatic is in the hall
// The lunatics are in my hall
// The paper holds their folded faces to the floor
// And every day the paperboy brings more


// And if the dam breaks open many years too soon
// And if there is no room upon the hill
// And if your head explodes with dark forebodings too
// I'll see you on the dark side of the moon

// The lunatic is in my head
// The lunatic is in my head
// You raise the blade, you make the change
// You rearrange me 'til I'm sane
// You lock the door
// And throw away the key
// There's someone in my head but it's not me

// And if the cloud bursts, thunder in your ear
// You shout and no one seems to hear
// And if the band you're in starts playing different tunes
// I'll see you on the dark side of the moon


let lunatic = "lunatic is";
let darkSide = "I'll see you on the dark side of the moon";
let hall = "hall";
let head = "in my head";
let door = "You lock the door";
let paperboy = "paperboy";
let and = "And";
let the = "The";
let song = document.getElementById("song")

song.innerHTML = `
<h1>Brain Damage Songtext</h1>
<p>${the} ${lunatic} on the grass<br>
${the} ${lunatic} on the grass<br>
Remembergin games and daisy chains and laughs<br>
Got to keep the loonies on the path</p>

<p>${the} ${lunatic} in the ${hall}<br>
${the} lunatics are in my ${hall}<br>
${the} ${paperboy} holds their folded faces to the floor<br>
${and} every day the ${paperboy} brings more</p>

<p>${and} if the dam breaks open many years too soon<br>
${and} if there is no room upon the hill<br>
${and} if your head explodes with dark forebodings too<br>
${darkSide}</p>

<p>${the} ${lunatic} ${head}<br>
${the} ${lunatic} ${head}<br>
You raise the blade, your make the change<br>
You rearrange me 'til I'm sanse<br>
${door}<br>
${and} throw away the key<br>
There's someone ${head} but it's not me</p>

<p>${and} if the cloud bursts, thunder in your ear<br>
You shout and no one seems to hear<br>
${and} if the band you're in start playing differnt tunes<br>
${darkSide}</p>
`

console.log("--------------------------");
// JS Vertiefung - Condiitonal Statements lvl1
// lev1_1: conditional-statements punkten

let number = document.getElementById('number')
let info = document.getElementById('info')

function adult(){
    if (number.value >= 18) {
        console.log(true);
        info.innerHTML = "volljährig"
    } else {
        console.log(false);
        info.innerHTML = "minderjährig"
    }
}

// kürzer?
console.log("----------------------------");
//lev1_2: condiitonal-statements

let weatherText = document.getElementById('weatherText')
let weatherinfo = document.getElementById('weatherinfo')
let weatherNumber = document.getElementById('weatherNumber')

function weather(){
    if (weatherNumber.value <= 3){
        weatherinfo.innerHTML = "schlecht"
    }
    else if(weatherNumber.value <= 5) {
        weatherinfo.innerHTML = "okey"
    } else if(weatherNumber.value <= 7){
        weatherinfo.innerHTML = "gut"
    } else if(weatherNumber.value <= 10){
        weatherinfo.innerHTML = "super"
    }
    else{
    }
}

console.log("-----------------------------");
// JS lev1_3: conditional statements mit form
let ageCheck = document.getElementById('ageCheck')
let ageValue = document.getElementById('input')

function greaterThan() {
        event.preventDefault();//für die form zum blockieren des seiten refresh link?
    if (ageValue.value >= 18) {
        ageCheck.innerHTML = "Ja. Du kannst Shisha rauchen"
    } else {
        ageCheck.innerHTML = "Nein. Du darft nocht nicht Shisha rauchen"
    }
}

console.log("----------------------------");
//JS Vertiefung lev2_2 condiitonal-statements-air-quality

let rangeValue = document.getElementById('rangeValue')
let rangeBar = document.getElementById('rangeBar')


function checkAirQuality(){
        
    if(rangeBar.value > 50 && rangeBar.value < 100){
        rangeValue.innerHTML = `Level of health concern: Moderate<br>
        Level of health effect: Acceptable quality`
        document.body.style.backgroundColor = 'blue';

    } 
    else if(rangeBar.value > 100 && rangeBar.value <= 150){
        rangeValue.innerHTML = `Level of health concer: Unhealthy for sensitive groups<br>
        Level of health effect: Generable publics not likely affected`
        document.body.style.backgroundColor = 'green';

    }
    else{
        rangeValue.innerHTML = `Level of health concern: Good<br>
        Level of health effect: Little or no risk`
        document.body.style.backgroundColor = 'orange';
    }
}

console.log("-----------------------------");
// lev2_3: condiitonal-statements difference

let nummer = document.getElementById('nummer')
let ergebnis = document.getElementById('ergebnis')

function num(){
    if (nummer.value > 27) {
        let end = nummer.value - 27;
        ergebnis.innerHTML = end * 2;
        return;
    } else {
        ergebnis.innerHTML = nummer.value - 27;
        return
        console.log("Bye");
    }
}

// lev2_4: condidotnal-statement punkten

let sum;

function zahlen(x, y){
    if (x === y) {
        sum = x + y
        sum *= 5;
        return sum;
    } else {
        sum = x + y;
        return sum;
    }
}

console.log(zahlen(5,5));

