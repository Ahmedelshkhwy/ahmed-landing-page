document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            const target = document.querySelector(link.getAttribute('href'));

            if (!target) {
                return;
            }

            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    document.querySelectorAll('[data-target]').forEach(function (button) {
        button.addEventListener('click', function () {
            const target = document.querySelector(button.dataset.target);

            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    revealOnScroll();
    updateCompass();
});

function revealOnScroll() {
    document.querySelectorAll('.reveal').forEach(function (el) {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < window.innerHeight - 70) {
            el.classList.add('active');
        }
    });
}

function updateCompass() {
    const title = document.querySelector('.compass-title');
    const progress = document.querySelector('.compass-progress');
    const sections = [
        { id: 'top', label: 'Introduction' },
        { id: 'journey', label: 'Professional Evolution' },
        { id: 'strengths', label: 'Core Strengths' },
        { id: 'pharmacy', label: 'Digital Pharmacy' },
        { id: 'services', label: 'Patient Services' },
        { id: 'vision', label: 'Future Vision' }
    ];

    if (progress) {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
        progress.style.width = Math.min(100, Math.max(0, percent)) + '%';
    }

    if (!title) {
        return;
    }

    const active = sections.reduce(function (current, item) {
        const section = document.getElementById(item.id);

        if (!section) {
            return current;
        }

        if (section.getBoundingClientRect().top <= 160) {
            return item;
        }

        return current;
    }, sections[0]);

    title.textContent = active.label;
}

window.addEventListener('scroll', revealOnScroll, { passive: true });
window.addEventListener('scroll', updateCompass, { passive: true });
window.addEventListener('resize', updateCompass);
