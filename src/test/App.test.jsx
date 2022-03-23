import { render, screen, within } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('renders main app content and navigation', () => {
    render(<App />);

    // Verify navigation is present
    const navigation = screen.getByRole('navigation', { name: /main navigation/i });
    expect(navigation).toBeInTheDocument();

    // Verify all main sections are rendered
    expect(screen.getByRole('heading', { name: /Modern Web Apps/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Skills/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Projects/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Let's Build Something Together/i })).toBeInTheDocument();

    // Verify footer content
    expect(screen.getByText(/© 2026 Dominique Daniels/i)).toBeInTheDocument();
  });

  test('renders app without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  test('all main sections are accessible via navigation', () => {
    render(<App />);
    const navigation = screen.getByRole('navigation', { name: /main navigation/i });
    
    // Verify navigation has navigation links
    const navButtons = within(navigation).getAllByRole('button');
    expect(navButtons.length).toBeGreaterThan(0);
  });
});
