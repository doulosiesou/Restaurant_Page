// Adds menu tab content to main page
import Icon1 from './images/birdhouse2.jpg';
import Icon2 from './images/sparrows.jpg'
import Icon3 from './images/berries.jpg'
import Icon4 from './images/corn.jpg'
import Icon5 from './images/pile-of-groats.jpg'
import Icon6 from './images/walnuts.jpg'


export function addHomeTabContent() {
    
    // alert('You clicked the home button')
    let bottomDivContent = document.createElement('div');
    bottomDivContent.id = 'bottom-section';
    const homeImg = new Image();
    homeImg.src = Icon1
    homeImg.id = 'home-image';

    const attribution = document.createElement('a');
    attribution.innerHTML = 'Photo by <a href="https://unsplash.com/@lachlangowen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lachlan Gowen</a> on <a href="https://unsplash.com/photos/6Xdx42pvbAc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    bottomDivContent.appendChild(homeImg);
    bottomDivContent.appendChild(attribution);
      
    return bottomDivContent
}

export function addMenuTabContent() {
    
    let bottomDivContent = document.createElement('div');
    bottomDivContent.id = 'bottom-menu-div';

    let bdcTop = document.createElement('div');
    bdcTop.id = 'bottom-div-content-top'

    let bdcBottom = document.createElement('div');
    bdcBottom.id = 'bottom-div-content-bottom';
    
    // Define menu1 item card
    let menuCard1 = document.createElement('div');
    menuCard1.id = 'menu-card1';
    menuCard1.className = 'menu-cards';

    const berriesImg = new Image();
    berriesImg.src = Icon3;
    berriesImg.id = 'berries-image';

    let menuCard1Txt = document.createElement('h2');
    menuCard1Txt.textContent = 'Alex\'s Breakfast Berries'

    menuCard1.appendChild(berriesImg);
    menuCard1.appendChild(menuCard1Txt);
    bdcTop.appendChild(menuCard1);

    // Define menu2 card
    let menuCard2 = document.createElement('div');
    menuCard2.id = 'menu-card2';
    menuCard2.className = 'menu-cards';

    const cornImg = new Image();
    cornImg.src = Icon4;
    cornImg.id = 'corn-image';

    let menuCard2Txt = document.createElement('h2');
    menuCard2Txt.textContent = 'Cleo\'s Crunchy Corn';

    menuCard2.appendChild(cornImg);
    menuCard2.appendChild(menuCard2Txt);
    bdcTop.appendChild(menuCard2);
    
    bottomDivContent.appendChild(bdcTop);

    // Define menu3 card
    let menuCard3 = document.createElement('div');
    menuCard3.id = 'menu-card3';
    menuCard3.className = 'menu-cards';

    const groatsImg = new Image();
    groatsImg.src = Icon5;
    groatsImg.id = 'groats-image';

    let menuCard3Txt = document.createElement('h2');
    menuCard3Txt.textContent = 'Charlies Oats-n-Groats';

    menuCard3.appendChild(groatsImg);
    menuCard3.appendChild(menuCard3Txt)
    bdcBottom.appendChild(menuCard3)

    // Define menu4 card
    let menuCard4 = document.createElement('div');
    menuCard4.id = 'menu-card3';
    menuCard4.className = 'menu-cards';

    const walnutsImg = new Image();
    walnutsImg.src = Icon6;
    walnutsImg.id = 'walnuts-image';

    let menuCard4Txt = document.createElement('h2');
    menuCard4Txt.textContent = 'Whacky Walnuts';
    
    menuCard4.appendChild(walnutsImg);
    menuCard4.appendChild(menuCard4Txt);
    bdcBottom.appendChild(menuCard4);

    bottomDivContent.appendChild(bdcBottom);

    let bdcAttributionTxt = document.createElement('h3');
    bdcAttributionTxt.textContent = 'Free Use Images Courtesy of:'

    let bdcAttributionURL = document.createElement('a');
    bdcAttributionURL.href = 'https://unsplash.com/';
    bdcAttributionURL.innerText = 'https://unsplash.com';

    let bottomDivContentFooter = document.createElement('div')
    bottomDivContentFooter.id = 'menu-footer';

    bottomDivContentFooter.appendChild(bdcAttributionTxt);
    bottomDivContentFooter.appendChild(bdcAttributionURL);
    
    bottomDivContent.appendChild(bottomDivContentFooter)
    
    return bottomDivContent
}

export function addAboutTabContent() {

    let bottomDivContent = document.createElement('div');
    bottomDivContent.id = 'bottom-div';
    let pBottom = document.createElement('p');
    pBottom.id = 'pBottomTxt';
    pBottom.textContent = 'Greetings from Charlie\s Restaurant. We\'ve been in business for over 2 weeks and served many hungry sparrows.';
    bottomDivContent.appendChild(pBottom);bottomDivContent

    // Add an image 
    const sparrowImg = new Image();
    sparrowImg.src = Icon2
    sparrowImg.id = 'about-image';
    const attribution2 = document.createElement('a');
    attribution2.innerHTML = 'Photo by <a href="https://unsplash.com/@andreaelphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andrea Lightfoot</a> on <a href="https://unsplash.com/photos/umaqGZVQecE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
  
    bottomDivContent.appendChild(sparrowImg);
    bottomDivContent.appendChild(attribution2);
      

    return bottomDivContent;
}

