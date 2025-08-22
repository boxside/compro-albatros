// Services page JavaScript functionality

document.addEventListener("DOMContentLoaded", () => {
    // Mobile navigation functionality
    const mobileMenuButton = document.querySelector('[data-collapse-toggle="navbar-dropdown"]');
    const mobileMenu = document.getElementById('navbar-dropdown');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
            
            if (isExpanded) {
                mobileMenu.classList.add('hidden');
            } else {
                mobileMenu.classList.remove('hidden');
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            });
        });
    }

    const title = document.getElementById("hero-title");
    const subtitle = document.getElementById("hero-subtitle");
    
    if (title) setTimeout(() => title.classList.remove("opacity-0"), 100);
    if (subtitle) setTimeout(() => subtitle.classList.remove("opacity-0"), 400);

    const cards = document.querySelectorAll(".card-box");
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.remove("opacity-0", "translate-y-6");
                    entry.target.classList.add("opacity-100", "translate-y-0");

                    const innerEls = entry.target.querySelectorAll(".card-img, .card-title, p");
                    innerEls.forEach((el, i) => {
                        setTimeout(() => {
                            el.classList.remove("opacity-0", "translate-y-6", "translate-y-3");
                            el.classList.add("opacity-100", "translate-y-0");
                        }, i * 200);
                    });
                    obs.unobserve(entry.target);
                }, index * 300);
            }
        });
    }, { threshold: 0.2 });
    
    cards.forEach(card => observer.observe(card));
});
