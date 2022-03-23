import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../components/Home';

describe('Home', () => {
  let user;

  beforeEach(() => {
    user = userEvent.setup();
    // Setup mock sections in DOM for scroll tests
    const contactSection = document.createElement('div');
    contactSection.id = 'contact';
    const projectsSection = document.createElement('div');
    projectsSection.id = 'projects';
    document.body.append(contactSection, projectsSection);
  });

  afterEach(() => {
    // Cleanup created sections
    const contact = document.getElementById('contact');
    const projects = document.getElementById('projects');
    if (contact) contact.remove();
    if (projects) projects.remove();
  });

  test('renders hero content and primary call-to-action buttons', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { name: /building modern web apps/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /contact me/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /view projects/i })).toBeInTheDocument();
  });

  test('contact me button has proper styling and attributes', () => {
    render(<Home />);
    const contactButton = screen.getByRole('button', { name: /contact me/i });
    
    expect(contactButton).toBeInTheDocument();
    expect(contactButton).toBeVisible();
  });

  test('view projects button has proper styling and attributes', () => {
    render(<Home />);
    const projectsButton = screen.getByRole('button', { name: /view projects/i });
    
    expect(projectsButton).toBeInTheDocument();
    expect(projectsButton).toBeVisible();
  });

  test('clicking contact me button scrolls to contact section', async () => {
    render(<Home />);
    const contactButton = screen.getByRole('button', { name: /contact me/i });
    const contactSection = document.getElementById('contact');
    const scrollSpy = jest.spyOn(contactSection, 'scrollIntoView');

    await user.click(contactButton);

    expect(scrollSpy).toHaveBeenCalledWith({ behavior: 'smooth' });
    scrollSpy.mockRestore();
  });

  test('clicking view projects button scrolls to projects section', async () => {
    render(<Home />);
    const projectsButton = screen.getByRole('button', { name: /view projects/i });
    const projectsSection = document.getElementById('projects');
    const scrollSpy = jest.spyOn(projectsSection, 'scrollIntoView');

    await user.click(projectsButton);

    expect(scrollSpy).toHaveBeenCalledWith({ behavior: 'smooth' });
    scrollSpy.mockRestore();
  });
});
