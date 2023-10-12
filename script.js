let buttonn=document.querySelector(".buttonn")
let menue=document.querySelector(".menue")


buttonn.addEventListener("click",()=>{
    menue.classList.toggle("active")
})




let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
            });

        };
    });


    // let header = document.querySelector('header');
    // header.classList.toggle('sticky', window.scrollY > 100);

    

    // menuIcon.classList.remove('bx-x');
    // navbar.classList.remove('active');
    
};


ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.showcase1, .heading', { origin:'top' });
 ScrollReveal().reveal(' .services-container, .portfolio-box, .contact form', { origin:'bottom' });
 ScrollReveal().reveal('.showcase h2', { origin: 'left' });
 ScrollReveal().reveal('.showcase  p', { origin: 'right' });


 const typed = new Typed('.multipler-text', {
    strings: [ , 'Full-Stack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 })