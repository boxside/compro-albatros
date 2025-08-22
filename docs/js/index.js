// Index page JavaScript functionality

// Stats cards animation
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".stat-card");

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.remove("opacity-0", "translate-y-6");
                    entry.target.classList.add("opacity-100", "translate-y-0");
                    obs.unobserve(entry.target);
                }, idx * 200);
            }
        });
    }, { threshold: 0.3 });

    cards.forEach(card => observer.observe(card));
});

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
            .then(data => {
                form.reset();
                showNotification("Pesan berhasil dikirim!", "green");
            })
            .catch(err => showNotification("❌ Gagal mengirim!", "red"));
    });
}

function showNotification(message, color) {
    if (notification) {
        notification.textContent = message;
        notification.classList.remove("hidden");
        notification.classList.remove("bg-green-600", "bg-red-600");
        notification.classList.add(color === "green" ? "bg-green-600" : "bg-red-600");
        setTimeout(() => {
            notification.classList.remove("opacity-0", "translate-y-5");
        }, 100);
        setTimeout(() => {
            notification.classList.add("opacity-0", "translate-y-5");
            setTimeout(() => notification.classList.add("hidden"), 500);
        }, 3000);
    }
}

// Fade up animations
document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.2 });

    faders.forEach(fader => observer.observe(fader));
    
    const bgFaders = document.querySelectorAll('.fade-bg');
    const bgObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("opacity-100");
            }
        });
    }, { threshold: 0.1 });

    bgFaders.forEach(el => bgObserver.observe(el));
});

// Form wrapper animation
document.addEventListener("DOMContentLoaded", () => {
    const formWrapper = document.querySelector("#form-wrapper > div");

    if (formWrapper) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        formWrapper.classList.remove("opacity-0", "translate-x-10");
                        observer.unobserve(formWrapper);
                    }
                });
            },
            { threshold: 0.6 }
        );

        observer.observe(formWrapper);
    }
});

// Pelanggan wrapper animation
document.addEventListener("DOMContentLoaded", () => {
    const pelangganWrapper = document.getElementById("pelangganheader");

    if (pelangganWrapper) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        pelangganWrapper.classList.remove("opacity-0", "translate-y-10");
                        observer.unobserve(pelangganWrapper);
                    }
                });
            },
            { threshold: 0.2 }
        );
        observer.observe(pelangganWrapper);
    }
});

// Hero section animations
document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("hero-title");
    const subtitle = document.getElementById("hero-subtitle");
    const buttons = document.getElementById("hero-buttons");

    if (title) setTimeout(() => title.classList.remove("opacity-0"), 100);
    if (subtitle) setTimeout(() => subtitle.classList.remove("opacity-0"), 400);
    if (buttons) setTimeout(() => buttons.classList.remove("opacity-0"), 800);
});

// Layanan section animations
document.addEventListener("DOMContentLoaded", () => {
    const section = document.getElementById("layanan-container");
    const header = document.getElementById("layanan");
    const loader = document.getElementById("loader-layanan");
    const content = document.getElementById("layanan-content");
    const images = document.querySelectorAll(".card-img");
    const txtcard = document.querySelectorAll(".card-title");
    
    if (section) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (loader) setTimeout(() => loader.remove(), 50);
                    if (header) setTimeout(() => header.classList.remove("opacity-0"), 250);
                    if (content) setTimeout(() => content.classList.remove("opacity-0"), 350);
                    setTimeout(() => {
                        images.forEach((img, i) => {
                            setTimeout(() => {
                                img.classList.remove("opacity-0", "translate-y-6");
                            }, i * 100);
                        });
                    }, 500);
                    setTimeout(() => {
                        txtcard.forEach((img, i) => {
                            setTimeout(() => {
                                img.classList.remove("opacity-0", "translate-y-6");
                            }, i * 100);
                        });
                    }, 500);
                    observer.disconnect();
                }
            });
        }, { threshold: 0.3 });

        observer.observe(section);
    }
});

// Loader functionality
setTimeout(() => {
    const loader = document.getElementById("loader");
    const isiKonten = document.getElementById("isiKonten");
    
    if (loader) loader.classList.add("hidden");
    if (isiKonten) isiKonten.classList.remove("hidden");
}, 20);

// Smooth scroll for layanan button
document.addEventListener("DOMContentLoaded", () => {
    const btnLayanan = document.getElementById("btnLayanan");
    
    if (btnLayanan) {
        btnLayanan.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector("#layanan");
            if (target) {
                const offset = -90;
                const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition + offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    }
});
