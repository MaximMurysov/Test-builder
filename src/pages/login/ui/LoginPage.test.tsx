import { render, screen } from '@testing-library/react';
import { LoginPage } from './LoginPage';

describe('LoginPage', () => {
  it('рендерится и показывает кнопку', () => {
    render(<LoginPage />);

    expect(screen.getByRole('button')).toBeVisible();
  });
});
