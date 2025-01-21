// creating a <footer> element
const footer = document.createElement('footer');

//creating a variable named 'today' assigning it a new object
const today = new Date();
let thisYear = today.getFullYear();

//adding variable named copyright
let copyright = document.createElement('p');

//adds the current year inside the <footer> element
copyright.textContent = `\u00A9 ${thisYear} Tracy Sharp's Website.  All rights reserved.`;

// appends the <p> element to the <footer>
footer.appendChild(copyright);

// puts the <footer> to the end of the body element
document.body.appendChild(footer);

// creating an array for technical skills
let skills = ['JavaScript', 'HTML', 'CSS', 'Adobe Photoshop', 'GitHub'];

// creating a variable named skillsSection
let skillsSection = document.getElementById('skills');

// creating a variable named skillslist and selecting the <ul> inside the skillSection
let skillsList = skillsSection.querySelector('ul');

// looping through the skills array, creating <li>
skills.forEach(skill => {
    // creating a <li> for each skill
    let listItem = document.createElement('li');

    // puts the content of the list to the skill
    listItem.textContent = skill;

    // putting the <li> to the <ul>
    skillsList.appendChild(listItem);
});
