import {
  navigation,
  heroHighlights,
  stats,
  aboutHighlights,
  skillGroups,
  projects,
  processSteps,
  testimonials,
  contactLinks,
} from './content.js';

type NotificationType = 'success' | 'error' | 'info';

class PortfolioApp {
  private readonly smoothLinks: HTMLAnchorElement[];
  private readonly toggleButton: HTMLButtonElement | null;
  private readonly navMenu: HTMLElement | null;
  private readonly form: HTMLFormElement | null;
  private readonly sections: HTMLElement[];
  private readonly navLinks: HTMLAnchorElement[];
  private readonly observer: IntersectionObserver;

  constructor() {
    this.smoothLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
    this.toggleButton = document.querySelector<HTMLButtonElement>('.menu-toggle');
    this.navMenu = document.querySelector<HTMLElement>('.nav-menu');
    this.form = document.querySelector<HTMLFormElement>('#contactForm');
    this.sections = Array.from(document.querySelectorAll<HTMLElement>('section'));
    this.navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav-link'));
    this.observer = new IntersectionObserver(this.handleIntersection.bind(this), { threshold: 0.1 });

    this.initializeNavigation();
    this.initializeMobileMenu();
    this.initializeForm();
    this.initializeSectionHighlighting();
    this.renderContent();
  }

