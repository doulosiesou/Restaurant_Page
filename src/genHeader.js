// Generates header for ./src/index.html

export function addHeader() {

    const headDiv = document.createElement('div');
    headDiv.className = 'heading'
    headDiv.id = 'heading'
    
    const headText =  document.createElement('h1');
    headText.textContent = 'Welcome to Charlie\'s Wings and Things';

    headDiv.appendChild(headText);

    return headDiv;

}; 