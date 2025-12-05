const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuBtn.addEventListener('click', () => { mobileMenu.classList.toggle('hidden'); });
document.querySelectorAll('#mobile-menu a').forEach(link => { link.addEventListener('click', () => { mobileMenu.classList.add('hidden'); }); });

const texts = ['Building robust APIs and scalable systems', 'WordPress Plugin Development Extending WooCommerce', 'Optimizing database performance', 'Integrating third party APIs'];
let textIndex = 0, charIndex = 0, isDeleting = false;
const typedElement = document.getElementById('typed-text');
function type() {
    const currentText = texts[textIndex];
    if (isDeleting) { typedElement.textContent = currentText.substring(0, charIndex - 1); charIndex--; }
    else { typedElement.textContent = currentText.substring(0, charIndex + 1); charIndex++; }
    let typeSpeed = isDeleting ? 50 : 100;
    if (!isDeleting && charIndex === currentText.length) { typeSpeed = 2000; isDeleting = true; }
    else if (isDeleting && charIndex === 0) { isDeleting = false; textIndex = (textIndex + 1) % texts.length; typeSpeed = 500; }
    setTimeout(type, typeSpeed);
}
setTimeout(type, 1000);

const observerOptions = { threshold: 0.5, rootMargin: '0px 0px -100px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
            skillBars.forEach(bar => { const width = bar.getAttribute('data-width'); setTimeout(() => { bar.style.width = width; }, 100); });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);
const skillsSection = document.getElementById('skills');
if (skillsSection) { observer.observe(skillsSection); }

function toggleReadMore(descId, btnId) {
    const description = document.getElementById(descId);
    const btn = document.getElementById(btnId);

    if (description.classList.contains('line-clamp-3')) {
        description.classList.remove('line-clamp-3');
        btn.textContent = 'Read Less';
    } else {
        description.classList.add('line-clamp-3');
        btn.textContent = 'Read More';
    }
}