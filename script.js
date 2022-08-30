const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This was added in JavaScript!';

container.appendChild(content);