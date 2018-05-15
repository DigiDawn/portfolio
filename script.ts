export {};

type NotificationType = 'success' | 'error' | 'info';

const smoothLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));

smoothLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') {
      return;
    }

    const target = document.querySelector<HTMLElement>(targetId);
    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const toggleButton = document.querySelector<HTMLButtonElement>('.menu-toggle');
const navMenu = document.querySelector<HTMLElement>('.nav-menu');

if (toggleButton && navMenu) {
  toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}

const form = document.querySelector<HTMLFormElement>('#contactForm');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.querySelector<HTMLInputElement>('#name');
    const emailInput = document.querySelector<HTMLInputElement>('#email');
    const messageInput = document.querySelector<HTMLTextAreaElement>('#message');

    const name = nameInput?.value.trim() ?? '';
    const email = emailInput?.value.trim() ?? '';
    const message = messageInput?.value.trim() ?? '';

    if (!name || !email || !message) {
      showNotification('Please complete all fields.', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showNotification('Please use a valid email address.', 'error');
      return;
    }

    const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (submitButton) {
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;
    }

    window.setTimeout(() => {
      showNotification('Thanks for reaching out. I will get back to you soon.', 'success');
      form.reset();
      if (submitButton) {
        submitButton.textContent = 'Send message';
        submitButton.disabled = false;
      }
    }, 1200);
  });
}

function showNotification(message: string, type: NotificationType = 'info'): void {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  notification.style.position = 'fixed';
  notification.style.right = '20px';
  notification.style.top = '20px';
  notification.style.zIndex = '1000';
  notification.style.padding = '14px 18px';
  notification.style.borderRadius = '14px';
  notification.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.25)';
  notification.style.background = type === 'success' ? '#0ea5a4' : type === 'error' ? '#ef4444' : '#7c3aed';
  notification.style.color = 'white';
  notification.style.fontWeight = '600';

  document.body.appendChild(notification);

  window.setTimeout(() => {
    notification.remove();
  }, 3400);
}

const sections = Array.from(document.querySelectorAll<HTMLElement>('section'));
const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav-link'));

const updateActiveLink = (): void => {
  const scrollPosition = window.scrollY + 180;
  let currentId = 'home';

  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === `#${currentId}`);
  });
};

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

Array.from(document.querySelectorAll<HTMLElement>('.panel, .skill-card, .project-card, .hero-card')).forEach((element) => {
  element.classList.add('reveal');
  observer.observe(element);
});
