// Services page JavaScript functionality

document.addEventListener("DOMContentLoaded", () => {
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
