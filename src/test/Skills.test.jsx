import { render, screen } from '@testing-library/react';
import Skills from '../components/Skills';

describe('Skills', () => {
  test('renders skills section heading', () => {
    render(<Skills />);
    expect(screen.getByRole('heading', { name: /skills/i })).toBeInTheDocument();
  });

  test('renders skill category headings', () => {
    render(<Skills />);
    
    expect(screen.getByRole('heading', { name: /Front-end/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Back-end & Databases/i })).toBeInTheDocument();
  });

  test('renders individual skills', () => {
    render(<Skills />);
    
    expect(screen.getByText(/React/i)).toBeInTheDocument();
  });

  test('front-end skills category is visible', () => {
    render(<Skills />);
    const frontEndHeading = screen.getByRole('heading', { name: /Front-end/i });
    
    expect(frontEndHeading).toBeVisible();
  });

  test('back-end and databases category is visible', () => {
    render(<Skills />);
    const backEndHeading = screen.getByRole('heading', { name: /Back-end & Databases/i });
    
    expect(backEndHeading).toBeVisible();
  });

  test('skills section is accessible', () => {
    const { container } = render(<Skills />);
    const section = container.querySelector('section');
    
    expect(section).toBeInTheDocument();
  });
});
