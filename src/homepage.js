import companyLogo from "./images/chef.png";

export function pageLoad() {

    // create header elements
    const header = document.createElement('header');

    const headerMenu = document.createElement('div');
    headerMenu.className = 'header-menu';
    const headerNavigation = document.createElement('ul');

    const homeButton = document.createElement('li');
    homeButton.id = "home-button";
    homeButton.textContent = 'Home';

    const menuButton = document.createElement('li');
    menuButton.id = "menu-button";
    menuButton.textContent = 'Menu';
    
    const contactButton = document.createElement('li');
    contactButton.id = "contact-button";
    contactButton.textContent = 'Contact';

    headerNavigation.appendChild(homeButton);
    headerNavigation.appendChild(menuButton);
    headerNavigation.appendChild(contactButton);

    headerMenu.appendChild(headerNavigation);
    header.appendChild(headerMenu);

    // create body elements
    const body = document.createElement('section');
    
    body.id = 'body';
    const restaurantHome = document.createElement('div');
    restaurantHome.className = 'restaurant-home';

    const logo = new Image();
    logo.src = companyLogo;

    const owner = document.createElement('h1');
    owner.textContent = 'DDL BARNIES';
    owner.className = 'owner';

    const nameOfEstablishment = document.createElement('h1');
    nameOfEstablishment.textContent = 'Le Cuisine';
    nameOfEstablishment.className = 'name-of-establishment';

    const slogan = document.createElement('h2');
    slogan.textContent = 'Where Every Flavour Tells A Story!';

    restaurantHome.appendChild(logo);
    restaurantHome.appendChild(owner);
    restaurantHome.appendChild(nameOfEstablishment);
    restaurantHome.appendChild(slogan);

    body.appendChild(restaurantHome);

    return { header, body };

}