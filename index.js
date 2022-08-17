//Array Methods

//Adding elements into an array
//.push() ----> Adds elements to the end of an array
const myFamilyMembers = ["Mum", "Dad", "Atara", "LuckyTheCat"];
myFamilyMembers.push("Myself");

console.log(myFamilyMembers);

//.unshift ----> Adds elements to the beginning of an array
const myDreamDestinations = ["Dubai", "Paris", "Maldives"];
myDreamDestinations.unshift("Santorini");

console.log(myDreamDestinations);

/*... -----> Spread operator allows us to spread out elements
of an existing array into a new array creating a copy
*/
//const myDreamCompanies = ["Microsoft", "Safaricom", "Google", "KPMG"];

//const copyOfMyDreamCompanies = [...myDreamCompanies];

//console.log(copyOfMyDreamCompanies);

//Adding elements to the front of array using the spread
const myDreamCompanies = ["Microsoft", "Safaricom", "Google", "KPMG"];

const allDreamCompanies = ["Oracle", ...myDreamCompanies];

console.log(allDreamCompanies);

//Adding elements to the end of array using the spread
const bestLaptops = ["Macbook Pro", "HP Envy x360", "HP Elite Dragonfly"];

const allLaptops = [...bestLaptops, "HP Spectre x360"];

console.log(bestLaptops);

console.log(allLaptops);

//Removing elements from an array
//.pop() ----> Removes the last element in an array
const shoes = ["Alexander McQueens", "Jordan 4's", "Sneakers"];
shoes.pop();
console.log(shoes);

//.shift() -----> Removes the first element in an array
const phoneBrands = ["Nokia", "Samsung", "Apple"];
phoneBrands.shift();
console.log(phoneBrands);


//NB: .pop() and .shift() are destructive


//.slice() ----> Allows us to remove elements from an array nondestructively
//.slice with no arguments returns a copy of the original array with all elements intact
const primeNumbers = [2,3,5,7];
const copyOfPrimeNumbers = primeNumbers.slice();
console.log(primeNumbers);
console.log(copyOfPrimeNumbers);

//.slice() with arguments
//First argument ----> Index where slice should begin
//Second argument -----> Index before which it should end
const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
console.log(daysOfTheWeek.slice(2,5));
console.log(daysOfTheWeek);

//.slice() with 1 argument
//Runs from the index specified by the first argument to the end of the array
const monthsOfTheYear = ["Jan", "Feb", "March", "Apr", "May", "June", "July", "August"];
console.log(monthsOfTheYear.slice(5));

//To return the last month of the array
console.log(monthsOfTheYear.slice(-1));
//console.log(monthsOfTheYear);

//NB: a negative index tells the Javascript engine to start counting from the last element in the array


//.splice() ----> Removes, adds or replaces elements from an array destructively
const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
console.log(days.splice(2));
//console.log(days);

//.splice can use negative indices just like .slice()
const months = [
    "Jan", 
    "Feb", 
    "March", 
    "Apr",
    "May", 
    "June", 
    "July", 
    "August"
];
console.log(months.splice(-1));
//console.log(months);

//.splice with 2 arguments
//First argument ----> Index to which to begin splicing
//Second argument -----> How many elements we want to remove from the array
const hotels = [
    "Kempinski", 
    "Radisson Blue", 
    "Eka Hotel", 
    "Emara Ole Sereni", 
    "The Emory", 
    "Trademark Hotel", 
    "Tribe Hotel"
];
hotels.splice(2,3);
console.log(hotels);

//.splice with 3 or more arguments
//First argument ----> Index to which to begin splicing
//Second argument -----> How many elements we want to remove from the array
//Third argument onwards ----> Elements to insert in the array
const cards = [
    "Ace of Spades",
    "Jack of Clubs",
    "Nine of Clubs",
    "Nine of Diamonds",
    "Three of Hearts",
];

cards.splice(2,1,"Ace of clubs");
console.log(cards);

//0 is passed as the second argument when we aren't required to remove anything from the array
const books = ["The Bluest Eye", "Kindred", "The Grass Dancer"];

books.splice(2, 0, "Giovanni's Room", "The Color Purple");

console.log(books);

//Using bracket notation to replace elements in an array
//This is a destructive approach
const favoriteFoods = ["Pizza", "Chicken", "Biryani"];
favoriteFoods[1] = "Potato Wedges";
console.log(favoriteFoods);

//slicing and spreading to replace elements nondestructively
const menu = [
    "Jalapeno Poppers",
    "Cheeseburger",
    "Fish and Chips",
    "French Fries",
    "Onion Rings",
];

const newMenu = [
    ...menu.slice(0, 1),
    "Veggie Burger",
    "House Salad",
    "Teriyaki Tofu",
    ...menu.slice(3),
];

console.log(menu);
console.log(newMenu);
