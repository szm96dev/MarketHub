import { render, screen } from '@testing-library/react';
import ErrorBoundary from './components/common/ErrorBoundary';

test('renders children inside the error boundary', () => {
  render(
    <ErrorBoundary>
      <div>MarketHub test content</div>
    </ErrorBoundary>
  );

  expect(screen.getByText('MarketHub test content')).toBeInTheDocument();
});
