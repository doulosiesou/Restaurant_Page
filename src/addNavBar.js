// Adds navbar tabs to main page

export function addMenus() {
    
    let menuDiv = document.createElement('div');
    menuDiv.className = 'menus';
    menuDiv.id = 'menu-div';
    
    let homeBtn = document.createElement('button');
    homeBtn.className = 'menu-button';
    homeBtn.id = 'home-tab';
    homeBtn.textContent = 'Home';
    menuDiv.appendChild(homeBtn);

    let menuBtn = document.createElement('button');
    menuBtn.className = 'menu-button';
    menuBtn.id = 'menu-tab';
    menuBtn.textContent = 'Menu'
    menuDiv.appendChild(menuBtn);

    let aboutBtn = document.createElement('button');
    aboutBtn.className = 'menu-button';    
    aboutBtn.id = 'about-tab';
    aboutBtn.textContent = 'About Us'
    menuDiv.appendChild(aboutBtn);

    return menuDiv
  
}