  private initializeNavigation(): void {
    this.smoothLinks.forEach((link) => {
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
  }

  private initializeMobileMenu(): void {
    if (this.toggleButton && this.navMenu) {
      this.toggleButton.addEventListener('click', () => {
        this.navMenu?.classList.toggle('open');
      });
    }
  }

  private initializeForm(): void {
    if (!this.form) {
      return;
    }

    this.form.addEventListener('submit', (event) => {
      event.preventDefault();

      const nameInput = document.querySelector<HTMLInputElement>('#name');
      const emailInput = document.querySelector<HTMLInputElement>('#email');
      const messageInput = document.querySelector<HTMLTextAreaElement>('#message');

      const name = nameInput?.value.trim() ?? '';
      const email = emailInput?.value.trim() ?? '';
      const message = messageInput?.value.trim() ?? '';

      if (!name || !email || !message) {
        this.showNotification('Please complete all fields.', 'error');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        this.showNotification('Please use a valid email address.', 'error');
        return;
      }

      const submitButton = this.form?.querySelector<HTMLButtonElement>('button[type="submit"]');
      if (submitButton) {
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
      }

      window.setTimeout(() => {
        this.showNotification('Thanks for reaching out. I will get back to you soon.', 'success');
        this.form?.reset();
        if (submitButton) {
          submitButton.textContent = 'Send message';
          submitButton.disabled = false;
        }
      }, 1200);
    });
  }

  private initializeSectionHighlighting(): void {
    const updateActiveLink = (): void => {
      const scrollPosition = window.scrollY + 180;
      let currentId = 'home';

      this.sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentId = section.id;
        }
      });

      this.navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === `#${currentId}`);
      });
    };

    window.addEventListener('scroll', updateActiveLink);
    window.addEventListener('load', updateActiveLink);

    Array.from(document.querySelectorAll<HTMLElement>('.panel, .skill-card, .project-card, .hero-card')).forEach((element) => {
      element.classList.add('reveal');
      this.observer.observe(element);
    });
  }

  private handleIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        this.observer.unobserve(entry.target);
      }
    });
  }

  private renderContent(): void {
    this.renderNavigation();
    this.renderHeroHighlights();
    this.renderStats();
    this.renderAboutHighlights();
    this.renderSkills();
    this.renderProjects();
    this.renderProcess();
    this.renderTestimonials();
    this.renderContactLinks();
  }

  private renderNavigation(): void {
    const nav = document.querySelector<HTMLElement>('.nav-menu');
    if (!nav) {
      return;
    }

    nav.innerHTML = navigation.map((item) => `<a href="${item.href}" class="nav-link">${item.label}</a>`).join('');
    this.navLinks.splice(0, this.navLinks.length, ...Array.from(nav.querySelectorAll<HTMLAnchorElement>('.nav-link')));
  }

  private renderHeroHighlights(): void {
    const container = document.querySelector<HTMLElement>('.hero-highlights');
    if (!container) {
      return;
    }

    container.innerHTML = heroHighlights
      .map((item) => `<li><i class="fa-solid fa-check"></i> ${item.text}</li>`)
      .join('');
  }

  private renderStats(): void {
    const container = document.querySelector<HTMLElement>('.stats-grid');
    if (!container) {
      return;
    }

    container.innerHTML = stats
      .map((item) => `<div class="stat-box"><strong>${item.value}</strong><span>${item.label}</span></div>`)
      .join('');
  }

  private renderAboutHighlights(): void {
    const container = document.querySelector<HTMLElement>('.timeline');
    if (!container) {
      return;
    }

    container.innerHTML = aboutHighlights
      .map((item) => `
        <div class="timeline-item">
          <span class="dot"></span>
          <div>
            <h4>${item.title}</h4>
            <p>${item.description}</p>
          </div>
        </div>
      `)
      .join('');
  }

  private renderSkills(): void {
    const container = document.querySelector<HTMLElement>('.skills-grid');
    if (!container) {
      return;
    }

    container.innerHTML = skillGroups
      .map((group) => `
        <article class="skill-card">
          <h3><i class="fa-solid ${group.icon}"></i> ${group.title}</h3>
          <div class="chip-list">
            ${group.items.map((item) => `<span>${item}</span>`).join('')}
          </div>
        </article>
      `)
      .join('');
  }

  private renderProjects(): void {
    const container = document.querySelector<HTMLElement>('.projects-grid');
    if (!container) {
      return;
    }

    container.innerHTML = projects
      .map((project) => `
        <article class="project-card">
          <div class="project-meta">
            <div class="project-icon"><i class="fa-solid ${project.icon}"></i></div>
            <div class="project-actions">
              <button class="btn btn-secondary" aria-label="View ${project.title}">View</button>
            </div>
          </div>

          <h3>${project.title}</h3>
          <p class="project-description">${project.description}</p>

          <div class="chip-list compact project-tags">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join('')}
          </div>
        </article>
      `)
      .join('');
  }

  private renderProcess(): void {
    const container = document.querySelector<HTMLElement>('.process-grid');
    if (!container) {
      return;
    }

    container.innerHTML = processSteps
      .map((step) => `
        <article class="process-card">
          <div class="process-icon"><i class="fa-solid ${step.icon}"></i></div>
          <h3>${step.title}</h3>
          <span class="process-subtitle">${step.subtitle}</span>
          <p>${step.description}</p>
        </article>
      `)
      .join('');
  }

  private renderTestimonials(): void {
    const container = document.querySelector<HTMLElement>('.testimonials-grid');
    if (!container) {
      return;
    }

    container.innerHTML = testimonials
      .map((testimonial) => `
        <article class="testimonial-card">
          <p>“${testimonial.quote}”</p>
          <div class="testimonial-author">
            <strong>${testimonial.name}</strong>
            <span>${testimonial.role}</span>
          </div>
        </article>
      `)
      .join('');
  }

  private renderContactLinks(): void {
    const container = document.querySelector<HTMLElement>('.contact-card');
    if (!container) {
      return;
    }

    const linksMarkup = contactLinks
      .map((link) => `
        <a href="${link.href}" ${link.external ? 'target="_blank" rel="noreferrer"' : ''}>
          <i class="fa-solid ${link.icon}"></i> ${link.label}
        </a>
      `)
      .join('');

    container.innerHTML = `
      <h3>Reach out</h3>
      <p>Open to freelance projects, product work, and team collaborations.</p>
      ${linksMarkup}
    `;
  }

  private showNotification(message: string, type: NotificationType = 'info'): void {
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
}

new PortfolioApp();
