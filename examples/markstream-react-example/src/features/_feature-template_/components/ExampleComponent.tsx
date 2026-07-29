import { useState } from 'react';
import { useExample } from '../hooks';
import styles from './ExampleComponent.module.css';

export const ExampleComponent = () => {
  const [value, setValue] = useState('');
  const { doSomething, isLoading, error } = useExample();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await doSomething(value);
  };

  return (
    <div className={styles.container}>
      <h2>Example Component</h2>
      {error && <div className={styles.error}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="value">Value</label>
          <input id="value" type="text" value={value} onChange={(e) => setValue(e.target.value)} required />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};
