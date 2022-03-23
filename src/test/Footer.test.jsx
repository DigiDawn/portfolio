import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer', () => {
  test('renders author name', () => {
    render(<Footer />);
    
    const nameNodes = screen.getAllByText(/Dominique Daniels/i);
    expect(nameNodes.length).toBeGreaterThanOrEqual(1);
  });

  test('renders contact email address', () => {
    render(<Footer />);
    expect(screen.getByText(/dominiquedaniels234@gmail\.com/i)).toBeInTheDocument();
  });

  test('renders copyright notice', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2026 Dominique Daniels/i)).toBeInTheDocument();
  });

  test('footer contains complete author information', () => {
    render(<Footer />);
    
    const nameNodes = screen.getAllByText(/Dominique Daniels/i);
    const hasName = nameNodes.some((n) => n.textContent === 'Dominique Daniels');
    expect(hasName).toBe(true);
    
    expect(screen.getByText(/dominiquedaniels234@gmail\.com/i)).toBeInTheDocument();
    expect(screen.getByText(/© 2026 Dominique Daniels/i)).toBeInTheDocument();
  });

  test('footer is accessible', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    
    expect(footer).toBeInTheDocument();
  });

  test('all footer text elements are visible', () => {
    render(<Footer />);
    
    const emailText = screen.getByText(/dominiquedaniels234@gmail\.com/i);
    const copyrightText = screen.getByText(/© 2026 Dominique Daniels/i);
    
    expect(emailText).toBeVisible();
    expect(copyrightText).toBeVisible();
  });
});
