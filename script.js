/*----------------- Toggle Icon Navbar ---------------*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*----------------- Scroll Section Active Link ---------------*/

let Section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('geader nav a');

window.onscroll = () => {
    Section.forEach(sec => {
        let top = window.scrollY;
        let offset = secc.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classlist.add('active');
            });
        };
    });

    /*----------------- Sticky Navbar ---------------*/
let header = document.querySelector('header');
header.classlist.toggle('sticky' , window.scrollY > 100);
    /*----------------- Remove Toggle Icon and NavBar ---------------*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*----------------- scroll Reveal ---------------*/
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content , heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-conttainer, portfolio-box, .contact form', { origin: 'buttomn' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/*----------------- Typed JS ---------------*/

const typed = new Typed('.multiple-text'  {
    strings: ['Photographer','Videographer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});