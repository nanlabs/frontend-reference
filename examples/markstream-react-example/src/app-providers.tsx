import type { ReactNode } from 'react';

type AppProvider = (children: ReactNode) => ReactNode;

export const appProviders: AppProvider[] = [];

export const composeAppProviders = (children: ReactNode) =>
  appProviders.reduceRight((currentChildren, provider) => provider(currentChildren), children);
