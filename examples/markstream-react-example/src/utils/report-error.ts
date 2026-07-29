type ErrorContext = Record<string, unknown>;

/**
 * Default error reporter (no-op in production). Extensions such as Sentry can
 * replace this at bootstrap time.
 */
let reportErrorImpl: (error: unknown, context?: ErrorContext) => void = (error, context) => {
  if (import.meta.env.DEV) {
    console.error('[report-error]', error, context);
  }
};

export function setErrorReporter(reporter: (error: unknown, context?: ErrorContext) => void): void {
  reportErrorImpl = reporter;
}

export function reportError(error: unknown, context?: ErrorContext): void {
  reportErrorImpl(error, context);
}

export function setupGlobalErrorHandlers(): void {
  window.addEventListener('error', (event) => {
    reportError(event.error ?? event.message, { source: 'window.onerror' });
  });

  window.addEventListener('unhandledrejection', (event) => {
    reportError(event.reason, { source: 'unhandledrejection' });
  });
}
