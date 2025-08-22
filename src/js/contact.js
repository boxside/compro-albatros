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
