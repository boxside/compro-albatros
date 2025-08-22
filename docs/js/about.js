// About page JavaScript functionality

document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("hero-title");
    const subtitle = document.getElementById("hero-subtitle");

    if (title) setTimeout(() => title.classList.remove("opacity-0"), 100);
    if (subtitle) setTimeout(() => subtitle.classList.remove("opacity-0"), 100);

    const sections = document.querySelectorAll(".fade-section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("opacity-0", "translate-y-6");
                entry.target.classList.add("opacity-100", "translate-y-0");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(sec => observer.observe(sec));
});
