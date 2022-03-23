import { render, screen } from '@testing-library/react';
import About from '../components/About';

describe('About', () => {

  test('renders about section content', () => {
    render(<About />);

    expect(screen.getByText(/About Me/i)).toBeInTheDocument();

    const portrait = screen.getByAltText(/Profile Picture/i);
    
    expect(portrait).toBeInTheDocument();
    expect(portrait).toBeVisible();
    expect(portrait).toHaveAttribute('src');
  });

  test('portrait image has valid src attribute', () => {
    render(<About />);
    const portrait = screen.getByAltText(/Profile Picture/i);
    
    const src = portrait.getAttribute('src');
    expect(src).toBeTruthy();
    expect(src).not.toBe('');
  });

  test('about section is accessible', () => {
    const { container } = render(<About />);
    const section = container.querySelector('section');
    
    expect(section).toBeInTheDocument();
  });
});
