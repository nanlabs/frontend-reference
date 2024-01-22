import { Link } from 'expo-router';

// this is an example component to show the absolute import path in home.tsx
export default function Button() {
  return <Link href="/details/1">View element #1</Link>;
}
