// JavaScript to handle active state
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(current)) {
            item.classList.add('active');
        }
    });
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        // Check if target exists before scrolling
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});


const contactLink = document.getElementById('contact_id');
const socialNav = document.querySelector('.social-nav');

contactLink.addEventListener('click', function(e) {
    e.preventDefault();
    socialNav.classList.toggle('visible');

   
    if (socialNav.classList.contains('visible')) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});


document.addEventListener('click', function(e) {
    
    if (
        !socialNav.contains(e.target) &&
        !e.target.closest('#contact_id')
    ) {
        socialNav.classList.remove('visible');
    }
});


const circle = document.querySelector('.circle-center');
        
        window.addEventListener('scroll', () => {
            const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
            const maxSize = Math.max(window.innerWidth, window.innerHeight) * 2;
            
            const newSize = 60 + (scrollPercentage * maxSize);
            
            circle.style.width = `${newSize}px`;
            circle.style.height = `${newSize}px`;
            
            
        });