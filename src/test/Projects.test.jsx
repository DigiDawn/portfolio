import { render, screen } from '@testing-library/react';
import Projects from '../components/Projects';

describe('Projects', () => {
  test('renders projects section heading', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
  });

  test('renders project cards with titles', () => {
    render(<Projects />);
    
    expect(screen.getByText(/Conversational Chat Platform/i)).toBeInTheDocument();
    expect(screen.getByText(/AI E-commerce Catalog/i)).toBeInTheDocument();
    expect(screen.getByText(/SaaS Analytics Platform/i)).toBeInTheDocument();
  });

  test('all project titles are visible', () => {
    render(<Projects />);
    
    const chatAppTitle = screen.getByText(/Conversational Chat Platform/i);
    const ecommerceTitle = screen.getByText(/AI E-commerce Catalog/i);
    const dashboardTitle = screen.getByText(/SaaS Analytics Platform/i);

    expect(chatAppTitle).toBeVisible();
    expect(ecommerceTitle).toBeVisible();
    expect(dashboardTitle).toBeVisible();
  });

  test('projects section is accessible', () => {
    const { container } = render(<Projects />);
    const section = container.querySelector('section');
    
    expect(section).toBeInTheDocument();
  });

  test('renders correct number of sample projects', () => {
    render(<Projects />);
    
    const projectTitles = [
      screen.getByText(/Conversational Chat Platform/i),
      screen.getByText(/AI E-commerce Catalog/i),
      screen.getByText(/SaaS Analytics Platform/i)
    ];
    
    expect(projectTitles).toHaveLength(3);
  });
});
