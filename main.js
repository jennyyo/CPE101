let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    const skillsGrid = document.querySelector('.skills-grid');
    const skillsContainer = document.querySelector('.skills-container');

    skillsContainer.addEventListener('mousemove', (e) => {
        const rect = skillsContainer.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        const rotateX = mouseY / 25;
        const rotateY = -mouseX / 25;

        skillsGrid.style.transform = `rotateX(${45 + rotateX}deg) rotateZ(${45 + rotateY}deg)`;
    });

    skillsContainer.addEventListener('mouseleave', () => {
        skillsGrid.style.transform = 'rotateX(45deg) rotateZ(45deg)';
    });

    // Audio control
    const muteButton = document.querySelector('.btn1');
    const muteIcon = document.getElementById('muteIcon');
    const bgMusic = document.getElementById('background-music');

    muteButton.addEventListener('click', toggleMute);

    function toggleMute() {
        if (bgMusic.muted) {
            bgMusic.muted = false;
            muteIcon.textContent = '🔊'; 
        } else {
            bgMusic.muted = true;
            muteIcon.textContent = '🔇'; 
        }
    }

    bgMusic.addEventListener('canplaythrough', () => {
        bgMusic.play().catch(error => {
            console.log("Autoplay prevented:", error);
        });
    });
});