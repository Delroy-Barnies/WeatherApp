import noodlesPath from "./images/noodles.png";
import kebabPath from "./images/kebab.png";
import burgerPath from "./images/burger.png";

export function menuPageLoad() {

    // create body elements
    const body = document.createElement('section');
    body.id = 'menu-body';

    const menu = document.createElement('div');
    menu.className = 'menu';

    const menuHeadingContainer = document.createElement('div');
    menuHeadingContainer.className = 'menu-heading';
    const menuHeading = document.createElement('h1');
    menuHeading.className = 'menu-title';
    menuHeading.textContent = 'MENU';
    const restaurantName = document.createElement('h1');
    restaurantName.className = 'restaurant-name';
    restaurantName.textContent = 'Le Cuisine';

    menuHeadingContainer.appendChild(menuHeading);
    menuHeadingContainer.appendChild(restaurantName);

    // first item in menu
    const firstItem = document.createElement('div');
    firstItem.className = 'item';

    const noodles = new Image();
    noodles.src = noodlesPath;

    const firstItemDescription = document.createElement('div');
    firstItemDescription.className = 'item-desc';

    const noodlesHeading = document.createElement('h3');
    noodlesHeading.textContent = "SEA SNAKE NOODLES!";

    const noodlesDesc = document.createElement('p');
    noodlesDesc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam ornare volutpat maximus.Cras suscipit nibh ut orci bibendum, ac varius neque auctor.Phasellus et dapibus ipsum.Nullam sagittis quis dolor eu accumsan.';

    firstItemDescription.appendChild(noodlesHeading);
    firstItemDescription.appendChild(noodlesDesc);
    firstItem.appendChild(noodles);
    firstItem.appendChild(firstItemDescription);


    // second item in menu
    const secondItem = document.createElement('div');
    secondItem.className = 'item';

    const kebab = new Image();
    kebab.src = kebabPath;

    const secondItemDescription = document.createElement('div');
    secondItemDescription.className = 'item-desc';

    const kebabHeading = document.createElement('h3');
    kebabHeading.textContent = "NEW BORN KEHBAB!";

    const kebabDesc = document.createElement('p');
    kebabDesc.textContent = noodlesDesc.textContent;

    secondItemDescription.appendChild(kebabHeading);
    secondItemDescription.appendChild(kebabDesc);
    secondItem.appendChild(kebab);
    secondItem.appendChild(secondItemDescription);


    // third item in menu
    const thirdItem = document.createElement('div');
    thirdItem.className = 'item';

    const burger = new Image();
    burger.src = burgerPath;

    const thirdItemDescription = document.createElement('div');
    thirdItemDescription.className = 'item-desc';

    const burgerHeading = document.createElement('h3');
    burgerHeading.textContent = "HELL SPAWN BURGER!";

    const burgerDesc = document.createElement('p');
    burgerDesc.textContent = noodlesDesc.textContent;

    thirdItemDescription.appendChild(burgerHeading);
    thirdItemDescription.appendChild(burgerDesc);
    thirdItem.appendChild(burger);
    thirdItem.appendChild(thirdItemDescription);

    menu.appendChild(menuHeadingContainer);
    menu.appendChild(firstItem);
    menu.appendChild(secondItem);
    menu.appendChild(thirdItem);

    body.appendChild(menu);

    return body;

}