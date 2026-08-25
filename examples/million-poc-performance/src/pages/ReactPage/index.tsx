import React from 'react';
import { Outlet } from 'react-router';
import './styles.css';

const links = [
  { href: '/react', text: 'react ⚛️' },
  { href: '/million', text: 'million 🦁' },
  { href: '/react/1', text: 'react example 1 ⚛️' },
  { href: '/react/3', text: 'react example 3 ⚛️' },
  { href: '/react/4', text: 'react example 4 ⚛️' },
];

//million-ignore
const ReactPage = () => {
  return (
    <div className="root-react-page">
      <h1>ReactPage ⚛️</h1>
      <p>
        Normal implementation in React, respecting the rules of React, e.g using key in loop iteration. This is the
        baseline for comparison with Million.
      </p>
      <div>
        {links.map(({ href, text }) => (
          <a key={href} href={href}>
            {text}
          </a>
        ))}
      </div>
      <hr />
      <Outlet />
    </div>
  );
};

export default ReactPage;
