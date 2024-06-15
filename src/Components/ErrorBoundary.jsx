import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

// Function to log errors
const logErrorToMyService = (error, info) => {
  console.error("Logged error:", error, info);
};

// Fallback component
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);

const ErrorBoundary = ({ children, fallback }) => (
  <ReactErrorBoundary
    FallbackComponent={fallback || ErrorFallback}
    onError={logErrorToMyService}
  >
    {children}
  </ReactErrorBoundary>
);

export default ErrorBoundary;