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


