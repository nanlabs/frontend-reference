import type { FallbackProps } from 'react-error-boundary';

import styles from './ErrorFallback.module.css';

export default function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const message = error instanceof Error ? error.message : 'An unexpected error occurred';

  return (
    <div className={styles.container} role="alert">
      <h1 className={styles.title}>Something went wrong</h1>
      <p className={styles.message}>{message}</p>
      <button type="button" className={styles.button} onClick={resetErrorBoundary}>
        Reload
      </button>
    </div>
  );
}
