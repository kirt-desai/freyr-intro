const today = new Date('December 12, 2023, 5:05:00');

var thisYear = today.getFullYear();
const footer = document.querySelector("#footer");
var copyright = document.createElement("p");

const copyright = document.getElementById(thisYear).innerHTML;
footer.appendChild(copyright);

const skills = [ "Java", "Python", "Javascript", "HTML", "CSS", "Microsoft Excel Level 3", "Access Level 1", "Powerpoint", "Microsoft Azure", "Tableau", "Linux"];
const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

const messageForm = document.getElementById('form[name="leave_message"]');
messageForm.addEventListener('submit', function(event) {
  
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const message = event.target.message.value;
  console.log(usersName, usersEmail, message);
  event.preventDefault();
  const messageSection = document.querySelector('#messages');
  const messageList = messageSection.querySelector('ul');
  const newMessage = document.createElement('li');
  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span>${usersMessage}</span>
    `;
  const removeButton = document.createElement('button');
  removeButton.innerText = 'remove';
  removeButton.type = 'button';
  removeButton.addEventListener('click', function() {
    const entry = removeButton.parentNode;
    entry.remove(); 
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  messageForm.reset();
});
