console.log("hello word")

// A javascript or typescript string is zero or more characters written inside a qoutes.
// E.g

let Name: string = "Samuel Omamuzo"
console.log(Name)

// Note you can use single or double qoutes
// E.g

let Name2: string = 'hello'
console.log(Name2)

// you can use the quotes inside a string , as long they don't match the qoutes surrounding the string
//  E.g

let Name3: string = "he said 'good morning'"
console.log(Name3)

// Escape a Character in a string using backslash (\)
// E.g
let text: string = "we are the so called  \"vikings\" from the north"
console.log(text)

let text2: string = "it\'s alright"
console.log(text2)

// Six other Escape Sequences are valid in javaScript/typeScript
// E.g

/* (1) \b : backspace,
    (2) \f : from feed,
    (3) \n : new line,
    (4) \r : crriage return,
    (5) \t : horizontal tabulator,
    (6) \v : vertical tabulator,
*/


// String Methods

// .length gives the total value of a string from 1 to the end

// Note in typescript you can assign a varable to a varable with out the data type being spaecify
let Check = Name3.length
console.log(Check)

/* .slice() this method takes 2 parameters: the start position, 
and the end position ( Note: end is not included) then return the result as a string*/ 

// E.g

let str: string = "Apple, Banana, Kiwi"
let str2 = str.slice(0,6)
console.log(str2)

// Note: if position is nagative it count from the end
// E.g

let str3: string = "Apple, Banana, Kiwi"
let str4 = str.slice(-0,-6)
console.log(str4)

/* Note: substring() is similar to slice() but substring() dose not take 
any values less than 0 */

// E.g
let str_3: string = "Apple, Banana, Kiwi"
let str_4 = str.substring(0,6) /* Note: placing just one paramiter will cut out that index and return the rest*/
console.log(str_4)