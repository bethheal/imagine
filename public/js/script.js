const myButton = document.getElementById('btn');
myButton.onclick = function () {
    const name = prompt('Enter full name: ');
    document.getElementById('name').innerText = name;

}


//variable
const pi = 3.142;
let name = "I am Elizabeth"; //string
let age = 21; //nuumber
let present = false;//boolean
console.log(name);

//Objects
const car = {
    numberPlate: 'GR-345-24',
    model: 'bently',
    color: 'blue',
    weight: 190,
    weightUnit: 'KG',
    owner: {
        name: 'Eizabeth',
        driver: {
            name: 'Kwame'
        }
    }

}
console.log(car.numberPlate);
console.log(car.owner.driver.name);
console.log(car);

car.owner.driver.name = 'Eizabeth';
console.log(car.owner.driver.name)



//from playground


const tweet1 = {
    text: 'I am learning js today',
    likes: 8,
    shares: 2,
    retweet: 1

}

const tweet2 = {
    text: 'I am learning arrays today',
    likes: 9,
    shares: 6,
    retweet: 7
}

const tweets = [];
tweets.push(tweet1);//upadtes the objects added
tweets.push(tweet2);
tweets.length;
// tweets[0];

//Date
const today = new Date();
today.toString();
today.toLocaleDateString();
today.getHours();

//if statement 

if (today.getHours() >= 16) {
    console.log("Class has ended")
} else {
    console.log("class is in session")
}


// functions
// defining functions 

function logIn(username,password) {
    if(username == 'bazile' && password == '1234'){
        return 'User is logged in';
    } else if(username !='bazile'){
      return 'invalid username';
    }else if(password != '1234'){
      return 'invalid password'
    }else {
      return 'Invalid username or password';
    }
    
  }
  
  // invoking or calling funtions 
  logIn('bazile', '1234');
  //basic arithmetic
  1 + 1
  //subtract 
  2 - 4
  //multiply
  3 * 4
  //division
  21 / 4
  //module
  45 % 5
  //comparison Operators
  2==2; //test for strictness using two equals
  2=='2'//test for strictness using two equals
  2==='2'//test for strictness using three equals 
  
   //built in math function
  Math.round(37/23);
  Math.floor(37/24);
  Math.ceil(37/24); //
 Math.random();//random number generator
 Math.max(12, 14, 89);
 
 Math.ceil(Math.random() * 1000000);
 
 
 //Order Of Operations
 2 * 1 + 3 - 4 / 3 % 2 ** 2;
 
 //Handling User Inputs
 1200 + Number('250');//use this for input

 //String Concatenation
const firstname = 'Caroline';
const lastname = 'Mortty';
firstname.trim() + ' ' + lastname.trim();


// Templates Literals
`${firstname.trim()} ${lastname.trim()}`;


//String Methods
firstname.length;
lastname.length;

`${firstname.trim()} ${lastname.trim()}`.length;
(firstname.trim()+ ' ' + lastname.trim()).length;
firstname.toUpperCase();
lastname.charAt(0);
`${firstname.trim().charAt(0)}${lastname.trim().charAt(0)}`;

//String Conversion
String(2014);