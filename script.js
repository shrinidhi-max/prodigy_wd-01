// JavaScript for changing navigation menu styles on scroll and hover

// Select the navigation menu element
const nav = document.getElementById('main-nav');

// Function to add/remove the scrolled class
function changeNavStyleOnScroll() {
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

// Add scroll event listener to window
window.addEventListener('scroll', changeNavStyleOnScroll);

// Function to handle hover effect on menu items
function handleMenuItemHover(event) {
    if (event.target.tagName === 'A') {
        // Remove active class from all menu items
        nav.querySelectorAll('a').forEach(item => item.classList.remove('active'));
        // Add active class to the hovered item
        event.target.classList.add('active');
    }
}

// Add mouseover event listener to navigation menu
nav.addEventListener('mouseover', handleMenuItemHover);

// Add mouseout event listener to navigation menu (optional)
// nav.addEventListener('mouseout', () => {
//     nav.querySelectorAll('a').forEach(item => item.classList.remove('active'));
// });
