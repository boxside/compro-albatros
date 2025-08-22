// Contact page JavaScript functionality

// Contact form functionality
const scriptURL = "https://script.google.com/macros/s/AKfycbwt_NKrZp8e5Ay2AzpYiJbfSkpfp9gCLIC25UEzEn-mQHDTrQ4HUeC2jJ3pDM3IekuQiA/exec";
const form = document.getElementById("contact-form");
const notification = document.getElementById("notification");

if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();
        const formData = {
            nama: form.nama.value,
            email: form.email.value,
            nohp: form.nohp.value,
            pesan: form.pesan.value
        };

        fetch(scriptURL, {
            method: "POST",
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(() => {
                form.reset();
                showNotification("✅ Pesan berhasil dikirim!", "green");
            })
            .catch(() => showNotification("❌ Gagal mengirim!", "red"));
    });
}

function showNotification(message, color) {
    if (notification) {
        notification.textContent = message;
        notification.classList.remove("hidden");
        notification.classList.remove("bg-green-600", "bg-red-600");
        notification.classList.add(color === "green" ? "bg-green-600" : "bg-red-600");

        setTimeout(() => notification.classList.remove("opacity-0", "translate-y-5"), 100);

        setTimeout(() => {
            notification.classList.add("opacity-0", "translate-y-5");
            setTimeout(() => notification.classList.add("hidden"), 500);
        }, 3000);
    }
}

// Hero section animations
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
