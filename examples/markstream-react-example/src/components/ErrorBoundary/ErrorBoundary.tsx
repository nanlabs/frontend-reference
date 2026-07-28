import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from './ErrorFallback';

type AppErrorBoundaryProps = {
  children: React.ReactNode;
};

export default function AppErrorBoundary({ children }: AppErrorBoundaryProps) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.reload();
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
