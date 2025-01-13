// creating a <footer> element
const footer = document.createElement('footer');
// puts the <footer> to the end of the body element
document.body.appendChild(footer);
//creating a variable named 'today' assigning it a new object
const today = new Date();
let thisYear = today.getFullYear();
//adds the current year inside the <footer> element
footer.innerHTML = `<p>&copy; ${thisYear} My Website.  All rights reserved.</p>`;
// adds the <footer> to the end of the body element
document.body.appendChild(footer);