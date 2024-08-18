// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();

        const targetID = this.getAttribute('href');
        const targetSection = document.querySelector(targetID);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });

        // Update active link in navbar
        updateActiveLink(targetID);
    });
});

// Highlight Active Section in Navigation
function updateActiveLink(targetID) {
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`nav a[href="${targetID}"]`).classList.add('active');
}

// Scroll Event to Update Navbar Links Based on Scroll Position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            updateActiveLink(`#${section.id}`);
        }
    });
});

// Initialize the first section as active on page load
document.addEventListener('DOMContentLoaded', () => {
    updateActiveLink('#home');
});
