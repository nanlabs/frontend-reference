export interface ExampleState {
  value: string;
  isLoading: boolean;
  error: string | null;
}

export interface ExampleService {
  doSomething: (value: string) => Promise<void>;
}

export * from './index';
