const button = document.getElementById('myButton');
const resultParagraph = document.getElementById('result');

button.addEventListener('click', () => {
    resultParagraph.textContent = 'Button clicked!';
});
