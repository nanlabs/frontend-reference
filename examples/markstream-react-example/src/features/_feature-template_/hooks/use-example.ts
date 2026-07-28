import { useState } from 'react';
import { exampleService } from '../services';

export const useExample = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const doSomething = async (value: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await exampleService(value);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    doSomething,
    isLoading,
    error,
  };
};
