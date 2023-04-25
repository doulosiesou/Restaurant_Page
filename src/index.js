// import modules
import { addHeader } from './genHeader'
import { addMenus } from './addNavBar';
import { addHomeTabContent } from './addBottomSection';
import { addMenuTabContent } from './addBottomSection';
import { addAboutTabContent } from './addBottomSection';


// import handlers for style sheets and images
import './styles.css';

const content = document.querySelector('#content');
let bottomSection 

// Add in header
let headSection = addHeader();
content.appendChild(headSection);

// Add in nav bar
let navBar = addMenus();
content.appendChild(navBar)

// Load in home page image
bottomSection = addHomeTabContent();
bottomSection.id = 'bottom-section';
content.appendChild(bottomSection);

// // Add in display section for Home, Menu and About Us buttons
const homeBtn = document.querySelector('#home-tab')
homeBtn.onclick = function() {
   if(bottomSection) {content.removeChild(bottomSection)};
   bottomSection = addHomeTabContent();
   bottomSection.id = 'bottom-section'
   content.appendChild(bottomSection);
}; 

const menuBtn = document.querySelector('#menu-tab')
menuBtn.onclick = function() {
   if(bottomSection) {content.removeChild(bottomSection)};
   bottomSection = addMenuTabContent();
   bottomSection.id = 'bottom-section'
   content.appendChild(bottomSection);
}

const aboutBtn = document.querySelector('#about-tab')
aboutBtn.onclick = function() {
   if(bottomSection) {content.removeChild(bottomSection)};
   bottomSection = addAboutTabContent();
   bottomSection.id = 'bottom-section';
   content.appendChild(bottomSection);
}
