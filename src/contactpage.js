import mapPath from "./images/Odin-Restaurant-Map.png";

export function contactPageLoad() {

    // create body elements
    const body = document.createElement('section');
    body.id = 'contact-body';

    const contact = document.createElement('div');
    contact.className = 'contact';

    const menuHeadingContainer = document.createElement('div');
    menuHeadingContainer.className = 'menu-heading';
    const menuHeading = document.createElement('h1');
    menuHeading.className = 'menu-title';
    menuHeading.textContent = 'CONTACT';
    const restaurantName = document.createElement('h1');
    restaurantName.className = 'restaurant-name';
    restaurantName.textContent = 'Le Cuisine';

    menuHeadingContainer.appendChild(menuHeading);
    menuHeadingContainer.appendChild(restaurantName);

    // service and contact details
    const contactInfo = document.createElement('div');
    contactInfo.className = 'contact-info';
    const serviceDetails = document.createElement('div');
    serviceDetails.className = 'service-details';

    // address
    const addressBlock = document.createElement('div');
    addressBlock.className = 'service-item';

    const addressHeading = document.createElement('h2');
    addressHeading.textContent = 'Address';

    const addressDetails = document.createElement('p');
    addressDetails.innerHTML = "19 West Street <br> Durban Central <br> 4001";

    addressBlock.appendChild(addressHeading);
    addressBlock.appendChild(addressDetails);
    serviceDetails.appendChild(addressBlock);

    // service hours
    const openingHoursBlock = document.createElement('div');
    openingHoursBlock.className = 'service-item';

    const hoursHeading = document.createElement('h2');
    hoursHeading.textContent = 'Service Hours';

    const hoursDetails = document.createElement('p');
    hoursDetails.innerHTML = "Mon - Sat: 8:00 - 22:00 <br>  Sun: 8:00 - 17:00";

    openingHoursBlock.appendChild(hoursHeading);
    openingHoursBlock.appendChild(hoursDetails);
    serviceDetails.appendChild(openingHoursBlock);

    // Contact us
    const contactUsBlock = document.createElement('div');
    contactUsBlock.className = 'service-item';

    const contactUsHeading = document.createElement('h2');
    contactUsHeading.textContent = 'Contact Us';

    const contactUsDetails = document.createElement('p');
    contactUsDetails.innerHTML = "099 - 786 - 2637 <br> lecuisine@thisemailsucks.com";

    contactUsBlock.appendChild(contactUsHeading);
    contactUsBlock.appendChild(contactUsDetails);
    serviceDetails.appendChild(contactUsBlock);

    const map = new Image();
    map.src = mapPath;

    contactInfo.appendChild(serviceDetails);
    contactInfo.appendChild(map);

    contact.appendChild(menuHeadingContainer);
    contact.appendChild(contactInfo);
    body.appendChild(contact);

    return body;

}