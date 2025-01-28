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
// create a variable named messageForm
let messageForm = document.getElementsByName('leave_message')[0];
    // adding an event listener for submit
    messageForm.addEventListener('submit', (event) => {
        event.preventDefault(); //prevents form from submitting

        // three new variables that retrieve the value from the event using event.target
        let name = event.target.usersName.value;
        let email = event.target.usersEmail.value;
        let message = event.target.usersMessage.value;
        
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        //creating a variable  messagesSection
        let messageSection = document.getElementById('messages');
        let messageList = messageSection.querySelector('ul')

        // creating a new <li> element for the message  
        let newMessage = document.createElement('li');

        // setting the inner html for the newMessage element
        newMessage.innerHTML = `<a href="mailto:${email}">${name}</a>
        <span>: ${message}</span>`;

        // creating a veriable to make a new <button>
        let removeButton = document.createElement('button');

        // setting inner text to remove text
        removeButton.innerText = 'remove';
        removeButton.type = 'button';

        removeButton.addEventListener('click', () => {
            let entry = removeButton.parentNode;

            //removes the message from the DOM
            entry.remove();
         });
        // Add the "remove" button to the message
        newMessage.appendChild(removeButton); 

        // append the newMessage to messageList element
        messageList.appendChild(newMessage);

        // reset the form after submitting
        messageForm.reset();
    });

    const githubUsername = 'sharp2010';
    const url = `https://api.github.com/users/{sharp2010/tracy-sharp-jupiter}/repos`;
        async funcgtion getRepos(){
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response not working');
                }
                const repos = await response.json();
                console.log('Repositories:', repos);
            } catch (error) {
                console.error('A problem exists with the fetch operation:', error);
            }
        }

    getRepos();