import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from '../components/Navbar';

const createSectionRef = () => ({
  current: {
    home: { scrollIntoView: jest.fn() },
    about: { scrollIntoView: jest.fn() },
    skills: { scrollIntoView: jest.fn() },
    projects: { scrollIntoView: jest.fn() },
    contact: { scrollIntoView: jest.fn() },
  },
});

describe('Navbar', () => {
  let user;

  beforeEach(() => {
    user = userEvent.setup();
  });

  test('renders navigation links and toggle button', () => {
    render(<Navbar sectionRef={createSectionRef()} />);

    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /jump to home section/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /jump to about section/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /jump to skills section/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /jump to projects section/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /jump to contact section/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /toggle menu/i })).toBeInTheDocument();
  });

  test('all navigation links are accessible and visible', () => {
    render(<Navbar sectionRef={createSectionRef()} />);

    const homeLink = screen.getByRole('button', { name: /jump to home section/i });
    const aboutLink = screen.getByRole('button', { name: /jump to about section/i });
    const skillsLink = screen.getByRole('button', { name: /jump to skills section/i });
    const projectsLink = screen.getByRole('button', { name: /jump to projects section/i });
    const contactLink = screen.getByRole('button', { name: /jump to contact section/i });

    [homeLink, aboutLink, skillsLink, projectsLink, contactLink].forEach(link => {
      expect(link).toBeVisible();
    });
  });

  test('clicking nav links scrolls to the correct section', async () => {
    const sectionRef = createSectionRef();
    render(<Navbar sectionRef={sectionRef} />);

    await user.click(screen.getByRole('button', { name: /jump to about section/i }));
    expect(sectionRef.current.about.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });

    await user.click(screen.getByRole('button', { name: /jump to skills section/i }));
    expect(sectionRef.current.skills.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });

    await user.click(screen.getByRole('button', { name: /jump to projects section/i }));
    expect(sectionRef.current.projects.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });

    await user.click(screen.getByRole('button', { name: /jump to contact section/i }));
    expect(sectionRef.current.contact.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });

    await user.click(screen.getByRole('button', { name: /jump to home section/i }));
    expect(sectionRef.current.home.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  });

  test('toggles the mobile menu when the menu button is clicked', async () => {
    render(<Navbar sectionRef={createSectionRef()} />);

    const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

    await user.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('menu', { name: /mobile navigation/i })).toBeInTheDocument();

    await user.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  });

  test('menu button is keyboard accessible', async () => {
    render(<Navbar sectionRef={createSectionRef()} />);
    const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
    
    toggleButton.focus();
    expect(toggleButton).toHaveFocus();

    await user.keyboard('{Enter}');
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
  });
});
