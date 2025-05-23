/* Question-1 Create a h2 heading element with text-"Hello JavaScript". Append"from apna College Students"to this text using JS */
let el = document.querySelector('h2');
el.append(" from apna college students");

/*Question-2 Create 3 divs with common class name box. Access them and add some unique text to them*/
let accBox = document.querySelectorAll(".box"); // first accessing the element 
console.log(accBox);
for(let i=0;i<(accBox.length) ;i++){
    accBox[i].textContent = `Unique text ${i+1}`; // adding the unique text using textContent
}
/* Question-3 Create a new button element. Give it a text "click me",, background color of red and text color of white
Insert the button as the first element inside the body tag. */
let conatiner = document.querySelector("body")
let button = document.createElement('button')
button.textContent = 'Click me!'
button.style.backgroundColor = 'blue'
button.style.color = 'black'
conatiner.prepend(button)

/* Question-4 Create a <P> tag in html, give it a class & some styling now create a new class in css and try to append this class to the <p> element.
 Did you notice, how you overwrite the class name when you add a new one ?
 SOlve this problem using classlist */
let para = document.querySelector('p')
// ❌ This will REMOVE the old class and overwrite it:
// // para.className = "second";

// ✅ This will ADD the new class without removing the old one:
para.classList.add("second");


