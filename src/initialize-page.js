import Icon from './Charlies_restaurant.jpg'
import './styles.css';

export function loadPage() {
  
  console.log('loadPage() working');
  const element = document.querySelector('#content');
  
  // Add heading to div content
  const headingText =  document.createElement('p');
  headingText.innerHTML = 'Greetings from Charlies Restaurant';
  headingText.className= 'heading';
  element.appendChild(headingText)

  // Add the image to our existing div.
  const myImg = new Image();
  myImg.src = Icon;
  myImg.className = 'restaurant_img';
  element.appendChild(myImg);

  // Add the copy text to the bottom
  const copyText =  document.createElement('p');
  copyText.innerHTML = 'Great restaurant, good food, great atmosphere, happy birds';
  copyText.className = 'copy';
  element.appendChild(copyText)

  return element;
}

