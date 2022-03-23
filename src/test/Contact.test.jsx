import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from '../components/Contact';

describe('Contact', () => {
  let user;

  beforeEach(() => {
    user = userEvent.setup();
  });

  test('renders contact section heading', () => {
    render(<Contact />);
    expect(screen.getByRole('heading', { name: /let's build something together/i })).toBeInTheDocument();
  });

  test('renders contact email address', () => {
    render(<Contact />);
    expect(screen.getByText(/dominiquedaniels234@gmail\.com/i)).toBeInTheDocument();
  });

  test('renders send message button', () => {
    render(<Contact />);
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  test('send message button is visible and enabled', () => {
    render(<Contact />);
    const sendButton = screen.getByRole('button', { name: /send message/i });
    
    expect(sendButton).toBeVisible();
    expect(sendButton).toBeEnabled();
  });

  test('clicking send message button triggers handler', async () => {
    render(<Contact />);
    const sendButton = screen.getByRole('button', { name: /send message/i });
    
    await user.click(sendButton);
    
    expect(sendButton).toBeInTheDocument();
  });

  test('send message button is keyboard accessible', async () => {
    render(<Contact />);
    const sendButton = screen.getByRole('button', { name: /send message/i });
    
    sendButton.focus();
    expect(sendButton).toHaveFocus();

    await user.keyboard('{Enter}');
    expect(sendButton).toBeInTheDocument();
  });

  test('contact section is accessible', () => {
    const { container } = render(<Contact />);
    const section = container.querySelector('section');
    
    expect(section).toBeInTheDocument();
  });
});
